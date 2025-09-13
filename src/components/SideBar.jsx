import React, { useEffect, useState, useRef, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import reactDom from "react-dom";
import { widgetContext } from "../context/WidgetContextProvider";

function Slider({ position, width }) {
  return (
    <span
      className="absolute bottom-0 h-[2px] bg-[#31318e] transition-all duration-300"
      style={{
        width: `${width}px`,
        left: `${position}px`,
      }}
    />
  );
}

function SideBar({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("CSPM");
  const [sliderStyle, setSliderStyle] = useState({ position: 0, width: 0 });
  const [localVisibility, setLocalVisibility] = useState({});
  const { filteredData, handleShowWidget } =
    useContext(widgetContext);

  const tabCategories = {
    CSPM: ["CSPM Executive Dashboard"],
    CWPP: ["CWPP Dashboard"],
  };
  // refs for buttons
  const linksRef = {
    CSPM: useRef(null),
    CWPP: useRef(null),
  };

  useEffect(() => {
    if (open) {
      const initial = {};
      Object.keys(filteredData).forEach((catName) => {
        filteredData[catName]?.forEach((widget) => {
          initial[widget.id] = widget.isVisible;
        });
      });
      setLocalVisibility(initial);
    }
  }, [open, filteredData]);

  // update slider when activeTab changes
  useEffect(() => {
    const el = linksRef[activeTab]?.current;
    if (el) {
      setSliderStyle({
        position: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  const MODAL_STYLES = {
    position: "fixed",
    top: 0,
    // left: 0,
    right: 0,
    bottom: 0,
    // transform: "translate(0%,0%)",
    backgroundColor: "#eeeeee",
    zIndex: 1000,
    transform: open ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  const OVERLAY_PORTAL = {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    // backgroundColor: "rgba(0,0,0,.1)",
    zIndex: 1000,
    backgroundColor: open ? "rgba(0,0,0,.1)" : "transparent",
    transition: "background-color 0.3s",
  };
  console.log(
    "SideBar rendered. open:",
    open,
    "filteredData keys:",
    Object.keys(filteredData)
  );
  //   if (!open) return null;
  return reactDom.createPortal(
    <>
      <div style={{ ...OVERLAY_PORTAL, pointerEvents: open ? "auto" : "none" }}>
        <div
          style={MODAL_STYLES}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col bg-[#fff] w-[50%] h-screen"
        >
          <div className="flex justify-between bg-[#31318e] p-3">
            <p className="flex text-start font-semibold text-[white] text-sm ">
              New widget
            </p>
            <button
              onClick={onClose}
              // onClick={()=>handleRemoveWidget(categoryName,widget.id)}
              className="flex text-end hover:cursor-pointer"
            >
              <RxCross2 className="text-[#fff]" size={19} />
            </button>
          </div>
          <div className="flex flex-1 flex-col p-3 ">
            <p className="!text-black mt-3">
              Personalise your dashboard by adding the following widget
            </p>

            <nav className="relative border-b-2 border-gray-300 p-3">
              <button
                ref={linksRef.CSPM}
                onClick={() => setActiveTab("CSPM")}
                className={`py-1 px-1 ${
                  activeTab === "CSPM" ? "text-[#31318e]" : "text-gray-400"
                }`}
              >
                CSPM
              </button>

              <button
                ref={linksRef.CWPP}
                onClick={() => setActiveTab("CWPP")}
                className={`py-1 px-1 ${
                  activeTab === "CWPP" ? "text-[#31318e]" : "text-gray-400"
                }`}
              >
                CWPP
              </button>
              {/* Blue sliding underline */}
              <Slider
                position={sliderStyle.position}
                width={sliderStyle.width}
              />
            </nav>

            <div className="p-4">
              {tabCategories[activeTab].map((catName, i) => (
                <h2 className="text-black text-sm font-bold" key={i}>
                  {catName}
                  <ul className="flex flex-col flex-wrap py-1 rounded-2xl">
                    {filteredData[catName]?.map(
                      (widget) =>
                        widget && (
                          <li
                            className="border-1 border-gray-300 p-2 my-1"
                            key={widget.id}
                          >
                            <input
                              className="checked:bg-[#15154c] checked:border-[#15154c]  cursor-pointer"
                              style={{ accentColor: "#31318e" }}
                              type="checkbox"
                              checked={localVisibility[widget.id] || false}
                              onChange={() =>
                                setLocalVisibility((prev) => ({
                                  ...prev,
                                  [widget.id]: !prev[widget.id],
                                }))
                              }
                            />{" "}
                            {widget.name}
                          </li>
                        )
                    )}
                  </ul>
                </h2>
              ))}

              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="border-1 border-[#15154c] rounded-md px-6 py-1 mx-1 cursor-pointer"
                >
                  Cancel
                </button>
                {/* we parse the widget id beacuse its string and our stored id is a value */}
                <button
                  onClick={() => {
                    Object.keys(localVisibility).forEach((widgetId) => {
                      const catName = Object.keys(filteredData).find((cat) =>
                        filteredData[cat].some((w) => w.id === parseInt(widgetId))
                      );
                      if (catName) {
                        handleShowWidget(
                          catName,
                          parseInt(widgetId),
                          localVisibility[widgetId]
                        );
                      }
                    });
                    onClose();
                  }}
                  className="bg-[#15154c] text-[#fff] rounded-md px-6 py-1 mx-1 cursor-pointer"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default SideBar;
