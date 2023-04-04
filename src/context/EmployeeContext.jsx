import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const EmployeeContext = createContext();

export default function EmployeeContextProvider({ children }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setPeople(res.data);
    };
    fetchUser();
  }, []);

  const deleteUser = (id) => {
    setPeople(people.filter((obj) => obj.id !== id));
  };

  const createUser = (obj) => {
    const newArr = [obj, ...people];
    setPeople(newArr);
  };

  return (
    <EmployeeContext.Provider value={{ people, deleteUser, createUser }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function usePeople() {
  return useContext(EmployeeContext);
}
