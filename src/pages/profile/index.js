import { useState } from "react";
import { Avatar, Divider, Space, Form, Input, Select, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./index.module.css";
import { useRouter } from "next/router";

const index = () => {
  const [isDisabled, setIsDisabled] = useState(true);
    const [showForm, setShowForm] = useState(false);
  const router = useRouter();


 const bankInfo = (e) => {
  if(e === "Bank"){
     setShowForm(!showForm);
  }
 }

 
  return (
    <Fragment>
      <div className={classes.btn}>
        <h1 style={{ margin: 20 }}>Points of Sales</h1>
        <div className={classes.click}>
          <Button
            style={{ background: "green" }}
            size={"large"}
            onClick={() => setIsDisabled(!isDisabled)}
            type="primary"
          >
            {isDisabled ? "Edit" : "Cancel"}
          </Button>
          <Button size={"large"}>Save</Button>
        </div>
      </div>

      <div className={classes.sec}>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size={100} icon={<UserOutlined />} />
          </Space>
        </Space>
      </div>

      <div className={classes.form}>
        <div className={classes.card}>
          <div className={classes.div}>
            <label>Enter Name</label>
            <label>Account Type</label>
          </div>
          <div className={classes.label}>
            <Input
              disabled={isDisabled}
              style={{ width: "50%" }}
              placeholder="Name..."
              name="name"
            ></Input>
            <Select
              style={{ width: "50%" }}
              disabled={isDisabled}
              showSearch
              placeholder="Select a Type"
              optionFilterProp="children"
              filterOption={filterOption}
              onSelect={bankInfo}
              options={[
                {
                  value: "Parties",
                  label: "Parties",
                },
                {
                  value: "Investors",
                  label: "Investors",
                },
                {
                  value: "Bank",
                  label: "Bank",
                },
                {
                  value: "Labor",
                  label: "Labor",
                },
                {
                  value: "Expenses",
                  label: "Expenses",
                },
                {
                  value: "Purchases",
                  label: "Purchases",
                },
                {
                  value: "Sales",
                  label: "Sales",
                },
              ]}
            />
          </div>
          <Card
            className={classes.card}
            title=<i>Contact Info</i>
            bordered={false}
            style={{
              width: "100%",
            }}
          >
            <div className={classes.div2}>
              <label>Contact Number</label>
              <label>Address</label>
            </div>

            <div className={classes.input2}>
              <Input
                disabled={isDisabled}
                style={{ width: "50%" }}
                placeholder="contact no..."
                name="number"
                type="number"
              ></Input>
              <Input
                disabled={isDisabled}
                style={{ width: "50%" }}
                placeholder="address..."
                name="name"
                type="address"
              ></Input>
            </div>
            <div className={classes.place}>
              <label>Email Address</label>
            </div>
            <Input
              disabled={isDisabled}
              style={{ width: "100%" }}
              placeholder="address..."
              name="name"
              type="address"
            ></Input>
          </Card>
        </div>
      </div>

      {showForm && (
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
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
export default index;
