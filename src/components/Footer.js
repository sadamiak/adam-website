import React from "react";

import facebook from "../img/social/face.svg";
import twitter from "../img/social/twitty.svg";
import instagram from "../img/social/inst.svg";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Page } from "react-facebook";
import ReactInstagramFeed from "react-instagram-feed";

const InstagramWrapper = ({ children }) => <div className="instagramWrapper">{children}</div>;

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerContainer">
          <div>
            <h3
              style={{
                marginBottom: `35px`,
              }}
            >
              Znajdziesz na mnie na
            </h3>
            <div className="footerSMContainer">
              <a
                href="https://www.facebook.com/AdamTraczykWiosna/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
              >
                <img src={facebook} alt="facebook logo" />
                <span>facebook.com/AdamTraczykWiosna</span>
              </a>
            </div>
            <div className="footerSMContainer">
              <a href="https://twitter.com/a_traczyk" target="_blank" rel="noopener noreferrer" className="socialIcon">
                <img src={twitter} alt="twitter logo" />
                <span>twitter.com/a_traczyk</span>
              </a>
            </div>
            <div className="footerSMContainer">
              <a
                href="https://www.instagram.com/adam_traczyk"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
              >
                <img src={instagram} alt="instagram logo" />
                <span>instagram.com/adam_traczyk</span>
              </a>
            </div>
          </div>
          <div className="feedContainer">
            <div
              style={{
                borderRadius: `5px`,
                overflow: `hidden`,
              }}
            >
              <FacebookProvider appId="519495091756536" language={"pl_PL"}>
                <Page
                  href="https://www.facebook.com/AdamTraczykWiosna/"
                  tabs="timeline"
                  width="270"
                  height="340"
                  small-header="false"
                  adapt-container-width="true"
                  hide-cover="false"
                  show-facepile="true"
                />
              </FacebookProvider>
            </div>
            <div>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="a_traczyk"
                options={{ height: 340, width: 270, borderRadius: 0 }}
                noScrollbar
                lang="pl"
              />
            </div>
            <div className="instagramFeed">
              <div className="instagramHeader">
                Instagram
                <span>
                  <a
                    href="https://www.instagram.com/adam_traczyk"
                    title="‎adam_traczyk na Instagramie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adam_traczyk
                  </a>
                </span>
              </div>
              <ReactInstagramFeed
                accessToken="9231828848.1677ed0.2022f4cc695a48d7a109f57a582d3a72"
                count={6}
                type="user"
                param="self"
                resolution="thumbnail"
                showButton={false}
                wrapper={InstagramWrapper}
                hasLink
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
