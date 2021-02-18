<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let todo = "";

  const addTodo = () => {
    dispatch("addTodo", {
      todo: {
        id: Date.now().toString(),
        text: todo,
        isDone: false,
      },
    });

    todo = "";
  };
</script>

<div class="py-4 px-6 border-b">
  <form on:submit|preventDefault={addTodo}>
    <input
      bind:value={todo}
      class="w-full focus:outline-none"
      placeholder="What do you have to do?"
    />
  </form>
</div>
