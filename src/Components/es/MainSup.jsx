import { useState } from "react";
import Suppliers from "../../Contexts/Suppliers";
import Create from "./Create";

function MainSup() {

    const [createData, setCreaData] = useState(null);



  return (
    <Suppliers.Provider value={{
        setCreaData,
        createData
    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            
          </div>
        </div>
      </div>
    </Suppliers.Provider>
  );
}
export default MainSup;
