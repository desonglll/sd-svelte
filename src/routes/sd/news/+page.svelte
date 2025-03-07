<script lang="ts">
  import { goto } from "$app/navigation";

  interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image?: string;
  }

  import news from "../../../data/news.json";
  const newsList: NewsItem[] = news;

  function handleNewsClick(id: number) {
    goto(`/sd/news/${id}`);
  }
</script>

<main class="news-list">
  <h1 class="page-title">Latest News</h1>
  <section class="news-grid">
    {#each newsList as news (news.id)}
      <button
        type="button"
        class="news-card"
        on:click={() => handleNewsClick(news.id)}
        on:keydown={(e) => e.key === "Enter" && handleNewsClick(news.id)}
      >
        {#if news.image}
          <figure class="news-image">
            <img src={news.image} alt={news.title} />
          </figure>
        {/if}
        <div class="news-info">
          <h2>{news.title}</h2>
          <time datetime={news.date}
            >{new Date(news.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}</time
          >
          <p>{news.excerpt}</p>
        </div>
      </button>
    {/each}
  </section>
</main>

<style lang="scss">
  // 定义苹果风格的变量
  $text-primary: #1d1d1f;
  $text-secondary: #6e6e73;
  $background: #f5f5f7;
  $card-hover: rgba(0, 0, 0, 0.04);

  .news-list {
    max-width: 1200px; // 更宽的容器，苹果官网常用宽布局
    margin: 0 auto;
    padding: 0 24px;
    font-family:
      "SF Pro Display",
      -apple-system,
      sans-serif;
    background: $background;
    min-height: 100vh;
  }

  .page-title {
    font-size: 56px; // 更大的标题，苹果常用大字体吸引眼球
    font-weight: 700;
    color: $text-primary;
    padding: 100px 0 60px; // 增加垂直间距
    text-align: center;
    letter-spacing: -0.015em;
    line-height: 1.1;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); // 稍宽的卡片
    gap: 40px; // 更大的间距，苹果设计强调呼吸感
    padding-bottom: 140px;
  }

  .news-card {
    background: #fff;
    border-radius: 18px; // 更大的圆角，苹果风格
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); // 柔和阴影
    border: none;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease; // 平滑的过渡效果
    text-align: left;

    &:hover {
      transform: translateY(-6px); // 更明显的悬浮效果
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); // 增强阴影
      background: $card-hover;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 125, 250, 0.6); // 苹果风格的焦点效果
    }
  }

  .news-image {
    margin: 0;
    img {
      width: 100%;
      height: 240px; // 更高的图片区域
      object-fit: cover;
      display: block;
    }
  }

  .news-info {
    padding: 24px;
    h2 {
      font-size: 28px; // 更大的标题
      font-weight: 600;
      color: $text-primary;
      margin-bottom: 10px;
      line-height: 1.2;
    }
    time {
      font-size: 17px;
      color: $text-secondary;
      display: block;
      margin-bottom: 14px;
      letter-spacing: 0.01em;
    }
    p {
      font-size: 19px; // 稍大的正文字体
      color: #333;
      line-height: 1.5;
      margin: 0;
    }
  }

  @media (max-width: 767px) {
    .page-title {
      font-size: 40px;
      padding: 60px 0 40px;
    }
    .news-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .news-info {
      padding: 20px;
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 17px;
      }
    }
  }
</style>
