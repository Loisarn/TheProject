import React from 'react';
import './app.css';
import PostForm from '../API/PostForm.js';

export default function Car() {
    return (
        <>
        <h1 className="car">Fordon</h1>
        <PostForm />
        </>
    );
}