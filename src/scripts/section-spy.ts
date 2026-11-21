// Scrollspy for the one-page home: marks the nav link of the section on screen and points
// the language links at it, so switching language keeps your place (/en/ on "projects"
// → /es/#projects). Without JS the links keep their server-rendered state.
//
// Hrefs are rewritten as you scroll instead of patched on click, so hover, middle-click,
// "copy link" and keyboard activation all get the right URL. The address bar is left
// alone (no replaceState): the user didn't ask to change it.

const header = document.querySelector("header");
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>("a[data-section-link]")];
const languageLinks = [...document.querySelectorAll<HTMLAnchorElement>("a[data-locale]")];

// "" is the home link (#top). Hero and stack have no nav link of their own, so they count
// as home too.
const targetOf = (link: HTMLAnchorElement) => {
    const id = new URL(link.href).hash.slice(1);
    return id === "top" ? "" : id;
};
const targets = new Set(navLinks.map(targetOf));
const sections = [...document.querySelectorAll<HTMLElement>("main > section")];
const keyOf = (section: HTMLElement) => (targets.has(section.id) ? section.id : "");

let current: string | undefined;

function apply(key: string) {
    if (key === current) return;
    current = key;

    // One current item per nav: "page" for home (the link to the page you're on),
    // "location" for a section of it (WAI-ARIA's "current location within a context").
    for (const link of navLinks) {
        const target = targetOf(link);
        if (target !== key) link.removeAttribute("aria-current");
        else link.setAttribute("aria-current", key ? "location" : "page");
    }
    // Set through the attribute (not `link.hash`) so the href stays root-relative, like the
    // server-rendered one.
    for (const link of languageLinks) {
        const path = link.getAttribute("href")!.split("#")[0];
        link.setAttribute("href", key ? `${path}#${key}` : path);
    }
}

// Only the home page has sections the nav points at; elsewhere (e.g. the "message sent"
// page) the server-rendered state is already right.
if (header && sections.some((section) => keyOf(section))) {
    const visible = new Set<HTMLElement>();
    let atBottom = false;

    const update = () => {
        // At the very bottom the last section may never reach the band on tall screens.
        if (atBottom) return apply(keyOf(sections[sections.length - 1]));
        // The last section in the band wins: after a nav jump the target's top sits right
        // under the header while the previous section's bottom edge still touches the band.
        const last = sections.findLast((section) => visible.has(section));
        if (last) apply(keyOf(last));
    };

    // The band runs from under the sticky header to 40% down the viewport: a section
    // becomes current once its top passes that line.
    const band = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                const section = entry.target as HTMLElement;
                if (entry.isIntersecting) visible.add(section);
                else visible.delete(section);
            }
            update();
        },
        { rootMargin: `-${header.offsetHeight}px 0px -60% 0px` },
    );
    sections.forEach((section) => band.observe(section));

    const footer = document.querySelector("footer");
    if (footer) {
        new IntersectionObserver(
            ([entry]) => {
                atBottom = entry.isIntersecting;
                update();
            },
            { threshold: 1 },
        ).observe(footer);
    }
}
