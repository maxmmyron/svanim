<script lang="ts">
  import { getT, setT } from "$lib/state.svelte";
  import { onMount } from "svelte";

  interface _P {
    onplay?: (t: number) => void;
    onpause?: (t: number) => void;
  }

  let { onplay = $bindable(), onpause = $bindable() }: _P = $props();

  let timeline: HTMLDivElement;

  let isPlaying = $state(false);

  let frameId: number | null = null;
  onMount(() => {
    frameId = requestAnimationFrame(tick);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  });

  const togglePlayback = () => {
    isPlaying = !isPlaying;
    isPlaying ? play() : pause();
  };

  // TODO: either add functionality, or replace with pure event handlers
  const play = () => onplay?.(getT());
  const pause = () => onpause?.(getT());

  let lastTimestamp: DOMHighResTimeStamp = 0;
  const tick = (timestamp: DOMHighResTimeStamp) => {
    if (isPlaying) setT(getT() + (timestamp - lastTimestamp) / 1000);
    lastTimestamp = timestamp;
    frameId = requestAnimationFrame(tick);
  };
</script>

<div bind:this={timeline}>
  <button onclick={togglePlayback}>{isPlaying ? "pause" : "play"}</button>
  <button
    onclick={() => {
      setT(0);
    }}>RESET</button
  >
  <p>{getT().toFixed(2)}</p>
</div>
