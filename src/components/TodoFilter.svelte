<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let filteredTodos = [];
  export let currentFilter = [];

  const setCurrentFilter = (selectedFilter) => {
    dispatch("setCurrentFilter", {
      selectedFilter,
    });
  };
</script>

<div class="flex justify-between px-4 py-6 border-t">
  <div class="text-sm">
    <span class="font-medium">{filteredTodos.length}</span> todos
  </div>
  <div class="flex items-center space-x-4">
    <button
      on:click={() => setCurrentFilter("all")}
      class:bg-cyan-100={currentFilter === "all"}
      class:text-cyan-700={currentFilter === "all"}
      class="py-1 px-2 bg-cyan-100 text-cyan-700 rounded-md focus:outline-none"
      >All</button
    >
    <button
      on:click={() => setCurrentFilter("active")}
      class:bg-cyan-100={currentFilter === "active"}
      class:text-cyan-700={currentFilter === "active"}
      class="py-1 px-2 bg-cyan-100 text-cyan-700 rounded-md focus:outline-none"
      >Active</button
    >
    <button
      on:click={() => setCurrentFilter("done")}
      class:bg-cyan-100={currentFilter === "done"}
      class:text-cyan-700={currentFilter === "done"}
      class="py-1 px-2 bg-cyan-100 text-cyan-700 rounded-md focus:outline-none"
      >Done</button
    >
  </div>
</div>
