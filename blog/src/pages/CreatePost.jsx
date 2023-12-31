import React, { useEffect, useState } from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import moment  from 'moment';

const CreatePost = ({isAuth}) => {
    const [title, setTitle] = useState('');
    const [postTitle, setpostTitle] = useState('');

    let navigate = useNavigate()

    const postCollectionRef = collection(db, 'posts');
    const createPost = async() => {
        if(title === '' || postTitle === ''){
            alert('Fill the fields');
            return false;
        } else {
            try {
                await addDoc(postCollectionRef, {
                    title,
                    postTitle,
                    author: {
                        name: auth.currentUser.displayName,
                        id: auth.currentUser.uid,
                        date_create: moment().format("DD-MM-YYYY")
                    }
                })
                console.log(auth)
                navigate('/');
            } catch(error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        if(!isAuth) {
            navigate("/login");
        }
    })

    return (
        <div className='container'>
            <div className='bg-light p-5 rounded mt-3'>
                <h1>Create a Post</h1>
                <div className='mb-3'>
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input type="text" placeholder='Title' className='form-control' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="posts" className='form-label'>Posts</label>
                    <textarea placeholder='Post...' className='form-control' onChange={(e) => setpostTitle(e.target.value)} ></textarea>
                </div>
                <button className='btn btn-dark' onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost