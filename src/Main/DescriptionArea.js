import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class DescriptionArea extends Component {
  constructor() {
    super()
    this.state = {
      textAreaValue: ''
    }
  }

  handleTextChange = (e) => {
    this.setState({
      textAreaValue: e.target.value
    })
  }

  didClickSearchButton = () => {
    console.log(this.state.textAreaValue)
  }

  render() {
    return (
			<div>
        <div className="row">
          <div className="col">
            <Form>
              <TextArea autoHeight placeholder='Try adding multiple lines'
                style={{ minHeight: 200 }} onChange={this.handleTextChange} />
            </Form>
          </div>
        </div>
        <div className="row" align="center" style={{marginTop: "20px"}}>
          <div className="col">
            <Link to="/results">
              <Button color='blue' onClick={this.didClickSearchButton}> Find results </Button>
            </Link>
          </div>
        </div>
			</div>
    );
  }
}

export default DescriptionArea;
