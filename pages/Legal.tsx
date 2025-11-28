import React from 'react';
import Hero from '../components/Hero';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1b1f27] pb-16 transition-colors duration-300">
      <Hero 
        title="Legal" 
        subtitle="Terms of Service and Privacy Policy"
      />
      
      <div className="container mx-auto px-4 max-w-[960px]">
        <div className="bg-white dark:bg-card-bg-dark rounded-material shadow-material p-8 md:p-12">
          
          {/* Terms of Service */}
          <section className="mb-12">
            <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-6">Terms of Service</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">DISCLAIMER</h3>
                <p className="font-light leading-relaxed">
                  All information and services — both in source and compiled form — are provided on an as is basis. 
                  No guarantees or warranties are given or implied. The user assumes all risks of any damages that may occur, 
                  including but not limited to loss of data, damages to hardware, or loss of business profits. 
                  Please use at your own risk. IQUXAe.org is a hobby project with no service level agreements or uptime guarantees.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">TERMS OF USE</h3>
                <p className="font-light leading-relaxed mb-4">
                  Certain images, logos, pictures, and other works originating with organizations other than IQUXAe 
                  may be or are the trademarks and/or servicemarks of those other organizations and are subject to the laws 
                  of their registered countries. IQUXAe's usage constitutes a 'fair use' of any such copyrighted material 
                  as provided for in section 107 of the US Copyright Law.
                </p>
                <p className="font-light leading-relaxed">
                  If you wish to use copyrighted material from this site for purposes of your own that go beyond 'fair use', 
                  you must obtain permission from the copyright owner. Requests for removal of copyright material may be sent 
                  to <a href="mailto:iquxae@proton.me" className="text-primary hover:underline">iquxae@proton.me</a>.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">SERVICE AVAILABILITY</h3>
                <p className="font-light leading-relaxed">
                  IQUXAe.org services are provided as a hobby project. The administrator reserves the right to modify, 
                  suspend, or discontinue any service at any time without notice. No compensation will be provided for 
                  service interruptions or data loss.
                </p>
              </div>
            </div>
          </section>

          <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 mx-auto rounded-full my-12"></div>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-[2.25rem] leading-[1.5em] text-gray-800 dark:text-white font-light mb-6">Privacy Policy</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="font-light leading-relaxed">
                Your privacy is important to IQUXAe. This Privacy Policy explains how we collect, use, disclose, 
                transfer, and store your information. Please take a moment to familiarize yourself with our privacy practices.
              </p>

              <p className="font-light leading-relaxed">
                IQUXAe.org provides a private Matrix homeserver and related services for personal use and invited users.
              </p>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">INFORMATION WE COLLECT</h3>
                <p className="font-light leading-relaxed mb-3">
                  When using IQUXAe services, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-light">
                  <li>Account information: username, email address (if provided), display name</li>
                  <li>Matrix homeserver data: messages, room memberships, device information</li>
                  <li>Server logs: IP addresses, connection timestamps, error logs for maintenance and security</li>
                  <li>Website analytics: browser type, pages visited, referring URLs (aggregated and anonymized)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">HOW WE USE YOUR INFORMATION</h3>
                <ul className="list-disc pl-6 space-y-2 font-light">
                  <li>To provide and maintain Matrix homeserver services</li>
                  <li>To monitor service performance and reliability</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To communicate with you about service updates or account issues</li>
                  <li>To comply with legal obligations if required by law</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">END-TO-END ENCRYPTION</h3>
                <p className="font-light leading-relaxed">
                  Matrix supports end-to-end encryption (E2EE) for private conversations. When E2EE is enabled, 
                  message content is encrypted on your device and can only be decrypted by intended recipients. 
                  The server administrator cannot read E2EE messages. We strongly encourage all users to enable E2EE 
                  for sensitive communications.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">INFORMATION WE SHARE</h3>
                <p className="font-light leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. Your data may be shared only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-light">
                  <li><strong>Federation:</strong> When you communicate with users on other Matrix homeservers, your messages and profile information are shared with those servers according to the Matrix protocol</li>
                  <li><strong>Legal requirements:</strong> When legally required by law, regulation, or enforceable governmental request</li>
                  <li><strong>Service providers:</strong> Hosting infrastructure providers may have access to server data but are bound by confidentiality agreements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">DATA RETENTION</h3>
                <ul className="list-disc pl-6 space-y-2 font-light">
                  <li><strong>Messages:</strong> Stored indefinitely unless manually deleted by users or room administrators</li>
                  <li><strong>Server logs:</strong> Retained for up to 90 days for security and troubleshooting purposes</li>
                  <li><strong>Account data:</strong> Retained until account deletion is requested</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">YOUR RIGHTS</h3>
                <p className="font-light leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 font-light">
                  <li>Access your personal data stored on the server</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your account and associated data</li>
                  <li>Export your data in a portable format</li>
                  <li>Withdraw consent and stop using the service at any time</li>
                </ul>
                <p className="font-light leading-relaxed mt-3">
                  To exercise these rights, contact the administrator at{' '}
                  <a href="mailto:iquxae@proton.me" className="text-primary hover:underline">iquxae@proton.me</a>.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">CHILDREN'S PRIVACY</h3>
                <p className="font-light leading-relaxed">
                  This service is not intended for users under the age of 13. We do not knowingly collect personal information 
                  from children under 13. If you become aware that a child has provided us with personal data, please contact us immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">SECURITY</h3>
                <p className="font-light leading-relaxed">
                  We implement industry-standard security measures to protect your data, including encrypted connections (TLS/SSL), 
                  secure server configurations, regular security updates, and access controls. However, no method of transmission 
                  over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-gray-800 dark:text-white font-normal mb-3">CHANGES TO THIS POLICY</h3>
                <p className="font-light leading-relaxed">
                  We will update this privacy policy as needed so that it is current, accurate, and as clear as possible. 
                  Continued use of the service after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Last updated: November 2025
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
                  For questions or concerns, contact:{' '}
                  <a href="mailto:iquxae@proton.me" className="text-primary hover:underline">iquxae@proton.me</a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Legal;
