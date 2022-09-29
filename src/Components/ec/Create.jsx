import { useContext } from 'react';
import { useState } from 'react';
import Consumers from '../../Contexts/Consumers';



function Create() {

const [name, setName] = useState ('');
const [surname, setSurname] = useState ('');
const [countnumber, setCountnumber] = useState('');
const [supplier, setSupplier] = useState('0');

const { setCreateData, suppliers } = useContext(Consumers);

//pasieme suppliers - generuojame <select>


const add = () => {
  setCreateData({
    name,
    surname,
    countnumber,
    supplier: parseInt(supplier)
    
  });

  setName('');
  setSurname('');
  setCountnumber('');
  setSupplier(0);
  
}


  return (
    // idesim is bootstarpo
    <div className="card m-4">
      <h5 className="card-header">New Consumer</h5>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Surname</label>
          <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)}/>
        </div>
        <div className="mb-3">
        <label className="form-label">Counter Number</label>
        <input type="text" className="form-control" value={countnumber} onChange={e => setCountnumber(e.target.value)}/>
        </div>
        <div className="mb-3">
                    <label className="form-label">Suppliers</label>
                    <select className="form-select" value={supplier} onChange={e => setSupplier(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            suppliers?.map(s => <option key={s.id} value={s.id}>{s.title}</option>)
                        }
                    </select>
                </div>
        <button onClick={add} type="button" className="btn btn-outline-dark">Add</button>
      </div>
    </div>
  );
        }

export default Create;
