function EmptyState() {
  return (
    <section className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="m7 12 3 3 7-7" /></svg>
      </div>
      <h2>Your list is clear</h2>
      <p>Add a new task above when inspiration strikes.</p>
    </section>
  );
}

export default EmptyState;
