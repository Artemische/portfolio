import ProjectCard from "../components/ProjectCard";

export default function Page() {
  return (
    <>
      <ProjectCard 
        title="DurianoBot"
        description={
          `Telegram WebApp game with TON integration. PvP mini-games, clans, boosters.
          • Full-stack on React + TypeScript with complex component state and dynamic rendering
          • TON blockchain integration: seamless in-app payments, boosts & clan perks
          • Mini-games & social system: friend invites, global ratings, daily quests
          • Pixel-perfect UI with animated sprites, mobile-first design, and dark theme`
        }
        imageSrc="/d1.png"
        actionLink="https://t.me/DurianoBot?start=MDAwNQ"
        actionText="Try Now"
        large={true}
      />
      <ProjectCard 
        title="Taskinfinity"
        description={
          `Startup & investor matchmaking platform. Enhanced search with AI integration.
          • Advanced search engine using NLP to match startup profiles to investor criteria
          • Custom JWT auth backend with protected API routes, role-based access
          • Deployed via CI/CD on a secure cloud stack (React + Node.js + MongoDB → PostgreSQL now)
          `
        }
        imageSrc="/t1.png"
        actionLink="https://taskinfinity.com/"
        actionText="Visit Site"
        large={true}
      />
      <ProjectCard 
        title="GGOFS"
        description={`Oilfield monitoring dashboard. Role-based access, real-time data overlays.
        • Role-based dashboards: different views for engineers, supervisors, and clients
        • Live maps + chart integration (React + D3.js) for well monitoring & status updates
        • Responsive enterprise UI with performance-first architecture
        `}
        imageSrc="/g1.png"
        actionLink="https://ggofs.com/index.html"
        actionText="More Info"
        large={true}
      />
      <ProjectCard 
        title="Focolor Service"
        description={`Website for a BMW & MINI car service center with modern branding and appointment scheduling functionality.
        • Modern landing page with custom branding & sleek visuals
        • Responsive layout with optimized mobile-first design
        • Clear CTA flow to maximize appointment conversions  
        `}
        imageSrc="/focolor.png"
        actionLink="https://www.focolor-service.by/"
        actionText="Visit Site"
        large={true}
      />
      <ProjectCard 
        title="Facebook Farm Automation"
        description={
          `A fully automated system for mass account creation and warm-up on Facebook. Accounts are registered and maintained autonomously over a 7-day cycle to simulate real user activity.
          • Autonomous account registration
          • Activity emulation (7-day warm-up)
          • Puppeteer + Playwright-based scripting
          • Integration with mail/SMS verification APIs
          `}
        imageSrc="/fb.png"
        large={true}
      />
    </>
  )
}