<script lang="ts">
  import { onMount } from "svelte";
  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<div class="about-container">
  <!-- 英雄部分 -->
  <section class="hero-section">
    <div class="hero-content">
      <img
        src="/about-hero.jpg"
        alt="Shunde Mechanical Parts Factory"
        class="hero-image"
      />
      <div class="text-content" class:fade-in={isVisible}>
        <h1>SHUNDE MECHANICAL PARTS CO., LTD</h1>
        <p class="subtitle">Innovating Precision, Powering Industry</p>
        <p class="description">
          A leading manufacturer of machinery fittings, seamlessly blending R&D,
          production, and global sales. Based in the scenic coastal city of
          Rizhao, we span 60,000 square meters with cutting-edge facilities and
          an annual capacity of 15,000 tonnes.
        </p>
      </div>
    </div>
  </section>

  <!-- 合作部分 -->
  <section class="partnerships">
    <div class="partnership-content">
      <div class="text-wrapper" class:fade-in={isVisible}>
        <h2>Trusted Globally</h2>
        <p>
          We proudly collaborate with industry giants like ESCO and CAT,
          delivering exceptional quality and precision to clients worldwide. Our
          products reach markets in Australia, the United States, and beyond,
          earning trust through innovation and excellence.
        </p>
      </div>
      <img
        src="/partnerships.jpg"
        alt="Global Partnerships"
        class="section-image"
      />
    </div>
  </section>

  <!-- 愿景部分 -->
  <section class="vision">
    <div class="vision-content">
      <div class="text-wrapper" class:fade-in={isVisible}>
        <h2>Shaping the Future</h2>
        <p>
          Our journey continues with deeper partnerships, increased R&D
          investment, and expanded global reach. We aim to lead the industry,
          crafting machinery parts that empower our customers and create lasting
          value.
        </p>
      </div>
      <img src="/vision.jpg" alt="Future Vision" class="section-image" />
    </div>
  </section>
</div>

<style lang="scss">
  @import "../../../styles/about.scss";
</style>
