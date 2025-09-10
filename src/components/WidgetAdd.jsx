import React from "react";

function WidgetAdd({ onAdd }) {
  return (
    <div className="flex flex-col bg-[#fff] p-3 w-95 h-45 m-2 rounded-xl">
      <div className="flex flex-1 justify-center items-center">
        <button 
        onClick={()=>onAdd}
        className="bg-[#ffffff] px-2 py-1 rounded-md font-normal text-gray-500 border-2 border-gray-300 flex items-center  h-8 hover:cursor-pointer">
          Add Widget +
        </button>
      </div>
    </div>
  );
}

export default WidgetAdd;
