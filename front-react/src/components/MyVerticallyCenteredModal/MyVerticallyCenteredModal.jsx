import React from 'react';
import { Modal } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import QuizQuestion from "components/QuizQuestion/QuizQuestion.jsx";
import { articles } from "variables/EducationArticles.jsx";





function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Question Time!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          {props.content}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" 
                color="primary"  
                onClick={props.onHide}
        >
        Cancel</Button>
        
        <Button variant="contained" 
                color="primary"  
                onClick={()=>props.verifyAnswer(props.id)}
                style={{marginLeft:'2rem'}}
        >
        Submit</Button>      
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;