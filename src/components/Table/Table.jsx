import React from "react";
import { Table } from "antd";
import "./Table.scss";
import { columns } from "./Columns";

const TableComponent = ({ apps, getMarkerCoordinates, dispatch }) => {
  return (
    <div className="table">
      <Table
        dataSource={apps}
        columns={columns}
        pagination={false}
        rowSelection={{
          type: "radio",
          onSelect: (record) => {
            dispatch(getMarkerCoordinates(record));
          },
        }}
      />
    </div>
  );
};

export default TableComponent;
