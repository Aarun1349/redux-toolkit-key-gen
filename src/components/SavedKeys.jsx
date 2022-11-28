import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteKey, changeName } from "../actions/actions";
export default function SavedKeys() {
  const keyPairs = useSelector((state) => state.keyPairs.savedKeys);
  const dispatch = useDispatch();
 const [keyName,setKeyName] = useState('')
  const handleDelete = (e, index) => {
    e.preventDefault();
    dispatch(deleteKey(index));
  };

  return (
    <div className="container">
      {keyPairs.length === 0 ? (
        <div className="row" style={{ marginTop: "3rem" }}>
          <div className="col-md-12">
            <h1>NO SAVED KEYS</h1>
          </div>
        </div>
      ) : (
        keyPairs.map((elem, ind) => {
          const { name, values } = elem;
          return (
            <div className="row" key={ind} style={{ marginTop: "3rem" }}>
              <div className="col-md-12">
                {name.length===0?<input
                  className="generated-input2"
                  onChange={(e)=>{
                    e.preventDefault();
                    setKeyName(e.target.value)
                    
                  }}
                  onKeyPress={(e)=>{
                    if(e.key ==='Enter'){
                      let payload={index:ind,name:keyName}
                      dispatch(changeName(payload))
                    }
                  }}
                  value={keyName}
                ></input>:<input
                className="generated-input2"
                disabled
                value={name}
              ></input>}
                
                {values.map((val, id) => {
                  return (
                    <input
                      className="generated-input2"
                      disabled
                      key={id}
                      value={val}
                    ></input>
                  );
                })}
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    handleDelete(e, ind);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
