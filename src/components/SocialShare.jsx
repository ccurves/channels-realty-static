import React from "react";
import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  InstapaperIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const SocialShare = () => {
  const shareMsg = `I ♥ Channels Realty, Join now. Here's the link, ${
    window.location.protocol !== "https" ? "http" : "https"
  }://${window.location.host} #chanreator`;
  return (
    <>
      <div class="col-sm-auto">
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <FacebookShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon bg-white"
            >
              <i class="bi-facebook fs-4"></i>
            </FacebookShareButton>
          </li>

          <li class="list-inline-item">
            <EmailShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon bg-white"
            >
              <i className="bi-google fs-4"></i>
            </EmailShareButton>
          </li>

          <li class="list-inline-item">
            <TwitterShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon bg-white"
            >
              <i class="bi-twitter fs-4"></i>
            </TwitterShareButton>
          </li>

          <li class="list-inline-item">
            <WhatsappShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon bg-white"
            >
              <i className="bi-whatsapp fs-4"></i>
            </WhatsappShareButton>
          </li>

          <li class="list-inline-item">
            <InstapaperShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon bg-white"
            >
              <i className="bi-instagram fs-4"></i>
            </InstapaperShareButton>
          </li>

          <li class="list-inline-item">
            <TelegramShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon bg-white"
            >
              <i className="bi-telegram fs-4"></i>
            </TelegramShareButton>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialShare;
