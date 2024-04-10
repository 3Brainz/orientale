"use client";

import { Box } from "@mui/material";
import { Map, Marker, Overlay, Point } from "pigeon-maps";
import { useEffect, useState } from "react";

export default function CustomMap() {
  const MAPTILER_ACCESS_TOKEN = "YMiwXF5JQEd6Sdrp1NrX";
  const MAP_ID = "landscape";

  const [bubbleAnchor, setBubbleAnchor] = useState<Point>([0, 0]);
  const [center, setCenter] = useState<Point>([
    42.3442114469097, 13.405828595706907,
  ]);
  const [showBubble, setShowBubble] = useState<Boolean>(false);
  const [zoom, setZoom] = useState<number>(6);

  const markers: Point[] = [
    [40.78359934056358, 14.3923280590953],
    [43.250529435305815, 10.934800316962882],
    [45.10800851179792, 8.094506824221959],
  ];

  useEffect(() => {
    console.log(zoom);
  }, [zoom]);

  function handleClick(event: {
    event: MouseEvent;
    anchor: Point;
    payload: any;
  }) {
    setBubbleAnchor(event.anchor);
    setShowBubble(true);
    setCenter([event.anchor[0], event.anchor[1]]);
    console.log(event);
  }

  function mapTiler(x: number, y: number, z: number, dpr?: number | undefined) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
      dpr! >= 2 ? "@2x" : ""
    }.png?key=${MAPTILER_ACCESS_TOKEN}`;
  }

  return (
    <Map
      onBoundsChanged={({ center, zoom }) => {
        setShowBubble(false);
        setCenter(center);
        setZoom(zoom);
      }}
      minZoom={5}
      maxZoom={15}
      provider={mapTiler}
      height={800}
      defaultCenter={center}
      defaultZoom={7.5}
      center={center}
    >
      {showBubble ? (
        <Overlay anchor={bubbleAnchor} offset={[-100, 200]}>
          <Box width={400} height={400} style={{ backgroundColor: "white" }}>
            Ciao
          </Box>
        </Overlay>
      ) : (
        <></>
      )}

      {markers.map((marker) => (
        <Marker
          onClick={handleClick}
          key={markers.indexOf(marker)}
          width={50}
          anchor={marker}
        ></Marker>
      ))}
    </Map>
  );
}
