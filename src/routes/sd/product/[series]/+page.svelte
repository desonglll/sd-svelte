<script lang="ts">
  import { onMount } from "svelte";
  import type { Category, Product, Series } from "$lib/props";
  import { series } from "../../../../data/series";
  import { categories } from "../../../../data/category";
  import type { PageProps } from "../../../../../.svelte-kit/types/src/routes/sd/product/[series]/$types";
  import { goto } from "$app/navigation";
  import { products } from "../../../../data/product";

  let { data }: PageProps = $props();
  console.log(data);

  let selectedSeries = $state<Series | null>(null);
  let selectedCategory = $state<Category | null>(null);
  let filteredCategories = $state<Category[]>([]);
  let filteredProducts = $state<Product[]>([]);

  onMount(() => {
    if (series.length > 0) {
      selectedSeries = data as Series; // 默认选择 "All"
      filterCategories();
      filterProducts();
    }
  });

  function filterCategories() {
    if (selectedSeries && selectedSeries.id !== 0) {
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
    goto(`/sd/product/${series.name}`);
    selectedSeries = series;
    filterCategories();
    selectedCategory =
      series.id !== 0 && filteredCategories.length > 0
        ? filteredCategories[0]
        : null;
    filterProducts();
  }

  function handleCategorySelect(category: Category) {
    goto(`/sd/product/${category.series.name}/${category.name}`);
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
        {#each series as series}
          <button
            class="series-btn"
            class:active={selectedSeries?.id === series.id}
            onclick={() => handleSeriesSelect(series)}
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
              onclick={() => handleCategorySelect(category)}
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
