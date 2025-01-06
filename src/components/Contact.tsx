import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { SocialLinks } from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                {contactInfo.email}
              </a>
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                {contactInfo.phone}
              </a>
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;
