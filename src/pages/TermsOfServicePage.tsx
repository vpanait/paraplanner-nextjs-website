"use client"
import * as React from 'react';
import SectionContainer from '@/components/SectionContainer';
import { Stack, ThemeProvider } from '@mui/material';
import { themeDark, themeGradients } from '@/theme/theme';
import Navbar from '@/components/Navbar';
import DocItem from '@/components/DocItem';
import DocHeader from '@/components/DocHeader';
import DocList from '@/components/DocList';

export default function TermsOfServicePage() {
  return (
    <>
      <ThemeProvider theme={themeDark}>
        <Stack
          sx={{
            background: themeGradients.heroGradient,
            justifyContent: 'space-between'
          }}>
          <Navbar />
        </Stack>
      </ThemeProvider>

      <SectionContainer withoutAnimation={true}>
        <Stack>
          <DocHeader sx={{ fontSize: 38, marginBottom: 4, textAlign: 'center' }}>
            TERMS OF SERVICE
          </DocHeader>
          <DocHeader sx={{ fontSize: 21, marginTop: 0, marginBottom: 6, textAlign: 'center' }}>
            Last updated: 11/21/2023
          </DocHeader>


          <DocItem>
            Please read these Terms of Service (the “Agreement”) carefully because they are a binding agreement between you and Financial Freedom Fighters, Inc. d/b/a paraplanner.ai (“paraplanner.ai,” “we,” “us,” or “our”) and apply to your use of our website at <a href="https://www.paraplanner.ai" target='_blank'>https://www.paraplanner.ai</a> (the “Website”) and all of its sub-domains, the platform at <a href="https://app.paraplanner.ai" target='_blank'>https://app.paraplanner.ai</a>, which we also make available through the Website (the “Platform”), and any related services, social media pages and apps (the Website and Platform, together with any related services, social media pages and apps, are collectively referred to as our “Services”).  All references to “you” or “your” in this Agreement refer to you and/or the entity on behalf of which you access or view the Website.
          </DocItem>

          <DocItem>
            By clicking on an “accept” button, creating an account, or otherwise visiting, accessing and/or using our Services, you automatically agree to this Agreement, you acknowledge our <a href="https://www.paraplanner.ai/privacy-policy" target='_blank'>Privacy Policy</a>, and you certify that you are at least 18 years of age (or the legal age of majority where you reside if that jurisdiction has an older age of majority) and that you are providing truthful and accurate information about yourself.
          </DocItem>

          <DocHeader>
            Changes to Agreement
          </DocHeader>

          <DocItem>
            We may change, modify, add or remove portions of this Agreement (each, an “Update”) at any time and in our sole discretion without prior notice to you and such Updates will be effective immediately. If we make Updates to this Agreement, we will change the "Last Updated" date above.  Your continued use of Services will confirm your acceptance of the updated Agreement.  We encourage you to frequently review the Agreement to ensure you understand the latest terms and conditions associated with use of the Services.  If you do not agree to the updated Agreement, you must discontinue using the Services.
          </DocItem>

          <DocHeader>
            Modification to Services
          </DocHeader>

          <DocItem>
            paraplanner.ai may, at any time and for any reason, change, update or discontinue Services, or any part thereof, with or without notice. paraplanner.ai will not be liable to you or to any third party for any modification, suspension or discontinuance of Services as permitted herein.
          </DocItem>

          <DocItem>
            We will give you appropriate advance notice about any major changes, although you understand that we may stop, suspend, or change our Services at any time without prior notice.  You may terminate this Agreement at any time by ceasing to use our Services.
          </DocItem>


          <DocHeader>
            Privacy Policy
          </DocHeader>
          <DocItem>
            Please refer to our <a href="https://www.paraplanner.ai/privacy-policy" target='_blank'>Privacy Policy</a> (the “Privacy Policy") for information regarding how we collect, use and disclose information about you in connection with your use of our Services, and regarding how others collect, use and disclose information about you.  The terms and conditions of our Privacy Policy are incorporated into this Agreement.
          </DocItem>

          <DocHeader>
            Eligibility
          </DocHeader>
          <DocItem>
            If you are entering into this Agreement on behalf of a company, organization or other legal entity, you represent that you have the authority to bind such entity and its affiliates, in which case the terms “you” or “your” shall also refer to such entity and its affiliates. You further agree that you assume all responsibility and liability in connection with your use of the Services on behalf of such company, organization or other legal entity, and you shall be solely responsible for all disputes, if any, that arise due to your use of the Services on behalf of such company, organization or other legal entity.
          </DocItem>
          <DocItem>
            We screen all persons and entities requesting an account with paraplanner.ai to verify identity and information provided during the registration process (as described in more detail below).  We may, in our sole discretion, refuse to offer Services to any person or entity and change the eligibility criteria for using the Services at any time.
          </DocItem>

          <DocHeader>
            Terms of Access and Use
          </DocHeader>
          <DocItem>
            Subject to your compliance with this Agreement and all applicable laws, paraplanner.ai grants you a limited, nonexclusive, non-transferable and revocable license to access and use the Website, Platform, and other Services (as applicable), together with paraplanner.ai Content, for personal and non-commercial purposes in accordance with the terms and conditions of this Agreement and any separate written agreement with paraplanner.ai providing for additional terms and conditions applicable to your relationship with paraplanner.ai and use of products and services offered by paraplanner.ai (the “Additional Terms”), including, but not limited to, our Privacy Policy, which are collectively integrated by reference into this Agreement.  In the event of a conflict between the terms of this Agreement and any Additional Terms, the Additional Terms will control.
          </DocItem>

          <DocHeader>
            Registration and Accounts
          </DocHeader>
          <DocItem>
            You must register for an account in order to access the Platform.   The Platform is available only to users who have registered for an account, completed all registration requirements (including a phone interview with us, if requested), and have been granted an account by paraplanner.ai.  You agree to accurately maintain and update any information about yourself that you have provided to paraplanner.ai. If you do not keep such information current, or fail to submit truthful, accurate and complete information, or we have reasonable grounds to suspect as much, we have the right to suspend or terminate your account and your use of the Services.
          </DocItem>
          <DocItem>
            You also agree to immediately notify paraplanner.ai of any unauthorized use of your account, log-in credentials, or any other breach of security that you become aware of involving or relating to the Services by contacting paraplanner.ai at <a href="mailto:supportme@paraplanner.ai">supportme@paraplanner.ai</a>.
          </DocItem>
          <DocItem>
            You will be required to provide the registration information described in our Privacy Policy in order to create an account. You agree to keep confidential your log-in credentials for the Services and to exit from your user account at the end of each session. You may not use anyone else’s account at any time and you may not allow others to use your account to access the Services.
          </DocItem>

          <DocHeader>
            Fees
          </DocHeader>
          <DocItem>
            Our Services are provided on a subscription basis.  If we offer a free trial period for our Services, you will start incurring subscription fee charges following the conclusion of the free trial period.
          </DocItem>

          <DocHeader>
            Linking Your Email Client to the Services
          </DocHeader>
          <DocItem>
            You must link your business email client (“Your Email”) to your paraplanner.ai account in order to utilize the Services.  You will issue commands to the Services directly through Your Email, and all output from the Services will be delivered to you directly through Your Email.
          </DocItem>

          <DocHeader>
            Linking User Systems; Provided Data
          </DocHeader>
          <DocItem>
            You may link your business systems and tools such as your CRM, trading accounts and other technology solutions (“User Systems”) to your paraplanner.ai account in order to authorize and enable the Services to retrieve certain materials, information and data, including but not limited to client communications, client information and client documents (“Provided Data”) from banks, financial institutions and other service providers that maintain Provided Data (the “Data Sources”).  For clarity, you may also provide us information about your clients (including the Personal Information of your clients) directly by email, online forms, or other methods, which information shall be deemed Provided Data.  We will use Provided Data in accordance with our Privacy Policy.
          </DocItem>
          <DocItem>
            By using the Services, (i) you grant paraplanner.ai and our service providers the right, power and authority to access your User Systems and to collect, transmit, store and process Provided Data, (ii) you grant paraplanner.ai a royalty-free, sublicenseable, worldwide right and license to use the Provided Data (a) as necessary for paraplanner.ai’s performance of the Services and exercise of paraplanner.ai’s rights under this Agreement; (b) as required by applicable law; and (c) on a de-identified basis solely in connection with development, support, and improvement of the Services, and (iii) you agree to Provided Data being collected, transferred, stored, and processed by paraplanner.ai and our service providers in accordance with this Agreement and our Privacy Policy.  You expressly authorize Data Sources selected by you to disclose Provided Data and other necessary information to us. You represent and warrant that (A) you have the right to provide the Provided Data to paraplanner.ai hereunder for our use as contemplated by this Agreement, (B) you have complied with all applicable laws and obligations to third parties in collecting, using, storing and delivering the Provided Data, and (C) you have obtained all permissions necessary to (1) use and access the Services and any other of paraplanner.ai’s tools related to the capture and processing of information, including but not limited to the personal and financial information of your clients, and (2) allow paraplanner.ai to process such information in conformance with this Agreement.
          </DocItem>

          <DocHeader>
            Guidelines for Provided Data
          </DocHeader>

          <DocItem sx={{ marginBottom: 0 }}>
            You shall abide by the following guidelines with respect to all Provided Data uploaded, transmitted and/or otherwise provided to paraplanner.ai (our “Provided Data Guidelines”).  Provided Data must not:
          </DocItem>
          <DocList>
            <li>
              Contain any material which is false, misleading, defamatory, obscene, indecent, abusive, offensive, threatening, harassing, hateful, inflammatory, an invasion of privacy, or is otherwise objectionable;
            </li>
            <li>
              Contain any information or content that we deem to be denigrating or offensive to any individual or group on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disability, or to be otherwise objectionable;
            </li>
            <li>
              Exploit, harm or attempt to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information or otherwise;
            </li>
            <li>
              Create a risk of harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or physical or mental illness to you or to any other person; or
            </li>
            <li>
              Create a risk of any loss or damage to property.
            </li>
          </DocList>

          <DocItem>
            You will not upload any Provided Data that (i) includes trade secrets or third-party intellectual property unless you have permission or a valid license from the owner to use it in the specific manner that you used it, (ii) infringes any intellectual property, privacy or publicity right of another, (iii) violates the legal rights (including the rights of publicity and privacy) of others or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with this Agreement and our Privacy Policy.
          </DocItem>
          <DocItem>
            Any use of the Services in violation of Provided Data Guidelines is prohibited and may result in our suspension or termination of your right to use the Services, and may possibly expose you to legal action and damages.
          </DocItem>

          <DocHeader>
            Conduct Guidelines
          </DocHeader>
          <DocItem sx={{ marginBottom: 0 }}>
            The rights granted to you under this Agreement are subject to the following conduct guidelines concerning the Services:
          </DocItem>
          <DocList>
            <li>You will not copy, reproduce, distribute, transmit, republish, post, publicly perform or publicly display the Services, or any information or content made available on or through the Services without paraplanner.ai’s prior written consent;</li>
            <li>You will not modify, translate, adapt, merge, make derivative works of, disassemble, decompile, frame, reverse compile or reverse engineer any part of the Services;</li>
            <li>You will not access or use the Services  to build a similar or competitive service or application;</li>
            <li>You will not remove or destroy any copyright notices or other proprietary markings contained on or in any portion of the Services;</li>
            <li>You will not use any scraping, data mining, robots or similar data gathering or extraction methods on the Services, and you will not collect or harvest any personally identifiable information;</li>
            <li>You will not create or compile, directly or indirectly, any collection, compilation, database, or directory from the Services;</li>
            <li>You will not disrupt the operation of the Services in any manner or impose an unreasonable or disproportionately large load on our infrastructure, for example by using methods such as denial of service attacks, flooding and spamming;</li>
            <li>You will not transmit any "junk mail", "chain letter" or "spam" or any other similar solicitation;</li>
            <li>You will not attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services;</li>
            <li>You will not probe, scan or test the vulnerability of our system or network or attempt to breach security or authentication measures;</li>
            <li>You will not upload invalid data, viruses, worms, keyloggers, spyware, Trojan horses, time bombs, malicious or harmful code, or other software agents through the Services;</li>
            <li>You will not use the Services other than for their intended purposes; and</li>
            <li>You will not access or use the Services in an unlawful way or for an unlawful or illegitimate purpose.</li>
          </DocList>
          <DocItem>
            You are solely responsible for complying with all laws, rules and regulations applicable to you when you use the Services.  You agree to comply with the above conduct and usage requirements (“Conduct Guidelines”) and agree not to assist or permit any person to engage in any conduct that does not comply with the Conduct Guidelines.  Any use of the Services in violation of these Conduct Guidelines is prohibited and may result in our suspension or termination of your right to use the Services, and may possibly expose you to legal action and damages.
          </DocItem>

          <DocHeader>
            paraplanner.ai Content
          </DocHeader>
          <DocItem>
            Except for your Provided Data and Third Party Content (defined below), all information and materials contained on or within the Services, including, but not limited to, text, graphics, HTML, look and feel, images, illustrations, designs, photographs, audio, video, white papers, press releases, names, product names or descriptions, icons, typefaces, software (both source and object code), format, queries, algorithms and written and other materials and information (collectively, "paraplanner.ai Content"), as well as their selection and arrangement, and all intellectual property and other rights relating to paraplanner.ai Content, as between you and paraplanner.ai, are solely and exclusively owned by paraplanner.ai.  You will not delete or alter any copyright, trademark or other proprietary rights notices from paraplanner.ai Content.
          </DocItem>

          <DocHeader>
            paraplanner.ai Assistant & Admin Personnel
          </DocHeader>
          <DocItem>paraplanner.ai makes available through the Services and Your Email an AI-powered assistant (the “AI Assistant”) and also live administrative assistants and paraplanners engaged by paraplanner.ai (“Admin Personnel”) to answer your questions and assist you and your business use the Services and deliver support and services to your clients.</DocItem>
          <DocItem>The responses to your questions and commands provided by the AI Assistant and Admin Personnel are paraplanner.ai Content and all intellectual property and other rights relating to the AI Assistant and Admin Personnel are solely and exclusively owned by paraplanner.ai, except for proprietary information about you and your business, which is owned exclusively by you.  The AI Assistant is designed, and our Admin Personnel are trained, to be responsive to your questions and sensitive to information you provide to the AI Assistant, your Provided Data, and to other information available to paraplanner.ai.  Your interactions with our AI Assistant and Admin Personnel may be recorded and shared with our service providers that support our AI Assistant or for other business purposes.</DocItem>
          <DocItem>The AI Assistant and our Admin Personnel do not intend, and cannot, recommend the purchase or sale of specific securities or investment assets.  While the AI Assistant and our Admin Personnel may offer informational or educational information, they will not discern what investment choices would be suitable for any individual’s financial situation.  Responses and information from the AI Assistant and our Admin Personnel are general in nature and should not be considered investment, legal, or tax advice.</DocItem>

          <DocHeader>
            Third Party Content
          </DocHeader>
          <DocItem>The Services may contain proprietary information and materials licensed or provided to paraplanner.ai by third parties in connection with paraplanner.ai’s provision of the Services and/or other business purposes (collectively, “Third Party Content”).  Third Party Content is the copyrighted work of its owner, who expressly retains all right, title and interest in and to the Third Party Content, including, without limitation, all intellectual property rights therein and thereto.</DocItem>
          <DocItem>All statements and/or opinions expressed in the Third Party Content are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of paraplanner.ai.  We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.</DocItem>

          <DocHeader>No Reliance</DocHeader>
          <DocItem>Any reliance you place on the Services, Provided Data, paraplanner.ai Content and/or Third Party Content is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or by anyone who may be informed of or exposed to such materials.   PARAPLANNER.AI DOES NOT INTEND TO PROVIDE YOU WITH ANY LEGAL, TAX, OR FINANCIAL ADVICE THROUGH THE SERVICES.</DocItem>

          <DocHeader>Disclaimers</DocHeader>
          <DocItem>PARAPLANNER.AI MAKES NO REPRESENTATIONS, WARRANTIES OR GUARANTEES, EXPRESS OR IMPLIED, REGARDING THE ACCURACY, ADEQUACY, TIMELINESS, RELIABILITY, COMPLETENESS, OR USEFULNESS OF ANY OF THE INFORMATION IN PARAPLANNER.AI CONTENT OR THE SERVICES, AND EXPRESSLY DISCLAIMS ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR TITLE. PARAPLANNER.AI MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE THAT THE PARAPLANNER.AI CONTENT OR THE SERVICES ARE FREE OF VIRUSES, BUGS, DEFECTS, ERRORS, OR OTHER HARMFUL CODE, OR PROGRAMS INTENDED TO INTERCEPT OR ACQUIRE DATA.</DocItem>
          <DocItem>YOU ACKNOWLEDGE AND UNDERSTAND THAT PROVIDED DATA AVAILABLE TO YOU THROUGH THE SERVICES WILL BE THE MOST RECENT DATA WE HAVE AVAILABLE FROM DATA SOURCES, AND THAT THIS INFORMATION MAY NOT REFLECT PENDING TRANSACTIONS AND OTHER RECENT ACTIVITY.  WE MAKE OR GIVE NO REPRESENTATION OR WARRANTY AS TO THE ACCURACY, COMPLETENESS, CURRENCY, CORRECTNESS, RELIABILITY, INTEGRITY, QUALITY, OR FITNESS FOR PURPOSE OF ANY OF THE PROVIDED DATA MADE AVAILABLE THROUGH THE SERVICES AND, TO THE FULLEST EXTENT PERMITTED BY LAW, ALL IMPLIED WARRANTIES, CONDITIONS OR OTHER TERMS OF ANY KIND ARE HEREBY EXCLUDED AND WE ACCEPT NO LIABILITY FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOU OR ANYONE ELSE RELYING ON PROVIDED DATA MADE AVAILABLE THROUGH THE SERVICES.</DocItem>
          <DocItem>Please note, the ability to exclude warranties varies in different jurisdictions. To the extent that a jurisdiction places limits on the ability for a party to exclude warranties, these exclusions exist to the extent permitted by law. Because of this jurisdictional variance, some of the above exclusions may not apply to you.</DocItem>

          <DocHeader>Social Media</DocHeader>
          <DocItem>When we make available certain social media features through LinkedIn, X, or other social media sites, you may take such actions as are enabled by those features.  Please be aware that activities on our social media sites, or facilitated by or through our social media sites, are subject to the terms and conditions of the applicable social media site(s).  Any information or content provided to social media sites may be processed and used by the applicable social media sites in accordance with their policies and any agreements with paraplanner.ai.</DocItem>

          <DocHeader>Links to Other Sites</DocHeader>
          <DocItem>Our Services may contain links to other websites.  The fact that we link to a website is not an endorsement, authorization or representation of our affiliation with that third party.  We do not exercise control over third party websites.  These other websites may place their own cookies or other files on your computer, collect data, or solicit personal information from you. Other sites follow different rules regarding the use or disclosure of the personal information you submit to them.  We encourage you to read the privacy policies and terms of use for the other websites you visit.</DocItem>

          <DocHeader>Ownership</DocHeader>
          <DocItem>paraplanner.ai and/or its licensors own all right, title and interest, including all related intellectual property rights, in and to the Website, Platform, any other Services we make available to you, paraplanner.ai Content, and Third Party Content.  This Agreement is not a sale and does not convey to you any rights of ownership in or related to the Website, Platform, any other Services we make available to you, paraplanner.ai Content and/or Third Party Content.  paraplanner.ai reserves all rights not expressly granted in this Agreement.</DocItem>
          <DocItem>All trademarks, service marks, logos, slogans and taglines displayed on or through the Services are the property of paraplanner.ai and its licensors or their respective owners and nothing contained herein should be construed as granting any license or right to use any trademarks, service marks, logos, slogans or taglines displayed on or through the Services without the express written permission of paraplanner.ai, or such third-party that may own the trademark, service mark, logo, slogan or tagline.</DocItem>

          <DocHeader>Your Feedback</DocHeader>
          <DocItem>We welcome feedback, comments and suggestions for improvements to the Services (“Feedback”).  We may ask for your Feedback in connection with your use of the Services, and you can always submit Feedback by emailing us at feedback@paraplanner.ai.</DocItem>
          <DocItem>You grant us a nonexclusive, irrevocable, worldwide, royalty-free, fully paid up right and license to use any Feedback provided by you to us with respect to the Services, and we can use, disclose, reproduce, license and otherwise distribute and exploit Feedback in any manner without obligation or restriction of any kind on account of intellectual property rights or otherwise. paraplanner.ai will treat any Feedback you provide to us as non-confidential and non-proprietary.</DocItem>

          <DocHeader>Consent to Electronic Notice</DocHeader>
          <DocItem>If you provide your email address to paraplanner.ai through the Website or Platform, or by e-mailing paraplanner.ai directly, you agree that paraplanner.ai may communicate with you electronically regarding administrative, security and other issues relating to your use of the Services. You agree that any notices, agreements, disclosures or other communications that paraplanner.ai sends to you electronically will satisfy any legal communication requirements, including that such communications be in writing.  The foregoing does not affect your statutory rights.</DocItem>

          <DocHeader>Limitation of Liability</DocHeader>
          <DocItem>IN NO EVENT SHALL PARAPLANNER.AI OR ITS AFFILIATES, OR ITS OR THEIR OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, LICENSORS OR SUPPLIERS, BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING LOST PROFITS, LOSS OF GOODWILL, BUSINESS INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA ON YOUR COMPUTER OR DEVICE OR OTHERWISE, OR SIMILAR DAMAGES) RESULTING FROM OR RELATING TO THIS AGREEMENT, INCLUDING WITHOUT LIMITATION (I) YOUR USE OR INABILITY TO USE THE SERVICES, OR ERRORS, MISTAKES, OR INACCURACIES IN PARAPLANNER.AI CONTENT OR THIRD PARTY CONTENT INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SERVICES, (II) ANY PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM THE SERVICES, (III) ANY INFRINGEMENT BY THE SERVICES OF THE INTELLECTUAL PROPERTY RIGHTS OR OTHER RIGHTS OF THIRD PARTIES; (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES, (V) ANY ERRORS OR OMISSIONS IN THE SERVICES, WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT PARAPLANNER.AI IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.</DocItem>
          <DocItem><b>YOU AGREE THAT YOUR USE OF THE SERVICES IS ON AN "AS IS" AND "AS AVAILABLE" BASIS AND AT YOUR SOLE RISK</b>, AND YOU AGREE THAT WE WILL NOT BE LIABLE TO YOU OR TO ANY THIRD-PARTY FOR ANY USE, INABILITY TO USE, MODIFICATION, SUSPENSION, OR WITHDRAWAL OF THE SERVICES, OR ANY FEATURES, PARTS, OR CONTENT OF THE SERVICES.</DocItem>

          <DocHeader>General Release</DocHeader>
          <DocItem>You are solely responsible for all claims, injuries (including death), illnesses, damages, liabilities, and costs (“Liabilities”) suffered by you or any third party as a result of your use of the Services.  To the maximum extent permitted by applicable law, you hereby release the paraplanner.ai Parties (as defined below) from any and all responsibility and liability for the foregoing.</DocItem>
          <DocItem>YOU HEREBY WAIVE THE PROVISIONS OF ANY STATE OR LOCAL LAW LIMITING OR PROHIBITING A GENERAL RELEASE. IF YOU ARE A CALIFORNIA RESIDENT, YOU ACKNOWLEDGE AND HEREBY EXPRESSLY WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR OR RELEASING PARTY 	DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.”  You hereby expressly waive and relinquish all rights and benefits under that section and any law of any jurisdiction of similar effect with respect to the release of any unknown or unsuspected claims you may have against the paraplanner.ai Parties pertaining to the subject matter of this section.</DocItem>

          <DocHeader>Indemnification By You</DocHeader>
          <DocItem>Without limiting the generality or effecting other provisions of this Agreement, as a condition of accessing or using the Services, you agree, at your expense, to indemnify and hold harmless paraplanner.ai and its affiliates, licensors and suppliers, and our and their officers, directors, employees and agents (“paraplanner.ai Parties”), from and against any and all losses, costs, damages, liabilities and expenses (including without limitation attorneys' fees) in relation to or arising from (i) your use or inability to use the Services, (ii) your Provided Data, (iii) your failure to comply with any applicable laws and regulations (including any privacy laws), (iv) your violation of any third party right, including without limitation any copyright, property or privacy right, or (v) your breach of any obligations set forth in this Agreement.  You shall not settle any such claim without the written consent of the applicable indemnified party.</DocItem>
          <DocItem>For any third-party claim covered under this indemnification provision, we will notify you upon becoming aware of the claim, and you will also defend such claim at your expense if instructed by us to do so. If we or our partners or licensors are obligated to respond to a third-party subpoena or other compulsory legal order or process, you will also reimburse us for reasonable attorneys’ fees, as well as employees’ and contractors’ time and materials spent responding to the third-party subpoena or other compulsory legal order or process at the applicable then-current hourly rates.</DocItem>

          <DocHeader>Term, Suspension and Termination</DocHeader>
          <DocItem>This Agreement will remain in full force and effect while you use the Services. We reserve the right (but have no obligation) to investigate and/or take appropriate action against you in our sole discretion if you violate this Agreement or otherwise create liability for us or any other person. Such actions could include suspending or terminating your rights with respect to the Services, with or without notice. If your rights with respect to the Services are suspended or terminated, you agree to make no further use of the Services as directed by paraplanner.ai for the duration of the suspension or indefinitely following termination.</DocItem>

          <DocHeader>ARBITRATION CLAUSE & CLASS ACTION WAIVER – APPLICABLE TO THE FULL EXTENT PERMITTED BY LAW</DocHeader>
          <DocItem>Any dispute, claim or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by arbitration in Austin, Texas, United States of America, before one arbitrator.  The language to be used in the arbitral proceedings will be English.  If the dispute, claim or controversy exceeds $250,000, the arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures (the “Rules”), and if not, the arbitration shall be administered by JAMS pursuant to the Rules and in accordance with the Expedited Procedures or similar process set forth in the Rules.  Judgment on the award may be entered in any court having jurisdiction.  This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.</DocItem>
          <DocItem>In any arbitration arising out of or related to this Agreement, the arbitrator shall award to the prevailing party, if any, the costs and attorneys’ fees reasonably incurred by the prevailing party in connection with the arbitration.  If the arbitrator determines a party to be the prevailing party under circumstances where the prevailing party won on some but not all of the claims and counterclaims, the arbitrator may award the prevailing party an appropriate percentage of the costs and attorneys’ fees reasonably incurred by the prevailing party in connection with the arbitration.</DocItem>
          <DocItem>YOU AND PARAPLANNER.AI AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.  Further, if the parties’ dispute is resolved through arbitration, the arbitrator may not consolidate another person’s claims with your claims and may not otherwise preside over any form of a representative or class proceeding.</DocItem>
          <DocItem>YOU AND PARAPLANNER.AI EACH HEREBY WAIVE THE RIGHT TO A TRIAL BY JURY FOR DISPUTES ARISING OUT OF OR RELATED TO THIS AGREEMENT, AND THIS WAIVER APPLIES REGARDLESS OF THE TYPE OF DISPUTE, WHETHER PROCEEDING UNDER CLAIMS OF CONTRACT OR TORT (INCLUDING WITHOUT LIMITATION NEGLIGENCE) OR ANY OTHER THEORY.</DocItem>

          <DocHeader>Force Majeure</DocHeader>
          <DocItem>You agree that paraplanner.ai is not responsible to you for anything that we may otherwise be responsible for, if it is the result of events beyond our control, including, but not limited to, acts of God, war, insurrection, riots, terrorism, crime, pandemics and epidemics, labor shortages (including lawful and unlawful strikes), embargoes, postal disruption, communication disruption, failure or shortage of infrastructure, shortage of materials, or any other event beyond our control.</DocItem>

          <DocHeader>Governing Law and Venue</DocHeader>
          <DocItem>This Agreement shall be governed by the laws of the State of Delaware, United States of America, without regard to its rules on conflicts or choice of law. The United Nations Convention on Contracts for the International Sale of Goods shall not apply to this Agreement.</DocItem>

          <DocHeader>General Terms</DocHeader>
          <DocItem>This Agreement, together with the Privacy Policy, constitute the sole agreements between you and paraplanner.ai for your use and the provision of the Services, and the subject matter hereof. The section titles in this Agreement are for convenience only and have no legal or contractual effect.  Should any provision of this Agreement be held invalid or unenforceable, such provision will be modified to the extent necessary to render it enforceable without losing its intent or severed from this Agreement if no such modification is possible, and other provisions of this Agreement will remain in full force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. This Agreement and any rights and licenses granted hereunder, may not be transferred, delegated or assigned by you, but may be assigned, delegated or transferred by paraplanner.ai without restriction. Any attempted assignment, subcontract, delegation or transfer by you in violation of the foregoing will be null and void. This Agreement shall be binding upon and inure to the benefit of each of the parties and the parties’ respective successors and permitted assigns. Certain of our licensors and suppliers may be third-party beneficiaries of this Agreement and have the right to enforce this Agreement against you.</DocItem>

          <DocHeader>Contact Information</DocHeader>
          <DocItem>If you have any questions about the Services or this Agreement, please contact us at <a href="mailto:hello@paraplanner.ai">hello@paraplanner.ai</a>.</DocItem>
        </Stack >
      </SectionContainer >
    </>
  );
}
