import { createContext } from "react";

export const widgetContext = createContext();

function WidgetContextProvider({children}) {

   const value = {

    }
  return (
    <widgetContext.Provider value={value}>
        {children}
    </widgetContext.Provider>
  )
}

export default WidgetContextProvider