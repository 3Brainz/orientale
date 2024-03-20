"use client";

import { Map, Marker, Point } from "pigeon-maps";
import React, { useState } from "react";
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

export default function FindingsMap(props: FindingsProps) {
  const MAPTILER_ACCESS_TOKEN = "YMiwXF5JQEd6Sdrp1NrX";
  const MAP_ID = "landscape";
  const { findings } = props;
  // We use in with useState and useEffect as we get findings list from props and it could change
  const [bubbleAnchor, setBubbleAnchor] = useState<Point>([0, 0]);
  const [center, setCenter] = useState<Point>([
    42.3442114469097, 13.405828595706907,
  ]);
  const [showBubble, setShowBubble] = useState<Boolean>(false);
  const [supercluster, setSupercluster] = React.useState<Supercluster>();
  const [zoomValue, setZoom] = useState(6);

  function mapTiler(x: number, y: number, z: number, dpr?: number | undefined) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
      dpr! >= 2 ? "@2x" : ""
    }.png?key=${MAPTILER_ACCESS_TOKEN}`;
  }

  React.useEffect(() => {
    const index = new Supercluster({
      // The cluster radius in px, which means minimal distance between the cluster points
      radius: 15,
      maxZoom: 16,
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
    //   const clusterItems = cluster ? supercluster?.getLeaves(point.id, Infinity)

    // supercluster?.getLeaves(point.id, Infinity).sort((a:number, b:number) =>
    //   new Date(b?.properties?.node?.finding?.dateStartISO) -
    //   new Date(a?.properties?.node?.finding?.dateStartISO)
    // ) : [point];

    return (
      <Marker
        // width={33}
        anchor={[point.geometry.coordinates[1], point.geometry.coordinates[0]]}
        key={point.id}
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
