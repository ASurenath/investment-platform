import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function InnovatorProjects() {
    const dummyProjects = [{
        name: 'project1',
        image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
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
            <div className='p-lg-5 p-2'>
                <Row>
                    {dummyProjects.length > 0 ? dummyProjects.map(project => 
                    <Col lg={6} className='px-lg-5 py-lg-3 p-2'>
                        <Card >
                            <Row>
                                <Col md={5}>
                                    <Card.Img src={project.image} className='project-image' />

                                </Col>
                                <Col md={7}>
                                    <Card.Body>
                                        <Card.Title>project.name</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>) : "No projects"}
                </Row>
            </div>
        </>
    )
}

export default InnovatorProjects