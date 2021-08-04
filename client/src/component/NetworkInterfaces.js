const NetworkInterfaces = ({ ni }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Netmask</th>
          <th>Mac</th>
          <th>Family</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(ni).map((key) =>
          ni[key].map((n, i) => (
            <tr key={i}>
              <td>{key}</td>
              <td>{n.address}</td>
              <td>{n.netmask}</td>
              <td>{n.mac}</td>
              <td>{n.family}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default NetworkInterfaces;
