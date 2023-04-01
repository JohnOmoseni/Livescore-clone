import React from "react";

function Error() {
  return (
    <div className="error-ui">
      <div className="content">
        <p>
          An <span className="fw-semi-bold">error occured while updating data.</span> It might be to a slow or failing network connection or problem with the servers
        </p>
        <p>
          The website will <span className="fw-semi-bold">automatically try to download the data. To force an immediate reload, Please refresh the page</span>
        </p>
      </div>
    </div>
  );
}

export default Error;
