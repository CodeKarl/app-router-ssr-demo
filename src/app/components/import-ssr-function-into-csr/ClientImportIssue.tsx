import dynamic from "next/dynamic";
import Test from "./Test";

export default function ClientImportIssue() {
  
  const CSRComponent = dynamic(() => import("../csr/csr-component"), {
    ssr: false,
  });

  const SSRComponent = dynamic(() => import("../ssr/ssr-get-data"), {
    ssr: true,
  });

  return (
    <div>
      <h1>This page attempts to use a server function in a Client Component</h1>
      <CSRComponent />

      {/* This will cause the Next.js error you described when Test is SSR */}
      <Test Component={CSRComponent} />

      <Test Component={SSRComponent} />
    </div>
  );
}
