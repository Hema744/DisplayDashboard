import React from "react";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";

const TaskColumn = ({ title, status, tasks }) => {
  return (
    <div className="w-1/3 bg-gray-50 p-3 rounded-lg">
      <h2 className="font-bold mb-2">{title}</h2>
      <AddTaskForm column={status} />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
