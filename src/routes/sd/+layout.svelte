<script>
  import Footer from "$lib/components/common/Footer.svelte";
  import Navbar from "$lib/components/common/Navbar.svelte";
</script>

<Navbar />

<div class="layout">
  <main>
    <slot></slot>
  </main>
</div>

<Footer />

<style lang="scss">
</style>
