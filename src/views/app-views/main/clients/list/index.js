import AppLocale from "lang";
import React, { Component } from 'react';
import { Card, Table, Space, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';


export class UserList extends Component {
	state = {
		users: [],
		userProps: {},
		userProfileVisible: false,
		selectedUser: null
	};


	fillUsers() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(r => r.json())
			.then(users => {
				this.setState({users});
			});
	}

	deleteUser(userId) {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
   		});
	}

	componentWillMount(){
		this.fillUsers();
	}

		
	render() {
		const { locale: LOCALE } = this.props;
		const { users, userProfileVisible, selectedUser } = this.state;
		const COLLATOR = new Intl.Collator([AppLocale[LOCALE].locale]);

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						return COLLATOR.compare(a.name, b.name);
					},
				},
			},
			{
				ellipsis: true,
				title: 'Address',
				dataIndex: 'address',
				render: (_, record) => (
						<><strong>{record.address.city}</strong>&nbsp; {record.address.street} {record.address.suite}</>
				),
				sorter: {
					compare: (a, b) => {
						const ADDR_A = `${a.address.city} ${a.address.street} ${a.address.suite}`,
									ADDR_B = `${b.address.city} ${b.address.street} ${b.address.suite}`;
						return COLLATOR.compare(ADDR_A, ADDR_B);
					},
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: {
					compare: (a, b) => {
						return a.phone.length - b.phone.length
					},
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => {
						return a.website.length - b.website.length
					},
				},
			},
			{
				title: 'Action',
				dataIndex: 'actions',
				render: (_, elm) => (
					<Space size="middle">
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
					</Space>
				)
			}
		];

		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns}
				dataSource={users}
				onRow={(elm) => {
						return {
							onClick: e => {
								this.props.history.push({
                  					pathname: `/app/main/clients/profile/edit-profile/:${elm.id}`,
                  					state: {
                  					  selectedUser: elm
                  					}
                				});
							}
						};
					}}
				rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
		
	}
}


const userListProps = ({ theme }) => {
	const { locale } =  theme;
	return { locale }
};
  
export default withRouter(connect(userListProps)(UserList));