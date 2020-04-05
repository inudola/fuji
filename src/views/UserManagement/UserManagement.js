import React, {Component, Fragment} from 'react';
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
  NavLink,
  Input,
  Label,
  Row
} from 'reactstrap';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import data from './_data';
const selectRowProp = {
  mode: 'checkbox'
};
const options = {
  insertText: 'Tambah',
  deleteText: 'Hapus',
  saveText: 'my_save',
  closeText: 'my_close'
};
class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    }

  }

  // just an example
  nameFormat(cell, row) {
    const id = `/users/${row.id}`
      return (
      <NavLink strict to={id}> {cell} </NavLink>
    );
  };

  onClickProductSelected(cell, row, rowIndex){
    console.log('User #', rowIndex);
   }
   hapusData(rowIndex){
    console.log("hapus", rowIndex);
   }
   editData(rowIndex){
    console.log("EditData", rowIndex);
   }
 
 
  cellButton(cell, row, enumObject, rowIndex) {
    return (
       <Button color="primary"
          type="button" 
          onClick={() => 
          this.onClickProductSelected(cell, row, rowIndex)}
       >
       Hapus</Button>
    )
 }
 editButton(cell, row, enumObject, rowIndex) {
  return (
     <Fragment>
       <Button type="button" color="primary" onClick={() => this.editData(rowIndex)}> Edit</Button> 
       &nbsp;
       <Button type="button" color="danger" onClick={() => this.hapusData(rowIndex)}> Hapus</Button>
     </Fragment>
  )
}

  render() {
    return (
      <div className="animated fadeIn">
        {/*card 2*/}
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                User Management
              </CardHeader>
              <CardBody>
            <BootstrapTable deleteRow={ true } selectRow={ selectRowProp } insertRow={ true } data={this.table} version="4" striped hover pagination search options={options}>
              <TableHeaderColumn dataField="name" dataSort dataFormat={this.nameFormat} >Name</TableHeaderColumn>
              <TableHeaderColumn isKey dataField="email">Email</TableHeaderColumn>
              <TableHeaderColumn dataField="regDate" dataSort>Reg Date</TableHeaderColumn>
              <TableHeaderColumn dataField="city" dataSort>City</TableHeaderColumn>
              <TableHeaderColumn tdStyle={{textAlign:'center'}} dataField='button'dataFormat={this.editButton.bind(this)}
      />
            </BootstrapTable>
          </CardBody>
            </Card>
          </Col>
        </Row>
        {/*card 2*/}
      </div>
    );
  }
}

export default UserManagement;
