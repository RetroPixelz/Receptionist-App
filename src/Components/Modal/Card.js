import axios from "axios";
import React, { useState } from "react";
import EditPost from "./EditPost";
import classes from "./Modal.module.css";

const Card = (props) => {


    // if statement for male and female

    const [modal, setModal] = useState();

    const editPost = () => {
      setModal(<EditPost upRender={props.rerender} rerender={setModal} originalName={props.NameSurname} originalAge={props.Age} originalEmail={props.Email} originalContact={props.Contact} id={props.uniqueId}  />)
    }


    const deletePost = () => {
      if(window.confirm("Are you sure you want to delete this patient?") == true){
        
        let postId = {id: props.uniqueId}
        

        axios.post('http://localhost/receptionistapplication/DeletePatient.php', postId)
        .then((res)=>{
          let data = res.data;
          console.log(data);
          props.rerender(true);
      });

      } else {
        console.log("The Patient was not Deleted")
      }
    
    }


  return (
    <div>
      {modal}
      <div className={classes.PatientCard}>

        <h2>{props.NameSurname} </h2>

        <div className={classes.ProfImage}></div>
        {/* <p>patient Age:</p> */}
        <h3>{props.Age}</h3>
        {/* <p>patient Gender:</p> */}
        <h3>{props.Gender}</h3>
        {/* <p>patient Email:</p> */}
        <h3>{props.Email}</h3>
        <h3>{props.Contact}</h3>

        <div className={classes.trashi} onClick={deletePost} > </div>
        <div className={classes.editi} onClick={editPost}></div>

      </div>
    </div>
  );
};

export default Card;
