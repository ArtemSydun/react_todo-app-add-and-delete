import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
  tempTodo?: Todo | null;
  onDeleteTodo?: (todoId: number) => void;
  isAdding?: boolean;
  processingTodoIds: number[],
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo = null,
  onDeleteTodo,
  isAdding,
  processingTodoIds,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        processingTodoIds={processingTodoIds}
      />
    ))}

    {tempTodo && (
      <TodoItem
        key={tempTodo.id}
        todo={tempTodo}
        isAdding={isAdding}
        processingTodoIds={processingTodoIds}
      />
    )}
  </section>
);
