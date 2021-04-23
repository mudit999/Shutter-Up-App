import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css';
import { DeleteTwoTone } from '@material-ui/icons';
import {projectFirestore} from './../../firebase/config';
import useFirestore from './../../hooks/useFirestore';

const Modal = ( { selectedImg , setSelectedImg } ) => {

    const { docs } = useFirestore('images');
    console.log(docs)
    console.log('selectedImg ' + selectedImg)

    const clickHandler = (event) => {
        if(event.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    // const HandleDelete = (event) => { projectFirestore.collection('images').doc(doc.id).delete() }


    // const HandleDelete = () => {console.log('deleted')}

    return(
        <motion.div className='backdrop' onClick = {clickHandler}
            initial = {{ opacity: 0}}
            animate = {{ opacity: 1}}>

                {/* <div onClick = {HandleDelete}>
                    <DeleteTwoTone 
                    style={{ fontSize: 50, position: 'fixed', right : '0' , cursor: 'pointer' }} />
                </div> */}

            <motion.img src= {selectedImg} alt = "enlarged_pic"
            initial = { {y: "-100vh"}}
            animate = { {y: 0}} 
            />
        </motion.div>
    )
}

export default Modal;