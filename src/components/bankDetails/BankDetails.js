import React, { Fragment, Component } from "react";
import withContext from "../../withContext";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";

const BASE_URL = "http://localhost:3001/app";

class BankDetails extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params },
    } = this.props;
    this.bankId = params.bankId;
    this.state = {
      bankDetails: null,
    };
  }

  componentDidMount = async () => {
    try {
      const resp = await Axios.get(`${BASE_URL}/banks/${this.bankId}`);
      for(let i = 0; i < resp.data.length; i++) {
        if(resp.data[i]['_id'] === this.bankId) {
          console.log(resp.data[i]['STD CODE']);
          this.setState({
            bankDetails: resp.data[i]
          })
        }
      }
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      !this.state.bankDetails ? (
        <p>Loading ....</p>
      ) : (
      <Fragment>
        <center>
          <form>
            <TextField
              disabled={true}
              fullWidth
              id="bankId"
              label="Bank Id"
              value={(this.state.bankDetails && this.state.bankDetails['_id']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="bank"
              label="Bank Name"
              value={(this.state.bankDetails && this.state.bankDetails['BANK']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="ifsc"
              label="IFSC"
              value={(this.state.bankDetails && this.state.bankDetails['IFSC']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="micr"
              label="MICR"
              value={(this.state.bankDetails && this.state.bankDetails['MICR']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="branch"
              label="BRANCH"
              value={(this.state.bankDetails && this.state.bankDetails['BRANCH']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="address"
              label="ADDRESS"
              value={(this.state.bankDetails && this.state.bankDetails['ADDRESS']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="city1"
              label="CITY1"
              value={(this.state.bankDetails && this.state.bankDetails['CITY1']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="city2"
              label="CITY2"
              value={(this.state.bankDetails && this.state.bankDetails['CITY2']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="state"
              label="STATE"
              value={(this.state.bankDetails && this.state.bankDetails['STATE']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="stdCode"
              label="STD CODE"
              value={(this.state.bankDetails && this.state.bankDetails['STD CODE']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              disabled={true}
              fullWidth
              id="phone"
              label="PHONE"
              value={(this.state.bankDetails && this.state.bankDetails['PHONE']) || 'NA'}
              variant="outlined"
            />
            <br />
            <br />
          </form>
        </center>
      </Fragment>

      )
    );
  }
}

export default withContext(BankDetails);
