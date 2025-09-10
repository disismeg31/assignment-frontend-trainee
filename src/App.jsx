import WidgetContextProvider from "./context/WidgetContextProvider";
import Dashboard from "./pages/Dashboard";
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
