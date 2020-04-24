import React, { useState } from 'react'
import styled from "styled-components"
import colors from "../../layouts/colors"

type TagProps = {
  tag: string
}

type SpanProps = {
  rotation: string;
  translateX: string;
  scale: string;
}

const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  p {
    margin: 0.5rem 0;
  }
  &&:hover {
    cursor: pointer;
  }
  .checkbox {
    height: 1.5rem;
    width: 1.5rem;
    background: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: initial;
    
    .inner-box {
      height: 1.3rem;
      width: 1.3rem;
      border: 1px solid ${colors.black};
      box-sizing: border-box;
      position: relative;
    }
  }
`

const Span = styled.span`
  transform: 
  rotate(${(props: SpanProps) => props.rotation}) 
  translateX(${(props: SpanProps) => props.translateX})
  scale(${(props: SpanProps) => props.scale});

  transition: 0.1s;
  border-bottom: 2px solid ${colors.black};
  width: 85%;
  position: absolute;
  top: 52%;
  left: 1.4px;
  margin-top: -1px;
`



const Tag: React.FC<TagProps> = ({ tag }) => {
  const [checked, setChecked] = useState(false)
  return (
    <Wrap>
      <p>{tag}</p>
      <div onClick={() => setChecked(!checked)} className="checkbox">
        <div className="inner-box">
          <Span rotation="45deg" translateX="0px" scale={checked ? "1" : "0"}></Span>
          <Span rotation="-45deg" translateX="0px" scale={checked ? "1" : "0"}></Span>
        </div>
      </div>
    </Wrap>
  )
}

export default Tag
