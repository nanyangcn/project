export interface TodoList {
  title: string;
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