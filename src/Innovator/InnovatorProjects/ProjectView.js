import React from 'react'
import {Container} from 'react-bootstrap'
 
function ProjectView() {
  return (
    <div>
        <Container className=''>
          <img className='w-100' src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt=""  style={{height:'400px'}}/>
        </Container>
      <Container fluid className='p-3' style={{textAlign:'justify'}}> 
      
       <h1>Project Name</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id sapiente minima dolore possimus modi tempora illum eius ipsam eaque ducimus est ea laudantium explicabo commodi alias, exercitationem necessitatibus sequi.
      Placeat assumenda animi at dignissimos velit labore quia! Pariatur, tempora possimus! Quis tempora quae ex nobis quas nostrum dolorem, quam voluptate eligendi labore laboriosam temporibus expedita sunt delectus. Beatae, facere!
      Exercitationem facere voluptatem commodi eius libero animi nulla tenetur, adipisci itaque eveniet, sed impedit mollitia at cumque dignissimos nesciunt accusamus rem quidem omnis distinctio enim velit obcaecati deserunt quam? Impedit.</p>
     <p>Target Amount : <b>12000000/-</b></p>
      </Container>
    </div>
  )
}

export default ProjectView