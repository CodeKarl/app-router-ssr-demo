import React from 'react'
import { BlockList } from './block-list';

function BlockListExample() {
    const pageData = {
        blocks: [
            {
                id: 1,
                type: "block/CSRTestWithProps",
                props: {
                    title: "CSR Test With Props",
                    body: "This is a CSR test with props",
                },
            },
            {
                id: 2,
                type: "block/CSRTestWithoutProps",
            },
            {
                id: 3,
                type: "block/SSRTestWithProps",
                props: {
                    title: "SSR Test With Props",
                    body: "This is a SSR test with props",
                },
            },
            {
                id: 4,
                type: "block/SSRTestWithoutProps",
            },
        ],
    };

    const blockList = pageData.blocks.map((block) => {
        const Component = BlockList[block.type];

        if (!Component) {
            return null;
        }

        return <Component key={block.id} {...block.props} />;
    });

  return (
    <div>
      <h3>Block List Example</h3>
      {blockList}
    </div>
  )
}

export default BlockListExample