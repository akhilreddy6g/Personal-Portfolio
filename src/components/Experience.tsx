import ExperienceCard from './common/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'University of Florida',
      website: 'https://rcrec-ona.ifas.ufl.edu/',
      period: 'May 2025 - Present',
      description: 'Developed a decision support system application that helps visualize and analyze nitrate pollution in agricultural regions within the United States. The platform lets users draw custom areas on an interactive map and instantly retrieve nitrate concentration data from nearby monitoring stations. Built with Next.js, React.js, ShadcnUI, Tailwind CSS, Leaflet, Flask, and PostgreSQL with PostGIS, the tool streamlines complex environmental data into actionable insights, significantly improving accessibility for researchers and policymakers, enabling data-driven decisions for sustainable land and water management.',
    },
    {
      role: 'Full Stack Engineer Intern',
      company: 'The Commons XR',
      website: 'https://thecommonsxr.com/',
      period: 'Jan 2025 - May 2025',
      description: 'Optimized access control by enhancing granularity and reducing unauthorized access incidents by 30%, while deploying and optimizing API endpoints on GCP Cloud Run for scalable, secure, and serverless execution. Streamlined data flow across components using React hooks, improved core editor functionality, and resolved critical UI rendering issues in an agile environment, eliminating false loading states and achieving 0% data redundancy. Developed an SMTP email alert system for critical error escalation, reducing issue reports by 10%, while designing, testing, and deploying features through iterative SDLC processes in an agile environment.',
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