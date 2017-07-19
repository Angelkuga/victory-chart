/*eslint-disable no-magic-numbers */

import React from "react";
import {
  VictoryChart, VictoryLine, VictoryCursorContainer
} from "../../src/index";

import { range } from "lodash";

const makeData = () => range(5000).map((x) => ({ x, y: x + 10 * Math.random() }));

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };

    setInterval(() => this.setState({ data: makeData() }), 3000);
  }
  render() {
    return (
      <div>
        <VictoryChart containerComponent={<VictoryCursorContainer/>}>
          <VictoryLine data={this.state.data}/>
        </VictoryChart>
      </div>
    );
  }
}
