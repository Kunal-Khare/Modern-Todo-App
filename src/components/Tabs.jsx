export function Tabs(props) {
  // if we have a repeatable list of items, we can use the map function to render them

  const { todos } = props;
  const tabs = ["All", "Active", "Completed"];
  return (
    <nav>
      {tabs.map((tab, tabIndex) => {
        const numofTasks =
          tab === "All"
            ? todos.length
            : tab === "Active"
            ? todos.filter((todo) => !todo.isCompleted).length
            : todos.filter((todo) => todo.isCompleted).length;
        return (
          // we need to add a key to the parent element when using map
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span>{numofTasks}</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
