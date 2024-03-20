"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Identificativo", width: 90 },
  {
    field: "inv_num",
    headerName: "N.Inventario",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "collocazione_originaria",
    headerName: "Collocazione originaria",
    width: 170,
    editable: false,
  },
  {
    field: "collocazione_attuale",
    headerName: "Collocazione attuale",
    width: 170,
    editable: false,
  },
  {
    field: "support",
    headerName: "Supporto",
    editable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 0,
    inv_num: 0,
    collocazione_originaria: "Terni",
    collocazione_attuale: "Bacoli",
    support: "Metallo",
  },
  {
    id: 1,
    inv_num: 8439,
    collocazione_originaria: "Milano",
    collocazione_attuale: "Avellino",
    support: "Pietra",
  },
  {
    id: 123,
    inv_num: 34562,
    collocazione_originaria: "Lugano",
    collocazione_attuale: "Bari",
    support: "Carta",
  },
  {
    id: 909,
    inv_num: 10938,
    collocazione_originaria: "Chioggia",
    collocazione_attuale: "Rieti",
    support: "Osso",
  },
  {
    id: 7674,
    inv_num: 9474,
    collocazione_originaria: "Torino",
    collocazione_attuale: "Sassari",
    support: "Ossidiana",
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
