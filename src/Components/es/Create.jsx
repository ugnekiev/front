
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import Suppliers from '../../Contexts/Suppliers';
import axios from 'axios';


function Create() {

const [title, setTitle] = useState ('');
const [price, setPrice] = useState ('');

const {createData, setCreateData} = useContext(Suppliers);


const add = () => {
  setCreateData({
    title,
    price: parseFloat(price),
    
  });
  setTitle('');
  setPrice('');
  
}

useEffect(() => {
  if(null === createData) {
    return;
  }
  axios.post('http://localhost:3003/server/suppliers', createData)
        .then(res => {

    }
    )
},[createData])

  return (
    // idesim is bootstarpo
    <div className="card m-4">
      <h5 className="card-header">New Supplier</h5>
      <div className="card-body">
        <div class="mb-3">
          <label className="form-label">Supplier Title</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div class="mb-3">
        <label className="form-label">Price per kWh</label>
        <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>
        <button onClick={add} type="button" className="btn btn-outline-dark">Add</button>
      </div>
    </div>
  );
        }

export default Create;
