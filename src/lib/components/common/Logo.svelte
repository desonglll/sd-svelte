<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<button class="logo-container" on:click={() => goto("/")}>
  <img class="logo-sd" src="/logo-sd.jpg" alt="logo-sd" />
  <img class="logo-green" src="/logo-green.png" alt="logo-green" />
</button>
<style lang="scss">
  .logo-container {
    all: unset;
    height: 80%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* 添加间距 */

    .logo-sd,
    .logo-green {
      height: 100%;
      width: 50%;
      transition: all 0.3s ease-in-out;
    }
  }

  /* 📱 小屏幕优化（隐藏 .logo-green，只显示 .logo-sd） */
  @media (max-width: 768px) {
    .logo-container {
      height: auto; /* 适配小屏幕 */
      flex-direction: column; /* 让 logo 竖排 */
      gap: 5px; /* 调整间距 */
    }

    .logo-sd {
      display: none; /* 隐藏绿色 logo */
    }

    .logo-green {
      display: none; /* 隐藏绿色 logo */
    }
  }

  @media (max-width: 480px) {
    .logo-container {
      gap: 2px; /* 进一步减少间距 */
    }

    .logo-sd {
      width: 50%; /* 进一步缩小 */
    }
  }
</style>
