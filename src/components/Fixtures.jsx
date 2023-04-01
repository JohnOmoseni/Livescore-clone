import React from "react";
import Loader from "./Fallback-UI/Loader";

function Fixtures({ rows, isLoading, data }) {
  // if (isLoading) return <Loader />;
  return (
    <>
      {rows?.length > 0 && (
        <div className="match-row">
          <div className="competitions">{rows}</div>
        </div>
      )}
    </>
  );
}

export default React.memo(Fixtures);
