<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let filteredTodos = [];

  const removeTodo = (id) => {
    dispatch("removeTodo", {
      id,
    });
  };
</script>

<ul>
  {#each filteredTodos as { id, text, isDone }, index (id)}
    <li
      class="flex justify-between items-center py-4 px-6"
      class:border-t={index > 0}
    >
      <div class="flex items-center">
        <input
          type="checkbox"
          bind:checked={isDone}
          class="form-checkbox w-6 h-6 rounded-full border border-gray-200 text-light-blue-400 focus:border-gray-200"
        />
        <div
          class:line-through={isDone}
          class:text-gray-400={isDone}
          class="ml-4"
        >
          {text}
        </div>
      </div>
      <button
        class="w-4 h-4 text-gray-400 hover:text-gray-500"
        on:click={() => removeTodo(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </li>
  {/each}
</ul>
