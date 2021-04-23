import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import './ImageGrid.css'
// import {projectFirestore} from '../../firebase/config';

const ImageGrid = ( {setSelectedImg} ) => {

    const { docs } = useFirestore('images');

    return(
        <div className='img-grid'>
            {
                docs && docs.map(doc => (
                    <motion.div className = 'img-wrap' key = {doc.id}
                        layout
                        // whileHover = {{ opacity : 1 }}
                        onClick = { () => setSelectedImg(doc.url)}>

                        <img src={doc.url} alt = 'uploaded_pic' />
                        {/* <button className = 'button'
                        onClick = {event => projectFirestore.collection(db).doc(doc.id).delete()}>Delete</button> */}
                    </motion.div>
                ))
            }
        </div>
    )
}

export default ImageGrid;