import { useContext } from "react";
import Suppliers from "../../Contexts/Suppliers";


function Line({ suppliers }) {

    const{ setDeleteData, setModalData } = useContext(Suppliers);

console.log(suppliers)
    return (
        <li className="list-group-item">
            
            <div className="line">
                <div className="line__content">
                    <div className="line__content__title">{suppliers.title}</div>
                    <div className="line__content__info">{suppliers.price} eur/kWh</div>
                </div>
                <div className="line__buttons">
                <button onClick={() => setModalData(suppliers)}type="button" class="btn btn-outline-primary">Edit</button>
                <button onClick={() => setDeleteData(suppliers)} type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Line;