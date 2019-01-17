import React from 'react';
import { Input, Select, Row, Col, Radio } from 'antd';
import { getAllAppointments, getAppointmentsbyDate, getAppointmentsbyName } from '../api/appointment';
import Records from '../App/Records';
import sortJsonArray from 'sort-json-array';
const Search = Input.Search;
const Option = Select.Option;
const RadioGroup = Radio.Group;

export default class MainBodyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "date",
            records:[{}],
            value: "date"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    onChange = (e) => {
        this.setState({
          value: e.target.value,
          records: sortJsonArray(this.state.records, e.target.value)
        });
        console.log('radio checked', e.target.value);
    }

    handleSubmit = (e) => {
        if(e.length == 0){
            getAllAppointments().then(response => {
                this.setState({records:response.data})
            })
        }else if(this.state.type === "date"){
            console.log("user input date: ", e);
            getAppointmentsbyDate(e).then(response => {
                this.setState({records:response.data})
            })
        }else if(this.state.type === "pet_name"){
            console.log("user input pet name: ", e);
            getAppointmentsbyName(e).then(response => {
                this.setState({records:response.data})
            })
        }else{
            console.log("Search Error.");
        }
    }

    handleTypeChange = (e) => {
		this.setState( {type: e} );
	}

    componentDidMount() {
        getAllAppointments().then(response => {
            this.setState({records:sortJsonArray(response.data, "date")})
        })
    }

    render() {
        return (
            <React.Fragment>
            <h1 style={{textAlign: "center"}}>Appointment Search</h1>
            <Row>
                <Col  xs={0} sm={3} md={3} lg={3} xl={3}></Col>
                <Col  xs={24} sm={18} md={18} lg={18} xl={18}>
                    <Search
                        addonBefore={(
                            <Select defaultValue="date" style={{ width: 105 }} onChange={this.handleTypeChange}>
                                <Option value="date">By date</Option>
                                <Option value="pet_name">By name</Option>
                            </Select>
                        )}
                        placeholder="e.g.: '2015-04-14', 'Oozz', or empty for all "
                        onSearch={value => this.handleSubmit(value)}
                        enterButton
                    />
                    <br /><br />
                    {/* <RadioGroup onChange={this.onChange} value={this.state.value} style={{justifyContent: "center", display: "flex"}}>
                        <Radio value={"date"}>Order by Date</Radio>
                        <Radio value={"name"}>Order by Name</Radio>
                    </RadioGroup>
                    <br /><br /> */}
                    <Row>
                        <Col span={8} >Pet / Date</Col>
                        <Col span={8} offset={8} style={{float:"right"}}>Owner / Phone</Col>
                    </Row>
                    <hr />
                    <Records records={this.state.records} />
                </Col>
                <Col  xs={0} sm={3} md={3} lg={3} xl={3}></Col>
            </Row>

            </React.Fragment>
        )
    }
}