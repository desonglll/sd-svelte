<script>
  import Statics from "$lib/components/common/Statics.svelte";
  import Svg from "$lib/components/common/Svg.svelte";
</script>

<div class="statics-container">
  <div class="statics-number">
    <Statics
      title="FOOTPRINT"
      targetValue={60000}
      duration={2000}
      tail="square"
    />
    <Statics
      title="ANNUAL OUTPUT"
      targetValue={15000}
      duration={2000}
      tail="t"
    />
    <Statics
      title="PRODUCT CATEGORY"
      targetValue={4000}
      duration={2000}
      tail="+"
    />
  </div>
  <Svg path="/hiking.svg" alt="hiking" />
</div>

<style lang="scss">
  .statics-container {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    min-height: 0;
    .statics-number {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 50%;
    }
  }
</style>
