export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",  // Change to utf-8 for better compatibility
      viewport: "width=device-width, initial-scale=1",  // Adjusted for responsiveness
      title: "Samuel Onwuka - FullStack Software Engineer | Web Designer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "FullStack Software Engineer | Web Designer",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#53ff70" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Samuel Onwuka - FullStack Software Engineer | Web Designer",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Portfolio and works of Samuel Onwuka, FullStack Software Engineer and Web Designer",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://solomonmarvel.com/ogimage.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://solomonmarvel.com",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Samuel Onwuka - FullStack Software Engineer | Web Designer",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Portfolio and works of Samuel Onwuka, FullStack Software Engineer and Web Designer",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://samuel-onwuka.vercel.app/ogimage.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css",
        },
      ],
      script: [
        {
          hid: "ajax",
          src: "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/3.0.2/es6-promise.min.js",
        },
        {
          hid: "twitch",
          src: "https://embed.twitch.tv/embed/v1.js",
        },
        {
          hid: "twitter",
          src: "https://platform.twitter.com/widgets.js",
        },
        {
          hid: "ajax",
          src: "https://cdnjs.cloudflare.com/ajax/libs/fetch/0.10.1/fetch.min.js",
        },
        {
          hid: "github calendar",
          src: "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js",
        },
        {
          hid: "luma-checkout",
          src: "https://embed.lu.ma/checkout-button.js",
        },
      ],
    },
  },
});
