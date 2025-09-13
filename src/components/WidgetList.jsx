import Widget from "./Widget"
import { useContext,useState } from "react";
import { widgetContext } from "./../context/WidgetContextProvider";
import WidgetAdd from "./WidgetAdd";
import SideBar from "./SideBar";
function WidgetList() {
  const {categories,categoriesData,filteredData} = useContext(widgetContext);
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const handleSidebarClose = ()=>{
      setIsSidebarOpen(false)
    }
  return (
    <div className="p-6 flex flex-col">

      <div className="flex justify-between items-center my-2">
      <p className="text-md mx-2 font-bold text-black">CNAPP Dashboard</p>
      <button
       onClick={() => setIsSidebarOpen(true)}
       className="bg-[#ffffff] p-2 rounded-md text-gray-500 border-2 border-gray-300 flex hover:cursor-pointer">Add Widget +</button>
      <SideBar open={isSidebarOpen} onClose={handleSidebarClose}/>
      </div>

      <div className="flex flex-col justify-center items-center p-2">
        {Object.values(categories).map((catName,i)=>(
          <h2 className="text-black text-sm font-bold" key={i}>
            {catName}
            <ul className="flex flex-wrap  bg-[#d5dae1] px-2 py-1 rounded-2xl">
              {/* 
               {categoriesData[catName].map((widget)=> widget.isVisible 
               */}
               {filteredData[catName]?.map((widget)=> widget.isVisible 
               && (
                 <li key={widget.id}>
                    <Widget categoryName={catName} widget={widget} />
                  </li>
               )
               )}
               <li>
                <WidgetAdd categoryName={catName}/>
              </li>
            </ul>
          </h2>
        ))}
      </div>
    </div>
  )
}

export default WidgetList