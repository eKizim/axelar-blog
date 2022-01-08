import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav_bar/NavBar.jsx';
import Announcement from './components/announcement/Announcement.jsx';
import HomePage from './containers/home_page/HomePage.jsx';
import BlogPage, { BlogPostReader } from './containers/blog_page/BlogPage.jsx';
import VideoPage from './containers/video_page/VideoPage.jsx';
import NewsPage from './containers/news_page/NewsPage.jsx';
import Footer from './components/footer/Footer.jsx';
import './style.scss';

import NewsItem from './components/news_item/NewsItem.jsx';

export default function App() {

    return (
        <React.Fragment>
            <NavBar/>
            <Announcement/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/blog" element={<BlogPage/>}>
                    <Route path=":invoiceId" element={<BlogPostReader/>}/>
                </Route>
                <Route path="/video" element={<VideoPage/>}/>
                <Route path="/news" element={<NewsPage/>}>
                    <Route path=":invoiceId" element={<NewsPage/>}/>
                </Route>
                <Route path="*" element={<div>Empty</div>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    );
};
