import {useState}from "react";
import Modal from "./Modal";

function WidgetAdd() {
  const [isOpen,setIsOpen] = useState(false);
  const handleCloseModal = ()=>{
    setIsOpen(false)
  }
  return (
    <div className="flex flex-col bg-[#fff] p-3 w-95 h-45 m-2 rounded-xl">
      <div className="flex flex-1 justify-center items-center">
        <button 
        onClick={()=>setIsOpen(true)}
        className="bg-[#ffffff] px-2 py-1 rounded-md font-normal text-gray-500 border-2 border-gray-300 flex items-center  h-8 hover:cursor-pointer">
          Add Widget +
        </button>
        <Modal onClose={handleCloseModal} open={isOpen}></Modal>
      </div>
    </div>
  );
}

export default WidgetAdd;
