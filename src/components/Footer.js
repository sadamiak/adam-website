import React from "react";

import facebook from "../img/social/fb.svg";
import twitter from "../img/social/twitter.svg";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Page } from "react-facebook";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="feedContainer">
          <div>
            <FacebookProvider appId="519495091756536" language={"pl_PL"}>
              <Page
                href="https://www.facebook.com/AdamTraczykWiosna/"
                tabs="timeline"
                width="320"
                height="400"
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
              options={{ height: 400, width: 320, borderRadius: 0 }}
              noScrollbar
              lang="pl"
            />
          </div>
        </div>
        <div>
          <a
            href="https://www.facebook.com/AdamTraczykWiosna/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
          >
            <img src={facebook} alt="facebook logo" />
          </a>
          <a href="https://twitter.com/a_traczyk" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <img src={twitter} alt="twitter logo" />
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
