import { Container, Table } from 'reactstrap';
import { data } from '../resources/data';

const PMFund = () => {
    return (
        <Container className="mt-5 bg-light">
            <Table striped>
                <thead>
                    <tr>
                        <th>Fund's Names</th>
                        <th>UPI ID</th>
                        <th>QR Code Link for scanning and Donating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.key}>
                                <td>{item.state}</td>
                                <td>{item.upi}</td>
                                <td> <a href={item.link}>Click here to donate</a>  </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default PMFund;