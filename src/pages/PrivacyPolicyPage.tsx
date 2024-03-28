"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import { Stack, ThemeProvider } from '@mui/material';
import { themeDark, themeGradients } from '@/theme/theme';
import Navbar from '@/components/Navbar';

export default function PrivacyPolicyPage() {
  return (
    <>
      <ThemeProvider theme={themeDark}>
        <Stack
          sx={{
            background: themeGradients.heroGradient,
            // minHeight: '100vh',
            justifyContent: 'space-between'
          }}>
          <Navbar />
        </Stack>
      </ThemeProvider>

      <SectionContainer withoutAnimation={true}>
        <Stack>
          <Typography variant="h4" sx={{ marginBottom: 2, maxWidth: { xs: "1350px" }, textAlign: 'center' }}>
            PRIVACY POLICY
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 9, maxWidth: { xs: "1350px" }, textAlign: 'center' }}>
            Last updated: 11/21/2023
          </Typography>

          <p>Financial Freedom Fighters, Inc. d/b/a paraplanner.ai (“paraplanner.ai”, “we”, “us” or “our”) is committed to respecting your privacy.  This Privacy Policy explains our practices regarding the collection, use, and disclosure of information that you (“you” or “user”) may provide to us through your use of our website at <a href="https://www.paraplanner.ai" target="_blank">https://www.paraplanner.ai</a> (the “Website”) and all of its sub-domains, the platform at <a href="https://app.paraplanner.ai" target="_blank">https://app.paraplanner.ai</a>, which we also make available through the Website (the “Platform”), and any related services, social media pages and apps  (the Website and Platform, together with any related services, social media pages and apps, are collectively referred to as our “Services”). </p>
          <p>By visiting, accessing and/or using our Services you agree to be bound by this Privacy Policy.  If you do not agree to the terms of this Privacy Policy, please do not use the Services.  Each time you use the Services, the current versions of this Privacy Policy will apply.  </p>



          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>INFORMATION WE COLLECT AND HOW WE USE IT</Typography>
          <p>We collect two types of information from users of our Services: “Personal Information,” which is information that can be used to identify you (such as your name or your email address), and “Aggregate Information,” which is information that cannot be used to identify you (such as frequency of visits to the Website and Platform or your browser type).</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>INFORMATION YOU PROVIDE TO US</Typography>
          <p>We collect Personal Information that you voluntarily provide to us when you use our Services.  For example, you may provide us with your contact information, your name, the content of your communication, or other Personal Information when you choose to send it to us through email, an online form, when engaging with our conversational artificial intelligence tools, or other method.   If you interact with us on social media, we may collect your social media profile information, your communications with us, and your communications and posts on our social media pages.</p>
          If you choose to link your User Systems (as described in more detail below) to the Platform, we may collect Provided Data from Data Sources designated by you, which may include Personal Information of your clients.  You may also provide us client information (including the Personal Information of your clients) directly by email, online forms, or other methods, which shall be deemed Provided Data (as described below).
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>REGISTRATION INFORMATION</Typography>
          <p>In order to use the Platform, you must first complete our registration process.  During registration you are required to provide truthful contact information (such as first and last name, email address, and LinkedIn profile name). We use this information to verify your identity, to set up your account, and to communicate with you.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>USER SYSTEMS & PROVIDED DATA</Typography>
          <p>When using the Services, you will have the opportunity to link your business systems and tools (such as your CRM, brokerage accounts, and other technology solutions) (collectively, “User Systems”) to your paraplanner.ai account in order to authorize and enable the Services to retrieve certain materials, information and data, including, but not limited to, client communications, client information and client documents (“Provided Data”) from you and from the banks, financial institutions and other service providers that maintain Provided Data on your behalf (“Data Sources”).  We will use Provided Data solely to provide Services to you.</p>
          <p>paraplanner.ai links to User Systems by utilizing API connections with the Data Sources or by utilizing your log-in credentials that you voluntarily provide to us to such User Systems for this purpose (“User Credentials”).  If you choose to share your User Credentials with paraplanner.ai, we will arrange for you to do so in a secure manner and we will only retain such User Credentials for so long as is necessary to provide you Services.</p>
          <p>You will have the ability to unlink User Systems from the Services at any time, and upon your written request, we will promptly and permanently delete your Provided Data in paraplanner.ai’s possession. As a general business practice, we strive to delete your Provided Data as soon as it is no longer needed to provide Services to you; however, we may need to retain certain information (including but limited to Personal Information): (i) to comply with a legal requirement, law, subpoena, judicial proceeding, court order, governmental request, or legal process; (ii) to investigate a possible crime, such as fraud or identity theft; or (iii) when we believe it is necessary to protect the rights, property, or safety of paraplanner.ai or other persons.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>PAYMENT INFORMATION</Typography>
          <p>We work with a third party payment processor called Stripe to process credit and debit card transactions for any one-time or recurring payment authorized by you through the Platform for subscription fees for the Services.  Your credit or debit card information is never shared with us, and at no point in any transaction do we have access to that information.  You should consult Stripe’s policies to learn more about how it processes credit and debit card transactions for us by visiting <a href="https://stripe.com/privacy" target='_blank'>https://stripe.com/privacy</a>.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>YOUR COMMUNICATION WITH US</Typography>
          <p>We collect information when you communicate with us. The specific types of information we collect will depend on the forum in which you communicate with us.  For example, if you send us an email, we will collect your email address and the content of your email.</p>
          <p>Our artificial intelligence tools will also generate draft email communications for you based on instructions and data provided to our Services.   We may collect any modifications or amendments made by you to outputs generated by our Services.  For example, if you edit an email that our artificial intelligence tools assist in drafting, we may collect the content of those edits.</p>

          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>INFORMATION WE AUTOMATICALLY COLLECT</Typography>
          <p>
            When you use our Website and Platform, we automatically receive and collect information from your device.  This information includes the following:
          </p>
          <ul>
            <li>Information about your device, such as the Internet Protocol (IP) address and device ID.</li>
            <li>The specific actions that you take when you use our Website and/or Platform, including but not limited to the pages and screens that you view or visit, search terms that you enter, and how you interact with our Website and Platform.</li>
            <li>The time, frequency, connection type, and duration of your use of our Website and Platform.</li>
            <li>Information regarding your interaction with email messages, for example, whether you opened, clicked on, or forwarded the email message.</li>
            <li>Identifiers associated with cookies or other technologies that may uniquely identify your device or browser (as further described below).</li>
            <li>Pages you visited before or after navigating to our Website and/or Platform.</li>
          </ul>


          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>AGGREGATE INFORMATION COLLECTED</Typography>
          <p>Aggregate Information is information that does not identify you.  Aggregate Information may be collected when you use our Services, independent of any information you voluntarily enter. Additionally, we may use one or more processes to de-identify information that contains Personal Information, such that only Aggregate Information remains.  We may collect, use, store, and transfer Aggregate Information without restriction (subject to applicable law).</p>

          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>COOKIES AND ANALYTICS</Typography>
          <p>
            Like most websites, our Website and Platform may use “cookies.”  Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive through your web browser to help us identify you when you come to our Website and Platform.  Our Website and Platform collect cookies and may use cookies for reasons including, but not limited to:
          </p>
          <ul>
            <li>Analyzing our web traffic using an analytics package.</li>
            <li>Identifying if you are signed in to the Website or Platform.</li>
            <li>Testing content on the Website or Platform.</li>
            <li>Storing information about your preferences.</li>
            <li>Recognizing when you return to the Website or Platform.</li>
          </ul>
          <p>Overall, cookies help us provide you with a better experience with our Services by enabling us to monitor which pages you find useful and which you do not.  A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.  You can choose to accept or decline cookies.  Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.  This setting may prevent you from taking full advantage of the Services.</p>
          <p>We may use third parties, such as Google Analytics or other analytics providers, to analyze traffic to our Website and Platform. Google Analytics does not create individual profiles for visitors and only collects aggregate data. To disable Google Analytics, please download the browser add-on for the deactivation of Google Analytics provided by Google at <a href="http://tools.google.com/dlpage/gaoptout?hl=en" target='_blank'>http://tools.google.com/dlpage/gaoptout?hl=en</a>. To learn more about privacy and Google Analytics, please consult the Google Analytics overview provided by Google at <a href="http://www.google.com/intl/en/analytics/privacyoverview.html" target='_blank'>http://www.google.com/intl/en/analytics/privacyoverview.html</a>.</p>
          <p>We may also use cookies, pixels, beacons, or other web tracking technologies to track the amount of time spent on our Website and/or Platform and whether or not certain content was viewed. We may work with a third party to collect and process this information for us, based on our instructions and in compliance with this Privacy Policy.  We are currently working with a third party analytics provider called MixPanel, whose policies are available here: <a href="https://mixpanel.com/legal/contact-us" target="_blank">https://mixpanel.com/legal/contact-us</a>.</p>
          <p>Although we do our best to honor the privacy preferences of our visitors and users, we are not able to respond to Do Not Track signals from your browser.</p>

          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>HOW WE USE YOUR INFORMATION</Typography>
          <p>
            Our use of your information and Provided Data (including any Personal Information) is subject to state and other applicable laws regarding information use, disclosure and retention. In general, however, we use information to provide our Services, operate paraplanner.ai, communicate with you, and provide products, services, and information that you request from us.  This includes but is not limited to the following:
          </p>
          <ul>
            <li>Providing, operating, improving, maintaining, and protecting our Services, including the safety and security thereof.</li>
            <li>Establishing your paraplanner.ai account if you create one.</li>
            <li>Providing personalized products and services to you.</li>
            <li>Enhancing or improving your user experience.</li>
            <li>Providing you with technical and other support.</li>
            <li>Sending you updates, communications, and other information about paraplanner.ai, our Services, and about products and services of third parties that we think you may be interested in.</li>
            <li>Sending you notices and alerts.</li>
            <li>Conducting research, analytics, and monitoring and analyzing trends and usage.</li>
            <li>Contacting you and responding to your inquiries.</li>
            <li>As necessary to comply with any applicable law, regulation, subpoena, legal process, or governmental request.</li>
            <li>Enforcing contracts, including investigation of potential violations thereof.</li>
            <li>Detecting, preventing, or otherwise addressing fraud, security or technical issues.</li>
            <li>Protecting against harm to the rights, property or safety of paraplanner.ai, our users, or the public as required or permitted by law.</li>
          </ul>

          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>HOW WE SHARE YOUR INFORMATION</Typography>
          <p><b><i>We do not rent or sell your Personal Information.</i></b></p>
          <p>We share information, including Personal Information, in certain circumstances with third parties through operation of our Services.  Below we explain when that happens.  We also disclose information and Personal Information when required by applicable law.</p>


          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>SERVICE PROVIDERS</Typography>
          <p>We may transfer Personal Information to third parties for the purpose of providing the Services or operating our business.  For example, we may transfer your Personal Information to non-affiliated third-party service providers to assist with providing the Platform, to enable certain artificial intelligence functionality layers (“AI Enablement”) within the Platform, or to communicate with you.</p>
          <p>
            To learn more about paraplanner.ai’s current AI Enablement provider, GPT-4. please review these policies:
          </p>
          <ul>
            <li>GPT-4’s usage policies are found at https://openai.com/policies/usage-policies</li>
            <li>GPT-4’s terms of service is found at https://openai.com/policies</li>
          </ul>
          <p>By using our Services, you acknowledge and agree to GPT-4’s terms and conditions, and that any use, storage or processing of Provided Data and other information provided by you  shall be subject to GPT-4’s policies,  We will use commercially reasonable efforts to identify any changes to our AI Enablement provider and its associated terms and conditions by posting this information within the Services; however, you acknowledge that a service provider’s terms and conditions may change from time to time, and that it is your responsibility to check the terms and conditions of GPT-4 and our other identified service providers regularly to ensure continued compliance.</p>

          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>REQUIRED TRANSFERS</Typography>
          <p>We may also transfer your Personal Information to third parties under the following circumstances: (i) to comply with a legal requirement, law, subpoena, judicial proceeding, court order, governmental request, or legal process; (ii) to investigate a possible crime, such as fraud or identity theft; (iii) when we believe it is necessary to protect the rights, property, or safety of paraplanner.ai or other persons, or (iv) as otherwise required or permitted by law, including any contractual obligations of paraplanner.ai.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>AS DIRECTED BY YOU AND WITH YOUR CONSENT</Typography>
          <p>We also share Personal Information with companies, agencies, organizations or individuals outside of paraplanner.ai at your direction or when we have your consent to do so.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>HOW DO WE PROTECT YOUR INFORMATION</Typography>
          <p>We take the security of your Personal Information very seriously.  We use reasonable administrative, physical, and technical safeguards to secure the Personal Information you share with us.  Despite these safeguards and our additional efforts to secure your information, we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your Personal Information.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>THIRD-PARTY WEBSITES</Typography>
          <p>The Services may contain hyperlinks to websites operated by third parties, which may include social media features, such as social media buttons or links.  We provide such hyperlinks for your reference and convenience only.  We do not control such websites and are not responsible for their content or the privacy or other practices of such websites.  It is up to you to read and fully understand their privacy policies.  Our inclusion of hyperlinks to such websites does not imply any endorsement of the material on such websites.  If you are submitting information to any such third party, you should review and understand that party’s applicable policies, including their privacy policies, before providing your information to the third-party.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>INTERNATIONAL VISITORS</Typography>
          <p>Our Services are hosted in the United States.  If you use our Services from the United Kingdom, European Union or other regions of the world with laws governing data collection and use that may differ from the laws of the United States, then please note that by sending an email or other communication containing Personal Information or by providing Personal Information through our Services, you are assuming the risk of doing so and are voluntarily transferring your Personal Information outside of those regions to the United States and other countries.</p>

          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>OPT OUT</Typography>
          <p>If you no longer wish to receive our marketing and promotional communications, you may opt out by following the instructions included in each communication.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>CHILDREN'S PRIVACY</Typography>
          <p>Our Services are not intended for use by children under the age of 13 and we do not knowingly collect Personal Information from children under the age of 13 in connection with the Services.</p>
          <p>To the extent that any Provided Data includes information about children under the age of 18, paraplanner.ai will only collect, transmit, store and process such information in connection with providing Services to you.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>CHANGES TO OUR PRIVACY POLICY</Typography>
          <p>We reserve the right to amend this Privacy Policy at any time without any prior notice to you.  Each time you use our Services the current version of this Privacy Policy will apply.  When you use our Services, we encourage you to check the dates of the Privacy Policy and review any changes since the last version.</p>
          <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 1, textDecoration: 'underline' }}>QUESTIONS</Typography>
          <p>If you have any questions about this Privacy Policy, or our privacy practices, please contact us at <a href="mailto:hello@paraplanner.ai">hello@paraplanner.ai</a>.</p>

        </Stack >
      </SectionContainer >
    </>
  );
}
