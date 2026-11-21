// The contact form posts straight to Web3Forms from the browser, so the whole site stays
// prerendered (no Worker route, no secrets). The access key is public by design: it can
// only send mail to the inbox it was created with.
export const web3forms = {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "2dbeff26-cab0-46e1-8856-218140179bb5",
} as const;

/** International format without "+" or spaces, as wa.me expects it. */
export const whatsapp = "523148580317";
