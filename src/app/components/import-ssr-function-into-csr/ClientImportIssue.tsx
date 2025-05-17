import dynamic from "next/dynamic";
import Test from "./Test";
import TestSolution from "./TestSolution";
import BlockListExample from "./block-list-example";

export default function ClientImportIssue() {
  
  const CSRComponent = dynamic(() => import("../csr/csr-component"), {
    ssr: true,
  });

  const SSRComponent = dynamic(() => import("../ssr/ssr-get-data"), {
    ssr: true,
  });

  return (
    <div>
      <h1>This page attempts to use a server function in a Client Component</h1>
      {/* This will cause the Next.js error you described when Test is SSR */}
      {/* <Test Component={CSRComponent} />

      <Test Component={SSRComponent} /> */}

      <TestSolution>
        <CSRComponent />
      </TestSolution>

      <TestSolution>
        <SSRComponent />
      </TestSolution>
    </div>
  );
}
