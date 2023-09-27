function List() {
  let list = ["React", "Vite", "Node.js", "Javascript"];
  return (
    <>
      <ul>
        {list.map((listItem) => {
          return <li key={listItem}>{listItem}</li>;
        })}
      </ul>
    </>
  );
}

export default List;
