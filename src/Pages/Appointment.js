import React, { useState } from 'react';
import { Table, Button, Form, InputGroup, Pagination, Breadcrumb, Modal } from 'react-bootstrap';

const Appointment = () => {
    const [appointments, setAppointments] = useState([
        {
            profile: 'Jeremy Neigh',
            id: 'A0B1C028',
            status: 'Part-Time',
            appointmentTime: '8h-17h',
            appointmentDate: '2016-09-23',
        },
        // Other appointments...
    ]);

    const [modalData, setModalData] = useState({
        profile: '',
        id: '',
        status: 'Full-Time',
        appointmentTime: '',
        appointmentDate: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleAdd = () => {
        setModalData({
            profile: '',
            id: '', // Allow manual input of ID
            status: 'Full-Time',
            appointmentTime: '',
            appointmentDate: '',
        });
        setIsEditing(false);
        setShowModal(true);
    };

    const handleEdit = (appointment) => {
        setModalData(appointment);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleDelete = (appointmentId) => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            setAppointments(appointments.filter((appt) => appt.id !== appointmentId));
        }
    };

    const handleSave = () => {
        if (!modalData.profile || !modalData.id || !modalData.appointmentTime || !modalData.appointmentDate) {
            alert('All fields must be filled out');
            return;
        }

        if (isEditing) {
            setAppointments(
                appointments.map((appt) =>
                    appt.id === modalData.id ? modalData : appt
                )
            );
        } else {
            setAppointments([...appointments, modalData]);
        }

        setShowModal(false);
        setModalData({
            profile: '',
            id: '',
            status: 'Full-Time',
            appointmentTime: '',
            appointmentDate: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setModalData({
            ...modalData,
            [name]: value,
        });
    };

    const getStatusVariant = (status) => {
        switch (status) {
            case 'Full-Time':
                return 'warning';
            case 'Part-Time':
                return 'success';
            case 'Seasonal':
                return 'secondary';
            case 'On-contract':
                return 'primary';
            default:
                return 'light';
        }
    };

    return (
        <div className="appointment-page">
            <Breadcrumb>
                <Breadcrumb.Item href="#">Employee</Breadcrumb.Item>
                <Breadcrumb.Item active>Appointment</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="mb-4">Appointment</h1>
            <div className="mb-4 d-flex justify-content-between align-items-center">
                {/* <InputGroup className="search-bar w-50">
                    <Form.Control type="text" placeholder="Search" />
                </InputGroup> */}
                <div className="d-flex">
                    <Button variant="primary" className="me-2" onClick={handleAdd}>
                        + Add Appointment
                    </Button>
                    {/* <Button variant="outline-primary">Invite</Button> */}
                </div>
            </div>
            <Table striped bordered hover responsive className="align-middle">
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Appointment Time</th>
                        <th>Appointment Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="d-flex align-items-center">
                                <img
                                    src={`https://i.pravatar.cc/150?img=${appointment.id}`}
                                    alt={appointment.profile}
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                />{" "}
                                <span>{appointment.profile}</span>
                            </td>
                            <td>{appointment.id}</td>
                            <td>
                                <Button
                                    variant={getStatusVariant(appointment.status)}
                                    size="sm"
                                    className="px-3"
                                >
                                    {appointment.status}
                                </Button>
                            </td>
                            <td>{appointment.appointmentTime}</td>
                            <td>{appointment.appointmentDate}</td>
                            <td>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEdit(appointment)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDelete(appointment.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Appointment' : 'Add Appointment'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formProfile">
                            <Form.Label>Profile</Form.Label>
                            <Form.Control
                                type="text"
                                name="profile"
                                value={modalData.profile}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="id"
                                value={modalData.id}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                name="status"
                                value={modalData.status}
                                onChange={handleChange}
                            >
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Seasonal</option>
                                <option>On-contract</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formAppointmentTime">
                            <Form.Label>Appointment Time</Form.Label>
                            <Form.Control
                                type="text"
                                name="appointmentTime"
                                value={modalData.appointmentTime}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formAppointmentDate">
                            <Form.Label>Appointment Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="appointmentDate"
                                value={modalData.appointmentDate}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Appointment;