import Widget from "./Widget"
import { useContext } from "react";
import { widgetContext } from "../context/widgetContextProvider";
import WidgetAdd from "./WidgetAdd";
function WidgetList() {
  const {categories,categoriesData,handleAddWidget} = useContext(widgetContext);
  return (
    <div className="p-6 flex flex-col">

      <div className="flex justify-between items-center my-2">
      <p className="text-md mx-2 font-bold text-black">CNAPP Dashboard</p>
      <button className="bg-[#ffffff] p-2 rounded-md text-gray-500 border-2 border-gray-300 flex hover:cursor-pointer">Add Widget +</button>
      </div>

      <div className="flex flex-col justify-center items-center p-2">
        {Object.values(categories).map((catName,i)=>(
          <h2 className="text-black text-sm font-bold" key={i}>
            {catName}
            <ul className="flex flex-wrap bg-[#d5dae1] px-2 py-1 rounded-2xl">
               {categoriesData[catName].map((widget)=>(
                 <li key={widget.id}>
                    <Widget widget={widget} />
                  </li>
               ))}
               <li>
                <WidgetAdd onAdd={() => handleAddWidget(catName)} />
              </li>
            </ul>
          </h2>
        ))}
      </div>
    </div>
  )
}

export default WidgetList