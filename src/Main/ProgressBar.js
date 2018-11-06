import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react'

class ProgressBar extends Component {
  constructor(props) {
    super(props)

    var color = "red"
    var percent = this.props.percent
    switch (true) {
      case percent >= 35 && percent < 70:
        color = "yellow"
        break
      case percent >= 70 && percent <= 100:
        color = "green"
        break
      default:
        break
    }
    this.state = {
      color: color,
      percent: percent
    }
  }

  render() {
    return (
      <div class="row">
        <div class="col-md-9">
          <Progress color={this.state.color}
                    value={this.state.percent}
                    size='small'
                    total={100} />
        </div>
        <div class="col">
          {this.state.percent} %
        </div>
      </div>
    );
  }
}

export default ProgressBar;
