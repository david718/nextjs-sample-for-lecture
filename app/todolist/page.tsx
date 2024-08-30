import ErrorBoundary from "../components/ErrorBoundary";
import TodoListContainer from "../components/TodoListContainer";

export default function Index() {
  return (
    <ErrorBoundary>
      <TodoListContainer />
    </ErrorBoundary>
  );
}
