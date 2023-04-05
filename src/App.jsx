import { useState } from "react";
import EditModal from "./components/EditModal";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { usePeople } from "./context/EmployeeContext";

export default function App() {
  const { people, deleteUser } = usePeople();
  const [person, setPerson] = useState({});

  return (
    <div>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-toggle="modal"
        data-te-target="#Modal"
      >
        Add new employee
      </button>
      <Search />

      <Modal />
      <EditModal person={person} />

      {people.map((obj) => (
        <div
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow "
          key={obj.id}
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {obj.name}
          </h5>
          <p className="text-gray-700 dark:text-gray-400">{obj.email}</p>
          <i
            className="fa-solid fa-trash"
            onClick={(id) => deleteUser(obj.id)}
          />
          <i
            className="fa-solid fa-pen-to-square"
            data-te-toggle="modal"
            data-te-target="#editModal"
            onClick={() => setPerson(obj)}
          />
        </div>
      ))}
    </div>
  );
}
