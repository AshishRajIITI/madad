import { Container, Table } from 'reactstrap';
import { doctors } from '../resources/doctors';

const Doctors = () => {
    window.scrollTo(0,0);
    return (
        <Container className="mt-5 bg-light">
            <Table striped>
                <thead>
                    <tr className="row justify-content-center">
                        <th  className="col-3">Doctors Name</th>
                        <th  className="col-3">Mobile Number</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((item) => {
                        return (
                            <tr className="row justify-content-center" key={item.key}>
                                <td className="col-3">{item.name}</td>
                                <td className="col-3">{item.mobile}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default Doctors;