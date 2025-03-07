<script>
  import { page } from "$app/state";
</script>

<h1>Something Wrong!</h1>

<p>{page.status}: {page.error?.message}</p>
