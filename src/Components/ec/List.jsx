import { useContext } from "react";
import Consumers from "../../Contexts/Consumers";
import Line from "./Line";

function List() {

  const { consumers } = useContext(Consumers);

  return (
    <div className="card m-4">
      <h5 className="card-header">Consumers List</h5>
      <div className="card-body"></div>
      <ul className="list-group">
        {
          consumers?.map(c => <Line key={c.id} consumers={c} />
          )
        }
      </ul>
    </div>
  );
}
export default List;
