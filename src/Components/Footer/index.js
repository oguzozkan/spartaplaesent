import React from "react";

import {
  FooterContainer,
  FooterWrap,
  WebRights,
  LinkMedia,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <WebRights>
          © 2021 — SPARTA PLAESENT -
          <LinkMedia href="https://www.instagram.com"> INSTAGRAM</LinkMedia>-
          <LinkMedia href="https://www.facebook.com"> FACEBOOK </LinkMedia>-
          <LinkMedia href="https://www.twitter.com"> TWITTER</LinkMedia>
        </WebRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
