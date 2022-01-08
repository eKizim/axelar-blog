import React, {useEffect} from 'react';
import LastBlogPost from '../../../../components/last_blog_post/LastBlogPost.jsx';
import BlogPost from '../../../../components/blog_post/BlogPost.jsx';
import BlogPostImg from './../../../../images/blog_post_img.png';
import SectionTitle from './../../../../components/section_title/SectionTitle.jsx';
import './BlogSection.scss';

import { articleBase } from '../../../../test_storage/article_examples.jsx';

export default function BlogSection() {
	const lastArticle = articleBase[0];
	const recentPosts = articleBase.slice(1).length === 4 ? articleBase.slice(1) : articleBase.slice(1, 5);
	const renderRecentPosts = recentPosts.map(el => el = <BlogPost key={el.post_id} fromHome clipped post_id={el.post_id} titleImg={el.title_img} title={el.title}/>);

	return (
		<section id="blog_section">
			<SectionTitle title="Blog" buttonText="Read all posts" link="/blog"/>
			<div className="blog_section__container">
				<LastBlogPost fromHome clipped post_id={lastArticle.post_id} title={lastArticle.title} date={lastArticle.date} titleImg={lastArticle.title_img} titleParagraph={lastArticle.title_p}/>
				<div className="recent_posts">
					{renderRecentPosts}
				</div>
			</div>
		</section>
	);
};
