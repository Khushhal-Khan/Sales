//import React from 'react'

import { Fragment } from "react";
import classes from "./BankForm.module.css";
import { Input } from "antd";

const BankForm = (props) => {
  return (
    <Fragment>
      {props.showForm && (
        <div className={classes.bank}>
          <div className={classes.card2}>
            <div className={classes.input1}>
              <label>Account Holder Name</label>
              <label>Account Number</label>
            </div>
            <div className={classes.input2}>
              <Input placeholder="Holder Name" />
              <Input type="number" placeholder="Account Number" />
            </div>
            <div className={classes.input3}>
              <label>Branch Name</label>
              <label>Branch Code</label>
            </div>
            <div className={classes.input4}>
              <Input placeholder="Branch Name" />
              <Input placeholder="Branch Code" />
            </div>
            <div className={classes.lab2}>
              <label>Branch's Contect Number</label>
            </div>
            <Input type="number" placeholder="Contact Number" />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BankForm;
