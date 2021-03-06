import React from 'react';
import { Menu, Icon } from 'antd';

class header extends React.Component {
	state = {
		current: 'mail'
	};

	handleClick = (e) => {
		this.setState({
			current: e.key
		});
	};

	render() {
		return (
			<Menu onClick={this.handleClick} selectedKeys={[ this.state.current ]} mode="horizontal">
        <Menu.Item>
          Home
        </Menu.Item>
				<Menu.Item key="mail">
					<Icon type="mail" />
					Navigation One
				</Menu.Item>
				<Menu.Item key="app">
					<Icon type="appstore" />
					Navigation Two
				</Menu.Item>
			</Menu>
		);
	};
};

export default header;