<script lang="ts">
  import { getT } from "$lib/state.svelte";

  interface _P {
    el: App.El;
  }

  let { el }: _P = $props();

  const lerp = (k: keyof App.State, t: number) => {
    if (el.keyframes.length === 0) return el.initial[k];

    if (!keyA) return el.keyframes[0].state[k];
    if (!keyB) return el.keyframes[el.keyframes.length - 1].state[k];

    let [stateA, tA] = [keyA.state, keyA.t];
    let [stateB, tB] = [keyB.state, keyB.t];

    return stateA[k] + (t - tA) * ((stateB[k] - stateA[k]) / (tB - tA));
  };

  let keyA = $derived.by(() => el.keyframes.findLast((k) => getT() >= k.t));
  let keyB = $derived.by(() => el.keyframes.find((k) => getT() <= k.t));

  let x = $derived(lerp("x", getT()));
  let y = $derived(lerp("y", getT()));
</script>

<rect {x} {y} width="20" height="20" class="fill-black"></rect>
