import { useState } from "react";
import Modal from "./components/Modal";
import { usePeople } from "./context/EmployeeContext";

export default function App() {
  const { people, deleteUser } = usePeople();

  console.log(people);

  return (
    <div>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-toggle="modal"
        data-te-target="#Modal"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Add new employee
      </button>

      <Modal />

      {people.map((person) => (
        <div
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          key={person.id}
        >
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {person.name}
          </h5>
          <p className="text-gray-700 dark:text-gray-400">{person.email}</p>
          <i
            className="fa-solid fa-trash"
            onClick={(id) => deleteUser(person.id)}
          />
        </div>
      ))}
    </div>
  );
}
