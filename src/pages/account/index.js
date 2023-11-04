import React from "react";
import { Fragment } from "react";
import { Button, Space, Table, Tag } from "antd";
import { useRouter } from "next/router";
import { useGlobalContext } from "./Context";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Type",
    dataIndex: "Type",
    key: "Type",
  },

  {
    title: "Acc_Holder",
    dataIndex: "Acc_Holder",
    key: "Acc_Holder",
  },
  {
    title: "Acc_Num",
    dataIndex: "Acc_Num",
    key: "Acc_Num",
  },
  {
    title: "Brach_Name",
    dataIndex: "Brach_Name",
    key: "Brach_Name",
  },
  {
    title: "Branch_Code",
    dataIndex: "Branch_Code",
    key: "Branch_Code",
  },
  {
    title: "Branch_Contact_Num",
    dataIndex: "Branch_Contact_Num",
    key: "Branch_Contact_Num",
  },
  {
    title: "Contact_No",
    dataIndex: "Contact_No",
    key: "Contact_No",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "jhon",
    Type: 32,
    address: "New York No. 1 Lake Park",
    Acc_Holder: "John Brown",
    Acc_Num: 3243,
    Brach_Name: "abl",
    Branch_Code: 32,
    Branch_Contact_Num: 321,
    Contact_No: 321,
    Email: "abc@gmail.com",
  },
];

const Index = (props) => {
  const { input, setInput } = useGlobalContext();
  const router = useRouter();
  const nextHandler = () => {
    setInput((prevName, prevNum, prevadd, prevemail, prevopt) => {
      return (
        { ...prevName, name: "" },
        { ...prevNum, contact: "" },
        { ...prevadd, address: "" },
        { ...prevemail, email: "" },
        { ...prevopt, option: "" }
      );
    });

    router.push("/account/Create");
  };
  return (
    <Fragment>
      <Table columns={columns} dataSource={data} />
      <Button onClick={nextHandler}>next</Button>
      <div>
        {input.name} {input.contact} {input.address} {input.email}
        {input.option} {input.holder} {input.acc} {input.branch} {input.code}
        {input.branchNum}
        hello
      </div>
    </Fragment>
  );
};

export default Index;
