import { useState } from 'react';
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EmptyState from "./components/EmptyState";

function TaskManager() {
  const [tasks, setTasks] = useState([

  ]);

  function addTask(title) {
    const newTask = { id: crypto.randomUUID(), title, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="app-shell">
      <div className="background-orb background-orb--top" />
      <div className="background-orb background-orb--bottom" />
      <section className="task-manager" aria-label="Task manager">
        <Header
          title="Task Manager"
          total={tasks.length}
          completed={completedCount}
        />
        <div className="task-manager__body">
          <TaskForm onAdd={addTask} />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </main>
  );
}

export default TaskManager;
