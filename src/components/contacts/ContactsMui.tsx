import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  DataGridPro,
  GridActionsCellItem,
  GridApiRef,
  GridColumns,
  GridEventListener,
  GridEvents,
  GridRowParams,
  GridRowsProp,
  GridToolbarContainer,
  MuiEvent,
  useGridApiRef,
} from "@mui/x-data-grid-pro";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
} from "../../redux/reducers/contactsReducer/middleware/contactsMiddleware";
import { RootStateType } from "../../redux/store/store";
import { CustomToolbar } from "../toolbar/Toolbar";

interface EditToolbarProps {
  apiRef: GridApiRef;
}

function EditToolbar(props: EditToolbarProps) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = Math.floor(Math.random() * 100000);
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.setRowMode(id, "edit");
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });
      apiRef.current.setCellFocus(id, "name");
    });
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <CustomToolbar />
    </GridToolbarContainer>
  );
}

interface ContactsMuiProps {
  rows: GridRowsProp;
}

export default function ContactsMui(rows: ContactsMuiProps) {
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();
  const userId = useSelector((state: RootStateType) => state.app.userID);

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<GridEvents.rowEditStop> = (
    params,
    event
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleCellFocusOut: GridEventListener<GridEvents.cellFocusOut> = (
    params,
    event
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id: any) => (event: any) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "edit");
  };

  const handleSaveClick = (id: any) => async (event: any) => {
    event.stopPropagation();
    // Wait for the validation to run
    const isValid = await apiRef.current.commitRowChange(id);
    if (isValid) {
      apiRef.current.setRowMode(id, "view");
      const row = apiRef.current.getRow(id);
      if (!row) return;

      const model = {
        id: row.id,
        name: row.name,
        email: row.email,
        address: row.address,
        phone: row.phone,
        userId: userId!,
      };
      if (row!.isNew) {
        dispatch(addContactThunk(model));
      } else {
        dispatch(editContactThunk(row.id, model));
      }
      apiRef.current.updateRows([{ ...row, isNew: false }]);
    }
  };

  const handleDeleteClick = (id: any) => (event: any) => {
    event.stopPropagation();
    const row = apiRef.current.getRow(id);
    dispatch(deleteContactThunk(row!.id));
    apiRef.current.updateRows([{ id, _action: "delete" }]);
  };

  const handleCancelClick = (id: any) => (event: any) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "view");

    const row = apiRef.current.getRow(id);
    if (row!.isNew) {
      apiRef.current.updateRows([{ id, _action: "delete" }]);
    }
  };

  const columns: GridColumns = [
    { field: "name", headerName: "Name", width: 300, editable: true },
    { field: "email", headerName: "Email", width: 300, editable: true },
    {
      field: "address",
      headerName: "Address",
      width: 300,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 300,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === "edit";

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGridPro
        sx={{ justifyContent: "center" }}
        rows={rows.rows}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        onCellFocusOut={handleCellFocusOut}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { apiRef },
        }}
      />
    </Box>
  );
}
