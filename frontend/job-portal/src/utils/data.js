import {
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
} from 'lucide-react';
import { LayoutDashboard, Plus, Briefcase, Building2 } from "lucide-react";

export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Smart Job Search",
    description: "Find jobs instantly with filters for role, location, experience, and salary."
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create a professional resume with AI-powered suggestions."
  },
  {
    icon: FileText,
    title: "Instant Alerts",
    description: "Get instant notifications for new job postings that match your profile."
  },
  {
    icon: Users,
    title: "Save Jobs",
    description: "Bookmark jobs to apply later and track your saved opportunities."
  }
];

export const employerFeatures = [
  {
    icon: Users,
    title: "Talent Discovery",
    description: "Search through a large pool of qualified candidates using advanced filters."
  },
  {
    icon: FileText,
    title: "Easy Job Posting",
    description: "Post job openings in minutes with a simple and intuitive interface."
  },
  {
    icon: FileText,
    title: "Direct Messaging",
    description: "Communicate with job seekers instantly to schedule interviews."
  },
  {
    icon: FileText,
    title: "Application Analytics",
    description: "Track job views, applications, and performance with detailed insights."
  }
];


export const NAVIGATION_MENU = [
  {
    id: "employer-dashboard",
    name: "Dashboard",
    icon: LayoutDashboard
  },
  {
    id: "post-job",
    name: "Post Job",
    icon: Plus
  },
  {
    id: "manage-jobs",
    name: "Manage Jobs",
    icon: Briefcase
  },
  {
    id: "company-profile",
    name: "Company Profile",
    icon: Building2
  }
];

export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "It & Software", label: "It & Software" },
  { value: "Software Development", label: "Software Development" },
  { value: "Customer Service", label: "Customer Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "Hr", label: "Hr" },
  { value: "Other", label: "Other" }
];

export const JOB_TYPES = [
  { value: "remote", label: "Remote" },
  { value: "part-time", label: "Part Time" },
  { value: "full-time", label: "Full Time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" }
];

export const SALARY_RANGES=[
'less than 1000',
'1000-15000',
'more than 15000'
];