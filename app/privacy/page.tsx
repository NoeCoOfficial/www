import Content from "@/components/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <Content>
      <h1>Privacy Policy</h1>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>What we collect:</strong> Basic contact info when you reach
          out, website analytics via PostHog, and technical data for site
          performance
        </li>
        <li>
          <strong>What we don't do:</strong> We never sell, rent, or trade your
          personal information
        </li>
        <li>
          <strong>Third-party services:</strong> We use PostHog for analytics,
          Cloudflare for security, and link to GitHub, Discord, and YouTube
        </li>
        <li>
          <strong>Your data, your rights:</strong> You can access, correct, or
          delete your information - just contact us
        </li>
        <li>
          <strong>External platforms:</strong> When you use GitHub, Discord,
          YouTube, or other linked services, their privacy policies apply too
        </li>
      </ul>
      <p>
        <em>
          For complete details, please read the full privacy policy below.
        </em>
      </p>

      <h2>Full Privacy Policy</h2>
      <p>
        <strong>Effective Date:</strong> 20/8/2025
      </p>

      <h2>Introduction</h2>
      <p>
        At Noe Co, we are committed to protecting your privacy and being
        transparent about how we collect, use, and share information about you.
        This Privacy Policy explains our practices regarding the personal
        information we collect through our website, games, and services.
      </p>

      <h2>Information We Collect</h2>

      <h3>Information You Provide Directly</h3>
      <ul>
        <li>
          Contact information when you reach out to us via email or other
          communication channels
        </li>
        <li>Feedback, comments, or other content you submit to us</li>
        <li>
          Information you provide when participating in our community
          discussions
        </li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <ul>
        <li>
          <strong>Analytics Data:</strong> We use PostHog to collect analytics
          information about how visitors use our website, including pages
          visited, time spent, and general usage patterns
        </li>
        <li>
          <strong>Technical Information:</strong> IP addresses, browser type,
          device information, and other technical data
        </li>
        <li>
          <strong>Performance Data:</strong> Information about website
          performance and errors
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and improve our games and services</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>
          Analyze website usage and performance to improve user experience
        </li>
        <li>
          Communicate with you about updates, news, and other relevant
          information
        </li>
        <li>Ensure the security and proper functioning of our services</li>
      </ul>

      <h2>Information Sharing and Disclosure</h2>
      <p>
        We do not sell, rent, or trade your personal information to third
        parties. We may share information in the following circumstances:
      </p>
      <ul>
        <li>
          <strong>Service Providers:</strong> We share information with trusted
          service providers who help us operate our business (such as PostHog
          for analytics)
        </li>
        <li>
          <strong>Legal Requirements:</strong> When required by law or to
          protect our rights and safety
        </li>
        <li>
          <strong>Business Transfers:</strong> In connection with any merger,
          acquisition, or sale of assets
        </li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        Our website and services integrate with/link to several third-party
        platforms:
      </p>

      <h3>PostHog Analytics</h3>
      <p>
        We use PostHog to collect and analyze website usage data. PostHog helps
        us understand how users interact with our site to improve the user
        experience. For more information about PostHog's privacy practices,
        please review their{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h3>Cloudflare</h3>
      <p>
        Our website traffic is proxied through Cloudflare for security and
        performance purposes. Cloudflare may collect certain information as part
        of providing these services. Please review Cloudflare's{" "}
        <a
          href="https://www.cloudflare.com/privacypolicy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        for more information.
      </p>

      <h3>GitHub</h3>
      <p>
        We host our code repositories and may provide download links through
        GitHub. When you access our GitHub repositories, GitHub's privacy policy
        applies. Please review GitHub's{" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Statement
        </a>
        .
      </p>

      <h3>Discord</h3>
      <p>
        We may provide links to our Discord community. Any information you share
        on Discord is subject to Discord's privacy policy. Please review
        Discord's{" "}
        <a
          href="https://discord.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        before participating.
      </p>

      <h3>YouTube</h3>
      <p>
        We may link to our YouTube channel or embed YouTube content. Your
        interactions with YouTube content are governed by Google's privacy
        policy. Please review Google's{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal information against unauthorized access,
        alteration, disclosure, or destruction. However, no method of
        transmission over the internet or electronic storage is 100% secure.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfill
        the purposes for which it was collected, comply with legal obligations,
        resolve disputes, and enforce our agreements.
      </p>

      <h2>Your Rights and Choices</h2>
      <p>
        Depending on your location, you may have certain rights regarding your
        personal information, including:
      </p>
      <ul>
        <li>The right to access the personal information we have about you</li>
        <li>The right to correct inaccurate information</li>
        <li>The right to delete your personal information</li>
        <li>The right to restrict or object to certain processing</li>
        <li>The right to data portability</li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        Our services are not directed to children under the age of 13. We do not
        knowingly collect personal information from children under 13. If we
        become aware that we have collected personal information from a child
        under 13, we will take steps to delete such information.
      </p>

      <h2>International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other
        than your own. We ensure that such transfers are conducted in accordance
        with applicable data protection laws.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any material changes by posting the updated policy on our website and
        updating the effective date. We encourage you to review this Privacy
        Policy periodically.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our privacy
        practices, please contact us through our available communication
        channels.
      </p>
    </Content>
  );
}
