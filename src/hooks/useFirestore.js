import { useState, useEffect } from 'react';
import {projectFirestore, projectAuth} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        projectFirestore.collection(collection)
            .where('uid', '==', projectAuth.currentUser.uid)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => { 
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });
    }, [collection])
    
    return { docs };
}

export default useFirestore;