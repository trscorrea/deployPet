import React, {useEffect, useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const PetDetails = (props) => {
    console.log("logging the id of the pet", props.id)

    const [petDetail, setPetDetail] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(response => {
            console.log("**********")
            console.log(response) 
            console.log("**********") 
            setPetDetail(response.data.pets)
        })
        .catch(err=> console.log(err))
    }, [props.id]);

    const deletePet = (e, petID)=>{
        console.log("Pet Adopted", petID)
        axios.delete(`http://localhost:8000/api/pets/delete/${petID}`)
        .then(response => {
            console.log("deleted!")
            console.log(response) 
            console.log("deleted!")
            navigate("/pets")
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <>
                <h1>Details about: {petDetail.name}</h1>
                <p>Pet Type: {petDetail.type}</p>
                <p>Description: {petDetail.description}</p>
                <p>Skills: {petDetail.skillone} <br/> {petDetail.skilltwo} <br/> {petDetail.skillthree}</p>
                <button className="btn btn-danger" onClick={(e)=> deletePet(e, petDetail._id )}>Adopt {petDetail.name}</button>            
            </>
        </div>
    );
};



export default PetDetails;