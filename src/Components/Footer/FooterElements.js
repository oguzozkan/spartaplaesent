import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #fff;
  @media screen and (max-width: 820px) {
    font-size: 11px !important;
  }
`;

export const FooterWrap = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  z-index: 1;
`;

export const WebRights = styled.small`
  color: #000;
  margin-bottom: 16px;
  display: block;
`;
export const LinkMedia = styled.a`
  color: #000 !important;

  cursor: pointer;
  &:hover {
    color: #010606 !important;
    transition: 0.3s ease-out;
    opacity: 0.6;
  }
`;
