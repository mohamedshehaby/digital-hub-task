export type TaskStatus = "Not Started" | "In Progress" | "Finished";

export interface Task {
  id: number;
  description: string;
  status: TaskStatus;
}

export const tasks: Task[] = [
  {
    id: 1,
    description: "Complete the weekly sales report",
    status: "In Progress",
  },
  { id: 2, description: "Attend the client meeting", status: "Not Started" },
  {
    id: 3,
    description: "Submit the project documentation",
    status: "Finished",
  },
  {
    id: 4,
    description: "Prepare the presentation for next week",
    status: "Not Started",
  },
  {
    id: 5,
    description: "Fix bugs reported in the system",
    status: "In Progress",
  },
  { id: 6, description: "Plan the team-building event", status: "Finished" },
  {
    id: 7,
    description: "Update the employee training materials",
    status: "In Progress",
  },
  {
    id: 8,
    description: "Review and approve time-off requests",
    status: "Not Started",
  },
  {
    id: 9,
    description: "Deploy the latest application updates",
    status: "Finished",
  },
  {
    id: 10,
    description: "Schedule a performance review meeting",
    status: "Not Started",
  },
  {
    id: 11,
    description: "Create a marketing strategy for Q3",
    status: "In Progress",
  },
  {
    id: 12,
    description: "Audit internal financial records",
    status: "Finished",
  },
  {
    id: 13,
    description: "Organize product launch event",
    status: "Not Started",
  },
  {
    id: 14,
    description: "Optimize website for better SEO",
    status: "In Progress",
  },
  {
    id: 15,
    description: "Develop new customer service policies",
    status: "Not Started",
  },
  {
    id: 16,
    description: "Research new market opportunities",
    status: "Finished",
  },
  {
    id: 17,
    description: "Update company’s social media channels",
    status: "In Progress",
  },
  {
    id: 18,
    description: "Test new features for the mobile app",
    status: "Finished",
  },
  {
    id: 19,
    description: "Conduct team feedback sessions",
    status: "Not Started",
  },
  { id: 20, description: "Train new team members", status: "In Progress" },
  { id: 21, description: "Analyze competitor performance", status: "Finished" },
  {
    id: 22,
    description: "Prepare monthly budget forecast",
    status: "Not Started",
  },
  {
    id: 23,
    description: "Fix UI bugs in the mobile application",
    status: "In Progress",
  },
  {
    id: 24,
    description: "Set up customer feedback surveys",
    status: "Finished",
  },
  {
    id: 25,
    description: "Prepare materials for annual meeting",
    status: "Not Started",
  },
  {
    id: 26,
    description: "Organize cloud storage files",
    status: "In Progress",
  },
  { id: 27, description: "Design new company logo", status: "Finished" },
  {
    id: 28,
    description: "Update pricing for all products",
    status: "Not Started",
  },
  {
    id: 29,
    description: "Coordinate with HR for hiring process",
    status: "In Progress",
  },
  {
    id: 30,
    description: "Test payment gateway integration",
    status: "Finished",
  },
  {
    id: 31,
    description: "Draft the new employee handbook",
    status: "Not Started",
  },
  {
    id: 32,
    description: "Conduct market research survey",
    status: "In Progress",
  },
  {
    id: 33,
    description: "Prepare quarterly financial statements",
    status: "Finished",
  },
  {
    id: 34,
    description: "Improve internal communication tools",
    status: "Not Started",
  },
  {
    id: 35,
    description: "Develop the new mobile app UI",
    status: "In Progress",
  },
  {
    id: 36,
    description: "Set up automated email campaigns",
    status: "Finished",
  },
  {
    id: 37,
    description: "Create marketing videos for social media",
    status: "Not Started",
  },
  {
    id: 38,
    description: "Revise the annual performance review process",
    status: "In Progress",
  },
  {
    id: 39,
    description: "Review contracts with key suppliers",
    status: "Finished",
  },
  { id: 40, description: "Update the product catalog", status: "Not Started" },
  {
    id: 41,
    description: "Research technology trends in the industry",
    status: "In Progress",
  },
  {
    id: 42,
    description: "Prepare a disaster recovery plan",
    status: "Finished",
  },
  {
    id: 43,
    description: "Host a webinar on new product features",
    status: "Not Started",
  },
  {
    id: 44,
    description: "Plan content calendar for the blog",
    status: "In Progress",
  },
  {
    id: 45,
    description: "Improve customer support documentation",
    status: "Finished",
  },
  {
    id: 46,
    description: "Conduct security audit for the website",
    status: "Not Started",
  },
  {
    id: 47,
    description: "Collaborate with sales team for Q4 goals",
    status: "In Progress",
  },
  {
    id: 48,
    description: "Monitor server performance and uptime",
    status: "Finished",
  },
];
