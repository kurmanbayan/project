import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class BarChart extends Component {
	constructor() {
		super();
		this.state = {
			chartData: {
        labels: [
      		'Red',
      		'Green',
      		'Yellow',
          'Blue'
      	],
      	datasets: [{
      		data: [300, 50, 100, 200],
      		backgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56',
          '#2979ff'
      		],
      		hoverBackgroundColor: [
      		'#FF6384',
      		'#36A2EB',
      		'#FFCE56',
          '#2979ff'
      		]
      	}]
			}
		}
	}

  someFunc = () => {
    console.log("pressed")
  }

  render() {
    return (
      <div>
        <Pie data={this.state.chartData} />
      </div>
    );
  }
}

export default BarChart;
