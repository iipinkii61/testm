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

  const updateUser = (id, obj) => {
    const newList = people.map((el) => (el.id === id ? { ...el, ...obj } : el));
    setPeople(newList);
  };

  return (
    <EmployeeContext.Provider
      value={{ people, setPeople, deleteUser, createUser, updateUser }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function usePeople() {
  return useContext(EmployeeContext);
}
