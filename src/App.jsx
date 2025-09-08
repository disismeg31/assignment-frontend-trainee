import { useState } from 'react';
import WidgetContextProvider  from './context/WidgetContextProvider';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WidgetContextProvider>
        <Dashboard/>
      <h1 className='bg-[#BADA55]'>Vite + React</h1>
         </WidgetContextProvider>
      </div>
       
    </>
  )
}

export default App
