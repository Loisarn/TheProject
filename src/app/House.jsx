import React from 'react';
import './app.css';
import PostForm from '../API/PostForm.js';

export default function House() {
    return (
        <>
        <h1 className="house">Bostad</h1>
        <PostForm />
        </>
    );
}