import "./App.css";
import "antd/dist/reset.css";
import { Table, Button, Modal, Input } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
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
            <EditOutlined
              onClick={() => {
                handleEditStudent(record);
              }}
              style={{ marginRight: "20px", color: "green" }}
            />
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

  const handleEditStudent = (record) => {
    setIsEditing(true);
    setEditStudent({ ...record });
  };
  const handledeleteStudent = (record) => {
    isEditing(true);
    Modal.confirm({
      title: "Are You Sure? Once You delete the data you won't restore it.",
      onOk: () => {
        const newStudent = dataSource?.filter(
          (student) => student?.id !== record?.id
        );
        setDataSource(newStudent);
      },
    });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditStudent(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleAddStudent} style={{ marginBottom: "20px" }}>
          Add New Student
        </Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student Info"
          okText="Save"
          open={isEditing}
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editStudent.id) {
                  return editStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editStudent?.name}
            name="name"
            style={{ marginBottom: "16px" }}
            onChange={(e) =>
              setEditStudent((pre) => {
                return { ...pre, name: e.target.value };
              })
            }
          />
          <Input
            value={editStudent?.email}
            name="email"
            style={{ marginBottom: "16px" }}
            onChange={(e) =>
              setEditStudent((pre) => {
                return { ...pre, email: e.target.value };
              })
            }
          />
          <Input
            value={editStudent?.address}
            style={{ marginTop: "16px" }}
            name="address"
            onChange={(e) =>
              setEditStudent((pre) => {
                return { ...pre, address: e.target.value };
              })
            }
          />
        </Modal>
      </header>
    </div>
  );
}

export default App;
