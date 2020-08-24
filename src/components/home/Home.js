import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import FileBase from "react-file-base64";
import withContext from "../../withContext";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from "axios";
import MaterialTable from 'material-table';

const BASE_URL = "http://localhost:3001";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banks: [],
      columns: [
        { title: 'BANK', field: 'bank' },
        { title: 'ADDRESS', field: 'address' },
        { title: 'BRANCH', field: 'branch'},
        { title: 'CITY1', field: 'city1'},
        { title: 'CITY2', field: 'city2'},
        // { title:'IFSC', feild:'ifsc'},
        // { title:'MICR', feild:'micr'},
        // { title:'PHONE' , feild:'mobile'},
        // { title:'STATE' , feild:'state'},
        // { title:'CITY2' , feild:'city'},
        // { title:'STD CODE' , feild:'pin'}
      ],
      data: [],
    };
  }

  async componentDidMount() {
      const resp = await axios.get(`${BASE_URL}/app/banks`);
      const updatedData = [];
      for(let i = 0; i < resp.data.length; i++) {
        let tempObj = {};
        tempObj.bank = resp.data[i]['BANK'];
        tempObj.address = resp.data[i]['ADDRESS'];
        tempObj.branch = resp.data[i]['BRANCH'];
        tempObj.city1 = resp.data[i]['CITY1'];
        tempObj.city2 = resp.data[i]['CITY2'];
        // tempObj.x = resp.data[i]['IFSC'];
        // tempObj.micr = resp.data[i]['MICR'];
        // tempObj.mobile = resp.data[i]['PHONE'];
        // tempObj.state = resp.data[i]['STATE'];
        updatedData.push(tempObj);
      }
      this.setState({
        data: updatedData,
      })
      console.log(updatedData[0], resp.data[0]);
  }

  render() {
    const { user } = this.props.context;
    return user ? (
      <Redirect to="/" />
    ) : (
      <MaterialTable
      title="Editable Example"
      columns={this.state.columns}
      data={this.state.data}
    />
        // <Fragment>
        //   <div className="hero is-primary">
        //     <div className="hero-body container">
        //       <h4 className="title">Your Images</h4>
        //     </div>
        //   </div>
        //   {this.state.isUploading && (<LinearProgress />)}
        //   <br />
        //   <div className="container">
        //     <center>
        //       <form
        //         onSubmit={this.handleSubmit}
        //         encType="multipart/form-imageData"
        //       >
        //         <FileBase
        //           type="file"
        //           multiple={false}
        //           onDone={this.handleUpload}
        //         />
        //         <button
        //           type="submit"
        //           className="button is-primary is-medium"
        //           onClick={this.handleSubmit}
        //         >
        //           Upload
        //       </button>
        //       </form>
        //     </center>
        //     <br />
        //     <div className="column columns is-multiline">
        //       {this.state.images && this.state.images.length ? (
        //         this.state.images.map((image, index) => (
        //           <div key={image.name}>
        //             <br />
        //             <img src={`${image.base64Image}`} />
        //             <br />
        //             <p>{image.name}</p>
        //             <br />
        //           </div>
        //         ))
        //       ) : (
        //           <div>
        //             {this.state.isLoading ? (
        //               <CircularProgress />
        //             ) : (
        //                 <div className="column">
        //                   <span className="title has-text-grey-light">
        //                     No Images found!
        //                   </span>
        //                 </div>
        //               )}
        //           </div>
        //         )}
        //     </div>
        //   </div>
        // </Fragment>
      );
  }
}

export default withContext(Home);
