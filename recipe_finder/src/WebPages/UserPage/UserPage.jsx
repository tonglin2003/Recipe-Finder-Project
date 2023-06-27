import React, { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import PostNewContent from './PostNewContent/PostNewContent';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

// addNewContent: append a new content to the database, and is being passed on to the PostNewContent.jsx as prop
export default function UserPage({ addNewContent }) {
  return (
    <>
      <Header />
      <div className="d-flex">
        <CDBSidebar style={{ height: "95vh", position: "fixed"}}>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>My Account</CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="fa-solid fa-plus">Post</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="fa-light fa-bowl-food">My Recipe</CDBSidebarMenuItem>
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

        {/* TODO: The function will change to other section based on what was clicked on the sidebar
        possible section: My recipe, my post, my account */}
        <div className="mx-auto" >
          <PostNewContent addNewContent={addNewContent}/>
        </div>
      </div>

      <Footer />
    </>
  );
}
