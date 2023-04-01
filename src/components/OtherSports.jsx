function OtherSports({ title, className = "basketball" }) {
  return (
    <div className={`layout ${className}`}>
      <h1>{title}</h1>
    </div>
  );
}

export default OtherSports;
