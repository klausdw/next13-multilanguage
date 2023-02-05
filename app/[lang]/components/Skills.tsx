import Image from "next/image";
import {
  typescript,
  react,
  next,
  docker,
  jest,
  puppeteer,
  node,
  html,
  php,
  css,
  tailwind,
  mongodb,
  graphql,
  gitlab,
  vscode,
} from "./imagesImport";

const Skills = () => {
  const skills = [
    { logo: typescript, title: "TypeScript" },
    { logo: react, title: "React" },
    { logo: next, title: "Next.js" },
    { logo: docker, title: "Docker" },
    { logo: jest, title: "Jest" },
    { logo: puppeteer, title: "Puppeteer" },
    { logo: node, title: "Node.js" },
    { logo: html, title: "HTML" },
    { logo: php, title: "PHP" },
    { logo: css, title: "CSS" },
    { logo: tailwind, title: "Tailwind" },
    { logo: mongodb, title: "MongoDB" },
    { logo: graphql, title: "GraphQL" },
    { logo: gitlab, title: "GitLab" },
    { logo: vscode, title: "VS Code" },
  ];

  return (
    <div className="shadow-md rounded-xl overflow-hidden bg-white">
      <div className="p-7 block-section">
        <h2 className="text-lg font-bold mb-6">Skills</h2>
        <div className="">
          {skills.map(({ logo, title }, index) => (
            <div
              className="items-center grid grid-flow-col auto-cols-max"
              key={index}
            >
              <Image width={20} height={20} src={logo} alt={title} />
              <span className="ml-2">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
