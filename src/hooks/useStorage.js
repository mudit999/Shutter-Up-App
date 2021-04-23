import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp,projectAuth } from './../firebase/config';

const useStorage = (file) => {

    // const [UniqueId,setUniqueId] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( () => {

        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp;
            const uid = projectAuth.currentUser.uid;
            collectionRef.add({url, createdAt , uid})
            setUrl(url);
        })

    }, [file] );

    return { progress , error , url }; 
}

export default useStorage;