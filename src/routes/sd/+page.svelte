<script lang="ts">
  import YtbVideo from "$lib/components/common/YtbVideo.svelte";
  import Card from "$lib/components/common/Card.svelte";
  import Anchor from "$lib/components/common/Anchor.svelte";
  import cardItems from "../../data/card_items";
  import StaticsData from "$lib/components/StaticsData.svelte";
  import TagNavData from "$lib/components/TagNavData.svelte";
  import Svg from "$lib/components/common/Svg.svelte";
  // const { data }: PageProps = $props();
</script>

<div class="page">
  <YtbVideo />
  <div class="static-index">
    <img style="width: 100%;height: auto" src="/about-hero.jpg" alt="static-index" />
  </div>
  <Anchor
    items={cardItems.map((item) => ({
      title: item.title,
      href: item.id.toString(),
      key: item.id,
    }))}
  />
  <div class="card-list">
    {#each cardItems as card (card.id)}
      <Card
        id={card.id.toString()}
        title={card.title}
        description={card.content}
        img={card.image || ""}
        href={card.slug}
      >
        {#if card.id === 1}
          <TagNavData />
          <Svg path="/choose-card.svg" alt="choose-card" />
        {:else if card.id === 2}
          <StaticsData />
        {:else if card.id === 3}
          <Svg path="/newspaper.svg" alt="newspaper" />
        {/if}
      </Card>
    {/each}
  </div>
</div>

<style lang="scss">
  .page {
    width: 100%;

    .card-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .static-index {
    display: none; /* 默认在大屏幕隐藏 */
    width: 100%; /* 让 div 占满父级 */
    height: 300px; /* 你可以根据需要调整高度 */

    @media (max-width: 768px) {
      display: block; /* 小屏幕显示 */
    }
  }
</style>
