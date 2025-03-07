<script lang="ts">
  import type { PageData } from "./$types";
  import { fade } from "svelte/transition";

  export let data: PageData;

  interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image?: string;
  }

  const news: NewsItem = data.news;
</script>

<main class="news-detail" in:fade={{ duration: 300 }}>
  <article class="news-container">
    {#if news.image}
      <figure class="hero-image">
        <img src={news.image} alt={news.title} />
      </figure>
    {/if}

    <header class="news-header">
      <h1>{news.title}</h1>
      <time datetime={news.date}
        >{new Date(news.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</time
      >
    </header>

    <section class="news-content">
      <p>{news.content}</p>
    </section>
  </article>
</main>

<style lang="scss">
  .news-detail {
    max-width: 1060px;
    margin: 0 auto;
    padding: 0 20px;
    font-family:
      "SF Pro Display",
      -apple-system,
      sans-serif;
  }

  .news-container {
    padding-top: 80px;
    padding-bottom: 120px;
  }

  .hero-image {
    margin-bottom: 40px;
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
    }
  }

  .news-header {
    margin-bottom: 32px;
    h1 {
      font-size: 48px;
      line-height: 1.1;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #1d1d1f;
    }
    time {
      display: block;
      font-size: 18px;
      color: #6e6e73;
      margin-top: 12px;
    }
  }

  .news-content {
    p {
      font-size: 21px;
      line-height: 1.5;
      color: #333;
      max-width: 680px;
    }
  }

  @media (max-width: 735px) {
    .news-header h1 {
      font-size: 34px;
    }
    .news-content p {
      font-size: 17px;
    }
  }
</style>
