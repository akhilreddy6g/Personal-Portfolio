import ExperienceCard from './common/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      role: 'ML Engineer',
      company: 'Tevatron Technologies',
      period: 'May 2021 - June 2021',
      description: 'Developed a decision tree model to predict the acceptability of used automobiles for resale with 96.7% accuracy, utilizing feature engineering and data preprocessing techniques like stratified sampling and one-hot encoding. Optimized the model to reduce evaluation time by 20% and manual inspection efforts by 30%, improving operational efficiency.',
    },
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