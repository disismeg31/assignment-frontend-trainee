import { createContext, useState } from "react";

export const widgetContext = createContext();

function WidgetContextProvider({children}) {

  const categories = {
    category1:"CSPM Executive Dashboard",
    category2:"CWPP Dashboard",
    category3:"Registary Scan"
  };
  
   const [categoriesData,setCategoriesData] = useState({
    [categories.category1]:[
          {id:1,name:"Cloud Accounts"},
          {id:2,name:"Cloud Account Risk Assesment"}
        ],
      
    [categories.category2]:[
          {id:3,name:"Top 5 Namespace Specific Alerts"},
          {id:4,name:"Workload Alerts"}
        ],
      
    [categories.category3]:[
          {id:5,name:"Image Risk Assesment"},
          {id:6,name:"Image Security Issues"}
        ]
       
   })

   const handleAddWidget =  (category) => {

   }

   const handleRemoveWidget = (id,category) => {

   }

   const value = {
    categories,
    categoriesData,
    setCategoriesData,
    handleAddWidget,
    handleRemoveWidget
    }
  return (
    <widgetContext.Provider value={value}>
        {children}
    </widgetContext.Provider>
  )
}

export default WidgetContextProvider