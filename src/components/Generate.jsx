import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addKey } from "../actions/actions";
import generateKeys from "../module/KeyGenerator";
function Generate() {
  const [key, setKey] = useState([]);
  const [duplicate, setDuplicate] = useState(false);
  const keyPairs = useSelector((state) => state.keyPairs);
  const dispatch = useDispatch();

  useEffect(() => {
    setKey(generateKeys());
  }, []);

  const checkDuplicateKeys = (e, key, keyPairs) => {
    e.preventDefault();
    keyPairs.savedKeys.length > 0
      ? keyPairs.savedKeys.forEach((element) =>
          JSON.stringify(key) === JSON.stringify(element)
            ? setDuplicate(true)
            : setDuplicate(false)
        )
      : setDuplicate(false);
  };

  const handleAddKey = (e) => {
    e.preventDefault();
    setDuplicate(false);
    if (keyPairs.savedKeys.length > 0) {
      checkDuplicateKeys(e, key, keyPairs);
      console.log("duplicate", duplicate);
      if (duplicate) {
        alert("Duplicate key");
      } else {
        dispatch(addKey(key));
      }
    } else {
      dispatch(addKey(key));
    }
  };
  const handleGenerateKey = (e) => {
    e.preventDefault();
    setKey(generateKeys());
  };

  return (
    <div className="container">
      <div className="row" style={{ margin: "3rem" }}>
        <div className="col-md-12">
          {key.length === 0 ? (
            <h2>No Key is generated</h2>
          ) : (
            key.map((elm, id) => {
              return (
                <input
                  className="generated-input"
                  disabled
                  key={id}
                  value={elm}
                ></input>
              );
            })
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              handleGenerateKey(e);
            }}
          >
            Generate Key
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-success"
            onClick={(e) => {
              handleAddKey(e, key, keyPairs);
            }}
          >
            Save Key
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Generate;
