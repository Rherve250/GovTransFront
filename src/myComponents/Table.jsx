import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tabs,
  Tab
} from "@mui/material";
import { AutoDelete, EditAttributesSharp } from "@mui/icons-material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "../components/ui/button";
import { FaPlus } from "react-icons/fa";

const data = [
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"},
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"},
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"},
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"},
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"},
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"},
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"},
  { id: "1", username: "axcel" ,username1: "axcel",username2: "axcel",username3: "axcel",username4: "axcel",username5: "axcel",username6: "axcel",username7: "axcel"}
 
];

const Table = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [value,setValue] = useState(0);
  const [openCreator, setOpenCreator ]= useState(false)

  const handleChange=(event, newValue)=>{
    setValue(newValue)
  }

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };
   
  const handleCreatorOpen = (row) => {
    setSelectedRow(row);
    setOpenCreator(true);
  };
  const handleCreatorClose = () => {
    setOpenCreator(false);
    setSelectedRow(null);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "username1", headerName: "Username1", width: 150 },
    { field: "username2", headerName: "Username2", width: 150 },
    { field: "username3", headerName: "Username3", width: 150 },
    { field: "username4", headerName: "Username4", width: 150 },
    { field: "username5", headerName: "Username5", width: 150 },
    { field: "username6", headerName: "Username6", width: 150 },
    { field: "username7", headerName: "Username7", width: 150 },
    {
      field: "Contet",
      headerName: "Content",
      renderCell: (params) => (
        <Button  onClick={() => handleClickOpen(params.row)}>
          Content
        </Button>
      ),
      width: 150,

    },
    {
        field:"Action",
        headerName: "Action",
        renderCell: ()=>(
           <><Box>
           
            <Box><AutoDelete/></Box>
            <Box><EditAttributesSharp/></Box>
           </Box>
           </>
        )

    }
  ];

  return (
   <>
   <div className="flex justify-end mb-3 font-bold"><Button onClick={handleCreatorOpen}><FaPlus/> New Program</Button></div>
    <Box
      sx={{
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          // Customize toolbar button styles
        },
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          backgroundColor: '#f5f5f5', // Light gray background
          '& .MuiDataGrid-row': {
            backgroundColor: '#ffffff', // White row background
            '&:nth-of-type(odd)': {
              backgroundColor: '#f9f9f9', // Alternate row color
            },
          },
          boxShadow: '0 4px 10px rgba(200, 200, 200, 0.7)',
          borderRadius: '8px', 
          border: '1px solid #ddd', 
        }}
      />

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{textAlign: "center", fontWeight: "bold"}}> Content</DialogTitle>
        <DialogContent>
            <DialogContentText sx={{textAlign:"center", background:"black", borderRadius:"8px", color: "white"}}>Your Text</DialogContentText>
        <Box sx={{width: "80%", margin:"auto"}}>
            <p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
        </Box>
        <DialogContentText sx={{textAlign:"center", background:"black", borderRadius:"8px", color: "white"}}>Response</DialogContentText>
        <Box sx={{width: "80%", margin:"auto"}}>
            <p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
<p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
<p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
<p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
        </Box>
        <DialogActions>
  <Button onClick={handleClose} color="primary">
    Close
  </Button>
</DialogActions>
        </DialogContent>
        
      </Dialog>
    </Box>
    <Dialog open={openCreator} onClose={handleCreatorClose} fullWidth>
        <DialogTitle sx={{textAlign: "center", fontWeight: "bold"}}> Content</DialogTitle>
        <DialogContent>
            <DialogContentText sx={{textAlign:"center", background:"black", borderRadius:"8px", color: "white"}}>Your Text</DialogContentText>
        <Box sx={{width: "80%", margin:"auto"}}>
            <p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
        </Box>
        <DialogContentText sx={{textAlign:"center", background:"black", borderRadius:"8px", color: "white"}}>Response</DialogContentText>
        <Box sx={{width: "80%", margin:"auto"}}>
            <p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
<p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
<p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
<p>Additionally, the presentation file for the meeting hasn't been created yet, so please ensure it's prepared in advance. I also need to inform you that we will be having lunch provided during the meeting, so I need everyone to give me their dietary restrictions by tomorrow.

It's important that everyone reviews the project report before the meeting. Let me know if you have any questions</p>
        </Box>
        <DialogActions>
  <Button onClick={handleCreatorClose} color="primary">
    Vip
  </Button>
</DialogActions>
        </DialogContent>
        
     </Dialog>
   </>
  );
};

export default Table;

