import RulesPage from "@/modules/RulesPage";

export default async function Page({ params }) {
  const { locale } = await params;

  const data = {
    rules: [
      {
        title: "Privacy Policy",
        description: `<h1>Privacy Policy</h1><br>
          <p>WM xSchool (operated by Wemark LLC, hereinafter referred to as "xSchool," "we," "us," or "our") values your privacy and is committed to complying with all applicable data protection and privacy regulations. You can explore our platform without revealing any personally identifiable information. At xSchool, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website, learning platform, or any related services. Please review the details below alongside our Terms and Conditions to understand how your information is managed.</p><br><br>
          <h2>Information We Collect</h2><br>
          <p>We collect and process your personal information only with your knowledge and consent. This typically happens when you:<br><br>
          <p>Register for our programs or events</p><br>
          <p>Submit inquiries or request updates</p><br>
          <p>Complete forms, feedback, or surveys</p><br>
          <p>Interact with our communications, website, or learning portal</p><br>
          <p>The types of personal data we may collect include (but are not limited to):</p><br>
          <p>Full name, email address, phone number, and other contact details you provide</p><br>
          <p>Technical data such as IP address, browser type, and device information</p><br>
          <p>Usage data to improve your experience on our site</p><br>
          <p>Preferences or educational background shared during enrollment or surveys</p><br>
          <p>Uploaded files such as documents or media shared via our platform</p><br>
          <p>By providing us with your personal information, you consent to its processing in accordance with this Privacy Policy.</p><br>
          <h2>Use of Your Information</h2><br>
          <p>Your data may be used to:</p><br><br>
          <p>Provide and improve our educational programs and services</p><br><br>
          <p>Personalize your experience on our platform</p><br><br>
          <p>Communicate with you regarding program updates, events, or feedback</p><br><br>
          <p>Ensure legal compliance, including responding to legitimate requests from authorities</p><br><br>
          <p>Analyze trends, measure performance, and enhance user experience</p><br><br>
          <p>We do not sell or misuse your personal information. Any data sharing will only occur for legitimate educational, operational, or legal purposes in alignment with this policy.<br><br>
          <h2>Data Security</h2><br>
          <p>xSchool uses industry-standard security measures to protect your data from unauthorized access, misuse, or alteration. However, due to the nature of the internet, no online transmission can be guaranteed 100% secure. Please use caution when sharing personal information online, especially over unsecured channels.</p><br><br>
          <h2>Your Rights</h2><br>
          <p>You have the right to:</p><br><br>
          <p>Access the personal data we hold about you</p><br><br>
          <p>Request correction or deletion of your information</p><br><br>
          <p>Opt out of non-essential communications</p><br><br>
          <h2>Policy Updates</h2><br>
          <p>We may update this Privacy Policy periodically to reflect changes in laws or how we operate. Continued use of the xSchool platform implies your acceptance of any revised terms.</p>
        `,
      },
      {
        title: "Terms & Conditions",
        description: `<h1>Terms and Conditions</h1><br>
          <h2>Intellectual Property</h2><br>
          <p>All content on this website—including text, images, videos, graphics, and learning materials—is the intellectual property of Wemark LLC unless otherwise stated.
          Reproduction, distribution, modification, or reuse of any material without prior written permission is strictly prohibited.</p><br><br>
          <p>You may view and download course materials solely for your personal, educational, and non-commercial use within the scope of the programs offered by WM xSchool.</p><br><br>
          <h2>Proper Use</h2><br>
          <p>You agree to use the WM xSchool platform responsibly and lawfully.</p><br><br>
          <p>Users must not:</p><br><br>
          <p>Upload or share harmful, unlawful, or misleading content;</p><br><br>
          <p>Attempt to gain unauthorized access to our systems or data;</p><br><br>
          <p>Disrupt or damage the website’s functionality or security.</p><br><br>
          <p>WM xSchool reserves the right to restrict or terminate access for users who violate these terms or misuse the platform.</p><br><br>
          <h2>Disclaimer</h2><br>
          <p>All information, materials, and resources provided through WM xSchool are for educational purposes only.</p><br><br>
          <p>While we strive for accuracy, we make no guarantees about the completeness or reliability of any content.</p><br><br>
          <p>WM xSchool shall not be held liable for any direct or indirect damages arising from the use or inability to use our platform or third-party links.</p><br><br>
          <h2>Third-Party Links</h2><br>
          <p>Our website may contain links to third-party websites or services.</p><br><br>
          <p>WM xSchool is not responsible for the content, privacy practices, or operations of these external sites. Accessing them is at your own risk.</p><br><br>
          <h2>Changes to Terms</h2><br>
          <p>We may update these Terms and Conditions periodically to reflect operational, legal, or educational changes.</p><br><br>
          <p>Continued use of the WM xSchool platform after updates means you accept the revised terms.</p><br><br>
          <h2>Governing Law</h2><br>
          <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Azerbaijan.</p><br><br>
          <p>Any disputes shall be resolved under the exclusive jurisdiction of the relevant courts of Azerbaijan.</p><br><br>
          <p>For any questions, suggestions, or concerns regarding these Privacy & Terms and Conditions, please contact us at: info@wmx.school</p>
        `,
      },
    ],
  };

  const links = [`/privacy`, `/terms`];

  return <RulesPage data={data} activeIndex={0} links={links} />;
}


