import { Mail, MessageSquare } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { FcOk } from "react-icons/fc";
import { useState } from 'react';

const Contact = () => {
  const [status, changeStatus] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const form = e.target as HTMLFormElement
    const params = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string || "No Subject",
    };
    emailjs.init({
      publicKey: import.meta.env.VITE_PUBLIC_KEY
    });
    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, params).then(
      (response) => {
       //success
       form.reset()
       changeStatus(true);
      },
      (error) => {
        //Error
      },
    );
  }
  return (
    <section id="contact" className="py-20" data-animate="true">
      {status? 
      <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-row gap-2'>
          <span className='text-xl'>Message Sent Successfully</span> 
          <div className='text-3xl pb-2'><FcOk></FcOk></div>
        </div>
        <button className='px-4 py-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)]' onClick={()=>{changeStatus(false)}}>Send Another</button>
      </div> :
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
                name="email"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
              name="subject"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-blue-900/20 text-white border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
              name="message"
              required
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
      </div>}
    </section>
  );
};

export default Contact;