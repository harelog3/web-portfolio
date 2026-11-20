import { createSignal } from "solid-js";

export default function Button(props: { label: string }) {
    const [count, setCount] = createSignal(0);

    return (
        <button
            onclick={() => setCount((v) => v + 1)}
            class="cursor-pointer rounded-1 bg-moss px-4 py-3 text-on-moss transition-all hover:-translate-y-0.5 hover:shadow-stamp active:translate-y-0 active:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
            {props.label}: {count()}
        </button>
    );
}
