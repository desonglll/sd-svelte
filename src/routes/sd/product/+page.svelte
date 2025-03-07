<script lang="ts">
  import { onMount } from "svelte";

  interface Series {
    id: number;
    name: string;
    title: string;
  }

  interface Category {
    id: number;
    series: Series;
    name: string;
    title: string;
    description: string;
    imageSrc: string;
    slug: string;
  }

  interface Product {
    id: number;
    category: Category;
    name: string;
    title: string;
    description: string;
    image: string;
    imageSrc: string;
    language: string;
  }

  import static_data from "../../../data/tooth.json";

  //   const products: Product[] = data.data;
  const products: Product[] = static_data;
  // 提取唯一的 series 并添加 "All" 选项
  const seriesList: Series[] = [
    { id: 0, name: "All", title: "All Products" }, // 添加 "All" 选项
    ...Array.from(
      new Map(
        products.map((p) => [p.category.series.id, p.category.series]),
      ).values(),
    ),
  ];

  const categories: Category[] = Array.from(
    new Map(products.map((p) => [p.category.id, p.category])).values(),
  );

  let selectedSeries: Series | null = null;
  let selectedCategory: Category | null = null;
  let filteredCategories: Category[] = [];
  let filteredProducts: Product[] = [];

  onMount(() => {
    if (seriesList.length > 0) {
      selectedSeries = seriesList[0]; // 默认选择 "All"
      filterCategories();
      filterProducts();
    }
  });

  function filterCategories() {
    if (selectedSeries && selectedSeries.id !== 0) {
      // 如果不是 "All"
      const seriesId = selectedSeries.id; // Cache the id to ensure type safety
      filteredCategories = categories.filter(
        (category) => category.series.id === seriesId,
      );
    } else {
      filteredCategories = []; // "All" 时不显示 category 筛选
    }
  }

  function filterProducts() {
    if (selectedSeries && selectedSeries.id === 0) {
      // 如果选择 "All"
      filteredProducts = products; // 显示所有产品
    } else if (selectedCategory) {
      const categoryId = selectedCategory.id;
      filteredProducts = products.filter(
        (product) => product.category.id === categoryId,
      );
    } else if (selectedSeries?.id) {
      const seriesId = selectedSeries.id;
      filteredProducts = products.filter(
        (product) => product.category.series.id === seriesId,
      );
    } else {
      filteredProducts = products;
    }
  }

  function handleSeriesSelect(series: Series) {
    selectedSeries = series;
    filterCategories();
    selectedCategory =
      series.id !== 0 && filteredCategories.length > 0
        ? filteredCategories[0]
        : null;
    filterProducts();
  }

  function handleCategorySelect(category: Category) {
    selectedCategory = category;
    filterProducts();
  }
</script>

<main class="products-page">
  <section class="hero">
    <h1>Our Products</h1>
    <p class="subtitle">
      Precision-engineered machinery parts for every industry.
    </p>
  </section>

  <section class="filter-section">
    <div class="series-filter">
      <h2>Series</h2>
      <div class="series-list">
        {#each seriesList as series}
          <button
            class="series-btn"
            class:active={selectedSeries?.id === series.id}
            on:click={() => handleSeriesSelect(series)}
          >
            {series.name}
          </button>
        {/each}
      </div>
    </div>

    {#if selectedSeries && selectedSeries.id !== 0}
      <div class="category-filter">
        <h2>Categories</h2>
        <div class="category-list">
          {#each filteredCategories as category}
            <button
              class="category-btn"
              class:active={selectedCategory?.id === category.id}
              on:click={() => handleCategorySelect(category)}
            >
              {category.name}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </section>

  <section class="product-grid">
    {#if filteredProducts.length > 0}
      {#each filteredProducts as product}
        <div class="product-card">
          <img src={product.image} alt={product.name} class="product-image" />
          <div class="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      {/each}
    {:else}
      <p class="no-products">No products found for this selection.</p>
    {/if}
  </section>
</main>

<style lang="scss">
  $primary-color: #000;
  $secondary-color: #6e6e73;
  $background-color: #f5f5f7;
  $accent-color: #0071e3;
  $font-family:
    "SF Pro Display",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  .products-page {
    background-color: $background-color;
    font-family: $font-family;
    padding: 0 20px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .hero {
    text-align: center;
    padding: 60px 0;

    h1 {
      font-size: 48px;
      font-weight: 600;
      color: $primary-color;
      margin-bottom: 10px;
      letter-spacing: -0.5px;
    }

    .subtitle {
      font-size: 22px;
      color: $secondary-color;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .filter-section {
    padding: 20px 0;

    .series-filter,
    .category-filter {
      margin-bottom: 30px;

      h2 {
        font-size: 24px;
        font-weight: 600;
        color: $primary-color;
        margin-bottom: 15px;
        text-align: center;
      }

      .series-list,
      .category-list {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;

        .series-btn,
        .category-btn {
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 500;
          color: $secondary-color;
          padding: 8px 16px;
          cursor: pointer;
          transition:
            color 0.3s ease,
            background-color 0.3s ease;
          border-radius: 20px;

          &.active,
          &:hover {
            color: $primary-color;
            background-color: rgba(0, 0, 0, 0.05);
          }
        }
      }
    }
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    gap: 30px;
    padding: 40px 0;

    .product-card {
      width: 300px;
      height: 400px;
      background-color: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }

      .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #d2d2d7;
      }

      .product-info {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 20px;
          font-weight: 600;
          color: $primary-color;
          margin: 0 0 10px;
        }

        p {
          font-size: 14px;
          color: $secondary-color;
          line-height: 1.5;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }

    .no-products {
      grid-column: 1 / -1;
      text-align: center;
      font-size: 18px;
      color: $secondary-color;
      padding: 40px;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 40px 0;

      h1 {
        font-size: 36px;
      }

      .subtitle {
        font-size: 18px;
      }
    }

    .filter-section {
      .series-list,
      .category-list {
        gap: 10px;

        .series-btn,
        .category-btn {
          font-size: 14px;
          padding: 6px 12px;
        }
      }

      h2 {
        font-size: 20px;
      }
    }

    .product-grid {
      grid-template-columns: repeat(auto-fit, 260px);
      gap: 20px;
      padding: 30px 0;

      .product-card {
        width: 260px;
        height: 360px;

        .product-image {
          height: 180px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 30px 0;

      h1 {
        font-size: 28px;
      }

      .subtitle {
        font-size: 16px;
      }
    }

    .filter-section {
      .series-list,
      .category-list {
        gap: 8px;

        .series-btn,
        .category-btn {
          font-size: 13px;
          padding: 5px 10px;
        }
      }

      h2 {
        font-size: 18px;
      }
    }

    .product-grid {
      grid-template-columns: 1fr;
      gap: 15px;
      padding: 20px 0;

      .product-card {
        width: 100%;
        max-width: 300px;
        height: 360px;

        .product-image {
          height: 180px;
        }

        .product-info {
          padding: 15px;

          h3 {
            font-size: 18px;
          }

          p {
            font-size: 13px;
          }
        }
      }
    }
  }
</style>
