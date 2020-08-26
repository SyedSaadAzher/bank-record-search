import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getColumnConfig, getRowsList, getIcons, getTableOptions } from "./tableConfig"
import withContext from "../../withContext";
import axios from "axios";
import MaterialTable from 'material-table';

const BASE_URL = "http://ec2-3-14-85-79.us-east-2.compute.amazonaws.com:3001";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
      const resp = await axios.get(`${BASE_URL}/app/banks`);
      this.setState({
        data: resp.data,
      })
  }

  render() {
    const { user } = this.props.context;
    return !user ? (
      <Redirect to="/login" />
    ) : (
      <MaterialTable
      title="Banks List"
      icons={getIcons()}
      columns={getColumnConfig()}
      data={getRowsList(this.state.data, this.props.history)}
      options={getTableOptions()}
    />
      );
  }
}

export default withContext(Home);
