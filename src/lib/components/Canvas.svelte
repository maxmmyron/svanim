<script lang="ts">
  let { children } = $props();
</script>

<svg viewBox="0 0 200 200" class="w-96 h-96">
  {@render children?.()}
</svg>
