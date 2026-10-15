import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
}

export function useGitHub(username: string) {
  const defaultFallbackRepos: GitHubRepo[] = [
    {
      id: 1,
      name: 'Music_player_management_system_backend',
      description: 'Comprehensive backend management system for music streaming and player catalog built with Java, OOP principles, and MySQL.',
      language: 'Java',
      html_url: `https://github.com/${username}/Music_player_management_system_backend`,
      stargazers_count: 1,
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'portfolio',
      description: 'Modern, high-performance developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.',
      language: 'TypeScript',
      html_url: `https://github.com/${username}/portfolio`,
      stargazers_count: 1,
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'Xpertdental_demo',
      description: 'Dental clinic web application and patient appointment scheduling system.',
      language: 'JavaScript',
      html_url: `https://github.com/${username}/Xpertdental_demo`,
      stargazers_count: 0,
      updated_at: new Date().toISOString(),
    },
  ];

  const [repos, setRepos] = useState<GitHubRepo[]>(defaultFallbackRepos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        }
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Keep defaultFallbackRepos on rate limit or error so UI does not break
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}

