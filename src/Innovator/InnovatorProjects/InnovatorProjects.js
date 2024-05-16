import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import "./InnovatorProject.css";
import Header from "../../CommonComponents/Header";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { endpoints } from "../../services/defaults";
import CreatableSelect from "react-select/creatable";

function InnovatorProjects() {
  const [iPreviews, setIPreviews] = useState([]);
  const [vPreviews, setVPreviews] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cat, setCat] = useState([]);
  const { request: getCategory } = useApi("get");
  const { request: addCategory } = useApi("post");
  const { request: addProjects } = useApi("mPost");

  const [photo, setPhoto] = useState(null);
  const [projectData, setProjectData] = useState({
    project_name: "",
    description: "",
    amount: "",
    category: "",
    end_date: "",
    image: "",
  });
  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`,
  };

  const uploadImage =
    "https://static.vecteezy.com/system/resources/thumbnails/002/058/031/small_2x/picture-icon-photo-symbol-illustration-for-web-and-mobil-app-on-grey-background-free-vector.jpg";

    const dummyProjects = [
      {
        name: "project1 project1 project1",
        image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 500000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
      },
      {
        name: "project2",
        image:
          "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
      },
      {
        name: "project3",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgn3Ii53eAxizXRbyO3R8Mlf-npKMr5G-_ycjbFrICg&s",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 2000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
      },
      {
        name: "project4",
        image:
          "https://www4.instagantt.com/assets/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quod ipsa soluta quisquam ab consequatur quos vitae exercitationem omnis molestias, laboriosam earum neque dolore, eius, corrupti quae vel ut.",
        TargetAmount: 12000000,
        AmountRaised: 5000000,
        PostedOn: "2024-03-02",
        EndsOn: "2024-08-02",
      },
    ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const getCategories = async () => {
    try {
      let apiResponse;
      const url = `${endpoints.GET_CATEGORY}`;
      apiResponse = await getCategory(url);
      const { response, error } = apiResponse;
      if (!error && response.data) {
        setCat(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addProject = async () => {
    const formData = new FormData();
    formData.append("project_name", projectData.project_name);
    formData.append("description", projectData.description);
    formData.append("amount", projectData.amount);
    formData.append("end_date", projectData.end_date);
    formData.append("image", projectData.image);
    formData.append("category", projectData.category);

    try {
      let apiResponse;
      const url = `${endpoints.ADD_PROJECT}`;
      apiResponse = await addProjects(url, formData);
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const options = cat.map((category) => ({
    value: category.id,
    label: category.c_name,
  }));

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setProjectData((prevDetails) => ({
      ...prevDetails,
      image: file,
    }));
  };

  const handleCategoryChange = async (newValue, actionMeta) => {
    if (actionMeta.action === "create-option") {
      try {
        const newCategory = { c_name: newValue };
        const response = await addCategory(endpoints.ADD_CATEGORY, newCategory);
        if (response.data) {
          setCat([...cat, response.data]);
          setProjectData({ ...projectData, category: response.data.id });
        }
      } catch (error) {
        console.log(error);
      }
    } else if (actionMeta.action === "select-option") {
      setProjectData({ ...projectData, category: newValue.value });
    }
  };

 


  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="main-div">
        <Container className="p-lg-5 p-2 text-center">
          <Button
            onClick={handleShow}
            variant="outline-dark rounded-0 py-3 px-4"
            className="mx-auto d-flex align-items-center"
          >
            <span className="hidden">
              Add a project&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            <i className="fa-solid fa-plus fa-xl "></i>
          </Button>

          <Row>
            {dummyProjects.length > 0
              ? dummyProjects.map((project, index) => (
                  <Col lg={4} sm={6} className="p-3" key={index}>
                    <Card className="rounded-0 border-0 text-black grey-card">
                      <Card.Img
                        src={project.image}
                        className="project-image rounded-0 m-0"
                      />
                      <Card.Body className="m-0">
                        <h3 className="project-title bg-white py-3 text-center mx-auto">
                          {project.name}
                        </h3>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <ProgressBar
                          variant="success"
                          className="striped"
                          now={
                            (project.AmountRaised / project.TargetAmount) * 100
                          }
                          label={`₹${project.AmountRaised}`}
                          title={`₹${project.AmountRaised} / ₹${project.TargetAmount}`}
                          data-bs-theme="dark"
                        />
                        <small>Target: ₹{project.TargetAmount}</small>
                        <div className="text-end">
                          <Link to={"/innovator/project/id"}>
                            <Button
                              variant="outline-dark rounded-0 "
                              className="ms-auto"
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </Button>
                          </Link>
                        </div>{" "}
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : "No projects"}
          </Row>
        </Container>
      </div>

      {/* Add project modal */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-addproject"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new project</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-lg-5">
          <div>
            <div className="text-center w-100">
              <label style={{ cursor: "pointer" }}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => handleImage(e)}
                />
                <img
                  src={photo ? URL.createObjectURL(photo) : uploadImage}
                  alt="Cover Image Upload"
                  height={200}
                  className="border border-black p-3"
                  required
                />
                <p>Cover image (png / jpg)</p>
              </label>
            </div>
            <FloatingLabel label="Project name" className="mb-3">
              <Form.Control
                name="project_name"
                value={projectData.project_name}
                type="text"
                placeholder="Project name"
                maxLength={35}
                className="border-black"
                onChange={handleInput}
              />
            </FloatingLabel>
            <FloatingLabel label="Description" className="mb-3">
              <Form.Control
                name="description"
                value={projectData.description}
                onChange={handleInput}
                as="textarea"
                placeholder="Description"
                className="border-black"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Row>
              <Col sm={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="border-black">₹</InputGroup.Text>
                  <FloatingLabel label="Target amount">
                    <Form.Control
                      name="amount"
                      value={projectData.amount}
                      onChange={handleInput}
                      type="number"
                      placeholder="Target amount"
                      className="border-black"
                    />
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col sm={6}>
                <FloatingLabel label="End date" className="mb-3">
                  <Form.Control
                    name="end_date"
                    value={projectData.end_date}
                    onChange={handleInput}
                    type="date"
                    placeholder="End date"
                    className="border-black"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <CreatableSelect
              options={options}
              onChange={handleCategoryChange}
              placeholder="Select or create category"
            />
          </div>
          <hr />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={addProject}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InnovatorProjects;
