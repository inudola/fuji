import React, {Component} from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Form,
  FormFeedback,
  FormGroup, FormText,
  Input,
  Label,
  Row
} from 'reactstrap';


class Incident extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }
  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }
  render() {
    return (
      <div className="animated fadeIn">
        {/*card 2*/}
        <Row>
          <Col xs={12}>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h6 className="m-0 p-0">Unresolve</h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                        <Row>
                          <Col xs={12}>
                            <Card>
                              <CardHeader>
                                User Pelapor
                              </CardHeader>
                              <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Summary <Badge style={{color:'red'}}> *</Badge></Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="text" id="text-input" name="text-input" placeholder="Summary" />
                                      {/*<FormText color="muted">This is a help text</FormText>*/}
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Summary <Badge style={{color:'red'}}> *</Badge></Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="text" id="text-input" name="text-input" placeholder="Summary" />
                                      {/*<FormText color="muted">This is a help text</FormText>*/}
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Details</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                             placeholder="Write something here..." />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Attachment</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="file" id="file-input" name="file-input" />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Created</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">By</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select"></Label>
                                    </Col>
                                    <Col xs="2">

                                    </Col>
                                    <Col xs="12" md="4" style={{textAlign:'right'}}>
                                      <Button style={{marginRight:'10px'}} type="reset" size="sm" color="secondary"><i className="fa fa-ban"></i> Cancel</Button>

                                      <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Save</Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h6 className="m-0 p-0">Investigate</h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                        <Row>
                          <Col xs={12}>
                            <Card>
                              <CardHeader>
                                User Pelapor
                              </CardHeader>
                              <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Details</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                             placeholder="Write something here..." />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Created</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">Updated</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">By</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select">By</Label>
                                    </Col>
                                    <Col xs="12" md="4">
                                      <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                      </Input>
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col md="2">
                                      <Label htmlFor="select"></Label>
                                    </Col>
                                    <Col xs="2">

                                    </Col>
                                    <Col x xs="12" md="4" style={{textAlign:'right'}}>
                                      <Button style={{marginRight:'10px'}} type="reset" size="sm" color="secondary"><i className="fa fa-ban"></i> Cancel</Button>

                                      <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Save</Button>
                                    </Col>
                                  </FormGroup>
                                </Form>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h6 className="m-0 p-0">Incident</h6>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                        <Row>
                          <Col xs="12" sm="6">
                            <Card>
                              <CardHeader>
                                <strong>User Pelapor</strong>
                              </CardHeader>
                              <CardBody>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="select">Nama</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="select">Unit End User</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Job Title</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Job Title" />
                                     {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Phone Number</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="081-11-11-1111" />
                                    {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Email</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="email" id="text-input" name="text-input" placeholder="email@example.com" />
                                    {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Address</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Address" />
                                    {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="12" sm="6">
                            <Card>
                              <CardHeader>
                                <strong>User Affected</strong>
                              </CardHeader>
                              <CardBody>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="select">Affected User</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Phone Number</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="081-11-11-1111" />
                                    {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Job Title</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Job Title" />
                                    {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Email</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="email" id="text-input" name="text-input" placeholder="email@example.com" />
                                    {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">
                                    <Label htmlFor="text-input">Address</Label>
                                  </Col>
                                  <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Address" />
                                    {/* <FormText color="muted">This is a help text</FormText>*/}
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col md="3">

                                  </Col>
                                  <Col xs="12" md="9">

                                  </Col>
                                </FormGroup>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12}>
                            <Card>
                              <CardHeader>
                                <strong>Incident Details</strong>
                              </CardHeader>
                              <CardBody>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Details</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input style={{height:"30px"}} type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                               placeholder="Write something here..." />
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Sugg Group <Badge style={{color:'red'}}> *</Badge></Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Sugg Group" />
                                        {/* <FormText color="muted">This is a help text</FormText>*/}
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Summary <Badge style={{color:'red'}}> *</Badge></Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="text" id="text-input" name="text-input" placeholder="Summary" />
                                        {/* <FormText color="muted">This is a help text</FormText>*/}
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Lifecycle</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                        {/* <FormText color="muted">This is a help text</FormText>*/}
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Category</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Status</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Impact <Badge style={{color:'red'}}> *</Badge></Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Reporting Media</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Urgency <Badge style={{color:'red'}}> *</Badge></Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Product Catalog</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Priority</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Config Item</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Created</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">By</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">Updated</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="12" sm="6">
                                    <FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="text-input">By</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                      <Input type="select" name="select" id="select">
                                      <option value="0">Please select</option>
                                      <option value="1">Option #1</option>
                                      <option value="2">Option #2</option>
                                      <option value="3">Option #3</option>
                                    </Input>
                                      </Col>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs="12" sm="6">

                                  </Col>
                                  <Col xs="12" sm="6" style={{textAlign:'right'}}>
                                    <Button style={{marginRight:'10px'}} type="reset" size="sm" color="secondary"><i className="fa fa-ban"></i> Cancel</Button>

                                    <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Save</Button>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
          </Col>
        </Row>
        {/*card 2*/}
      </div>
    );
  }
}

export default Incident;
