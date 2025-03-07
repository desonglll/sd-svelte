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
  .card-container {
    --card-height: 86vh;
    height: var(--card-height);
    scroll-margin-top: 14vh;
    background-color: #f5f5f7;
    margin-bottom: 50px;
  }

  .card {
    transition: all 0.4s ease-in-out;
    border-radius: 0;
    border: none;
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    width: 100%;
    height: 100%; /* 默认高度，可通过外部传入 */
    display: flex;
    align-items: center;
    flex-direction: row;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 768px) {
      flex-direction: column; /* 在小屏幕上垂直堆叠 */
      height: auto; /* 自适应高度 */
      margin-bottom: 1rem; /* 减小底部间距 */
    }

    @media (max-width: 480px) {
      margin-bottom: 0.75rem; /* 超小屏幕进一步减小间距 */
    }
  }

  .card-content-div {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    margin: 1.5rem auto; /* 居中对齐 */
    padding: 2rem 0;

    @media (max-width: 768px) {
      margin: 1rem auto; /* 小屏幕减小外边距 */
      padding: 1.5rem 0; /* 减小内边距 */
    }

    @media (max-width: 480px) {
      margin: 0.75rem auto; /* 超小屏幕进一步减小 */
      padding: 1rem 0;
    }
  }

  .card-img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;

    @media (max-width: 768px) {
      width: 100%;
      height: 200px; /* 固定高度，确保图片不过大 */
    }

    @media (max-width: 480px) {
      height: 150px; /* 超小屏幕再减小高度 */
    }
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    &.odd {
      background-color: white;
    }

    &.even {
      background-color: white;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto; /* 自适应高度 */
    }
  }

  .card-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.5rem; /* 小屏幕减小标题字体 */
      margin-top: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem; /* 超小屏幕进一步减小 */
      margin-top: 0.75rem;
    }
  }

  .card-description_less {
    font-size: 14px;
    color: #666;
    margin-top: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 限制最多显示 5 行 */
    line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 13px; /* 小屏幕减小描述字体 */
      -webkit-line-clamp: 4; /* 减少行数 */
      line-clamp: 4;
    }

    @media (max-width: 480px) {
      font-size: 12px; /* 超小屏幕进一步减小 */
      -webkit-line-clamp: 3; /* 更少行数 */
      line-clamp: 3;
    }
  }

  h1 {
    a {
      color: #333;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: rgba(97, 88, 255);
      }
    }
  }
</style>
