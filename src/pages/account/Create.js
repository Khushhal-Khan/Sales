import { useState, Fragment } from "react";
import { Avatar, Button, Space, Form, Input, Select, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import classes from "./Create.module.css";
import { useRouter } from "next/router";
import BankForm from "./BankForm";
import Index from ".";
import { useGlobalContext } from "./Context";

const index = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const {input, setInput} =  useGlobalContext()
  const router = useRouter();

  const submitInput = (e) => {
     e.preventDefault();
      // setInput((prevName) => {
      //   return { ...prevName, name: "" };
      // });
     router.push("/account")
    } 

  const bankInfo = (e) => {
    if (e === "Bank") {
      setShowForm(!showForm);
    }
  };

   const nameHandler = (e) => {
     setInput((prevName) => {
      return { ...prevName, name: e.target.value}
     });
   };
   const contactHandler = (e) => {
      setInput((prevNum) => {
        return { ...prevNum, contact: e.target.value };
      });
   }
   const addressHanler = (e) => {
      setInput((prevadd) => {
        return { ...prevadd, address: e.target.value };
      });
   }
   const emailHandler = (e) => {
      setInput((prevemail) => {
        return { ...prevemail, email: e.target.value };
      });
   }
  
   const optHandler = (e) => {
      setInput((prevopt) => {
        return { ...prevopt, option: e };
      });
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
          <Button onClick={submitInput} size={"large"}>
            Save
          </Button>
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
              onChange={nameHandler}
              value={input.name}
            ></Input>
            <Select
              style={{ width: "50%" }}
              disabled={isDisabled}
              showSearch
              optionFilterProp="children"
              filterOption={filterOption}
              placeholder="Select a Type"
              onSelect={bankInfo}
              onChange={optHandler}
              value={input.option}
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
                onChange={contactHandler}
                value={input.contact}
                style={{ width: "50%" }}
                placeholder="contact no..."
                name="number"
                type="number"
              ></Input>
              <Input
                disabled={isDisabled}
                onChange={addressHanler}
                value={input.address}
                style={{ width: "50%" }}
                placeholder="address..."
                name="address"
                type="address"
              ></Input>
            </div>
            <div className={classes.place}>
              <label>Email Address</label>
            </div>
            <Input
              disabled={isDisabled}
              onChange={emailHandler}
              value={input.email}
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
