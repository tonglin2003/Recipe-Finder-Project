import { useLoaderData,useParams, Form } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';


export default function EditRecipe()
{
    const {recipe} = useLoaderData();

    const [formContent, setFormContent] = useState({
        title: recipe.title,
        content: recipe.content,
        tag: recipe.tag,
        imgUrl: recipe.imgUrl
      });

    const { title, content, tag, imgUrl } = formContent;

    const handleOnChange = (event) => {
        setFormContent((formContent) => ({
          ...formContent,
          [event.target.name]: event.target.value
        }));
      };

      function handleUpdate(){
        alert(formContent.title);
      };



    return (
        <>
        <div className="w-75 mx-auto my-5">
            <h1>Edit Your Post</h1>
            <Form onSubmit={handleUpdate} method="post">                
                <div className="postContentInput my-4">
                    <MDBInput
                    label='Title'
                    value={title}
                    type='text'
                    name='title'
                    onChange={handleOnChange}
                    />
                </div>
                <div className="postContentInput my-4">
                    <MDBInput
                    type="text"
                    label="Image Url"
                    name = 'imgUrl'
                    onChange={handleOnChange}
                    value={imgUrl}
                    />
                </div>
                <div className="postContentInput my-4">
                    <MDBTextArea
                    label='Content'
                    value={content}
                    name='content'
                    onChange={handleOnChange}
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
                        checked={tag === 'dog'}
                        onChange={handleOnChange}
                        />
                        Dog
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="cat"
                        name="tag"
                        checked={tag === 'cat'}
                        onChange={handleOnChange}
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