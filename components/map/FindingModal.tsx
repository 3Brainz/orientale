"use client";

import {
  Backdrop,
  Box,
  Fade,
  Modal,
  ModalProps,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { FindingPoint } from "./mapInterfaces";
import { useState } from "react";

interface FindingModalProps extends ModalProps {
  points: FindingPoint[];
}

const findingModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80vw", md: "50vw" },
  minHeight: { xs: "60vh", md: "60vh" },
  height: { xs: "60vh", md: "60vh" },
  bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};

export default function FindingModal(props: FindingModalProps) {
  const { points, ...otherProps } = props;

  const [selectedPoint, setSelectedPoint] = useState(0);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      {...otherProps}
    >
      <Fade in={otherProps.open}>
        <Box sx={findingModalStyle}>
          {points.map((point) => {
            return <Typography key={point.id + "point"}>{point.id}</Typography>;
          })}
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Tabs
              value={selectedPoint}
              onChange={(event, value) => {
                setSelectedPoint(value);
              }}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {points.map((point) => {
                return <Tab label={point.id}></Tab>;
              })}
            </Tabs>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
