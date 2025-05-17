import createDynamicComponent from 'next/dynamic'

export const BlockList = {
  "block/CSRTestWithProps": createDynamicComponent(() => import("./csr-component-with-props"), {
    ssr: true,
  }),
  "block/CSRTestWithoutProps": createDynamicComponent(() => import("../../csr/csr-component"), {
    ssr: true,
  }),
  "block/SSRTestWithProps": createDynamicComponent(() => import("./SSRComponentWithProps"), {
    ssr: true,
  }),
  "block/SSRTestWithoutProps": createDynamicComponent(() => import("../../ssr/ssr-get-data"), {
    ssr: true,
  }),
}