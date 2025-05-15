import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Home</h1>
      <Link href="/full-ssr">Full SSR Page</Link>
      <Link href="/full-csr">Full CSR Page</Link>
      <Link href="/ssr-component-in-csr-component">SSR Component in CSR Component</Link>
      <Link href="/csr-component-in-ssr-component">CSR Component in SSR Component</Link>
      <Link href="/import-ssr-function-into-client-component-issue">Import SSR Function into Client Component Issue</Link>
      <Link href="/import-ssr-function-into-client-component-solution">Import SSR Function into Client Component Solution</Link>
    </div>
  );
}
 