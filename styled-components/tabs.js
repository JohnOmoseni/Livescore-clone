import styled from "styled-components";
import * as vb from "./variables.js";
import * as mx from "./mixins.js";

export const Tabs = styled.ul`
  width: fit-content;
  /* padding: ${vb.pad300} ${vb.pad200}; */
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;

  > * {
    font-weight: ${vb.fwBold};
    margin-right: ${vb.pad300};
    cursor: pointer;
    &:is(:hover, .active) {
      color: var(--text-accent);
    }
  }
`;
