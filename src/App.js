import "./App.css";
import "antd/dist/reset.css";
import { Table, Button } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function App() {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Kabir",
      email: "kabir@gmail.com",
      address: "Adabor",
    },
    {
      id: 2,
      name: "Rayhan",
      email: "rayhan@gmail.com",
      address: "Banani",
    },
    {
      id: 3,
      name: "Rana",
      email: "rana@gmail.com",
      address: "Mirpur",
    },
    {
      id: 4,
      name: "Horse",
      email: "horse@gmail.com",
      address: "Dhanmondi",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined style={{ marginRight: "20px", color: "green" }} />
            <DeleteOutlined
              onClick={() => {
                handledeleteStudent(record);
              }}
              style={{ color: "red" }}
            />
          </>
        );
      },
    },
  ];
  const handleAddStudent = () => {
    const randomNum = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNum,
      name: "Name" + randomNum,
      email: randomNum + "@gmail.com",
      address: randomNum + "Banani",
    };
    setDataSource((prev) => {
      return [...prev, newStudent];
    });
  };
  const handleEditStudent = () => {};
  const handledeleteStudent = (record) => {
    const newStudent = dataSource?.filter(
      (student) => student?.id !== record?.id
    );
    setDataSource(newStudent);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleAddStudent} style={{ marginBottom: "20px" }}>
          Add New Student
        </Button>
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
}

export default App;
