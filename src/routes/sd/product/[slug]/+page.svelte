<script lang="ts">
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
</script>

<h2>{data.content}</h2>
