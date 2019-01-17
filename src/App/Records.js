import React from 'react';
import { List } from 'antd';

export default class Records extends React.Component{
    render(){
        return(
            <List
                itemLayout="horizontal"
                dataSource={this.props.records}
                pagination={{
                    pageSize: 25,
                }}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={item.pet_name}
                        description={item.date}
                        />
                        <div style = {{ paddingRight: "10px"}}>{item.owner_name}</div>
                        <div>{item.phone}</div>
                    </List.Item>
                )}
            />
        )
    }
}