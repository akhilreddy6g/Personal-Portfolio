import ExperienceCard from './common/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'University of Florida',
      website: 'https://rcrec-ona.ifas.ufl.edu/',
      period: 'May 2025 - Present',
      description: 'As a software engineer, I developed end-to-end, large-scale data systems on HPC infrastructure and designed distributed pipelines that processed over two decades of spatiotemporal data, and then paired them with deterministic PyTorch training to significantly cut model training and evaluation time by 60%. At the same time, I also built a geospatial decision-support platform using Next.js, FastAPI, and PostGIS, making complex environmental data from over 90 monitoring stations intuitive to explore. By optimizing GeoTIFFs and introducing cloud-native storage, I improved system responsiveness and engagement while collaborating closely with hydrologists to ship production-ready features in an agile environment.',
    },
    {
      role: 'Full Stack Engineer Intern',
      company: 'The Commons XR',
      website: 'https://thecommonsxr.com/',
      period: 'Jan 2025 - May 2025',
      description: 'As a full-stack engineer intern, I focused on reliability, performance, and clean design, which led me to automating backend service recovery, reducing the VM downtime drastically. Apart from that, I also built a secure email alerting system to catch client side errors, reducing service interruptions by 10%. In parallel, I optimized REST APIs on cloud infrastructure to improve latency under real traffic. On the frontend, I streamlined data flow across 50+ React components, fixing duplication issues and stabilizing pagination. I also introduced robust testing across multiple layers, ensuring features shipped confidently within agile sprints and contributed to a more scalable, dependable product overall.',
    },
    // {
    //   role: 'ML Engineer Intern',
    //   company: 'Tevatron Technologies',
    //   website: 'https://www.tevatrontech.com/',
    //   period: 'May 2021 - June 2021',
    //   description: 'Developed a decision tree model to predict the acceptability of used automobiles for resale with 96.7% accuracy, utilizing feature engineering and data preprocessing techniques like stratified sampling and one-hot encoding. Optimized the model to reduce evaluation time by 20% and manual inspection efforts by 30%, improving operational efficiency.',
    // },
  ];

  return (
    <section id="experience" className="py-20 duration-[2000ms]" data-animate="true">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;