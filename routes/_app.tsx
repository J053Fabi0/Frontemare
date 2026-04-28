import { define } from "@/utils.ts";
import CommonHeaders from "@/components/CommonHeaders.tsx";

export default define.page(function App({ Component }) {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <CommonHeaders />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
