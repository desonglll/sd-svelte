<script lang="ts">
  import axios from "$lib/axios";

  export let id: string;
  export let title: string;
  export let description: string;
  export let img: string;
  export let href: string;
</script>

<div class="card-container" {id}>
  <div class="card">
    {#if +id % 2 === 0}
      <div class="card-content odd">
        <div class="card-content-div">
          <h1 class="card-title"><a href={`/sd/${href}`}>{title}</a></h1>
          <p
            class="card-description_less"
            on:mouseenter={() => {
              console.log("focus");
            }}
            on:mouseleave={() => {
              console.log("blur");
            }}
          >
            {description}
          </p>
          <slot></slot>
        </div>
      </div>
      <img class="card-img" src={img} alt={title} />
    {:else}
      <img class="card-img" src={img} alt={title} />
      <div class="card-content even">
        <div class="card-content-div">
          <h1 class="card-title"><a href={`/sd/${href}`}>{title}</a></h1>
          <p
            class="card-description_less"
            on:mouseenter={() => {
              console.log("focus");
            }}
            on:mouseleave={() => {
              console.log("blur");
            }}
          >
            {description}
          </p>
          <slot></slot>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  //@use "$styles/card/card-default" as *;
  @use "$styles/card/card-apple" as *;
</style>
