import React from 'react';
import ShareButtons from '../../components/SocialShare/share.component';

const Blog = () => {
    return (
        <div>
            <ShareButtons url={`https://www.google.com`} title={"Blog Pages"}/>
        </div>
    )
}

export default Blog;