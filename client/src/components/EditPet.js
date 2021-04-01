import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const EditPet = (props) => {
    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:"",
        skillone:"",
        skilltwo:"",
        skillthree:""
    });

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(response =>{
                console.log("**********")
                console.log(response)
                console.log("**********")
                setFormInfo(response.data.pets)
            })
            .catch(err=> console.log(err))
    }, [props.id]);

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
        console.log("Submitting form data for update", formInfo)
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, formInfo)
        .then(response =>{
            console.log("***Updated***")
            console.log(response)
            console.log("***Updated***")
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
            <h1>Edit </h1>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                <p className="form-group col-md-6">Pet Name: <input type="text" name="name" id="" onChange={changeHandler} value={formInfo.name}/></p>
                <p style = {{color:"red"}}>{errors.name? errors.name.message: ""}</p>

                <p className="form-group col-md-6">Pet Type: <input type="text" name="type" id=""onChange={changeHandler} value={formInfo.type}/></p>
                <p style = {{color:"red"}}>{errors.type? errors.type.message: ""}</p>

                <p className="form-group col-md-6">Pet Description: <input type="text" name="description" id=""onChange={changeHandler} value={formInfo.description}/></p>
                <p style = {{color:"red"}}>{errors.description? errors.description.message: ""}</p>                
                <p className="form-group col-md-6">Skills (optional):</p>
                <p className="form-group col-md-6">Skill 1: <input type="text" name="skillone" id=""onChange={changeHandler} value={formInfo.skillone}/></p>
                <p className="form-group col-md-6">Skill 2: <input type="text" name="skilltwo" id=""onChange={changeHandler} value={formInfo.skilltwo}/></p>
                <p className="form-group col-md-6">Skill 3: <input type="text" name="skillthree" id=""onChange={changeHandler} value={formInfo.skillthree}/></p>

                <p><input className="btn btn-primary" type="submit" value="Edit Pet"/></p>
                </div>
            </form>
        </div>


    );
};


export default EditPet;