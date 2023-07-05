import { useLoaderData, useParams, Form } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';


export default function EditRecipe()
{
    // loading the recipe based on current recipe id from the loader
    const {recipe} = useLoaderData();


      function handleUpdate(){
        alert("We are updating...");
      }

    return (
        <>
        <div className="w-75 mx-auto my-5">
            <h1>Edit Your Post</h1>
            <Form onSubmit={handleUpdate} method="post">                
                <div className="postContentInput my-4">
                    <MDBInput
                    label='Title'
                    defaultValue={recipe.title}
                    type='text'
                    name='title'
                    />
                </div>
                <div className="postContentInput my-4">
                    <MDBInput
                    type="text"
                    label="Image Url"
                    name = 'imgUrl'
                    defaultValue={recipe.imgUrl}
                    />
                </div>
                <div className="postContentInput my-4">
                    <MDBTextArea
                    label='Content'
                    defaultValue={recipe.content}
                    name='content'
                    rows={4}
                    />
                </div>
                <div className="postContentInput my-4">
                    <div>
                    <label>Tag: </label>
                    <label className="mx-2">
                        <input
                        type="radio"
                        value="dog"
                        name="tag"
                        defaultChecked={recipe.tag === 'dog'}
                        />
                        Dog
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="cat"
                        name="tag"
                        defaultChecked={recipe.tag === 'cat'}
                        />
                        Cat
                    </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button-74" >
                    Save Change
                    </button>
                </div>
            </Form>
        </div>
        </>
    )
    
}