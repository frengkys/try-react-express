import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Col, Form, Button, Checkbox } from 'react-bootstrap'

export default class StudentForm extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
          data: {
              student_no: '',
              name: '',
              email: '',
              telp: '',
              address: '',
              status: '',
            },
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        this.setState({
            data: {
            ...this.state.data, [e.target.name]: e.target.value
            }
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        // // this.setState({ submitted: true });
        console.log('s ', this.state);
        // if (Object.keys(errors).length === 0 ) {
        this.props.submit(this.state.data);
        // }
      }
  
    render() {
      return (
          <Form horizontal onSubmit={this.handleSubmit}>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Student No
                </Col>
                <Col sm={10}>
                <FormControl name="student_no" type="text" placeholder="Student No" onChange={this.handleChange} />
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Name
                </Col>
                <Col sm={10}>
                <FormControl name="name" type="text" placeholder="Name" onChange={this.handleChange} />
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Email
                </Col>
                <Col sm={10}>
                <FormControl name="email" type="email" placeholder="Email" onChange={this.handleChange} />
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Telp
                </Col>
                <Col sm={10}>
                <FormControl name="telp" type="text" placeholder="Telp" onChange={this.handleChange} />
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Address
                </Col>
                <Col sm={10}>
                <FormControl name="address" type="text" placeholder="Address" onChange={this.handleChange} />
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formControlsSelect">
                <Col componentClass={ControlLabel} sm={2}>
                    Status
                </Col>
                <Col sm={10}>
                <FormControl name="status" componentClass="select" placeholder="select" onChange={this.handleChange} >
                    <option value="select">select</option>
                    <option value="other">...</option>
                </FormControl>
                </Col>
            </FormGroup>
            <FormGroup>
            <Col smOffset={10} sm={2}>
            <Button type="submit" className="btn btn-primary">Submit</Button>
            </Col>
            </FormGroup>
            </Form>
      );
    }
  }
  