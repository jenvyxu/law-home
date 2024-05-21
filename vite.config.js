import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const noAttr = () => {
//   return {
//     name: "no-attribute",
//     transformIndexHtml(html) {
//       return html.replace(`type="module" crossorigin`, "");
//     },
//   };
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {},
});
