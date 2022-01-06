import React, {useEffect} from 'react';
import LastBlogPost from '../../../../components/last_blog_post/LastBlogPost.jsx';
import BlogPost from '../../../../components/blog_post/BlogPost.jsx';
import LastBlogPostImg from './../../../../images/blog_post_img.png';
import BlogPostImg from './../../../../images/blog_post_img.png';
import SectionTitle from './../../../../components/section_title/SectionTitle.jsx';
import './BlogSection.scss';

export default function BlogSection() {
	let posts = [<BlogPost clipped/>, <BlogPost clipped/>, <BlogPost clipped/>, <BlogPost clipped/>, <BlogPost clipped/>, <BlogPost clipped/>];

	return (
		<section id="blog_section">
			<SectionTitle title="Blog" buttonText="Read all posts" link="blog"/>
			<div className="blog_section__container">
				<LastBlogPost clipped/>
				<div className="recent_posts">
					{posts}
				</div>
			</div>
		</section>
	);
};
