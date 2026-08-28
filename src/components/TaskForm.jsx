import { useState } from 'react';

function TaskForm(props) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const title = input.trim();
    if (!title) return;
    if (props.onAdd) props.onAdd(title);
    setInput('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task-input">Add a task</label>
      <div className="task-form__control">
        <svg className="task-form__icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
        <input
          id="task-input"
          type="text"
          placeholder="What needs to be done?"
          value={input}
          maxLength="120"
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button type="submit">
        <span>Add task</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </form>
  );
}

export default TaskForm;
