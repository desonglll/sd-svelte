<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let title: string;
  export let targetValue: number; // 目标值
  export let duration: number; // 动画持续时间 (默认2秒)
  export let tail: string; // 末尾单位

  let currentValue = 0;
  let interval: ReturnType<typeof setInterval> | null = null;
  let observer: IntersectionObserver | null = null;
  let isVisible = false;
  let element: HTMLDivElement;

  // 监听元素是否进入视口
  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          startCounting();
        }
      },
      { threshold: 0.5 },
    );

    if (element) observer.observe(element);
  });

  // 计数动画
  function startCounting() {
    const step = Math.ceil(targetValue / (duration / 16)); // 每帧增长值
    interval = setInterval(() => {
      currentValue += step;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        if (interval) clearInterval(interval);
      }
    }, 16);
  }

  // 组件销毁时清理监听
  onDestroy(() => {
    if (interval) clearInterval(interval);
    if (observer && element) observer.unobserve(element);
  });
</script>

<div bind:this={element}>
  <p class="title">{title}:</p>
  <p>{currentValue.toLocaleString()} {tail}</p>
</div>

<style lang="scss">
  .title {
    font-size: 1rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.45);
  }
  p {
    font-size: 1.5rem;
    margin: 0;
  }
</style>
