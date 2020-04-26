import styled from "styled-components"
import { Box } from "grommet"
import colors from "~/layouts/colors"
import { fadeIn } from "~/shared/animations"

export const ModifiedBox = styled(Box)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  svg {
    ${fadeIn};
    position: absolute;
    max-height: 75%;
    width: 100%;
    z-index: 8;
    box-sizing: border-box;
    pointer-events: none;
    transition:.2s;
    fill: none;
    stroke: #333;
  }
  .landshluti {
      pointer-events: fill;
      transition: .2s;
      fill: #F2F0E9;
      stroke: none;
    }
  .landshluti:hover {
    fill: ${colors.blue};
    z-index: 8;
    cursor: pointer;
  }
  .sudurnes:hover {
    transform: translate3d(-4px, 4px, 0px);
  }
  .sudurland:hover {
    transform: translate3d(4px, 4px, 0px);
  }
  .austurland:hover {
    transform: translate3d(4px, 0px, 0px);
  }
  .nordurland:hover {
    transform: translate3d(4px, -4px, 0px);
  }
  .vestfirdir:hover {
    transform: translate3d(-4px, -4px, 0px);
  }
  .vesturland:hover {
    transform: translate3d(-4px, 0px, 0px);
  }
  .hofudborgarsvaedid:hover {
    transform: translate3d(-4px, 0px, 0px);
  }
  .texti {
    stroke: none;
    fill: #333;
  }
`