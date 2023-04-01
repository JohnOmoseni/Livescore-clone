import { Grid } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loading">
      <Grid height="80" width="60" color="#ff5602" />
      <span>Loading...</span>
    </div>
  );
}

export default Loader;
