<script>
  import TodoInput from "./TodoInput.svelte";
  import TodoList from "./TodoList.svelte";
  import TodoFilter from "./TodoFilter.svelte";

  let todos = [];
  let filteredTodos = todos;
  let currentFilter = "all";

  const filter = (selectedFilter) => {
    if (selectedFilter === "all") {
      filteredTodos = todos;
    }

    if (selectedFilter === "active") {
      filteredTodos = todos.filter((todo) => todo.isDone === false);
    }

    if (selectedFilter === "done") {
      filteredTodos = todos.filter((todo) => todo.isDone === true);
    }
  };

  const addTodo = (event) => {
    const { todo } = event.detail;

    todos = [...todos, todo];

    filter(currentFilter);
  };

  const removeTodo = (event) => {
    const { id } = event.detail;

    todos = todos.filter((todo) => todo.id !== id);

    filter(currentFilter);
  };

  const setCurrentFilter = (event) => {
    const { selectedFilter } = event.detail;

    currentFilter = selectedFilter;

    filter(selectedFilter);
  };
</script>

<div class="min-h-screen flex flex-col justify-center">
  <div class="relative sm:max-w-xl w-full mx-auto">
    <div
      class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 sm:rounded-xl shadow-lg transform sm:-rotate-6"
    />
    <div class="relative bg-white sm:rounded-xl shadow-lg overflow-hidden z-10">
      <TodoInput on:addTodo={addTodo} />
      <TodoList {filteredTodos} on:removeTodo={removeTodo} />
      <TodoFilter
        {filteredTodos}
        {currentFilter}
        on:setCurrentFilter={setCurrentFilter}
      />
    </div>
  </div>
</div>
