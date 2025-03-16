<script lang="ts">
  import { onMount } from "svelte";
  import type { Category, Product, Series } from "$lib/props";
  import tooth from "../../../data/tooth";

  const products: Product[] = tooth;
  const seriesList: Series[] = [
    { id: 0, name: "All", title: "All Products" }, // 添加 "All" 选项
    ...Array.from(
      new Map(
        products.map((p) => [p.category.series.id, p.category.series])
      ).values()
    )
  ];

  const categories: Category[] = Array.from(
    new Map(products.map((p) => [p.category.id, p.category])).values()
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
        (category) => category.series.id === seriesId
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
        (product) => product.category.id === categoryId
      );
    } else if (selectedSeries?.id) {
      const seriesId = selectedSeries.id;
      filteredProducts = products.filter(
        (product) => product.category.series.id === seriesId
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
  @use "$styles/product";
</style>
