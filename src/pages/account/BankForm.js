//import React from 'react'

import { Fragment } from "react";
import classes from "./BankForm.module.css";
import { Input } from "antd";
import { useGlobalContext } from "./Context";

const BankForm = (props) => {
 const {input, setInput} = useGlobalContext();

   const holderHandler = (e) => {
     setInput((prevHolder) => {
      return { ...prevHolder, holder: e.target.value}
     })
   }
   const accHandler = (e) => {
    setInput((prevAcc) => {
      return {...prevAcc, acc: e.target.value}
    })
   }
   const branchHandler = (e) => {
    setInput((prevBranch) => {
      return {...prevBranch, branch: e.target.value}
    })
   }
   const codeHandler = (e) => {
    setInput((prevCode) => {
      return {...prevCode, code : e.target.value}
    })
   }
   const branchNumHandler = (e) => {
    setInput((prevBranchNum) => {
      return {...prevBranchNum, branchNum : e.target.value}
    })
   }

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
              <Input
                placeholder="Holder Name"
                onChange={holderHandler}
                value={input.holder}
              />
              <Input
                type="number"
                placeholder="Account Number"
                onChange={accHandler}
                value={input.acc}
              />
            </div>
            <div className={classes.input3}>
              <label>Branch Name</label>
              <label>Branch Code</label>
            </div>
            <div className={classes.input4}>
              <Input
                placeholder="Branch Name"
                onChange={branchHandler}
                value={input.branch}
              />
              <Input
                placeholder="Branch Code"
                onChange={codeHandler}
                value={input.code}
              />
            </div>
            <div className={classes.lab2}>
              <label>Branch's Contect Number</label>
            </div>
            <Input
              type="number"
              placeholder="Contact Number"
              onChange={branchNumHandler}
              value={input.branchNum}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BankForm;
