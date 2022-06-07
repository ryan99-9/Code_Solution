import React from 'react'
import { Button, Table } from 'react-bootstrap'
import './dashboard.css'


class Dashboard extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='bg'>
                    DASHBOARD
                </div>
                <div className='contain'>
                    <p>Welcome (xx)</p>
                    <Table striped bordered hover className='list'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Posting</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><Button style={{border:'none'}} variant="outline-primary"><i class="fal fa-comment"></i></Button>
                                <Button variant="outline-primary">Detail</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Dashboard