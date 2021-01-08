const Lists: React.FC = () => {
  const lists = ['TODO 1', 'TODO 2'];
  return (
    <div>
      <ul>
        {lists.map((list, i) => (<li key={i}>{list}</li>))}
      </ul>
    </div>
  )
};

export default Lists;