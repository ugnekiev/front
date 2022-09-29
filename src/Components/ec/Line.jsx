import { useContext } from "react";
import Consumers from "../../Contexts/Consumers";


function Line({ consumers }) {

    const{ setDeleteData, setModalData, suppliers } = useContext(Consumers);


    return (
        <li className="list-group-item">
            
            <div className="line">
                <div className="line__content">
                    <div className="line__content__title">
                        {consumers.name} {consumers.surname}
                    </div>
                    <div className="line__content__info">
                        {consumers.countnumber}
                    </div>
                    <div className="line__content__info">
                        {suppliers.find(s => s.id === consumers.supplier_id)?.title}
                    </div>
                </div>
                <div className="line__buttons">
                <button onClick={() => setModalData(consumers)}type="button" className="btn btn-outline-primary">Edit</button>
                <button onClick={() => setDeleteData(consumers)} type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Line;