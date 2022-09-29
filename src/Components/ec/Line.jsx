import { useContext } from "react";
import Consumers from "../../Contexts/Consumers";


function Line({ consumers }) {

    const{ setDeleteData, setModalData } = useContext(Consumers);

console.log(consumers)
    return (
        <li className="list-group-item">
            
            <div className="line">
                <div className="line__content">
                    <div className="line__content__title">{consumers.title}</div>
                    <div className="line__content__info">{consumers.price} eur/kWh</div>
                </div>
                <div className="line__buttons">
                <button onClick={() => setModalData(consumers)}type="button" class="btn btn-outline-primary">Edit</button>
                <button onClick={() => setDeleteData(consumers)} type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Line;