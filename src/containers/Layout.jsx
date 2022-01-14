import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav_bar/NavBar.jsx';
import Announcement from '../components/announcement/Announcement.jsx';
import Footer from '../components/footer/Footer.jsx';
import SubForm from '../components/sub_form/SubForm.jsx';

export default function Layout({children}) {
    return (
        <React.Fragment>
            <NavBar/>
            <Announcement/>
            {children}
            <SubForm/>
            <Footer/>
        </React.Fragment>
    );
};
