<script lang="ts">
  import { goto } from "$app/navigation";
  import Logo from "./Logo.svelte";
</script>

<div style="height: 7vh;">
  <div class="nav-bar">
    <Logo />

    <div class="nav-container">
      <button id="nav-1" class="item" on:click={() => goto("/sd")}>Home</button>
      <button id="nav-2" class="item" on:click={() => goto("/sd/product/All")}
      >Product
      </button
      >
      <button id="nav-3" class="item" on:click={() => goto("/sd/news")}
      >News
      </button
      >
      <button id="nav-4" class="item" on:click={() => goto("/sd/about")}
      >About Us
      </button
      >
      <button id="nav-5" class="item" on:click={() => goto("/sd/contact")}
      >Contact Us
      </button
      >
    </div>
  </div>
</div>
<style lang="scss">
  .nav-bar {
    --navbar-height: 7vh;
    position: fixed;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f7;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    height: var(--navbar-height);
    width: 100%;

    .nav-container {
      height: 100%;
      display: flex;
      overflow-x: auto; /* 允许横向滚动 */
      white-space: nowrap; /* 防止子元素换行 */
      scrollbar-width: none; /* 隐藏 Firefox 滚动条 */
      -ms-overflow-style: none; /* 隐藏 IE 滚动条 */

      &::-webkit-scrollbar {
        display: none; /* 隐藏 WebKit 滚动条 */
      }

      .item {
        height: 100%;
        padding: 0 20px;
        font-size: 16px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        background-color: #f5f5f7;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-decoration: none;
        border: none;
        flex-shrink: 0; /* 防止元素被缩小 */
      }

      .item:hover {
        background-color: rgba(97, 88, 255);
        color: #fff;
      }
    }
  }

  /* 仅在小屏幕设备上生效 */
  @media (max-width: 768px) {
    .nav-container {
      padding: 0 10px; /* 增加内边距，避免左右卡住 */
    }
  }
</style>
