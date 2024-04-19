import React from 'react'
import { Badge } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import MailIcon from "@mui/icons-material/Mail";
import { Box, IconButton } from "@mui/material";
import { Col, Row } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';


function Notifications() {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

const fetchNotifications =[
  {
    subject:"Notification 1",
    avatar:"https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
    content:"    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in."
  },
  {
    subject:"Notification 2",
    avatar:"https://i.postimg.cc/28jmQ1gd/head-shot-portrait-close-smiling-600nw-1714666150.webp",
    content:"    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta, laborum et dolore quis consequatur, laudantium dolor aspernatur, at suscipit quidem minima illum corrupti iure ipsum voluptatem commodi possimus in."
  }
]

  return (
    <div>
         <Badge badgeContent={4} onClick={handleClick}>
         <MailIcon color="action" />
        </Badge>

        <div style={{ textAlign: "right" }}>
          <Snackbar
            className="mt-5"
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message={fetchNotifications.map((i)=>(
               <>
                  <Row>
                    <Col lg={1}><Avatar alt="Remy Sharp" src={i.avatar} /></Col>
                     <Col> <h6 className='mt-3'>{i.subject}</h6></Col></Row>

                     <p>{`${i.content.substring(0, 80)}${i.content.length > 80 ? "..." : ""}`}</p>
                    <hr />
               </>
            ))}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          />
        </div>
    </div>
  )
}

export default Notifications