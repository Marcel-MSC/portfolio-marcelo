import { User, Code2, Briefcase, GraduationCap } from 'lucide-react';

export const navItems = [
  { name: 'Me', path: '/', icon: User },
  { name: 'Projects', path: '/projects', icon: Code2 },
  { name: 'Work', path: '/work', icon: Briefcase },
  { name: 'Education', path: '/education', icon: GraduationCap },
];

export function isNavActive(pathname, path) {
  return (pathname === '/' && path === '/') || pathname === path;
}
