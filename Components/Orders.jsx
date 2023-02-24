import React, { useState } from "react";
import * as XLSX from "xlsx";

const Orders = () => {
  const [json, setJson] = useState("");
  const [headers, setHeaders] = useState([]);

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log(json[0]);
        setJson(JSON);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </form>
      <div></div>
    </div>
  );
};

export default Orders;
