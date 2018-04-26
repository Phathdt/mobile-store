import React, { Component } from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import Page from 'components/Page';

class NewBrandPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      name: '',
      country: '',
      desc: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      let res = await fetch('/brand/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.state.token
        },
        body: JSON.stringify({
          name: this.state.name,
          country: this.state.country,
          description: this.state.desc
        })
      });

      if (res.status === 401) {
        alert('something went wrong');
      } else {
        this.props.history.push('/admin/brands');
      }
    } catch (error) {
      console.log(error);
    }
  };

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.country.length > 0 &&
      this.state.desc.length > 0
    );
  }

  render() {
    return (
      <Page
        title="New Brands"
        breadcrumbs={[{ name: 'New Brands', active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>New Brands</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="country">Country</Label>
                    <Input
                      type="text"
                      id="country"
                      value={this.state.country}
                      onChange={this.handleChange}
                      name="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      id="desc"
                      value={this.state.desc}
                      onChange={this.handleChange}
                      name="text"
                    />
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button
                        onClick={this.handleSubmit}
                        disabled={!this.validateForm()}
                      >
                        Submit
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default NewBrandPage;
