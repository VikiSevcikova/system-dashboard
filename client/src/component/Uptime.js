const Uptime = ({ uptime }) => {
  let s = uptime;
  let m = s / 60;
  let h = m / 60;

  h = Math.floor(h) % 60;
  m = Math.floor(m) % 60;
  s = Math.floor(s) % 60;
  return (
    <>
      <h4>Uptime</h4>
      <p className="card-text">
        {h}:{m}:{s}
      </p>
    </>
  );
};

export default Uptime;
