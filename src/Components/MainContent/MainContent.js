import React,{useState} from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';
import Modal from '../Modal/Modal';
import Title from '../Title/Title';
import UploadForm from '../UploadForm/UploadForm';
import './MainContent.css'

const MainContent = ( {logoutHandler} ) => {

    const [ selectedImg, setSelectedImg ] = useState(null);

    return(
        <div className='mainContent'>
            
            <Title />
            <button className = 'logoutBtn' onClick = {logoutHandler}>Log out</button>
            <UploadForm />
            <ImageGrid setSelectedImg = {setSelectedImg}/>
            {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
        </div>
    )
}

export default MainContent;