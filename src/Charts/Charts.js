import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

class App extends Component {
  render() {
    return (
			<div className="container">
			   <div className="row">
           <div className="col-md-7">
             <BarChart />
           </div>
           <div className="col-md-5">
             <PieChart />
           </div>
         </div>
         <div className="row">
           <div className="col">
             <LineChart />
           </div>
         </div>
			</div>
    );
  }
}

export default App;
