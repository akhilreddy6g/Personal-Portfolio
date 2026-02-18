import { Calendar, BookOpen } from 'lucide-react';

interface Course {
  name: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  courses: Course[];
}

const Education = () => {
  const educationData: Education[] = [
    {
      school: "University of Florida",
      degree: "MS",
      major: "Computer Science",
      period: "Jan 2023 - Dec 2024",
      courses: [
        { name: "Analysis of Algorithms", description: "Studied advanced algorithms on graphs, trees, explored dynamic programming, p and np problems, including time and space complexity analysis, optimization techniques, and their real-world applications in problem-solving." },
        { name: "Advanced Data Structures", description: "Gained expertise in advanced data structures such as Red Black Trees, B-trees, AVL Trees, Tries, N-ary Trees, focusing on their design, implementation, and application in optimizing data processing." },
        { name: "Computer Networks", description: "Explored in-depth network protocols, advanced data transmission methods, error handling, and system architecture for achieving efficient, scalable, and fault-tolerant network connectivity." },
        { name: "Distributed Operating System Principles", description: "Analyzed the design and implementation of distributed operating systems, focusing on concepts like concurrency, synchronization, fault tolerance, and resource management across multiple machines." }
      ]
    },
    {
      school: "Sreenidhi Institute of Science and Technology",
      degree: "Bachelor of Technology",
      major: "Information Technology",
      period: "Aug 2018 - Aug 2022",
      courses: [
        { name: "Database Management Systems", description: "Worked with relational (SQL) and non-relational (NoSQL) databases, focusing on data modeling, query optimization, and performance tuning." },
        { name: "Operating Systems", description: "Gained expertise in process management, CPU scheduling algorithms, memory allocation, and system-level resource optimization." },
        { name: "Machine Learning", description: "Built predictive models and classification algorithms, focusing on supervised and unsupervised learning." },
        { name: "Cloud Computing", description: "Explored cloud service models (IaaS, PaaS, SaaS), resource provisioning, and cloud infrastructure."}
      ]
    }
  ];

  return (
    <section id="education" className="py-20 opacity-0 translate-y-10" data-animate="true">
      <div className="container mx-auto px-6 relative z-0">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-900/50 to-black/50 rounded-xl p-6 hover: transition-all duration-300 shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                  <p className="text-lg text-blue-600">{edu.degree} in {edu.major}</p>
                </div>
                <div className="flex items-center text-blue-600">
                  <Calendar size={18} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="flex items-center text-lg font-semibold text-gray-400 mb-3">
                  <BookOpen size={18} className="mr-2" />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {edu.courses.map((course, idx) => (
                    <div key={idx} className="bg-gray-300 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800">{course.name}</h5>
                      <p className="text-gray-600 text-sm mt-1 text-justify">{course.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;