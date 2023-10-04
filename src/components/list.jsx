import "./list.css";

function List() {
  let list = ["React", "Vite", "Node.js", "Javascript"];
  return (
    <div className="list">
      <ul>
        {list.map((listItem) => {
          return <li key={listItem}>{listItem}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
