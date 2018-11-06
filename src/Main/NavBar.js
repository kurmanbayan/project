import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
			<div>
        <Menu>
          <Menu.Item header>Project</Menu.Item>
          {/* <Menu.Menu position='right'>
            <Menu.Item>
              <FormModal />
            </Menu.Item>
          </Menu.Menu>  */}
        </Menu>
			</div>
    );
  }
}

export default NavBar;
