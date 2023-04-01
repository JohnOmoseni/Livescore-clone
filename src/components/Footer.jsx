import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-title fw-semi-bold">
          Welcome To LiveScore - Latest Football Live Scores, Results, Fixtures and Tables
        </div>
        <div className="footer-body">
          The number one destination for real time scores for Football, Cricket, Tennis, Basketball,
          Hockey and more. LiveScore.com is the go-to destination for latest football scores and
          news from around the world. Whether you’re after today’s results, fixtures or live updates
          as the goals fly in, all the top leagues and competitions are covered in unbeatable
          detail. We provide fixtures, live scores, results and tables from the Premier League,
          Serie A, LaLiga, the Bundesliga, Ligue 1 and other top tournaments such as the Champions
          League and Europa League. But that’s not all because domestic cup competitions including
          the world famous FA Cup and international tournaments such as the World Cup and Nations
          League are also at your fingertips. With match info and line-ups thrown into the mix, you
          won’t need to look anywhere else for football stats. Users in the UK and Ireland can get
          stuck in with our live streaming service, offering matches from Serie A, the Eredivisie
          and other top leagues, while anyone in Nigeria can enjoy our net-busting live coverage of
          the Premier League.
        </div>
        <div className="league-links">
          Links:
          <Link to="#"> English Premier League </Link>
          <Link to="#"> La Liga </Link>
          <Link to="#"> Serie A </Link>
          <Link to="#"> Bundesliga </Link>
          <Link to="#"> Ligue 1 </Link>
          <Link to="#"> Champions League. </Link>
        </div>
        <div className="copyright">&copy; 1998-2022 LiveScore</div>
      </div>
      <div className="footer-links">
        <Link to="#"> Career </Link>
        <Link to="#"> Mobile </Link>
        <Link to="#"> Advertise </Link>
        <Link to="#"> FAQ </Link>
        <Link to="#"> Contact </Link>
        <Link to="#"> News Publisher </Link>
        <Link to="#"> Privacy Notice </Link>

        <Link to="#"> Cookie Policy </Link>

        <Link to="#"> Terms of Use </Link>

        <Link to="#"> Corporate </Link>
      </div>
    </footer>
  );
}

export default Footer;
