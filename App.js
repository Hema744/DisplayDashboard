import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskColumn from "./components/TaskColumn";

function App() {
  const tasks = useSelector((state) => state.tasks.tasks);

  const [filter, setFilter] = useState({
    category: "",
    priority: "",
  });

  const filteredTasks = tasks.filter((task) => {
    return (
      (filter.category ? task.category === filter.category : true) &&
      (filter.priority ? task.priority === filter.priority : true)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kanban Dashboard</h1>

      {/* Filter Bar */}
      <div className="flex gap-4 mb-6">
        <select
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>

        <select
          onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="flex gap-6">
        <TaskColumn
          title="To Do"
          status="todo"
          tasks={filteredTasks.filter((t) => t.status === "todo")}
        />
        <TaskColumn
          title="In Progress"
          status="inprogress"
          tasks={filteredTasks.filter((t) => t.status === "inprogress")}
        />
        <TaskColumn
          title="Done"
          status="done"
          tasks={filteredTasks.filter((t) => t.status === "done")}
        />
      </div>
    </div>
  );
}

export default App;
