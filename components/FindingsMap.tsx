"use client";

import { Map, Marker, Point } from "pigeon-maps";
import React, { useEffect, useState } from "react";
import Supercluster from "supercluster";

const PinPointIcon = ({ size = 24, color = "black" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      fill={color}
    />
  </svg>
);

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

export default function FindingsMap(props: FindingsProps) {
  const MAPTILER_ACCESS_TOKEN = "YMiwXF5JQEd6Sdrp1NrX";
  const MAP_ID = "landscape";
  const { findings } = props;
  // We use in with useState and useEffect as we get findings list from props and it could change
  const [bubbleAnchor, setBubbleAnchor] = useState<Point>([0, 0]);
  const [center, setCenter] = useState<Point>([
    42.3442114469097, 13.405828595706907,
  ]);
  const [showMarkers, setShowMarkers] = useState<Boolean>(true);
  const [showBubble, setShowBubble] = useState<Boolean>(false);
  const [supercluster, setSupercluster] = React.useState<Supercluster>();
  const [zoomValue, setZoom] = useState(6);

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
      : [];

    return (
      <Marker
        // width={33}
        children={showMarkers ? undefined : <></>}
        anchor={[point.geometry.coordinates[1], point.geometry.coordinates[0]]}
        key={point.id}
        onClick={() => {
          setCenter([
            point.geometry.coordinates[1],
            point.geometry.coordinates[0],
          ]);
        }}
        //   className={cs.marker}
      >
        {/* <MarkerIcom
			className={cx(cs.icon, {
			  [cs.upcoming]: clusterItems[0].properties?.upcoming,
			})}
			onClick={() => {
			  console.log(`Click cluster: ${clusterItems}`);
			}}
		  /> */}
        {/* {showMarkers ? <PinPointIcon /> : <></>} */}
      </Marker>
    );
  };

  // Get all clusters and individual Findings from minimal to maximum longitudes & latitudes on a given zoom value
  const markersAndClusters =
    (supercluster &&
      supercluster.getClusters([-180, -90, 180, 90], zoomValue)) ||
    [];

  // ...
  return (
    <Map
      height={800}
      defaultZoom={zoomValue}
      onBoundsChanged={({ center, zoom }) => {
        setZoom(zoom);
        setCenter(center);
      }}
      minZoom={5}
      maxZoom={15}
      provider={mapTiler}
      defaultCenter={center}
      center={center}
    >
      {markersAndClusters.map(renderMarker)}
    </Map>
  );
}
