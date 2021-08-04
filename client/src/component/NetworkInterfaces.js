const NetworkInterfaces = ({ ni }) => {
    return(
           <table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Netmask</th>
                    <th>Mac</th>
                    <th>Family</th>
                </tr>
                {Object.keys(ni).map((key)=>
                    ni[key].map((n) => (
                        <tr>
                            <td>{key}</td>
                            <td>{n.address}</td>
                            <td>{n.netmask}</td>
                            <td>{n.mac}</td>
                            <td>{n.family}</td>
                        </tr>
                    )))
                }
            </table>
    );
}

export default NetworkInterfaces;