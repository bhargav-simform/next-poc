import { Issue } from '../types/issue';

const ISSUES_KEY = 'issues';

export const localStorageService = {
  getIssues: (): Issue[] => {
    if (typeof window === 'undefined') return [];
    const issues = localStorage.getItem(ISSUES_KEY);
    return issues ? JSON.parse(issues) : [];
  },

  saveIssue: (issue: Issue): void => {
    const issues = localStorageService.getIssues();
    const updatedIssues = [...issues, issue];
    localStorage.setItem(ISSUES_KEY, JSON.stringify(updatedIssues));
  },

  updateIssue: (updatedIssue: Issue): void => {
    const issues = localStorageService.getIssues();
    const updatedIssues = issues.map((issue) => 
      issue.id === updatedIssue.id ? updatedIssue : issue
    );
    localStorage.setItem(ISSUES_KEY, JSON.stringify(updatedIssues));
  },

  deleteIssue: (id: string): void => {
    const issues = localStorageService.getIssues();
    const filteredIssues = issues.filter((issue) => issue.id !== id);
    localStorage.setItem(ISSUES_KEY, JSON.stringify(filteredIssues));
  },

  deleteMultipleIssues: (ids: string[]): void => {
    const issues = localStorageService.getIssues();
    const filteredIssues = issues.filter((issue) => !ids.includes(issue.id));
    localStorage.setItem(ISSUES_KEY, JSON.stringify(filteredIssues));
  }
};
