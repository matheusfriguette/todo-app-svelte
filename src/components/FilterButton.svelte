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

<button
  on:click={() => setCurrentFilter("done")}
  class:bg-cyan-100={currentFilter === "done"}
  class:text-cyan-700={currentFilter === "done"}
  class="py-1 px-2 bg-cyan-100 text-cyan-700 rounded-md focus:outline-none"
  >Done</button
>
