import { useSelector } from 'react-redux';

import { RootState } from '../state/types';

const Lists: React.FC = () => {
  const todoLists = useSelector((state: RootState) => state.todoLists);

  if  (!todoLists)
    return null;

  return (
    <div>
      <ul>
        {todoLists.map((todolist, i) => (<li key={i}>{todolist.title}</li>))}
      </ul>
    </div>
  );
};

export default Lists;