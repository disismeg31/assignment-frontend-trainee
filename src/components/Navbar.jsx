import React,{useContext} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { widgetContext } from "../context/widgetContextProvider";
function Navbar() {
  const {handleSearch,searchText,setSearchText} = useContext(widgetContext);
   
  return (
    <div className="flex p-4 h-10 bg-[#ffffff] justify-between items-center">
        <p className="flex justify-center items-center p-4 !text-gray-300 text-sm">
          {" "}
          Home{" "}
          <span>
            <MdKeyboardArrowRight size={20} />
          </span>{" "}
          <span className="!text-[#31318e] font-semibold text-sm">Dashboard V2</span>
        </p>
      <div className="m-2">
        <input 
        value={searchText}
        placeholder="🔍︎ Search anything..."
        className="bg-[#d6ddea] px-3 w-100 border border-[#afc3e6] rounded-md flex justify-center placeholder:text-gray-400" 
        type="text"
        onChange={(e)=>{
          const value = e.target.value;
          setSearchText(value);
          handleSearch(value)
        }}
         />
      </div>
    </div>
  );
}

export default Navbar;
