import React,{useContext} from "react";
import { RxCross2 } from "react-icons/rx";
import reactDom from 'react-dom';
import {widgetContext} from './../context/WidgetContextProvider'
function Modal({categoryName,onClose,open}) {
  const {handleAddWidget,text,setText,categoriesData} = useContext(widgetContext);
   
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#eeeeee",
    padding: "30px",
    zIndex: 1000,
    borderRadius:'15px',
  };

  const OVERLAY_PORTAL = {
    position:'fixed',
    top:0,
    right:0,
    left:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.1)',
    zIndex:1000
  }
  
  if (!open) return null;

  console.log(categoriesData)
  return reactDom.createPortal(
    <>
    <div style={OVERLAY_PORTAL}>
      <div style={MODAL_STYLES} className="flex  flex-col">
        <button
          onClick={onClose}
          className="flex justify-end border-none hover:cursor-pointer"
          >
          <RxCross2 className="text-gray-400" size={19} />
        </button>
        <label className="flex flex-col mb-2 font-semibold text-black text-sm"> Enter widget name
          <input 
          placeholder="widget name here...."
          value={text}
          className="bg-white px-2 py-1 mt-1 h-8 rounded-md font-normal outline-0" 
          type="text" 
          onChange={(e)=>{setText(e.target.value)}}
          />
        </label>
        <button onClick={()=>handleAddWidget(categoryName,text)} className="bg-[#31318e] w-full px-2 py-1 h-8 rounded-md font-normal text-white border-gray-300 flex justify-center items-center hover:cursor-pointer">Confirm</button>
      </div>
    </div>
    </>,
    document.getElementById('portal')

  );
}

export default Modal;
