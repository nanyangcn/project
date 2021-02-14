export interface TodoList {
  id?: string;
  title: string;
  done: boolean;
}

export type TodoListsAction =
  | {
    type: 'CREATE';
    data: TodoList;
  }
  | {
    type: 'INITIALIZE';
    data: TodoList[];
  }
  | {
    type: 'UPDATE';
    data: TodoList;
  }