import React from 'react'
import './ShareOption.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

const ShareOptions = ({ url, title, showOptions }) => {
  if (!showOptions) return null; // Return nothing if options should not be shown
  
  return (
    <div className="share-options">
      <h3>Share this:</h3>
      <div className="share-buttons">
        <FacebookShareButton url={url} quote={title} className="share-button">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} className="share-button">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title} className="share-button">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
      
      <CopyToClipboard text={url}>
        <button className="copy-button">Copy Link</button>
      </CopyToClipboard>
    </div>
  );
};

export default ShareOptions;

