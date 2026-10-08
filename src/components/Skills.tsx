import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { Database, Layout } from 'lucide-react';

const icons = [
  <Layout size={24} className="text-accent" />,
  <Database size={24} className="text-accent" />
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-12 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Technical Arsenal</h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, groupIdx) => (
          <motion.div
            key={groupIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIdx * 0.1, duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                {icons[groupIdx % icons.length]}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-lg font-medium text-primary group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-sm text-secondary/80 leading-relaxed mb-3">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.related.map((rel, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 bg-black/40 border border-white/5 rounded-full text-secondary/60">
                        {rel}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
