<script lang="ts">
  import { goto } from "$app/navigation";
  import { series } from "$lib/nav";
  function navigateTo(path: string) {
    goto(`sd/product/${path}`);
  }
</script>

<div class="tag-container">
  {#each series as item (item.id)}
    <button class="tag" on:click={() => navigateTo(item.name)}>
      {item.title}
    </button>
  {/each}
</div>

<style lang="scss">
  .tag-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tag {
    all: unset;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.45);
    color: white;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgba(97, 88, 255);
    }
  }
</style>
