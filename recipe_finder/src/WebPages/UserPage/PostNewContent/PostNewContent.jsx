import React, { useState } from "react";
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import "./PostNewContent.css";
import '../../../components/common/Button-74.css';

export default function PostNewContent({ addNewContent }) {
  const [formContent, setFormContent] = useState({
    postType: "",
    title: "",
    content: "",
    tag: "",
    imgUrl: ""
  });

  const { postType, title, content, tag, imgUrl } = formContent;

  const handleOnChange = (event) => {
    setFormContent((formContent) => ({
      ...formContent,
      [event.target.name]: event.target.value
    }));
  };

  const navigate = useNavigate();

  // main function with the logic flow for posting new recipe!
  const handleNewPostSubmit = async (event) => {
    event.preventDefault();
    if (postType === "recipe") {
      alert("Your recipe was added!");
      const response = await fetch("http://localhost:3000/recipe",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formContent),
      });

      const newRecipe = await response.json();
      alert(newRecipe);
      //navigate('/'); // nav the user to the homepage


    } else {
      alert("Sorry, the blog section is currently unavailable.");
      navigate('/');
    }
  };

  return (
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
                  name="postType"
                  checked={postType === 'recipe'}
                  onChange={handleOnChange}
                />
                Recipe
              </label>
              <label>
                <input
                  type="radio"
                  value="blog"
                  name="postType"
                  checked={postType === 'blog'}
                  onChange={handleOnChange}
                />
                Blog
              </label>
            </div>
          </div>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}