import React, { createContext, useContext, useState, useEffect } from "react";

type ViewedContextType = {
  viewedList: string[];
  addViewed: (id: string) => void;
};

const ViewedContext = createContext<ViewedContextType>({
  viewedList: [],
  addViewed: () => {},
});

export const ViewedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewedList, setViewedList] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("viewedProducts");
    if (stored) {
      setViewedList(JSON.parse(stored));
    }
  }, []);

  const addViewed = (id: string) => {
    if (!viewedList.includes(id)) {
      const updatedList = [...viewedList, id];
      setViewedList(updatedList);
      localStorage.setItem("viewedProducts", JSON.stringify(updatedList));
    }
  };

  return (
    <ViewedContext.Provider value={{ viewedList, addViewed }}>
      {children}
    </ViewedContext.Provider>
  );
};

export const useViewed = () => useContext(ViewedContext);
