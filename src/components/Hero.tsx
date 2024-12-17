import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import SocialLink from './common/SocialLink';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center" data-animate="true">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="./images/profilepic.jpg"
              alt="akhil reddy gaddam"
              className="rounded-2xl shadow-xl w-64 md:w-96 mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Akhil
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-justify">A passionate software developer specializing in full-stack development, AI, and ML. <span className='hidden sm:inline'>I thrive on transforming ideas into impactful products, particularly those that require teamwork and collaboration. Apart from breaking down complex challenges into manageable, actionable tasks and seamlessly integrating them into practical, effective solutions, I enjoy bringing people’s visions to life on screen</span></p>
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialLink href="https://github.com/akhilreddy6g" icon={<FaGithub size={32} color="#4078c0" />} />
              <SocialLink
                href="https://www.linkedin.com/in/akhil-reddy-gaddam/"
                icon={<FaLinkedin size={32} color="#0077b5" />}
              />
              <SocialLink 
                href="https://leetcode.com/u/akgaddam/" 
                icon={
                  <div className="flex items-center justify-center w-8 h-8">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
                      alt="LeetCode" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                } 
              />
              <SocialLink href="mailto:akhilreddyoff21@gmail.com" icon={<FaEnvelope size={32} color="#d14836" />} />
              <SocialLink href="tel:+13527098669" icon={<FaPhoneAlt size={32} color="#34a853" />} />
              <SocialLink href="https://x.com/kil0006?s=21&t=A-5W6FL_V7lqe6fLcotK6A" icon={<SiX size={32} color="#000000" />} />
              <SocialLink
                href="https://www.instagram.com/akhi1_reddy/"
                icon={<FaInstagram size={32} color="#e1306c" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
