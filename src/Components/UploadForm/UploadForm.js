import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './UploadForm.css';

const UploadForm = () => {

    const [file , setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/jpeg" , "image/png", "image/jpg"];

    const changeHandler = (event) => {
        let selected = event.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        }else{
            setFile(null);
            setError("Please select image format of type png or jpeg");
        }
    }

    return (
        <div className = 'uploadForm'>
            <form>
                <label>
                    <input type="file" onChange = {changeHandler}/>
                    <span title = 'Upload picture' className = 'upload_icon'>+</span> 
                </label>
            
                <div className = "output">
                    {error && <div className = "error"> {error} </div>}
                    {file && <div className = "file"> {file.name} </div>}
                    {file && <ProgressBar file = {file} setFile = {setFile}/>}
                </div>
            </form>
        </div>
        
    )
}

export default UploadForm;