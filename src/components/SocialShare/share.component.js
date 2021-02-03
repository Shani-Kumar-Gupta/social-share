import React from 'react';
import './social.css';

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    LinkedinIcon,
    LinkedinShareButton
} from 'react-share';

const ShareButtons = ({title, url}) => {
    return (
        <div className="SocialShare">
            <EmailShareButton url={url} title={title}>
                <EmailIcon size={40}/>
            </EmailShareButton>

            <FacebookShareButton url={url} title={title}>
                <FacebookIcon  size={40}/>
            </FacebookShareButton>

            <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40}/>
           </WhatsappShareButton>

           <LinkedinShareButton url={url} title={title}>
               <LinkedinIcon size={40}/>
           </LinkedinShareButton>
        </div>
    )
}

export default ShareButtons;