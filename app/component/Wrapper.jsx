"use client";

import { useState } from "react";

export const Wrapper = ({ allDatas }) => {
  const [selected, setselected] = useState("");
  return (
    <>
      {allDatas?.map((item, index) => (
        <div className="wrapper" onClick={(e)=>{
            setselected(index)
        }}>
          {index}.{item?.title} {index==selected && "selected"}
        </div>
      ))}
    </>
  );
};
