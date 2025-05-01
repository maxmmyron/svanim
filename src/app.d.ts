// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface El {
			z: number;
			lifetime: number;
			initial: State;
			// matrix: App.TransformMat;
			tweens: Tween[];
		}

		interface El {

		}

		interface State {
			x: number;
			y: number;
		}

		interface Tween {
			state: State;
			t: number;
		}

		type TransformMat = {};

		interface Contexts {
			Timeline: {
				time: number;
			};
		}
	}
}

export {};
