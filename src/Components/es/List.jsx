import { useContext } from "react";
import Suppliers from "../../Contexts/Suppliers";
import Line from "./Line";

function List() {

  const { suppliers } = useContext(Suppliers);

  return (
    <div className="card m-4">
      <h5 className="card-header">Suppliers List</h5>
      <div className="card-body"></div>
      <ul className="list-group">
        {
          suppliers?.map(s => <Line key={s.id} suppliers={s} />
          )
        }
      </ul>
    </div>
  );
}
export default List;
