import React from 'react';
import LastBlogPost from '../../components/last_blog_post/LastBlogPost.jsx';
import BlogPost from '../../components/blog_post/BlogPost.jsx';
import './BlogPage.scss';

export default function BlogPage() {
	return (
		<section id="blog_page">
			<BlogPostReader/>
			<h5 className="section_title">Axelar blog</h5>
			<LastBlogPost/>
			<div className="blog_page__grid">
				<BlogPost/>
				<BlogPost/>
				<BlogPost/>
				<BlogPost/>
				<BlogPost/>
				<BlogPost/>
				<BlogPost/>
				<BlogPost/>
				<BlogPost/>
			</div>
		</section>
	);
};

function BlogPostReader() {

	const closePost = () => {
		document.querySelector('.reader_modal-background').classList.remove('active');
	}

	return (
		<div className="reader_modal-background">
			<button className="close_modal" onClick={closePost}>X</button>
			<article className="post_reader">
				<p>Test</p>
			</article>
		</div>
	);
};