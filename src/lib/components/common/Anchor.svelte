<script lang="ts">
  import { onMount } from "svelte";

  export let items: { key: number; href: string; title: string }[];
  let activeLink = "";

  function updateActiveLink() {
    activeLink = window.location.hash.replace("#", "");
    const element = document.getElementById(`anchor-${activeLink}`);
    if (element) {
      element.classList.add("active");
    }
  }

  onMount(() => {
    updateActiveLink(); // 初始化 activeLink

    window.addEventListener("hashchange", updateActiveLink);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            activeLink = id;
          } else if (activeLink === id) {
            activeLink = "";
          }
        }
      },
      { rootMargin: "-50% 0px" },
    );

    for (const item of items) {
      const element = document.getElementById(item.href);
      element && observer.observe(element);
    }

    return () => {
      window.removeEventListener("hashchange", updateActiveLink);
      observer.disconnect();
    };
  });
</script>

<div class="anchor">
  {#each items as item (item.key)}
    <a
      id={`anchor-${item.key.toString()}`}
      class="nav-link"
      href={`#${item.href}`}
      class:active={activeLink === item.href}
    >
      {item.title}
    </a>
  {/each}
</div>

<style lang="scss">
  .anchor {
    --anchor-height: 7vh;
    --nav-height: 7vh;
    display: flex;
    height: var(--anchor-height);
    position: sticky;
    top: var(--nav-height);
    z-index: 999;
    justify-content: center;
    align-items: center;
    background-color: white; // 背景色
    border-bottom: 1px solid rgb(236, 238, 239); // 底部边框
    padding: 10px 0; // 上下内边距
    .nav-link {
      margin: 0 15px; // 每个链接之间的间距
      text-decoration: none;
      color: black; // 默认链接颜色
      font-weight: 900; // 字体加粗
      font-size: 14px; // 字体大小
      transition:
        color 0.3s,
        transform 0.2s; // 颜色和缩放过渡效果

      &:hover {
        color: rgba(97, 88, 255); // 悬停时的链接颜色
        transform: scale(1.1); // 悬停时的轻微放大效果
      }

      &:active {
        color: #0056b3; // 点击时的链接颜色
        transform: scale(1.05); // 点击时的轻微缩放效果
      }

      &.active {
        color: rgba(97, 88, 255); // 点击时的链接颜色
      }
    }
  }
</style>
