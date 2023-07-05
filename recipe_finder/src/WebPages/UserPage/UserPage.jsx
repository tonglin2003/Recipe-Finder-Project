import React, { useState } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import PostNewContent from './PostNewContent/PostNewContent';
import MyRecipe from './MyRecipe/MyRecipe';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';


// addNewContent: append a new content to the database, and is being passed on to the PostNewContent.jsx as prop
export default function UserPage({pageType}) {
  
  //the subPage is a hash map and decides which subpage to call based on the url param
  const subPage = {
    "myrecipe": <MyRecipe/>,
    "post": <PostNewContent/>
  }

  return (
    <>
      <div className="d-flex">
        <CDBSidebar style={{ height: "95vh", position: "fixed"}}>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>My Account</CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <Link to='/user/post'><CDBSidebarMenuItem icon="fa-solid fa-plus">Post</CDBSidebarMenuItem></Link>
              <Link to="/user/myrecipe"><CDBSidebarMenuItem icon="fa-light fa-bowl-food">My Recipe</CDBSidebarMenuItem></Link>
              <CDBSidebarMenuItem icon="fa-regular fa-note-sticky">My Blog</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="fa-regular fa-user">My Account</CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
              User Name
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>

        <div className="mx-auto" >
          {subPage[pageType]}
        </div>
      </div>
    </>
  );
}
