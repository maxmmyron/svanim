<script lang="ts">
  import Canvas from "$lib/components/Canvas.svelte";
  import CanvasElement from "$lib/components/CanvasElement.svelte";
  import Timeline from "$lib/components/Timeline.svelte";

  let elements: App.El[] = [
    {
      initial: { x: 0, y: 0 },
      lifetime: 5,
      tweens: [
        { state: { x: 0, y: 0 }, t: 0 },
        { state: { x: 100, y: 100 }, t: 2 },
      ],
      z: 1,
    },
  ];
</script>

<Timeline />

<Canvas>
  {#each elements as el}
    <CanvasElement {el} />
  {/each}
</Canvas>
