import styled from "styled-components";
import * as vb from "./variables.js";
import * as mx from "./mixins.js";

const FixtureRow = styled.div`
  width: 100%;
  margin-bottom: ${vb.pad300};

  div,
  a {
    width: 100%;
    cursor: pointer;
  }
  .content {
    width: 100%;
    background: var(--bg-fixtures);
    padding: ${vb.pad200};
    display: grid;
    grid-template-columns: minmax(40px, auto) 1fr max-content max-content;
    align-items: center;
    justify-content: center;
    gap: ${vb.pad200};
    box-shadow: ${vb.bs100};
    border-radius: ${vb.brLight};
    text-align: center;
  }
  .teams {
    ${mx.flexColumn()};
    vertical-align: middle;

    .team {
      ${mx.flexRow()};
      justify-content: start;
      gap: ${vb.pad150};
      text-align: left;
    }
    .badge {
      width: 1.3rem;
      height: 1.3rem;
    }
    .team-name {
      text-shadow: ${vb.ts100};
    }
  }
  .score {
    ${mx.flexColumn(null, "center")};
    vertical-align: middle;

    span {
      text-shadow: ${vb.ts100};
      color: var(--bg-white);
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
  }
  .favorite {
    ${mx.iconSize()};
  }
`;
export default FixtureRow;
