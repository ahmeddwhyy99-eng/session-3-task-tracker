import TaskItem from './TaskItem';

function TaskList(props) {
  const activeCount = props.tasks.filter((task) => !task.completed).length;

  return (
    <section className="task-list" aria-labelledby="task-list-heading">
      <div className="task-list__header">
        <h2 id="task-list-heading">Today</h2>
        <span className="task-count">
          {activeCount} {activeCount === 1 ? 'task' : 'tasks'} left
        </span>
      </div>
      <ul className="task-list__items">
        {props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={props.onToggle}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
