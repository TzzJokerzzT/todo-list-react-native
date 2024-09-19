import React, { createContext, useState } from "react";
import { ContextProps, MainProps, ProviderProps } from "../types/types.env";
import { useLocalStorage } from "../hooks/useLocalStorage";
import uuid from "react-native-uuid";

export const TodoListContext = createContext<ContextProps | undefined>(
  undefined
);

export const TodoListProvider = ({ children }: ProviderProps) => {
  //States
  const [formData, setFormData] = useLocalStorage<MainProps>("data", {
    status: "",
    task: "",
    description: "",
    type: "",
    id: "",
  });
  const [tasks, setTasks] = useLocalStorage<MainProps[]>("task", []);
  //Handler Functions
  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      formData.task == "" ||
      formData.type == "" ||
      formData.description == ""
    )
      return;
    setTasks([...tasks, { ...formData, id: uuid.v4() as string }]);
    setFormData({ status: "", description: "", task: "", type: "", id: "" });
  };

  const handleDelete = (id: string | number) => {
    setTasks(tasks.filter((tasks: MainProps) => tasks.id != id));
  };

  //Functions
  const tasksSetter = (
    arr: MainProps[],
    id: string | number,
    items: string
  ): void => {
    setTasks(
      arr.map((task) => (task.id === id ? { ...task, status: items } : task))
    );
  };

  //Variables
  const taskStatus = ["Pending", "Working", "Finish"];
  const pending = tasks.filter((task) => task.status === "Pending").length;
  const working = tasks.filter((task) => task.status === "Working").length;
  const finish = tasks.filter((task) => task.status === "Finish").length;

  return (
    <TodoListContext.Provider
      value={{
        formData,
        tasks,
        onChange: handleChange,
        onSubmit: handleSubmit,
        onDelete: handleDelete,
        tasksSetter,
        taskStatus,
        pending,
        working,
        finish,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
