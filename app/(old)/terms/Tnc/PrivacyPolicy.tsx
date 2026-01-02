/* eslint-disable react/jsx-key */

const PrivacyPolicy = () => {
  const classNames = {
    title: "text-primary-old text-xl",
    subTitle: "text-lg",
    desc: "text-justify",
    cell: "border border-gray-300 px-4 py-2 font-bold text-center",
    link: "text-blue-600 underline",
  };

  return (
    <div className="p-4 md:pl-8">
      <p className="text-center font-bold text-xl md:text-2xl pb-4 ">
        Privacy Policy
      </p>
      <div className="whitespace-break-spaces">
        <strong className={classNames.title}>
          {"1. Who we are and what we do\n\n"}
        </strong>
        <p className={classNames.subTitle}>Who we are</p>
        <p className={classNames.desc}>
          {
            "We are Houzecheck Limited (“Houzecheck”, “us”, “we”, “our”). We are a limited company registered in England and Wales under registration number 11223619 & 14933085, and we have our registered office at The Quarters, 30-40 St. Albans Road, Watford, WD17 1RN. We are registered with the UK supervisory authority, Information Commissioner’s Office (“ICO”), in relation to our processing of Personal Data under registration numbers ZA757389 (Houzecheck Limited) & ZB621369 (Houzecheck Surveying Limited).\n\n"
          }
        </p>
        <p className={classNames.subTitle}>What we do</p>
        <p className={classNames.desc}>
          {
            "We arrange property valuation services, homebuyer surveys (RICS Level 2) and building surveys (RICS Level 3).  We and our affiliates, subsidiaries and related entities are committed to protecting the privacy and security of the Personal Data we process about you.\n\n"
          }
        </p>
        <p className={classNames.subTitle}>Controller</p>
        <p className={classNames.desc}>
          {
            "Unless we notify you otherwise, we are the controller of the Personal Data we process about you. This means that we decide what Personal Data to collect and how to process it.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"2. Purpose of this privacy notice\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "The purpose of this privacy notice is to explain what Personal Data we collect about you and how we process it. This privacy notice also explains your rights, so please read it carefully. If you have any questions, you can contact us using the information provided below under the ‘How to contact us’ section.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"3. Who this privacy notice applies to\n\n"}
        </strong>
        <p className={classNames.desc}>
          {"This privacy notice applies to you if:\n\n"}
          <ul>
            {[
              "You visit our website",
              "You send us an enquiry",
              "You call us",
              "You purchase services from us",
              "You enquire about our products and/or services",
              "Create an account on our website",
              "Enter a competition, promotion, survey or question and answer sessions",
              "You sign up to receive newsletters and/or other promotional communications from us\n\n",
            ].map((item, index) => (
              <li key={index} className="pl-5">
                {index + 1}.{"    "}
                {item}
              </li>
            ))}
          </ul>
        </p>
        <strong className={classNames.title}>
          {"4. What Personal Data is\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "‘Personal Data’ means any information from which someone can be identified either directly or indirectly. For example, you can be identified by your name or an online identifier.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"5. Personal Data we collect\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "The type of Personal Data we collect about you will depend on our relationship with you. For the type of Personal Data, we collect see the table below in the section entitled ‘Purposes, lawful bases and retention periods’.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"6. Personal Data we collect\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "We collect most of the Personal Data directly from you in person, by telephone, text or email and/or via our website.\n\nHowever, we may also collect your Personal Data from third parties such as:\n"
          }
        </p>
        <ul>
          {[
            "reputable companies who provide lead generation contact lists",
            "others to whom you have provided consent ",
            "publicly available sources such as social media platforms\n\n",
          ].map((item, index) => (
            <li key={index} className="list-disc ml-3 pl-4">
              {item}
            </li>
          ))}
        </ul>
        <strong className={classNames.title}>
          {"7. Purposes, lawful bases and retention periods\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "We will only use your Personal Data when the law allows. Most commonly, we will use your Personal Data in the following circumstances:\n\n"
          }
        </p>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className={classNames.cell}>Categories of individuals</th>
              <th className={classNames.cell}>Categories of Personal Data</th>
              <th className={classNames.cell}>Purpose of Processing</th>
              <th className={classNames.cell}>Lawful Basis</th>
              <th className={classNames.cell}>Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classNames.cell}>Customer</td>
              <td className={classNames.cell}>
                Name, address, email address, telephone number
              </td>
              <td className={classNames.cell}>To fulfil your order</td>
              <td className={classNames.cell}>Contract</td>
              <td className={classNames.cell}>
                7 years following the date of the transaction
              </td>
            </tr>
            <tr>
              <td className={classNames.cell}>Prospective Customer</td>
              <td className={classNames.cell}>
                Name, email address, telephone number
              </td>
              <td className={classNames.cell}>
                To discuss and explain our services.
                <br />
                To sent you a quote, or other promotional material
              </td>
              <td className={classNames.cell}>Consent</td>
              <td className={classNames.cell}>
                7 years following last meaningful contact
              </td>
            </tr>
            <tr>
              <td className={classNames.cell}>
                Competition / Promotion Entrant
              </td>
              <td className={classNames.cell}>Name, address, email address</td>
              <td className={classNames.cell}>
                To conduct the competition / promotion
              </td>
              <td className={classNames.cell}>Contract</td>
              <td className={classNames.cell}>
                7 years following the conclusion of the competition / promotion
              </td>
            </tr>
            <tr>
              <td className={classNames.cell}>Other Correspondent</td>
              <td className={classNames.cell}>
                Name, email address, address, telephone number, and any other
                information you provide within the communication you send us
              </td>
              <td className={classNames.cell}>To respond to your enquiry</td>
              <td className={classNames.cell}>Legitimate Interest</td>
              <td className={classNames.cell}>
                2 year following the resolution of your enquiry
              </td>
            </tr>
          </tbody>
        </table>
        <p className={classNames.desc}>
          {
            "\nWhere Personal Data is processed because it is necessary for the performance of a contract to which you are a party, we will be unable to provide our services without the required information.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"8. Sharing your Personal Data\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "We may share your Personal Data with our carefully selected third parties, including:\n"
          }
        </p>
        <ul>
          {[
            "Third party surveyors (to deliver services)",
            "Survey providers (to help us conduct our surveys)",
            "SaaS system providers (that provide our IT systems)",
            "Mail and Email service providers (that we use to send communications)",
            "Selected third party partners to offer you relevant product or services\n\n",
          ].map((item, index) => (
            <li key={index} className="list-disc ml-3 pl-4">
              {item}
            </li>
          ))}
        </ul>
        <p className={classNames.desc}>
          {
            "We may also share your Personal Data with other third parties in the following circumstances:\n"
          }
        </p>
        <ul>
          {[
            "If we are required to do so by law",
            "If we sell or buy any business or assets (in which case, we may disclose your personal data to the prospective seller or buyer for the purpose of conducting the sale / acquisition)\n\n",
          ].map((item, index) => (
            <li key={index} className="list-disc ml-3 pl-4">
              {item}
            </li>
          ))}
        </ul>
        <strong className={classNames.title}>
          {"9. International Transfers\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "Your Personal Data may be processed outside of the UK. This is because the organisations we use to provide our service to you are based outside the UK.\n\n"
          }
          {
            "We have taken appropriate steps to ensure that the Personal Data processed outside the UK has an essentially equivalent level of protection to that guaranteed in the UK. We do this by ensuring that:\n\n"
          }
        </p>
        <ul>
          {[
            "Your Personal Data is only processed in a country which the Secretary of State has confirmed has an adequate level of protection (an adequacy regulation), or",
             
            <p>
              We enter into an International Data Transfer Agreement (“IDTA”)
              with the receiving organisation and adopt supplementary measures,
              where necessary. (A copy of the IDTA can be found here{" "}
              <a
                className="underline text-blue-800"
                href="https://ico.org.uk/media/for-organisations/documents/4019538/international-data-transfer-agreement.pdf"
                target="_blank"
              >
                international-data-transfer-agreement.pdf (ico.org.uk)
              </a>
              ).
            </p>,
          ].map((item, index) => (
            <li key={index} className="list-disc ml-3 pl-4">
              {item}
            </li>
          ))}
        </ul>
        <strong className={classNames.title}>
          {"\n10. Your rights and how to complain\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "You have certain rights in relation to the processing of your Personal Data, including to:\n\n"
          }
        </p>
        <ul className="pl-4">
          {[
            <div>
              <p>
                <b>Right to be informed</b>
              </p>
              <p>
                You have the right to know what personal data we collect about
                you, how we use it, for what purpose and in accordance with
                which lawful basis, who we share it with and how long we keep
                it. We use our privacy notice to explain this.
              </p>
            </div>,
            <div>
              <p>
                <b>Right of access</b> (commonly known as a “Subject Access
                Request”)
              </p>
              <p>
                You have the right to receive a copy of the Personal Data we
                hold about you.
              </p>
            </div>,
            <div>
              <p>
                <b>Right to rectification</b>
              </p>
              <p>
                You have the right to have any incomplete or inaccurate
                information we hold about you corrected.
              </p>
            </div>,
            <div>
              <p>
                <b>Right to erasure</b> (commonly known as the right to be
                forgotten)
              </p>
              <p>You have the right to ask us to delete your Personal Data.</p>
            </div>,
            <div>
              <p>
                <b>Right to object to processing</b>
              </p>
              <p>
                You have the right to object to us processing your Personal
                Data. If you object to us using your Personal Data for marketing
                purposes, we will stop sending you marketing material.
              </p>
            </div>,
            <div>
              <p>
                <b>Right to restrict processing</b>
              </p>
              <p>
                You have the right to restrict our use of your Personal Data.
              </p>
            </div>,
            <div>
              <p>
                <b>Right to portability</b>
              </p>
              <p>
                You have the right to ask us to transfer your Personal Data to
                another party.
              </p>
            </div>,
            <div>
              <p>
                <b>Automated decision-making.</b>{" "}
              </p>
              <p>
                You have the right not to be subject to a decision based solely
                on automated processing which will significantly affect you. We
                do not use automated decision-making.
              </p>
            </div>,
            <div>
              <p>
                <b>Right to withdraw consent</b>
              </p>
              <p>
                If you have provided your consent for us to process your
                Personal Data for a specific purpose, you have the right to
                withdraw your consent at any time. If you do withdraw your
                consent, we will no longer process your information for the
                purpose(s) you originally agreed to, unless we are permitted by
                law to do so.
              </p>
            </div>,
            <div>
              <p>
                <b>Right to lodge a complaint</b>
              </p>
              <p>
                You have the right to lodge a complaint with the relevant
                supervisory authority, if you are concerned about the way in
                which we are handling your Personal Data. The supervisory
                authority in the UK is the Information Commissioner’s Office who
                can be contacted online at:{"\n"}
                <a
                  href="https://ico.org.uk/global/contact-us/"
                  target="_blank"
                  className="underline text-blue-800"
                >
                  Contact us | ICO
                </a>
                <br />
                Or by telephone on 0303 123 1113
              </p>
            </div>,
          ].map((item, index) => (
            <li key={index} className="list-disc ml-3 pl-4">
              {item}
              {"\n"}
            </li>
          ))}
        </ul>
        <p className="underline font-bold">
          {"How to exercise your rights \n\n"}
        </p>
        <p className={classNames.desc}>
          {
            "You will not usually need to pay a fee to exercise any of the above rights. However, we may charge a reasonable fee if your request is clearly unfounded or excessive. Alternatively, we may refuse to comply with the request in such circumstances.\n\nIf you wish to exercise your rights, you may contact us using the details set out below within the section called ‘How to contact us and our Data Protection Officer’. We may need to request specific information from you to confirm your identity before we can process your request. Once in receipt of this, we will process your request without undue delay and within one month. In some cases, such as with complex requests, it may take us longer than this and, if so, we will keep you updated.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"11. Children’s Privacy\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "We do not offer our products and services to children, and we do not knowingly collect Personal Data of children without parental consent, unless permitted by law. If you are a child, you must have your parent’s permission to use our services. If you learn that a child has provided us with their Personal Data without parental consent, you may contact us, as described below, and if appropriate, we will securely and permanently delete it, in accordance with applicable law.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"12. How to contact us and our Data Protection Officer\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "If you wish to contact us in relation to this privacy notice or if you wish to exercise any of your rights outlined above, please contact us as follows:\n\nBy Post: 30-40 St. Albans Road, Watford, WD17 1RN\n\n"
          }
          By Email:{" "}
          <a
            href="mailto:DPO@Houzecheck.com"
            className="underline text-blue-800"
          >
            DPO@Houzecheck.com
          </a>
          {
            "\n\nBy Phone: 0330 113 1133\n\nWe have also appointed a Data protection Officer (“DPO”). Our DPO is Evalian Ltd and can be contacted as follows:\n\nBy Post: West Lodge, Leylands Business Park, Colden Common, Southampton, Hampshire, SO21 1TH\n\nBy Email: dpo@evalian.co.uk\n\nBy Phone: 02380 111 111\n\nPlease mark your communications FAO the ‘Data Protection Officer’.\n\n"
          }
        </p>
        <strong className={classNames.title}>
          {"13. Changes to this privacy notice\n\n"}
        </strong>
        <p className={classNames.desc}>
          {
            "We may update this notice (and any supplemental privacy notice), from time to time as shown below. We will notify of the changes where required by applicable law to do so.\n\nLast modified 01/04/2025\n\n"
          }
        </p>
        <strong className={classNames.title}>{"14. Cookies \n\n"}</strong>
        <p className={classNames.desc}>
          {
            "The Website uses ‘cookies’ to help you personalise your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.\n\nOne of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the web server that you have returned to a specific page. For example, if you personalise Houzecheck pages, or register with Houzecheck through the Website, a cookie helps Houzecheck to recall your specific information on subsequent visits. When you return to the Website, the information you previously provided can be retrieved, so you can easily use the Houzecheck features that you customised.\n\nYou have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Website.\n\nTo find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit http://www.allaboutcookies.org. To opt out of being tracked by Google Analytics across all websites visit http://tools.google.com/dlpage/gaoptout.\n\nThe Website uses the Following Cookies:\n\n"
          }
        </p>
        <p className="underline font-bold">{"Google Analytics\n\n"}</p>
        <p className={classNames.desc}>
          These cookies allow us to see information on user website activities
          including, but not limited to, page views, source and time spent on
          websites. The information is depersonalised and displayed as numbers.
          Houzecheck do not process this information to identify users. This
          will help to protect your privacy. In using Google Analytics,
          Houzecheck can see what content is popular on the Website and strive
          to give you more of the things you wish to see and use. These cookies
          are also used with Google AdWords and DoubleClick. Houzecheck is able
          to see which pages helped lead to contact, register and quote form
          submissions. This allows Houzecheck to make better use of our paid
          search budget. Houzecheck uses remarketing code to log when users view
          specific pages, allowing us to provide targeted advertising across the
          internet. You can read more about Google Analytics cookie usage on
          their information page:{" "}
          <a
            href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
            className="underline text-blue-800"
          >
            Google Analytics Cookie Policy.
          </a>{" "}
          If you would like to opt out of interest-based advertising, you can
          learn more about this here: http://optout.networkadvertising.org/
        </p>
        <p className="underline font-bold">{"\nCookie Consent\n\n"}</p>
        <p className={classNames.desc}>
          {
            "This cookie is dropped after a user has closed the notice about our site using cookies. This is only used to remember not to show the notice after a user has already granted consent.\n\n"
          }
        </p>
        © Copyright Houzecheck 2025
      </div>
    </div>
  );
};

export default PrivacyPolicy;
