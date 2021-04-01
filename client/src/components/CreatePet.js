import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const CreatePet = () => {
    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:"",
        skillone:"",
        skilltwo:"",
        skillthree:""
    });

    const [errors, setErrors] = useState({});

    const changeHandler = (e)=>{
        console.log("Changing the input!")
        console.log(e.target.name)
        setFormInfo({
            ...formInfo, 
            [e.target.name]:e.target.value
        })
    };

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Submitting form data", formInfo)
        axios.post("http://localhost:8000/api/pets/create", formInfo)
        .then(response =>{
            console.log("***Response from API after submitting form***")
            console.log(response)
            console.log("***Response from API after submitting form***")
            if(response.data.pet){
                navigate("/pets")
            }
            else{
                setErrors(response.data.errors)
            }
            
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Know a pet needing a home?</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                <p className="form-group col-md-6">Pet Name: <input type="text" name="name" id="" onChange={changeHandler}/></p>
                <p style = {{color:"red"}}>{errors.name? errors.name.message: ""}</p>

                <p className="form-group col-md-6">Pet Type: <input type="text" name="type" id=""onChange={changeHandler}/></p>
                <p style = {{color:"red"}}>{errors.type? errors.type.message: ""}</p>

                <p className="form-group col-md-6">Pet Description: <input type="text" name="description" id=""onChange={changeHandler}/></p>
                <p style = {{color:"red"}}>{errors.description? errors.description.message: ""}</p>                
                <p className="form-group col-md-6">Skills (optional):</p>
                <p className="form-group col-md-6">Skill 1: <input type="text" name="skillone" id=""onChange={changeHandler}/></p>
                <p className="form-group col-md-6">Skill 2: <input type="text" name="skilltwo" id=""onChange={changeHandler}/></p>
                <p className="form-group col-md-6">Skill 3: <input type="text" name="skillthree" id=""onChange={changeHandler}/></p>

                <p><input className="btn btn-primary" type="submit" value="Add Pet"/></p>
                </div>
            </form>
        </div>
    );
};



export default CreatePet;