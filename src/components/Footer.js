import React from "react";

import facebook from "../img/social/face.svg";
import twitter from "../img/social/twitty.svg";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Page } from "react-facebook";

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
          </div>
          <div className="feedContainer">
            <div>
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
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
