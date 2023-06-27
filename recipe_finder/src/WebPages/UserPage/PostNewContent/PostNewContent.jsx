import React from "react";
import { useState } from "react";
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import "./PostNewContent.css";
import '../../../components/common/Button-74.css'

//addNewContent: add new content to the database, this page has get the data without crossing any other files
// post new content to the database, the form is located here
export default function PostNewContent( {addNewContent} )
{
    const [postType, setPostType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tag, setTags] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const navigate = useNavigate();

    const handleNewPostSubmit = (event) => {
        event.preventDefault();
        // content won't be added into the list for now, but will in the future development
        if (postType === "recipe")
        {
            const newContent = {
                "title": title, 
                "imgUrl": imgUrl,
                "rate": 0,
                "popularity": 0,
                "tag": tag
            }
            alert("I got the request");
            navigate('/');
            addNewContent(newContent);
        }
        else
        {
            alert("Sorry, the blog section is currently unavailable.");
            navigate('/');
        }
    };


    return(
        <>
        <div className="newPostForm">
            <h1>Post new content</h1>
            <h3>Let more people explore about your furry friend</h3>

            <form onSubmit={handleNewPostSubmit}>
                <div className="postContentInput my-4">
                    <label>Post Type:</label>
                    <div>
                        <label className="mx-2">
                            <input
                            type="radio"
                            value="recipe"
                            checked={postType === 'recipe'}
                            onChange={(event) => setPostType(event.target.value)}
                            />
                            Recipe
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="blog"
                            checked={postType === 'blog'}
                            onChange={(event) => setPostType(event.target.value)}
                            />
                            Blog
                        </label>
                    </div>
                </div>
                <div className="postContentInput my-4">
                    <MDBInput label='Title' 
                    type='text' 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="postContentInput my-4">
                    <MDBInput type="text" 
                    label="Image Url"
                    onChange={(event) => setImgUrl(event.target.value)}
                    value = {imgUrl}
                    />
                </div>
                <div className="postContentInput my-4">
                    <MDBTextArea 
                    label='Content' 
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    rows={4} />
                </div>
                <div className="postContentInput my-4">
                <div>
                    <label>Tag: </label>
                        <label className="mx-2">
                            <input
                            type="radio"
                            value="dog"
                            checked={tag === 'dog'}
                            onChange={(event) => setTags(event.target.value)}
                            />
                            Dog
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="cat"
                            checked={tag === 'cat'}
                            onChange={(event) => setTags(event.target.value)}
                            />
                            Cat
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button-74" >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}