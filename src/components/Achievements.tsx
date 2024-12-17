import { useState } from "react";
import { X } from 'lucide-react';
import {FiRepeat} from 'react-icons/fi'

interface Achievement {
    id: string;
    label: string;
    description: string;
  }

const Achievements: React.FC = () => {
    const [select, alterSelect] = useState<Achievement | boolean>(false);

    const ach: Achievement[] = [
        {
          id: 'lc_200d',
          label: '200+ days on Leetcode',
          description: 'Achieved this feat, after solving problems on leetcode for 200+ days'
        },
    ]
    return (
      <section id="achievements" className="py-20" data-animate="true">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
            Achievements
        </h2>
        <div className="flex justify-center items-center flex-wrap">
            <img src="./images/lc200d.png" alt="Leetcode 200 Days" className="w-40 h-40 object-cover cursor-pointer" onClick={() => alterSelect(true)}/>
        </div>
        {select && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
                <button
                  onClick={() => alterSelect(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex flex-row gap-2"><FiRepeat size={32} color="green"/>{ach[0].label}</h3>
                <p className="text-gray-600 leading-relaxed">{ach[0].description}</p>
              </div>
            </div>
          )}
      </div>
      </section>
    );
};
export default Achievements;
