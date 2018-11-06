import React, { Component } from 'react';
import DescriptionArea from './DescriptionArea'
// import Charts from '../Charts/Charts'

class App extends Component {
  render() {
    return (
			<div>
				<div className="row" style={{ marginTop: "20px" }}>
					<div className="col">
            <DescriptionArea />
            {/* <Charts /> */}
					</div>
				</div>
			</div>
    );
  }
}

export default App;
