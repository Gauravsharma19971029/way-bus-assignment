import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap'
import "./name.component.css"


function Name(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="name-modal">
            <Button variant="primary" onClick={handleShow}>
                Modal
        </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Name;