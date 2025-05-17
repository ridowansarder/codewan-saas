import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projectsList = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/project2.png",
    tags: ["TypeScript", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/project3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/p1.jpg",
    tags: ["React", "TailwindCSS", "AppWrite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/p2.jpg",
    tags: ["TypeScript", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/p3.jpg",
    tags: ["React", "TailwindCSS", "AppWrite"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="w-[80%] mx-auto">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div className="uppercase font-bold">
            <h1 className="text-sm lg:text-xl text-emerald-700 dark:text-amber-400">
              LATEST WORKS
            </h1>
            <h2 className="text-xl md:text-3xl">
              Driving Change with Innovative Successful Projects
            </h2>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#"
              className="p-4 text-lg dark:bg-amber-400 dark:hover:bg-amber-500 dark:text-black bg-emerald-800 hover:bg-emerald-700 text-emerald-50 rounded-full"
            >
              All Projects
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectsList.map((project) => (
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
              key={project.id}
              className="shadow-lg rounded-lg overflow-hidden bg-card"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-8">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
