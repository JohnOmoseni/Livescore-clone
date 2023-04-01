import styled from "styled-components";
import * as vb from "./variables.js";
import * as mx from "./mixins.js";

export const LeagueWrapper = styled.div`
  ${mx.flexColumn()};
  gap: 0.8em;

  > * {
    padding-inline: ${vb.pad300};
  }
`;
export const LeagueTop = styled.div`
  ${mx.flexColumn()};
  width: 100%;
  gap: ${vb.pad350};
  padding-block: 1.2em ${vb.pad300};
  border-bottom: 1px solid ${vb.borderClr};

  > * {
    padding-inline: ${vb.pad150};
  }

  .league-content {
    width: 100%;
    padding-inline: ${vb.pad200};

    .header {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: ${vb.pad100};
      .right-arrow {
        justify-self: end;
      }
    }
  }
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: ${props => {
    return props.gridNo == 3 ? "0" : `${vb.pad150}`;
  }};

  grid-template-columns: ${props => {
    return props.gridNo == 3 ? "auto 2fr auto" : "auto auto";
  }};
  align-items: center;
  gap: ${vb.pad200};

  .country_logo {
    width: 1.6em;
    height: 1.2em;
    border-radius: 3px;
  }
  .league_details h3 {
    color: var(--text-white);
    letter-spacing: 1px;
  }
  .league_details .country_name {
    letter-spacing: 1px;
    white-space: nowrap;
  }
  .right-arrow {
    justify-self: end;
  }
`;

export const LeagueBody = styled.div`
  width: 100%;
  padding-inline: ${vb.pad - 200};
`;
