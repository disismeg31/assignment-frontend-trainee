import { createContext, useState } from "react";

export const widgetContext = createContext();

function WidgetContextProvider({ children }) {
  const categories = {
    category1: "CSPM Executive Dashboard",
    category2: "CWPP Dashboard",
    category3: "Registary Scan",
  };

  const [categoriesData, setCategoriesData] = useState({
    [categories.category1]: [
      { id: 1, name: "Cloud Accounts", isVisible: true },
      { id: 2, name: "Cloud Account Risk Assesment", isVisible: true },
    ],

    [categories.category2]: [
      { id: 3, name: "Top 5 Namespace Specific Alerts", isVisible: true },
      { id: 4, name: "Workload Alerts", isVisible: true },
    ],

    [categories.category3]: [
      { id: 5, name: "Image Risk Assesment", isVisible: true },
      { id: 6, name: "Image Security Issues", isVisible: true },
    ],
  });

  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(categoriesData);

  const handleAddWidget = (category, widgetToAdd) => {
    let newWidget = {
      id: Date.now(),
      name: widgetToAdd,
      isVisible: true,
    };
    setCategoriesData((c) => ({
      ...c,
      [category]: [...c[category], newWidget],
    }));
    setText("");
  };

  const handleRemoveWidget = (category, id) => {
    setFilteredData((c) => ({
      ...c,
      [category]: [
        ...c[category].map((widget) =>
          widget.id === id ? { ...widget, isVisible: false } : widget
        ),
      ],
    }));
    console.log("handleRemoveWidget")
  };

  const handleSearch = (searchtext) => {
    if (!searchtext.trim()) {
      setFilteredData(categoriesData);
      return;
    }
    const filtered = Object.keys(categoriesData).reduce((acc, category) => {
      const matchedWidgets = categoriesData[category].filter((widget) =>
        widget.name.toLowerCase().includes(searchtext.toLowerCase())
      );

      if (matchedWidgets.length > 0) {
        acc[category] = matchedWidgets;
      }

      return acc;
    }, {});

    setFilteredData(filtered);
  };

  const value = {
    categories,
    categoriesData,
    setCategoriesData,
    handleAddWidget,
    handleRemoveWidget,
    text,
    setText,
    searchText,
    setSearchText,
    handleSearch,
    filteredData
  };
  return (
    <widgetContext.Provider value={value}>{children}</widgetContext.Provider>
  );
}

export default WidgetContextProvider;
