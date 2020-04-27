import React from 'react'

import { Wrap, Span } from "./styled"

type TagProps = {
  tag: {
    nonVerbose: string;
    verbose: string;
    checked: boolean;
  },
  onClick: (tag: string) => void
}

const Tag: React.FC<TagProps> = ({ tag, onClick }) => {
  return (
    <Wrap>
      <p>{tag.verbose}</p>
      <div onClick={() => onClick(tag.nonVerbose)} className="checkbox">
        <div className="inner-box">
          <Span rotation="45deg" translateX="0px" scale={tag.checked ? "1" : "0"}></Span>
          <Span rotation="-45deg" translateX="0px" scale={tag.checked ? "1" : "0"}></Span>
        </div>
      </div>
    </Wrap>
  )
}

export default Tag
