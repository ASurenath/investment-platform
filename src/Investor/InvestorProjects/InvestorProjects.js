import React, { useState } from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, FormGroup, InputGroup, Modal, ProgressBar, Row } from 'react-bootstrap'
import './InvestorProject.css'
import Header from '../../CommonComponents/Header';
import { Link } from 'react-router-dom';
import Footer from '../../CommonComponents/Footer/Footer';

function InvestorProjects() {
  
    const dummyProjects = [{
        name: 'project1 project1 project1',
        innovator:'innovator1',
        image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 500000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    },
    {
        name: 'project2',
        innovator:'innovator1',
        image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    },
    {
        name: 'project3',
        innovator:'innovator2',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgn3Ii53eAxizXRbyO3R8Mlf-npKMr5G-_ycjbFrICg&s",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 2000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    },
    {
        name: 'project4',
        innovator:'innovator2',
        image: "https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
    }]

    return (
        <><div className='sticky-top'><Header /></div>
            <div className='main-div'>
                <Container className='p-lg-5 p-2 text-center'>
                    <InputGroup size="lg" className='mb-3 w-75 mx-auto' >
                        <Form.Control className='border border-black' placeholder='Search...'/>
                        <InputGroup.Text className='border border-black'> <i className="fa-solid fa-search"></i>
                        </InputGroup.Text>
                    </InputGroup>

                    <Row>
                        {dummyProjects.length > 0 ? dummyProjects.map((project, index) =>
                            <Col lg={4} sm={6} className='p-3' key={index}>
                                <Card className='rounded-0 border-0 text-black grey-card' >
                                    <Card.Img src={project.image} className='project-image rounded-0 m-0' />
                                    <Card.Body className='m-0'>
                                        <h3 className='project-title bg-white py-3 text-center mx-auto'>{project.name}</h3>
                                        <Card.Text>
                                            <p className='text-secondary m-0 p-0'>Innovator: {project.innovator}</p>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                        <ProgressBar variant='success' className='striped' now={(project.AmountRaised / project.TargetAmount) * 100} label={`₹${project.AmountRaised}`} title={`₹${project.AmountRaised} / ₹${project.TargetAmount}`} data-bs-theme='dark' />
                                        <small>Target: ₹{project.TargetAmount}</small>
                                        <div className='text-end'>
<Link to={'/investor/project/id'}>
                                                <Button variant="outline-dark rounded-0 " className='ms-auto'><i className="fa-solid fa-arrow-right"></i></Button>
    
</Link>
                                        </div>                                    </Card.Body>
                                </Card>
                            </Col>) : "No projects"}
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default InvestorProjects