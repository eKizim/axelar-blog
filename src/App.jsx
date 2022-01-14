import React, {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './containers/Layout.jsx';
import HomePage from './containers/home_page/HomePage.jsx';
import BlogPage, { BlogPostReader } from './containers/blog_page/BlogPage.jsx';
import VideoPage from './containers/video_page/VideoPage.jsx';
import NewsPage from './containers/news_page/NewsPage.jsx';
import PressPage from './containers/press_page/PressPage.jsx';
import './style.scss';


export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(navigate);
    });
    

    return (
        <Layout>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/blog" element={<BlogPage/>}>
                <Route path=":invoiceId" element={<BlogPostReader/>}/>
              </Route>
              <Route path="/video" element={<VideoPage/>}/>
              <Route path="/news" element={<NewsPage/>}>
                <Route path=":invoiceId" element={<NewsPage/>}/>
              </Route>
              <Route path="/press" element={<PressPage/>}/>
              <Route path="*" element={<div style={{margin: "50px 0", padding: "0 50px"}}>Wrong path! Please, press some nav button or check adress for typo</div>}/>
            </Routes>
        </Layout>
    );
};
