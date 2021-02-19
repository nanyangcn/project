import { useSelector } from 'react-redux';

import { RootState } from '../state/types';
import { TodoList } from '../state/types/todoListsTypes';

interface Props {
  handleUpdateTodoList: ( values: TodoList ) => void
}

const Lists: React.FC<Props> = ({ handleUpdateTodoList }: Props) => {
  const todoLists = useSelector((state: RootState) => state.todoLists);

  if  (!todoLists)
    return null;

  return (
    <div>
      {todoLists.map((todoList) => (
        <div key={todoList.id}>
          <input type="checkbox" checked={todoList.done} onChange={() => {
            handleUpdateTodoList({ ...todoList, done: !todoList.done });
          }}/>
          <label>
            {todoList.done
              ? <del>{todoList.title}</del>
              : todoList.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Lists;