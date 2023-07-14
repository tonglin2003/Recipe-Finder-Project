import React, { useState } from "react";
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate, Form } from "react-router-dom";
import "./PostNewContent.css";
import '../../../components/common/Button-74.css';

export default function PostNewContent() {
  return (
    <>
      <div className="newPostForm">
        <h1>Post new content</h1>
        <h3>Let more people explore about your furry friend</h3>

        <Form method="post">
          <div className="postContentInput my-4">
            <label>Post Type:</label>
            <div>
              <label className="mx-2">
                <input
                  type="radio"
                  value="recipe"
                  name="postType"
                />
                Recipe
              </label>
              <label>
                <input
                  type="radio"
                  value="blog"
                  name="postType"
                />
                Blog
              </label>
            </div>
          </div>
          <div className="postContentInput my-4">
            <MDBInput
              label='Title'
              type='text'
              name='title'
              required
            />
          </div>
          <div className="postContentInput my-4">
            <MDBInput
              type="text"
              label="Image Url"
              name = 'imgUrl'
              required
            />
          </div>
          <div className="postContentInput my-4">
            <MDBTextArea
              label='Content'
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
                />
                Dog
              </label>
              <label>
                <input
                  type="radio"
                  value="cat"
                  name="tag"
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
        </Form>
      </div>
    </>
  );
}