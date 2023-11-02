import { useState } from "react";
import { Avatar, Divider, Space, Form, Input, Select, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./index.module.css";
import { useRouter } from "next/router";
import BankForm from "./BankForm";
import Index from ".";

const index = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [name, setName] = useState("")
  const router = useRouter();

  const bankInfo = (e) => {
    if (e === "Bank") {
      setShowForm(!showForm);
    }
  };

  const nameHandlder = (e) => {
    setName(e.target.value)
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
          <Link href="/account">
            <Button size={"large"}>Save</Button>
          </Link>
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
              onChange={nameHandlder}
              value={name}
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
              placeholder="Email..."
              name="name"
              type="address"
            ></Input>
          </Card>
        </div>
      </div>

      <BankForm showForm={showForm} />
    </Fragment>
  );
};
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
export default index;
