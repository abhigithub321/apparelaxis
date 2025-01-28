import React from "react";
import styled from "styled-components";
import { space, layout, color, typography } from "styled-system";

// Styled-components for Footer
const FooterContainer = styled.footer`
  background-color: #212529;
  color: #ffffff;
  padding: 2rem 1rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1rem;
`;

const SectionTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  ${typography}
`;

const SectionText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  ${typography}
`;

const FooterLink = styled.a`
  display: block;
  font-size: 0.875rem;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
    color: #ffc107;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0 0.5rem;

  &:hover {
    color: #ffc107;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1.5rem;
  color: #cccccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        {/* About Section */}
        <FooterColumn>
          <SectionTitle>About Us</SectionTitle>
          <SectionText>
            We are a leading textile e-commerce platform offering premium fabrics and garments at competitive prices.
          </SectionText>
        </FooterColumn>

        {/* Quick Links */}
        <FooterColumn>
          <SectionTitle>Quick Links</SectionTitle>
          <FooterLink href="/shop">Shop</FooterLink>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
          <FooterLink href="/faq">FAQs</FooterLink>
        </FooterColumn>

        {/* Contact Section */}
        <FooterColumn>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>123 Textile Street, Fabric City, TX 12345</SectionText>
          <SectionText>+1 (234) 567-890</SectionText>
          <SectionText>support@textilehub.com</SectionText>
        </FooterColumn>
      </FooterSection>

      {/* Social Media Links */}
      <FooterSocial>
        <SocialLink href="https://facebook.com">
          <i className="bi bi-facebook"></i>
        </SocialLink>
        <SocialLink href="https://instagram.com">
          <i className="bi bi-instagram"></i>
        </SocialLink>
        <SocialLink href="https://twitter.com">
          <i className="bi bi-twitter"></i>
        </SocialLink>
        <SocialLink href="https://linkedin.com">
          <i className="bi bi-linkedin"></i>
        </SocialLink>
      </FooterSocial>

      {/* Copyright */}
      <Copyright>&copy; {new Date().getFullYear()} TextileHub. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
