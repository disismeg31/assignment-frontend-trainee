import WidgetContextProvider from "./context/WidgetContextProvider";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar";
import "./App.css";
 
function App() {
  return (
    <>
    <div>
        <WidgetContextProvider>
          <Dashboard />
        </WidgetContextProvider>
      </div>
    </>
  );
}

export default App;
