import { Fragment } from 'react'
import { Button, Select, Input, Card } from 'antd';
import classes from "./Cash-in.module.css"
import { useState } from 'react';
import { useRouter } from 'next/router';
const { TextArea } = Input;

const index = () => {
  const [num, setNum] = useState(0);
  const [amount, setAmount] = useState(0);
  const [page, setPage] = useState(1);
  const [greater, setGreater] = useState(true);
  const [valid, setValid] = useState(true);
  const router = useRouter();
  
  const cashHandler = (e) => { 
      setNum(e.target.value)
        if (num >= 1000000) {
          setGreater(false);
        }else if (num < 1000000) {
          setGreater(true);
        }
        if( num >= amount) {
          setValid(false)
        } else if (num <= amount) {
          setValid(true);
        }
  }


  return (
    <Fragment>
      <div className={classes.form}>
        <div className={classes.card}>
          <div className={classes.div}>
            <label>Account Holder</label>
            <label>Page No.</label>
          </div>
          <div className={classes.label}>
            <Select
              style={{ width: "50%" }}
              showSearch
              optionFilterProp="children"
              filterOption={filterOption}
              placeholder="Select a Holder"
              options={[
                {
                  value: "name",
                  label: "name",
                },
              ]}
            />

            <Button
              onClick={() => {
                router.push("/account/Create");
              }}
              style={{ background: "green", color: "white" }}
            >
              +
            </Button>

            <Input
              style={{ width: "50%" }}
              onChange={(e) => {
                setPage(e.target.value);
              }}
              value={page}
              min={1}
              type="number"
            />
          </div>

          <Card
            className={classes.card}
            style={{
              width: "100%",
            }}
          >
            <div className={classes.div2}>
              <label>Total Amount</label>
              <label>Cash-In Amount</label>
            </div>

            <div className={classes.input2}>
              <Input
                style={{ width: "50%" }}
                value={+amount}
                type="text"
                min={0}
                placeholder="Enter Total Amount..."
              />

              <Input
                style={{ width: "50%" }}
                onChange={cashHandler}
                value={+num}
                type="number"
                min={0}
                placeholder="Enter Cash-in Amount..."
              />
            </div>
            <div className={classes.p}>
              {!valid && <p style={{ color: "red" }}>More Than Total Amount</p>}
              {!greater && (
                <p style={{ color: "red" }}>Greater than 1 Million</p>
              )}
            </div>
            <div className={classes.place}>
              <label>Remaining Amount</label>
            </div>
            <Input
              style={{ width: "100%" }}
              type="number"
              placeholder="Remaining Amount..."
              value={amount - num}
              min={0}
            />
          </Card>
          <div className={classes.desc}>
            <label>Description</label>
            <TextArea
              showCount
              maxLength={100}
              placeholder="disable resize"
              style={{
                height: 120,
                resize: "none",
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default index