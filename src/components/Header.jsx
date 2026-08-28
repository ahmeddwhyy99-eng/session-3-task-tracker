function Header(props) {
  const progress = props.total === 0 ? 0 : (props.completed / props.total) * 100;

  return (
    <header className="app-header">
      <div className="app-header__intro">
        <div className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="m7 12 3 3 7-7" />
          </svg>
        </div>
        <div>
          <p className="eyebrow">Make today count</p>
          <h1>{props.title}</h1>
          <p className="header-copy">Small steps, clearly organized.</p>
        </div>
      </div>
      <div className="progress-summary">
        <div className="progress-summary__labels">
          <span>Today&apos;s progress</span>
          <strong>{props.completed} of {props.total} completed</strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Tasks completed"
          aria-valuemin="0"
          aria-valuemax={props.total}
          aria-valuenow={props.completed}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
