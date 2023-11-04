import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Fragment } from "react";
import classes from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const App = () => {
  const [name, setName] = useState({ name: "", pass: "" });
  const [validInput, setValidInput] = useState({ name: true, pass: true});
  
  const router = useRouter();

  function submitHandler(event) {
    event.preventDefault();
    // setName("");
    if (name.name === "" || name.pass === "") {
      setValidInput((prevName) => {
        return { ...prevName, name: false };
      })
      setValidInput((prevPass) => {
        return { ...prevPass, pass: false };
      });
      return;
    }
    setValidInput((prevName) => {
      return { ...prevName, name: true };
    });
    setValidInput((prevPass) => {
      return { ...prevPass, pass: true };
    });
    if (validInput.name === true && validInput.pass === true) {
      router.push("/account");
    }
    
  }

  function nameChangeHandler(event) {
    setName((prevState) => {
      return { ...prevState, name: event.target.value };
    });
    setValidInput((prevName) => {
      return { ...prevName, name: true };
    });
  }
  function passwordChangeHandler(event) {
    setName((prev) => {
      return { ...prev, pass: event.target.value };
    });
    setValidInput((prevPass) => {
      return { ...prevPass, pass: true };
    });
  }

  return (
    <Fragment>
      <div className={classes.card}>
        <h1>POS</h1>
        <div className={classes.btn}>
          <Button type="primary">Login</Button>
          <Button style={{ background: "#eb9d0c" }} type="primary">
            Sign Up
          </Button>
        </div>

        <div className={classes.form}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className={classes.input}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Email Address"
                  onChange={nameChangeHandler}
                  value={name.name}
                />
                {!validInput.name && (
                  <p style={{ color: "red" }}>Please enter Email</p>
                )}
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter Password"
                  onChange={passwordChangeHandler}
                  value={name.pass}
                />
                {!validInput.pass && (
                  <p style={{ color: "red" }}>Please enter password</p>
                )}
              </Form.Item>
            </div>

            <div className={classes.para}>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <a>
                  <i>Forget Your Password? </i>
                </a>
              </Form.Item>
            </div>

            <div className={classes.btn2}>
             
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button
                    onClick={submitHandler}
                    type="primary"
                    htmlType="submit"
                    component="a"
                  >
                    Submit
                  </Button>
                </Form.Item>
             
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default App;
