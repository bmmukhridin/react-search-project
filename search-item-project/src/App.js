import React, { useState } from "react";
import "./index.css";
import { Users } from "./users";
import { Table } from "./components/Table";

//console.log

function App() {
  const [search, setSearch] = useState();
  const searchHandler = function (data) {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(search) ||
        item.last_name.toLowerCase().includes(search) ||
        item.email.toLowerCase().includes(search)
    );
  };

  return (
    <div className="app">
      <input
        className="search"
        type="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table data={searchHandler(Users)} />
    </div>
  );
}

export default App;
