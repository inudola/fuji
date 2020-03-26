import React, {Component} from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';


class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/*card 2*/}
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                Resolution
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="select">Category <Badge style={{color:'red'}}> *</Badge></Label>
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
                      <Label htmlFor="select">Notify Originator</Label>
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
                      <Label htmlFor="select">Summary <Badge style={{color:'red'}}> *</Badge></Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Summary" />
                      {/*<FormText color="muted">This is a help text</FormText>*/}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="select">Article</Label>
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
                      <Label htmlFor="select">Attachment</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="file" id="file-input" name="file-input" />
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
                      <Label htmlFor="select">Resolved</Label>
                    </Col>
                    <Col xs="12" md="4">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="22 March 2020: 12:10:22" disabled />
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
                    <Col  xs="12" md="4" style={{textAlign:'right'}}>
                      <Button style={{marginRight:'10px'}} type="reset" size="sm" color="secondary"><i className="fa fa-ban"></i> Cancel</Button>

                      <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Save</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/*card 2*/}
      </div>
    );
  }
}

export default Dashboard;
