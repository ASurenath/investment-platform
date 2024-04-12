import React, { useState } from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Modal, ProgressBar, Row } from 'react-bootstrap'
import './InnovatorProject.css'
function InnovatorProjects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const uploadImage = "https://static.vecteezy.com/system/resources/thumbnails/002/058/031/small_2x/picture-icon-photo-symbol-illustration-for-web-and-mobil-app-on-grey-background-free-vector.jpg"
    const dummyProjects = [{
        name: 'project1 project1 project1',
        image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 500000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    },
    {
        name: 'project2',
        image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    },
    {
        name: 'project3',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgn3Ii53eAxizXRbyO3R8Mlf-npKMr5G-_ycjbFrICg&s",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    },
    {
        name: 'project4',
        image: "https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    }]
    return (
        <>
            <div className='main-div'>
                <Container className='p-lg-5 p-2 text-center'>
                    <Button onClick={handleShow} variant="outline-dark rounded-0 py-3 px-4" className='mx-auto d-flex align-items-center'><span className='hidden'>Add a project&nbsp;&nbsp;&nbsp;&nbsp;</span> <i class="fa-solid fa-plus fa-xl "></i></Button>

                    <Row>
                        {dummyProjects.length > 0 ? dummyProjects.map(project =>
                            <Col lg={4} sm={6} className='p-3 '>
                                <Card className='rounded-0 border-0 text-black grey-card' >
                                    <Card.Img src={project.image} className='project-image rounded-0 m-0' />
                                    <Card.Body className='m-0'>
                                        <h3 className='project-title bg-white py-3 text-center mx-auto'>{project.name}</h3>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                        <ProgressBar variant='success' className='striped' now={(project.AmountRaised/project.TargetAmount)*100} label={`₹${project.AmountRaised}`} title={`₹${project.AmountRaised} / ₹${project.TargetAmount}`}/>
                                        <small>Target: ₹{project.TargetAmount}</small>
                                        <div className='text-end'>
                                            <Button variant="outline-dark rounded-0 " className='ms-auto'><i class="fa-solid fa-arrow-right"></i></Button>

                                        </div>                                    </Card.Body>
                                </Card>
                            </Col>) : "No projects"}
                    </Row>
                </Container>
            </div>
            {/* Add project modal */}
            <Modal show={show} onHide={handleClose}
                dialogClassName="modal-addproject" centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new project</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-lg-5'>
                    <div>
                        <div className='text-center w-100'>
                            <label style={{ cursor: 'pointer' }} >
                                <input type="file" name="" id="" accept='image/.png,image/.jpg' style={{ display: 'none' }} />
                                <img src={uploadImage} alt="Cover Image Upload" height={200} className='border border-black p-3'/>
                                <p>Cover image (png / jpg)</p>
                            </label></div>
                        <FloatingLabel label="Project name" className="mb-3">
                            <Form.Control type="text" placeholder="Project name" maxLength={35} className='border-black' />
                        </FloatingLabel>
                        <FloatingLabel label="Description" className="mb-3">
                            <Form.Control as="textarea" placeholder="Description" className='border-black' style={{ height: '100px' }} />
                        </FloatingLabel>
                        <Row>
                            <Col sm={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className='border-black'>₹</InputGroup.Text>
                                    <FloatingLabel label="Target amount">
                                        <Form.Control type="number" placeholder="Target amount" className='border-black' />
                                    </FloatingLabel>
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <FloatingLabel label="End date" className='mb-3'>
                                    <Form.Control type="date" placeholder="End date" className='border-black' />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <Row>
                        <Col sm={6} className='text-center'>
                            <h4>Images</h4>
                            <div>
                                <label>
                                    <input type="file" name="" id="" accept='image/.png , image/.jpg'  style={{display:'none'}}/>
                                    <span className='btn btn-outline-dark rounded-5 p-3 mx-auto d-flex align-items-center'>
                                    <i class="fa-solid fa-plus fa-xl "/>
                                    </span>
                                </label>
                            </div>
                        </Col>
                        <Col sm={6} className='text-center'>
                        <h4>Videos</h4>
                        <div>
                                <label>
                                    <input type="file" name="" id="" accept='video'  style={{display:'none'}}/>
                                    <span className='btn btn-outline-dark rounded-5 p-3 mx-auto d-flex align-items-center'>
                                    <i class="fa-solid fa-plus fa-xl "/>
                                    </span>
                                </label>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InnovatorProjects