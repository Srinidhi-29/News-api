import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  {Modal,Button} from 'react-bootstrap';
import {useEffect, useState} from 'react'
import './AddCatogary.css'; 
import { IoAdd } from "react-icons/io5";


function AddCatogary(props) {

    const [apiUrl, setApiUrl] = useState('')
    const [catogary, setCatogary] = useState("")
    let obj = {
        catogary:"",
        apiUrl:''}

    const submit = (e) => {
        obj.catogary=catogary;
        obj.apiUrl=apiUrl;
        console.log(obj);
        props.handleCallback(obj);
        e.preventDefault();
  }

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >        
        <Modal.Body>
          
        <form className="form">
            <p className="heading" >Add Catogary</p>
            <input name="catogary" placeholder="Catogary Name" value={catogary} onChange={(e) => setCatogary(e.target.value)} />
            <input name="apiUrl" placeholder="API Url" value={apiUrl} onChange={(e) => setApiUrl(e.target.value)} />
            <button className="add" type="button" onClick={submit}><IoAdd /> Add</button>
        </form>
        </Modal.Body>
      </Modal>
    );
  }
  
  
export default AddCatogary;
