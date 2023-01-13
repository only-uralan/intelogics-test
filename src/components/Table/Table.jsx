import React from "react";
import { Table } from "antd";
import "./Table.css";

const columns = [
  {
    title: "Номер заявки",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Координаты ОТ lat",
    dataIndex: "latFrom",
    key: "latFrom",
  },
  {
    title: "Координаты ОТ lng",
    dataIndex: "lngFrom",
    key: "lngFrom",
  },
  {
    title: "Координаты ДО lng",
    dataIndex: "latTo",
    key: "latTo",
  },
  {
    title: "Координаты ДО lng",
    dataIndex: "lngTo",
    key: "lngTo",
  },
];
const TableComponent = ({ apps, tableClick, dispatch }) => {
  return (
    <div className="table">
      <Table
        dataSource={apps}
        columns={columns}
        rowSelection={{
          type: "radio",
          onSelect: (record) => {
            dispatch(tableClick(record));
          },
        }}
      />
    </div>
  );
};

export default TableComponent;
