import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20" data-animate="true">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="mailto:akhilreddyoff21@gmail.com"
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="mr-2" />
              akhilreddyoff21@gmail.com
            </a>
            <a
              href="tel:+13527098669"
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
            >
              <MessageSquare className="mr-2" />
              +1 (352) 709-8669
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;