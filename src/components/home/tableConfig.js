import React from "react";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import SortArrow from "@material-ui/icons/Sort";
import ViewColumn from "@material-ui/icons/ViewColumn";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";

export function getIcons() {
  return {
    Check: () => <Check />,
    Delete: () => <DeleteIcon />,
    DetailPanel: () => <ChevronRight />,
    Export: () => <SaveAlt />,
    Filter: () => <FilterList />,
    FirstPage: () => <FirstPage />,
    LastPage: () => <LastPage />,
    NextPage: () => <ChevronRight />,
    PreviousPage: () => <ChevronLeft />,
    Search: () => <Search />,
    SortArrow: () => <SortArrow />,
    ThirdStateCheck: () => <Remove />,
    ViewColumn: () => <ViewColumn />,
    Clear: () => <ClearIcon />,
    Edit: () => <EditIcon />,
  };
}

export function getColumnConfig() {
  return [
    { title: 'SELECT', field: 'selectButton'},
    { title: 'BANK', field: 'bank' },
    { title: 'ADDRESS', field: 'address' },
    { title: 'BRANCH', field: 'branch'},
    { title: 'CITY1', field: 'city1'},
    { title: 'CITY2', field: 'city2'},
  ];
}

export function getRowsList(data, history) {
  const updatedData = [];
  for(let i = 0; i < data.length; i++) {
    let tempObj = {};
    tempObj.selectButton = <button 
    id={data[i]['_id']} onClick={(event) => {
      history.push(`banks/${event.target.id}`);
    }} color="primary">See Details
    </button>;
    tempObj.bank = data[i]['BANK'];
    tempObj.address = data[i]['ADDRESS'];
    tempObj.branch = data[i]['BRANCH'];
    tempObj.city1 = data[i]['CITY1'];
    tempObj.city2 = data[i]['CITY2'];
    updatedData.push(tempObj);
  }
  return updatedData;
}

export function getTableOptions() {
  return {
    pageSize: 50,
  };
}
