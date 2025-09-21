import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTaskForm = ({ column }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;

    dispatch(
      addTask({
        id: Date.now(),
        title,
        desc,
        category: "Work",
        priority: "Medium",
        dueDate: "2025-09-25",
        status: column,
      })
    );

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-2 rounded mb-3">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-1 p-1 border rounded"
      />
      <textarea
        placeholder="Task description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full mb-1 p-1 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
