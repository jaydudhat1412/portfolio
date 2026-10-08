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
        {loading ? (
          <div className="h-32 rounded-lg border border-border bg-black/20 animate-pulse" />
        ) : error || repos.length === 0 ? (
          <div className="p-6 rounded-lg border border-border bg-black/20 text-center">
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
              className="block p-4 rounded-lg border border-border bg-black/20 hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                  {repo.name}
                </h3>
                <ArrowUpRight size={16} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {repo.description && (
                <p className="text-sm text-secondary line-clamp-2 mb-3">
                  {repo.description}
                </p>
              )}
              <div className="flex items-center gap-4 text-xs font-mono text-secondary">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent/70" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={14} />
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
