import ExperienceCard from './common/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'University of Florida',
      website: 'https://rcrec-ona.ifas.ufl.edu/',
      period: 'May 2025 - Present',
      description: 'As a software engineer, I built a geospatial web platform that researchers depended on daily to access, monitor, and download multidimensional environmental data using React, TypeScript, and Next.js on The frontend, and Java Spring Boot microservices with PostgreSQL, Redis, and OAuth2 on the backend — containerized with Docker and deployed on AWS using Terraform across ECS, RDS, and S3. Beyond the core platform, I built async ML simulation pipelines with Python FastAPI and Celery, cutting user wait times by 20%. Monitoring was handled through Prometheus and Grafana, alongside an LLM framework I developed that translated domain expert requirements into technical specs. All of this happened in close collaboration with hydrologists and biologists — translating their research needs into production-grade software.',
    },
    {
      role: 'Full Stack Intern',
      company: 'Commons XR',
      website: 'https://thecommonsxr.com/',
      period: 'Jan 2025 - May 2025',
      description: 'As a full-stack intern, I shipped production features across the full stack in a fast-moving Agile environment. My biggest deliverable was a secure email alert system built with React, Python, and SQL that reduced service interruptions by 10%. I also automated multi-server startup using cross-platform Bash scripting, cutting VM recovery time from five minutes to one. On the DevOps side, I standardized CI/CD deployments on GCP with Docker and GitHub Actions, and wrote unit, integration, and end-to-end tests with Mocha and Cypress. Apart from that, I also collaborated closely with Unity developers to troubleshoot desktop rendering issues using .NET/C#, and established data contracts and API specs across cross-functional teams.',
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