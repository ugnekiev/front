import { useState, useContext, useEffect } from 'react';
import Suppliers from '../../Contexts/Suppliers';



function Edit() {

    const {modalData, setModalData, setEditData} = useContext(Suppliers);

    const [title, setTitle] = useState ('');
    const [price, setPrice] = useState ('');

    useEffect (() => {
      if (null === modalData) {
        return;
    }
      setTitle(modalData.title);
      setPrice(modalData.price);

    }, [modalData])

    const save = () => {
      setEditData({
        title,
        price: parseFloat(price),
        id: modalData.id

      })
      //kad po save uzsidarytu modalas
      setModalData(null); 

    }
    console.log(modalData);

    if (null === modalData) {
        return null;
    }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Supplier</h5>
            <button onClick={() => setModalData(null)} type="button"className="btn-close"></button>
          </div>
          <div className="modal-body">
            {/* cia isicopinam CREATE struktura */}
            <div className="card m-4">
      
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Supplier Title</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Supplier Price</label>
          <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>
      </div>
    </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => setModalData(null)} type="button" className="btn btn-secondary">Close</button>
            <button onClick={save} type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
