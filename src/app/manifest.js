export default function manifest() {
  return {
    name: "May Bell",
    short_name: "May Bell",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "https://www.wscubetech.com/images/ws-cube-white-logo.svg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://www.wscubetech.com/images/ws-cube-white-logo.svg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
