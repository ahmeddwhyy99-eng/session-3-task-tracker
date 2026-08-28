function TaskItem(props) {
  const { task, onToggle, onDelete } = props;

  return (
    <li className={`task-item${task.completed ? ' task-item--completed' : ''}`}>
      <label className="task-item__check">
        <input
          type="checkbox"
          checked={task.completed}
          aria-label={task.completed ? `Mark ${task.title} active` : `Mark ${task.title} complete`}
          onChange={() => onToggle(task.id)}
        />
        <span className="checkbox-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="m7 12 3 3 7-7" /></svg>
        </span>
        <span className="task-item__title">{task.title}</span>
      </label>
      <button
        className="delete-button"
        type="button"
        aria-label={`Delete ${task.title}`}
        onClick={() => onDelete(task.id)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5" />
        </svg>
      </button>
    </li>
  );
}

export default TaskItem;
