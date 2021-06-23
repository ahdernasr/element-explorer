const TrendKey = () => {
  return (
    <div className="trend-label">
      <div className="density-label">
        <p>Low density</p>
        <p>High density</p>
      </div>
      <div className="radius-label">
        <p>Low radius</p>
        <p>High radius</p>
      </div>
      <div className="electronegativity-label">
        <p>Low E<sup>-</sup> negativity</p>
        <p>High E<sup>-</sup> negativity</p>
      </div>
      <div className="melting-label">
        <p>Low melting</p>
        <p>High melting</p>
      </div>
      <div className="boiling-label">
        <p>Low boiling</p>
        <p>High boiling</p>
      </div>
      <div className="ie-label">
        <p>Low First IE</p>
        <p>High First IE</p>
      </div>
    </div>
  );
};

export default TrendKey;
