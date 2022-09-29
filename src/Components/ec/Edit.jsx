import { useState, useContext, useEffect } from 'react';
import Consumers from '../../Contexts/Consumers';



function Edit() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [countnumber, setCountnumber] = useState('');
  const [supplier, setSupplier] = useState('0');

  const { setEditData, suppliers, modalData, setModalData } = useContext(Consumers);

  //pasieme suppliers - generuojame <select>


  const edit = () => {
    setEditData({
      name,
      surname,
      countnumber,
      supplier: parseInt(supplier),
      id: modalData.id

    });
    setModalData(null);
  }

  useEffect(() => {
    if (null === modalData) {
      return;
    }
  
    setName(modalData.name);
    setSurname(modalData.surname);
    setCountnumber(modalData.counter_number);
    setSupplier(modalData.supplier_id);

  },[modalData])
  //kada pasikeicia modalData- tada ir loadina

  if (null === modalData) {
    return null;
  }


  return (
    // idesim is bootstarpo
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Consumer</h5>
            <button onClick={() => setModalData(null)} type="button" className="btn-close"></button>
          </div>
          <div className="modal-body"></div>
          <div className="card m-4">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Surname</label>
                <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Counter Number</label>
                <input type="text" className="form-control" value={countnumber} onChange={e => setCountnumber(e.target.value)} />
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
              <button onClick={edit} type="button" className="btn btn-outline-dark">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Edit;
