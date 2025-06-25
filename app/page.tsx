import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import Contacts from "./components/Contacts";
import ContactMeBtn from "./components/ContactMeBtn";

export default function Home() {

  return (
    <section id="about">
      <div id="heading">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-8xl">Hi 👋, I'm Artsem 🥷🏿</h1>
          <h2 className="text-2xl lg:text-4xl">Fullstack JavaScript Developer</h2>
          <h3 className="text-xl lg:text-2xl">React / TypeScript / Next.js</h3>
        </div>
        <div className="mt-5 flex gap-4">
          <Link href="/projects" className="flex items-center">
            <button className="px-5 py-2 rounded-md border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition">
              View Projects
            </button>
          </Link>
          <ContactMeBtn />
        </div>
      </div>
      <div id="Projects" className="mt-10">
        <h2 className="text-4xl">Projects</h2>
        <div className="mt-5 flex flex-col md:flex-row gap-5 lg:gap-10 align-items-center relative">
            <ProjectCard 
              title="DurianoBot"
              description="Telegram WebApp game with TON integration. PvP mini-games, clans, boosters."
              imageSrc="/d1.png"
              actionLink="https://t.me/DurianoBot?start=MDAwNQ"
              actionText="Try Now"
            />
            <ProjectCard 
              title="Taskinfinity"
              description="Startup & investor matchmaking platform. Enhanced search with AI integration."
              imageSrc="/t1.png"
              actionLink="https://taskinfinity.com/"
              actionText="Visit Site"
            />
            <ProjectCard 
              title="GGOFS"
              description="Oilfield monitoring dashboard. Role-based access, real-time data overlays."
              imageSrc="/g1.png"
              actionLink="https://ggofs.com/index.html"
              actionText="More Info"
            />
            <div className="mt-8 text-center flex items-center">
              <Link
                href="/projects"
                className="px-5 py-2 rounded-md border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition">
                View More Projects  →
              </Link>
            </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-4xl">About</h2>
        <p className="mt-5 text-gray-400 mt-2 text-xl">
          I'm a fullstack JavaScript developer with 6+ years of experience — from complex enterprise UIs to gamified Telegram WebApps and MVPs for early-stage startups.
          <br/>
          I love building clean, beautiful interfaces that not only look good but feel right. Whether it’s a clickable game UI, a dashboard for real-world operations, or a slick investor platform — I bring ideas to life with precision and care.
        </p>
      </div>
      <Contacts />
    </section>
  );
}
