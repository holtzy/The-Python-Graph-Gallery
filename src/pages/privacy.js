import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';

import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription = '<p>About privacy.</p>';

export const Head = () => (
  <SEO title="Privacy" seoDescription="About privacy" />
);

export default function Privacy() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="Privacy" description={chartDescription} />

      <Spacing />

      <Container>
        <h2 id="Quick">&#9201; Privacy</h2>
        <div class="row">
          <p>
            As the owner of this website (the “Site”), python-graph-gallery.com
            (“we” or “us”) understand that your privacy is of critical
            importance. This Privacy Policy describes what information we
            collect from you via the Site and how we use and disclose such
            information.
          </p>
          <h2>Our Use of Cookies</h2>
          <p>
            A cookie is a file containing an identifier (a string of letters and
            numbers) that is sent by a web server to a web browser and is stored
            by the browser. <br />
            The identifier is then sent back to the server each time the browser
            requests a page from the server. Cookies may be either "persistent"
            cookies or "session" cookies: a persistent cookie will be stored by
            a web browser and will remain valid until its set expiry date,
            unless deleted by the user before the expiry date; a session cookie,
            on the other hand, will expire at the end of the user session, when
            the web browser is closed. <br />
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that we store about you
            may be linked to the information stored in and obtained from
            cookies. <br />
            We use cookies for the following purposes: <br />
            (a) [advertising - we use cookies [to help us to display
            advertisements that will be relevant to you]; and <br />
            (b) [analysis - we use cookies [to help us to analyze the use and
            performance of our website and services];
            <br />
            <br />
            We use Google Analytics to analyze the use of our website. Google
            Analytics gathers information about website use by means of cookies.
            The information gathered relating to our website is used to create
            reports about the use of our website.
            <br />
            Google's privacy policy is available at:
            https://www.google.com/policies/privacy/ Most browsers allow you to
            refuse to accept cookies and to delete cookies. <br />
            <br />
            The methods for doing so vary from browser to browser, and from
            version to version. You can however obtain up-to-date information
            about blocking and deleting cookies via these links: <br />
            (a) https://support.google.com/chrome/answer/95647?hl=en (Chrome);
            <br />
            (b)
            https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
            (Firefox);
            <br />
            (c) http://www.opera.com/help/tutorials/security/cookies/ (Opera);
            <br />
            (d)
            https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies(Internet
            Explorer); <br />
            (e) https://support.apple.com/en-gb/guide/safari/sfri11471/mac
            (Safari); and <br />
            (f)
            https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy
            (Edge). <br />
            Please note that blocking cookies may have a negative impact on the
            functions of many websites, including our Site. Some features of the
            Site may cease to be available to you.
          </p>
          <h2>Interest-Based Advertising</h2>
          <h2>Advertising</h2>
          <p>
            This Site is affiliated with CMI Marketing, Inc., d/b/a Raptive
            (“Raptive”) for the purposes of placing advertising on the Site, and
            Raptive will collect and use certain data for advertising purposes.
            To learn more about Raptive's data usage, click here:
            <a href="https://www.cafemedia.com/publisher-advertising-privacy-policy">
              www.cafemedia.com/publisher-advertising-privacy-policy
            </a>
            <br />
          </p>
          <h2>Additional Rights of EEA (European Economic Area) Residents</h2>
          If you are a resident of a country in the EEA, you have the rights,
          among others, to: <br />
          (i) access your personal data <br />
          (ii) ensure the accuracy of your personal data <br />
          (iii) the right to have us delete your personal data <br />
          (iv) the right to restrict further processing of your personal data,
          and <br />
          (v) the right to complain to a supervisory authority in your country
          of residence in the event that data is misused If you believe that our
          processing of your personal information infringes data protection
          laws, you have a legal right to lodge a complaint with a supervisory
          authority responsible for data protection. You may do so in the EU
          member state of your residence, your place of work or the place of the
          alleged infringement. You may exercise any of your rights in relation
          to your personal data by written notice to us addressed to the
          following:
          <h2>Sale of Business or Assets</h2>
          In the event that the Site or substantially all of its assets is sold
          or disposed of as a going concern, whether by merger, sale of assets
          or otherwise, or in the event of an insolvency, bankruptcy or
          receivership, the information we have collected about you may be one
          of the assets sold or merged in connection with that transaction.
          <h2>Changes to the Privacy Policy</h2>
          We may change this Privacy Policy from time to time. The most recent
          version of the Privacy Policy will always be posted on the Site, with
          the "Effective Date" posted at the top of the Policy. We may revise
          and update this Privacy Policy if our practices change, as technology
          changes, or as we add new services or change existing ones. If we make
          any material changes to our Privacy Policy or how we handle your
          personal information, or we are going to use any personal information
          in a manner that is materially different from that stated in our
          Privacy Policy at the time we collected such information, we will give
          you a reasonable opportunity to consent to the change. <br />
          If you do not consent, your personal information will be used as
          agreed to under the terms of the privacy policy in effect at the time
          we obtained that information. By using our Site or services after the
          Effective Date, you are deemed to consent to our then-current privacy
          policy. <br />
          We will use information previously obtained in accordance with the
          Privacy Policy in effect when the information was obtained from you.
          <br />
          <h2>Contacting Us</h2>
          If you have any questions about this Privacy Policy, or the practices
          of this Site, please contact us at yan.holtz.data@gmail.com Or write
          to us at: Rue de l'aiguillerie, 3400 Montpellier France
        </div>
        <br />
        <br />
        <br />
      </Container>

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="distribution" />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />
    </Layout>
  );
}
