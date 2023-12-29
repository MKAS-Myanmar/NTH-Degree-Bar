import React from "react";

const MenuItem = ({ menuItem }) => {
  return (
    <div className="basis-[23%] border border-1 border-gray-600  rounded-md">
      <div className="w-full h-[13rem] rounded-md overflow-hidden">
        <img src={menuItem?.image} className=" relative w-full h-full object-cover rounded-md" alt="" />
      </div>
      <h1 className="capitalize mb-4">{menuItem.name}</h1>
      <p>{menuItem?.price} ks</p>
    </div>
  );
};

export default MenuItem;
