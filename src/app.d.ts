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
			initial: State;
			// matrix: App.TransformMat;
			keyframes: Keyframe[];
		}

		interface Keyframe {
			state: State;
			t: number;
		}

		interface El {

		}

		interface State {
			x: number;
			y: number;
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
