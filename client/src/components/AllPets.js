import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';


const AllPets = () => {
    const [allPets, setAllPets] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(alldata => {
                console.log("**********")
                console.log(alldata)
                console.log("**********")
                setAllPets(alldata.data.pets)
            })
            .catch(err=> console.log(err))


    }, []);


    return (
        <div className="pets">
            <h2>These pets are looking for a good home</h2> 
            {
                allPets.map((petsObj, idx) =>{
                    return <div key = {idx}> 
                        <div >
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{petsObj.name}</td>
                                    <td>{petsObj.type}</td>
                                    <td><button><Link to = {`/pets/${petsObj._id}`}>details</Link> </button> <button><Link to = {`/pets/edit/${petsObj._id}`}>edit</Link> </button></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div> 
                })
            }           
        </div>
    );
};



export default AllPets;