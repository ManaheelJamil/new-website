import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const AdminPanel = () => {
    const [pendingRequests, setPendingRequests] = useState([
        { id: 1, product: "iPhone", user: "John", status: "pending" },
        { id: 2, product: "MacBook Pro", user: "Jane", status: "pending" },
    ]);
    const [approvedRequests, setApprovedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);

    const handleApprove = (id) => {
        const request = pendingRequests.find((req) => req.id === id);
        setApprovedRequests([...approvedRequests, request]);
        setPendingRequests(pendingRequests.filter((req) => req.id !== id));
    };

    const handleReject = (id) => {
        const request = pendingRequests.find((req) => req.id === id);
        setRejectedRequests([...rejectedRequests, request]);
        setPendingRequests(pendingRequests.filter((req) => req.id !== id));
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingRequests.map((req) => (
                        <tr key={req.id}>
                            <td>{req.id}</td>
                            <td>{req.product}</td>
                            <td>{req.user}</td>
                            <td>{req.status}</td>
                            <td>
                                <Button variant="success" onClick={() => handleApprove(req.id)}>
                                    Approve
                                </Button>{" "}
                                <Button variant="danger" onClick={() => handleReject(req.id)}>
                                    Reject
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h2>Approved Requests</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {approvedRequests.map((req) => (
                        <tr key={req.id}>
                            <td>{req.id}</td>
                            <td>{req.product}</td>
                            <td>{req.user}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h2>Rejected Requests</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                            <th>Product</th>
                            <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {rejectedRequests.map((req) => (
                        <tr key={req.id}>
                            <td>{req.id}</td>
                            <td>{req.product}</td>
                            <td>{req.user}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};
export default AdminPanel;