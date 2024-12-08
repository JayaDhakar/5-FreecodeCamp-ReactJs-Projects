//  Single selection or multiple selection

import { useState } from "react";
import data from "./data"; // we will not use {data}
//  as it is "export default ->data" instead of "export const ->{data}"
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  
  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);
  return (
    <>
      <div className=" flex justify-center font-bold text-2xl p-3 mb-2 bg-gray-800 text-white">
        Single or MultiSelection{" "}
      </div>
      <div className="wrapper  ">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="px-2 py-1 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold"
        >
          Enable multi selection
        </button>
        <div className="accordian w-[500px]">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item ">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title "
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id || multiple.indexOf(dataItem.id !==-1) ? (
                  <div className="content ">{dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>no data found!</div>
          )}
        </div>
      </div>
    </>
  );
}
