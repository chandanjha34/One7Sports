import React from 'react';
import Navbar from '../Navbar/Navbar'
import Reviews from '../Reviews/Reviews'
import Downloads from '../Downloads/Downloads'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'

const Terms = () => {
  return (
    <div>
    <div className="p-6 bg-gray-50 text-gray-800 top-[15vh] ">
      <div>
        <Navbar/>
      </div>
      <div className="max-w-5xl mt-[20vh] mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-2 text-gray-600 text-sm">(Effective and Last Updated as on: 14th August, 2024)</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">I. Introduction</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              Welcome to One7Sports Tech Private Limited: (“Us” or “Our” or “We” or
              “One7Sports”) website -
              <a href="https://www.one7sports.com/" className="text-blue-500 underline ml-1">
                https://www.one7sports.com/
              </a>
              (“Website”), including any website owned and developed by Us for Our specific
              partners (“Brand Page”) and mobile application (“Mobile Application”).
            </li>
            <li>
              Privacy Commitment: We respect the information that you provide and ensure
              transparency in its use.
            </li>
            <li>
              User Consent: By using our Services, you consent to the terms outlined in this
              Privacy Policy. If you disagree, kindly refrain from using our Platform.
            </li>
            <li>
              Scope: This Privacy Policy applies only to the practices of One7Sports and not to
              third-party entities.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">II. Security</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              Safeguards: We implement commercially reasonable measures to protect your data,
              though absolute security cannot be guaranteed.
            </li>
            <li>
              Limitations: Despite our efforts, risks such as hacking or misuse may occur. You
              acknowledge providing your information at your own risk.
            </li>
            <li>
              Data Transfer: We may transfer and process your data in jurisdictions with
              appropriate protections.
            </li>
            <li>
              Confidentiality: Users must maintain the confidentiality of their passwords and
              secure access credentials.
            </li>
            <li>
              Compliance: We adhere to applicable data protection laws, including the IT
              (Reasonable Security Practices and Procedures <br /> and Sensitive Personal Data or
              Information) Rules, 2011.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">III. Platform Permission</h2>
          <p>
            Permissions required by our Mobile Application are managed as follows:
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>iOS:</strong> Permissions are requested during the first use of relevant
              features.
            </li>
            <li>
              <strong>Android:</strong> Permissions are disclosed during installation or first
              use of the app.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">IV. Collection of Information</h2>
          <p>We collect the following types of information:</p>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <strong>Personal Information:</strong> Includes account details, social media
              logins, and profile details.
            </li>
            <li>
              <strong>Financial Information:</strong> Transaction-related data.
            </li>
            <li>
              <strong>Location Information:</strong> Precise location data through device
              permissions.
            </li>
            <li>
              <strong>Device Information:</strong> Details about hardware and operating system.
            </li>
            <li>
              <strong>Log Information:</strong> Server logs such as IP address and system
              activity.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> Data collected through cookies and tracking
              technologies.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">V. Use of Information</h2>
          <p>
            The information collected is used to provide, improve, and personalize our Services
            as well as for communication, marketing, and customer support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">VI. Third-Party Links and Information</h2>
          <p>
            Our Platform may contain links to third-party websites. We are not responsible for
            the practices or content of such sites.
          </p>
        </section>

        <footer className="text-sm text-gray-600">
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            <a
              href="mailto:support@one7sport.com"
              className="text-blue-500 underline ml-1"
            >
               support@one7sports.com
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
      <Reviews />
      <Downloads />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Terms;
