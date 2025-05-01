<script lang="ts">
  import { getT } from "$lib/state.svelte";

  interface _P {
    el: App.El;
  }

  let { el }: _P = $props();

  /**
   * lerp **k**eyed value between **s**tart and **e**nd states over the given **t**ime
   */
  const lerp = (k: keyof App.State, s: App.Tween, e: App.Tween, t: number) => {
    if (t > e.t) return e.state[k];
    if (t < s.t) return s.state[k];
    return s.state[k] * (e.t - e.t) + (e.state[k] * (t - e.t)) / (e.t - s.t);
  };

  let x = $derived(lerp("x", el.tweens[0], el.tweens[1], getT()));
  let y = $derived(lerp("y", el.tweens[0], el.tweens[1], getT()));
</script>

<rect {x} {y} width="20" height="20" class="fill-black"></rect>
