import React from "react";
import ProjectStatistics from "../components/ProjectStatistics";
import Platforms from "../components/Platforms";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import MemberCard from "../components/MemberCard";

const projects = [
  {
    name: "Web redesign",
    type: "Web Development",
    date: "2021-09-01",
    members: ["Alice", "Bob", "Charlie"],
    files: 5,
    progress: 75,
  },
  {
    name: "Mobile App",
    type: "App Development",
    date: "2021-10-15",
    members: ["David", "Eve", "Frank"],
    files: 8,
    progress: 60,
  },
  {
    name: "Marketing Campaign",
    type: "Marketing",
    date: "2021-11-20",
    members: ["Grace", "Heidi", "Ivan"],
    files: 12,
    progress: 90,
  },
  {
    name: "SEO Optimization",
    type: "SEO",
    date: "2021-12-05",
    members: ["Jack", "Kathy", "Leo"],
    files: 3,
    progress: 50,
  },
];

const clients = [
  {
    name: "Client A",
    industry: "Finance",
    phone: "123-456-7890",
  },
  {
    name: "Client B",
    industry: "Healthcare",
    phone: "234-567-8901",
  },
  {
    name: "Client C",
    industry: "Retail",
    phone: "345-678-9012",
  },
  {
    name: "Client D",
    industry: "Technology",
    phone: "456-789-0123",
  },
];

const members = [
  {
    total_members: 4,
    job: "UI Designer",
  },
  {
    total_members: 5,
    job: "Backend Developer",
  },
  {
    total_members: 3,
    job: "Frontend Developer",
  },
  {
    total_members: 6,
    job: "Project Manager",
  },
];

const Home = () => {
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProjectStatistics />
        <Platforms />
        <ProjectStatistics />
        <Platforms />
      </div>

      <div>
        <div className="flex justi  fy-between items-center py-4">
          <h1 className="text-lg font-bold">Current Projects</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {projects &&
            projects.map((project) => <ProjectCard project={project} />)}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-bold">Current Clients</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {clients && clients.map((client) => <ClientCard client={client} />)}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-bold">Members</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {members && members.map((member) => <MemberCard member={member} />)}
        </div>
      </div>

    </div>
  );
};

export default Home;
