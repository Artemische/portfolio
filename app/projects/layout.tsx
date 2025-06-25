//import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <h2 className="text-4xl lg:text-8xl md:inline-block">🧩 Projects</h2>
        <span className=" text-gray-300">
          (Non-NDA)
        </span>
      </div>
      <div className="flex flex-col flex-grow md:overflow-y-auto pt-10 gap-5">{children}</div>
    </div>
  );
}