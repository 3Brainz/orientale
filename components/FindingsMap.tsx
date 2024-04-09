"use client";

import { Height } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Map, Marker, Overlay, Point } from "pigeon-maps";
import React, { useEffect, useState } from "react";
import Supercluster from "supercluster";

interface finding {
  id: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface FindingsProps {
  findings: finding[];
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80vw", md: "50vw" },
  minHeight: { xs: "80vh", md: "60vh" },
  height: { xs: "80vh", md: "60vh" },
  bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};

export default function FindingsMap(props: FindingsProps) {
  const MAPTILER_ACCESS_TOKEN = "YMiwXF5JQEd6Sdrp1NrX";
  const MAP_ID = "landscape";
  const { findings } = props;
  // We use in with useState and useEffect as we get findings list from props and it could change
  const [bubbleAnchor, setBubbleAnchor] = useState<Point>([0, 0]);
  const [center, setCenter] = useState<Point>([
    42.3442114469097, 13.405828595706907,
  ]);
  const [showMarkers, setShowMarkers] = useState<boolean>(true);
  const [showBubble, setShowBubble] = useState<boolean>(false);
  const [shouldShowBubble, setShouldShowBubble] = useState<boolean>(false);
  const [supercluster, setSupercluster] = React.useState<Supercluster>();
  const [zoomValue, setZoom] = useState(8);
  const [animating, setAnimating] = useState<boolean>(false);
  const [selectedPoints, setSelectedPoints] = useState<object[]>([]);

  function mapTiler(x: number, y: number, z: number, dpr?: number | undefined) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
      dpr! >= 2 ? "@2x" : ""
    }.png?key=${MAPTILER_ACCESS_TOKEN}`;
  }

  useEffect(() => {
    setShowMarkers(false);
    setTimeout(() => {
      setShowMarkers(true);
    }, 30);
  }, [zoomValue]);

  React.useEffect(() => {
    const index = new Supercluster({
      // The cluster radius in px, which means minimal distance between the cluster points
      radius: 80,
      minZoom: 8,
      maxZoom: 14,
    });

    index.load(
      [...findings]
        // Take only findings with coordinates (we also have podcast that don't have an address)
        .filter(
          (finding) =>
            Boolean(finding?.coordinates) &&
            finding.coordinates.latitude &&
            finding.coordinates.longitude
        )
        // Transforming an finding to the GeoJSON Feature object with some custom data
        .map((finding) => ({
          geometry: {
            coordinates: [
              finding.coordinates.longitude,
              finding.coordinates.latitude,
            ],
            type: "Point",
          },
          type: "Feature",
          id: finding.id,
          properties: {
            //   node: finding.node,
            //   upcoming: findingfinding.upcoming,
          },
        }))
    );

    setSupercluster(index);
  }, [findings]);

  const renderMarker = (point: any) => {
    if (!point?.geometry?.coordinates) {
      return null;
    }

    const cluster = point.properties?.cluster || false;

    // Sort Findings from latest to earliest to always highlight the upcoming ones
    const clusterItems = cluster
      ? supercluster?.getLeaves(point.id, Infinity)
      : [point];

    return (
      <Overlay
        // width={33}
        // children={
        //   showMarkers ? (
        //     <button
        //       onClick={() => {
        //         console.log("ciao");
        //       }}
        //     >
        //       {clusterItems?.length}
        //     </button>
        //   ) : (
        //     <></>
        //   )
        // }
        anchor={[point.geometry.coordinates[1], point.geometry.coordinates[0]]}
        key={point.id}
      >
        <button
          onClick={() => {
            setCenter([
              point.geometry.coordinates[1],
              point.geometry.coordinates[0],
            ]);
            setSelectedPoints(clusterItems ? clusterItems : []);
            setTimeout(() => {
              if (animating) return;
              else setShowBubble(true);
            }, 200);
            setShouldShowBubble(true);
          }}
        >
          {clusterItems?.length}
        </button>
      </Overlay>
    );
  };

  // Get all clusters and individual Findings from minimal to maximum longitudes & latitudes on a given zoom value
  const markersAndClusters =
    (supercluster &&
      supercluster.getClusters([-180, -90, 180, 90], zoomValue)) ||
    [];

  // ...
  return (
    <Box>
      <Modal
        open={showBubble}
        onClose={() => {
          setShowBubble(false);
        }}
      >
        <Box sx={modalStyle}>
          {JSON.parse(JSON.stringify(selectedPoints)).map(
            (point: { id: number }) => {
              return <Typography key={point.id}>{point.id}</Typography>;
            }
          )}
        </Box>
      </Modal>
      <Map
        height={800}
        defaultZoom={zoomValue}
        onBoundsChanged={({ center, zoom }) => {
          setZoom(zoom);
          setCenter(center);
        }}
        onAnimationStart={() => {
          setAnimating(true);
        }}
        onAnimationStop={() => {
          setAnimating(false);
          if (shouldShowBubble) {
            setShowBubble(true);
            setShouldShowBubble(false);
          }
        }}
        minZoom={8}
        maxZoom={15}
        provider={mapTiler}
        defaultCenter={center}
        center={center}
      >
        {markersAndClusters.map(renderMarker)}
      </Map>
    </Box>
  );
}
