import { createSignal, onCleanup, onMount } from "solid-js";

type Theme = "light" | "dark";

// Module scope, so every ThemeToggle island on the page (desktop bar and mobile sheet)
// shares one value and their labels stay in sync. `null` until mounted: the server
// can't know the visitor's theme, so the first render uses a neutral label.
const [theme, setTheme] = createSignal<Theme | null>(null);

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

function readStored(): Theme | null {
    try {
        const value = localStorage.getItem("theme");
        return value === "light" || value === "dark" ? value : null;
    } catch {
        return null;
    }
}

function resolveTheme(): Theme {
    return readStored() ?? (darkQuery().matches ? "dark" : "light");
}

// Keeps the mobile browser toolbar in step with a manual choice; the colors live on
// the meta tags (BaseLayout.astro) so they aren't duplicated here.
function syncThemeColor(next: Theme) {
    document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
        meta.content = meta.dataset[next] ?? meta.content;
    });
}

interface Props {
    variant: "icon" | "full";
    labels: {
        toggle: string;
        toDark: string;
        toLight: string;
    };
}

export default function ThemeToggle(props: Props) {
    onMount(() => {
        setTheme(resolveTheme());

        // Without a stored choice the CSS follows the OS live; keep the label honest.
        const query = darkQuery();
        const onChange = () => {
            if (!readStored()) setTheme(query.matches ? "dark" : "light");
        };
        query.addEventListener("change", onChange);
        onCleanup(() => query.removeEventListener("change", onChange));
    });

    const toggle = () => {
        const next: Theme = (theme() ?? resolveTheme()) === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        syncThemeColor(next);
        try {
            localStorage.setItem("theme", next);
        } catch {
            // Storage blocked (private mode): the switch still applies for this page view.
        }
        setTheme(next);
    };

    const label = () => {
        const current = theme();
        if (!current) return props.labels.toggle;
        return current === "dark" ? props.labels.toLight : props.labels.toDark;
    };

    return props.variant === "icon" ? (
        <button
            type="button"
            onClick={toggle}
            aria-label={label()}
            title={label()}
            class="inline-flex size-9 cursor-pointer items-center justify-center rounded-1 border border-rule-strong text-ink transition-colors hover:border-ink"
        >
            <span aria-hidden="true">◐</span>
        </button>
    ) : (
        <button
            type="button"
            onClick={toggle}
            class="inline-flex h-11 cursor-pointer items-center gap-2 rounded-1 border border-rule-strong px-4 text-body-sm text-ink transition-colors hover:border-ink"
        >
            <span aria-hidden="true">◐</span>
            {label()}
        </button>
    );
}
