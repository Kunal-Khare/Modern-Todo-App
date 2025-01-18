export function Tabs() {
  // if we have a repeatable list of items, we can use the map function to render them

  const tabs = ["All", "Active", "Completed"];
  return (
    <nav>
      {tabs.map((tab, tabIndex) => {
        return (
          // we need to add a key to the parent element when using map
          <button key={tabIndex}
          className="tab-button">
            <h4>{tab} <span>(0)</span></h4>
          </button>
        );
      })}
    </nav>
  );
}
