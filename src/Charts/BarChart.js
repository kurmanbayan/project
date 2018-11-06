import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
	constructor() {
		super();
		this.state = {
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			  datasets: [
			    {
			      label: 'My First dataset',
			      backgroundColor: [
              'rgba(155,89,182 ,1)',
              'rgba(52,152,219 ,1)',
              'rgba(39,174,96 ,1)',
              'rgba(230,126,34 ,1)',
              'rgba(241,196,15 ,1)',
              'rgba(243,156,18 ,1)',
            ],
			      borderColor: 'rgba(255,99,132,1)',
			      borderWidth: 0.2,
			      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			      hoverBorderColor: 'rgba(255,99,132,1)',
			      data: [65, 59, 80, 81, 56, 55, 40]
			    }
			  ]
			}
		}
	}

  someFunc = (elems) => {
    console.log(elems)
  }

  render() {
    return (
      <div>
				<Bar
          onElementsClick={this.someFunc}
					data={this.state.chartData}
          onClick={this.someFunc}
					options={{
						maintainAspectRatio: false
					}}
				/>
      </div>
    );
  }
}

export default BarChart;
