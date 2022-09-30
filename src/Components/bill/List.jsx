import { useContext, useState, useEffect } from "react";
import Bills from "../../Contexts/Bills";
import Line from "./Line";

function List() {

  const [supplier, setSupplier] = useState('0');

  const { bills, suppliers, setBills } = useContext(Bills);

  
//pagal supplieri pasidarem filtra, kuris filtruojapagal suplierio id musu sarasa
  useEffect(() => {
    if ('0' === supplier) {
      setBills(b => b?.map(bill => ({ ...bill, show: true })));
  } else {
      setBills(b => b?.map(bill => parseInt(supplier) === bill.sid ? { ...bill, show: true } : { ...bill, show: false }))
  }
  }, [supplier, setBills])

  return (
    <div className="card m-4">
      <h5 className="card-header">Bills List</h5>

      <div className="container">
        <div className="row">
          <div className="col-4 mt-3">
            <label className="form-label">Suppliers Filter</label>
          </div>
          <div className="col-5 mt-2">
            <select className="form-select" value={supplier} onChange={e => setSupplier(e.target.value)}>
              <option value={0}>Show All</option>
              {
                suppliers?.map(s => <option key={s.id} value={s.id}>{s.title}</option>)
              }
            </select>
          </div>
        </div>
      </div>

      <div className="mb-3">
      </div>
      <div className="card-body"></div>
      <ul className="list-group">
        {
          bills?.map(b => b.show ? <Line key={b.id} bill={b} /> : null
          )
        }
      </ul>
    </div>
  );
}
export default List;
