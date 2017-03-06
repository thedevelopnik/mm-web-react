import React, { Component } from "react";
import Chip from "material-ui/Chip";
import { inject, observer } from "mobx-react";

class CurrentStatesTeacher extends Component {
  state = {
    stateMap: {
      0: "AK",
      1: "AL",
      2: "AR",
      3: "AZ",
      4: "CA",
      5: "CO",
      6: "CT",
      7: "DC",
      8: "DE",
      9: "FL",
      10: "GA",
      11: "HI",
      12: "IA",
      13: "ID",
      14: "IL",
      15: "IN",
      16: "KS",
      17: "KY",
      18: "LA",
      19: "MA",
      20: "MD",
      21: "ME",
      22: "MI",
      23: "MN",
      24: "MO",
      25: "MS",
      26: "MT",
      27: "NC",
      28: "ND",
      29: "NE",
      30: "NH",
      31: "NJ",
      32: "NM",
      33: "NV",
      34: "NY",
      35: "OH",
      36: "OK",
      37: "OR",
      38: "PA",
      39: "RI",
      40: "SC",
      41: "SD",
      42: "TN",
      43: "TX",
      44: "UT",
      45: "VA",
      46: "VT",
      47: "WA",
      48: "WI",
      49: "WY"
    }
  };

  handleRequestDelete(event) {
    console.log(event);
  }

  componentWillReact() {
    console.log(`I rerendered because the props changed`);
  }

  componentWillMount() {
    this.setState({
      userStates: this.props.currentUser.matchingProfile.states.map(
        stateIndex => {
          return (
            <Chip key={stateIndex} onRequestDelete={this.handleRequestDelete}>
              {this.state.stateMap[stateIndex]}
            </Chip>
          );
        }
      )
    });
  };

  render() {
    console.log(this.state.userStates);
    return (
      <div>
        {this.state.userStates}
      </div>
    );
  }
}

export const $ = inject("currentUser")(observer(CurrentStatesTeacher));