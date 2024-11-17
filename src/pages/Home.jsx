import React from "react";
import ProjectStatistics from "../components/ProjectStatistics";
import Platforms from "../components/Platforms";

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
  {
    name: "Content Creation",
    type: "Content",
    date: "2022-01-10",
    members: ["Mona", "Nina", "Oscar"],
    files: 7,
    progress: 80,
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
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
