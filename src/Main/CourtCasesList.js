import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import ProgressBar from './ProgressBar'

class BarChart extends Component {
  render() {
    return (
      <div style={{ marginTop: "20px", width: this.props.width }}>
        <Table celled color="olive">
            <Table.Header>
              <Table.Row>
                {
                  this.props.headers.map((header, index) => {
                    return <Table.HeaderCell key={index}>
                      {header}
                    </Table.HeaderCell>
                  })
                }
              </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                  this.props.data.map((elem, index) => {
                    return <Table.Row key={index}>
                      {
                        elem.map((value, index) => {
                          if (this.props.isContainsProgress && index === 1) {
                            return <Table.Cell key={index}>
                              <ProgressBar percent={value}/>
                            </Table.Cell>
                          } else {
                            return <Table.Cell key={index}>
                              { value }
                            </Table.Cell>
                          }
                        })
                      }
                    </Table.Row>
                  })
                }
            </Table.Body>
        </Table>
      </div>
    );
  }
}

export default BarChart;
