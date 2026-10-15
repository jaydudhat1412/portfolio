import React from 'react';
import { useGitHub } from '../hooks/useGitHub';
import { personalData } from '../data/personal';
import { Github, Star, ArrowUpRight } from 'lucide-react';

const GitHubSection: React.FC = () => {
  const { repos, loading, error } = useGitHub(personalData.github);

  return (
    <section id="github" className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
        <a 
          href={`https://github.com/${personalData.github}`}
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
      </div>

      <div className="space-y-4">
        {loading && repos.length === 0 ? (
          <div className="h-32 rounded-xl border border-white/10 bg-black/20 animate-pulse" />
        ) : repos.length === 0 ? (
          <div className="p-6 rounded-xl border border-white/10 bg-black/20 text-center">
            <Github size={24} className="mx-auto text-secondary mb-2" />
            <p className="text-sm text-secondary">
              Check out my projects on <a href={`https://github.com/${personalData.github}`} className="text-accent hover:underline">GitHub</a>.
            </p>
          </div>
        ) : (
          repos.slice(0, 3).map((repo) => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="block p-4 rounded-xl border border-white/10 bg-[#0c101a]/90 hover:border-accent/40 hover:bg-accent/5 transition-all group overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3 mb-2 min-w-0">
                <h3 className="font-semibold text-white group-hover:text-accent-light transition-colors text-sm sm:text-base leading-snug break-words [overflow-wrap:anywhere] break-all flex-1 min-w-0 text-left">
                  {repo.name}
                </h3>
                <ArrowUpRight size={16} className="text-secondary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
              </div>
              {repo.description && (
                <p className="text-xs sm:text-sm text-secondary line-clamp-2 mb-3 break-words [overflow-wrap:anywhere] text-left">
                  {repo.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-secondary pt-0.5">
                {repo.language && (
                  <span className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1 shrink-0">
                  <Star size={13} className="text-amber-400" />
                  {repo.stargazers_count}
                </span>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
};

export default GitHubSection;
