import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import CourtCases from './CourtCasesList'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      table1headers: [
        'Row1',
        'Row2',
      ],
      table2headers: [
        'Row1',
        'Row2',
        'Row3',
        'Row4'
      ],
      table1: [
        [
          'First',
          15,
        ],
        [
          'Second',
          76,
        ],
        [
          'Third',
          59,
        ]
      ],
      table2: [
        [
          'First',
          'Second',
          'Third',
          'Fourth'
        ],
        [
          'First',
          'Second',
          'Third',
          'Fourth'
        ],
      ]
    }
  }

  render() {
    return (
			<div style={{ marginTop:"20px" }}>
        <div className="row">
          <div className="col">
            <Header as='h3'> Search Results </Header>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CourtCases headers={this.state.table1headers}
                        isContainsProgress={true}
                        data={this.state.table1} width={500}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CourtCases headers={this.state.table2headers}
                        isContainsProgress={false}
                        data={this.state.table2}/>
          </div>
        </div>
			</div>
    );
  }
}

export default Results;
