import Widget from "./Widget"

function WidgetList() {
  return (
    <div className="p-6 flex justify-between items-center">
      <p>CNAPP Dashboard</p>
      <button className="bg-[#ffffff] p-2 rounded-md text-gray-500 border-2 border-gray-300 flex hover:cursor-pointer">Add Widget +</button>
    </div>
  )
}

export default WidgetList