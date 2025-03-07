<script lang="ts">
  export let path: string;
  export let alt: string;
</script>

<div class="svg-container">
  <img class="svg" src={path} {alt} />
</div>

<style lang="scss">
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: auto;
    min-height: 0;
    flex: 1;

    .svg {
      max-width: 100%; /* 防止超出 */
      max-height: 100%;
      height: auto;
      width: auto;
      object-fit: contain; /* 确保 SVG 按比例缩放 */
    }
  }
</style>
