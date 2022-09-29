import { useState, useEffect } from "react";
import Consumers from "../../Contexts/Consumers";
import Create from "./Create";
import axios from 'axios';
import List from "./List";
import Edit from "./Edit";

function Main() {

    const [lastUpdate, setLastUpdate] = useState(Date.now);
    const [createData, setCreateData] = useState(null);
    const [consumers, setConsumers] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [modalData, setModalData] = useState(null);
    const [editData, setEditData] = useState(null);

    const [suppliers, setSuppliers] = useState(null);

  //READ for SELECT
  useEffect(() => {
    //nuskaitau is supplier's duomenis; suppliers perduodu i consumeriu provideri, ir juos pasiimu CREAT'e.jsx
  axios.get('http://localhost:3003/server/suppliers')
  .then(res => {
    setSuppliers(res.data);
  })
  }, []);

  // READ for list
  useEffect(() => {
    axios.get('http://localhost:3003/server/consumers')
        .then(res => {
            setConsumers(res.data);
        })
}, [lastUpdate]);

//CREATE
  useEffect(() => {
  if(null === createData) {
    return;
  }
  console.log(createData)
  axios.post('http://localhost:3003/server/consumers', createData)
        .then(res => {
          setLastUpdate(Date.now());
    }
    );
},[createData])

//DELETE
useEffect(() => {
  if(null === deleteData) {
    return;
  }
  axios.delete('http://localhost:3003/server/consumers/'+ deleteData.id)
        .then(res => {
          setLastUpdate(Date.now());
    }
    );
},[deleteData])

//EDIT
useEffect(() => {
  if(null === editData) {
    return;
  }
  axios.put('http://localhost:3003/server/consumers/'+ editData.id, editData)
        .then(res => {
          setLastUpdate(Date.now());
    }
    );
},[editData])




  return (
    <Consumers.Provider value={{
        setCreateData,
        consumers,
        suppliers,
        setDeleteData,
        modalData, 
        setModalData,
        setEditData

    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
      <Edit />
    </Consumers.Provider>
  );
}
export default Main;
