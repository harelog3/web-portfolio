import { createSignal } from "solid-js";

export default function Button() {
    const [count, setCount] = createSignal(0);

    return (
        <button
            onclick={() => setCount((v) => v + 1)}
            class="cursor-pointer rounded-lg bg-emerald-600 px-3 py-2 text-white transition-all hover:bg-emerald-500 active:translate-y-0.5"
        >
            Counter: {count()}
        </button>
    );
}
