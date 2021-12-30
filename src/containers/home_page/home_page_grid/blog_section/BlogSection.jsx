import React, {useEffect} from 'react';
//import LastBlogPost from './../../../components/last_blog_post/LastBlogPost.jsx';
//import BlogPost from './../../../components/blog_post/BlogPost.jsx';
import LastBlogPostImg from './../../../../images/blog_post_img.png';
import BlogPostImg from './../../../../images/blog_post_img.png';
import SectionTitle from './../../../../components/section_title/SectionTitle.jsx';
import './BlogSection.scss';

export default function BlogSection() {
	let posts = [<BlogPost/>, <BlogPost/>, <BlogPost/>, <BlogPost/>];

	return (
		<section id="blog_section">
			<SectionTitle title="Blog" buttonText="Read all posts"/>
			<div className="blog_section__container">
				<LastBlogPost/>
				<div className="recent_posts">
					{posts}
				</div>
			</div>
		</section>
	);
};

function LastBlogPost() {
	return (
		<div className="last_blog_post">
			<a className="last_blog_post__img">
				<img src={LastBlogPostImg} alt=""/>
			</a>
			<div className="last_blog_post__info">
				<a className="last_blog_post__info-title" href="">Title for test</a>
				<p className="last_blog_post__info-date">29.12.2021</p>
				<p className="last_blog_post__info-intro">Description for test Description for test Description for test Description for test Description for test</p>
			</div>
		</div>
	);
};

function BlogPost() {
	let testTitle = "Title for tests";
	let testPar = "Paragraph for tests";

	return (
    <div className="blog_post">
			<a className="blog_post__img" href="#">
				<img src={BlogPostImg} />
			</a>
			<div className="blog_post__info">
				<a href="#">{testTitle}</a>
				<p>{testPar}</p>
			</div>
		</div>
	);
};
