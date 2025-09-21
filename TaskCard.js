import React from "react";
import { useDispatch } from "react-redux";
import { moveTask, deleteTask } from "../redux/tasksSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow rounded p-3 mb-3">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-500">{task.desc}</p>
      <p className="text-xs mt-1 text-gray-400">
        {task.category} | {task.priority} | {task.dueDate}
      </p>

      <select
        value={task.status}
        onChange={(e) =>
          dispatch(moveTask({ id: task.id, status: e.target.value }))
        }
        className="mt-2 border rounded p-1 w-full"
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="mt-2 bg-red-500 text-white px-2 py-1 rounded w-full"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
