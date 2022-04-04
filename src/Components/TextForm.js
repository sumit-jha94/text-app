import React, { useState } from 'react';

export default function TextForm(props) {
    const ChangeUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const ChangeLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handleOnChange = (event) =>{
        console.log("OnChangeItems");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="mb-3">
                <textarea className="form-control" onChange= {handleOnChange} value = {text} id="My Form" rows="10"></textarea>
            </div>  
            <button className="btn btn-primary" onClick = {ChangeUpClick}> UpperCase </button>
            <button className="btn btn-primary mx-2" onClick = {ChangeLowClick}> LowerCase </button>
           
            <div className="container">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Character</p>
                <p> {0.008 * text.split(" ").length } Minutes To Read </p>


            </div>
        </>
    )
}

