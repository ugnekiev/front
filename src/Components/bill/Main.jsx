import { useState, useEffect } from "react";
import Bills from "../../Contexts/Bills";
import Create from "./Create";
import axios from 'axios';
import List from "./List";


function Main() {

    const [lastUpdate, setLastUpdate] = useState(Date.now);
    const [createData, setCreateData] = useState(null);
    const [bills, setBills] = useState(null);
    const [deleteData, setDeleteData] = useState(null);

    const [suppliers, setSuppliers] = useState(null);
    const [consumers, setConsumers] = useState(null);
    
  // READ for list

  useEffect(() => {
  axios.get('http://localhost:3003/server/bills')
  .then(res => {
    setBills(res.data.map(c => ({...c, show: true})));
    //parodo show savybe, kad filtravima galetume atlikti
  })
  }, [lastUpdate]);

  useEffect(() => {
  axios.get('http://localhost:3003/server/suppliers')
  .then(res => {
    setSuppliers(res.data);
  })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3003/server/consumers')
        .then(res => {
            setConsumers(res.data.map(c => ({...c, show: false})));
            //reiskia nerodom nei vieno konsumerio, nes jie yra dar nepasirinkti
        })
}, []);

//CREATE
  useEffect(() => {
  if(null === createData) {
    return;
  }
  axios.post('http://localhost:3003/server/bills', createData)
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
  axios.delete('http://localhost:3003/server/bills/'+ deleteData.id)
        .then(res => {
          setLastUpdate(Date.now());
    }
    );
},[deleteData])



  return (
    <Bills.Provider value={{
        setCreateData,
        bills,
        setBills,
        setDeleteData, 
        consumers,
        setConsumers,
        suppliers, 
        setSuppliers
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
    </Bills.Provider>
  );
}
export default Main;
