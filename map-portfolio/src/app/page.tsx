import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "../components/ui/button";
import GradientCircle from "../components/gradientCircle";
import { Poster } from "../components/ui/poster";
import { GridToggle } from "@/components/gridToggle";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-8 mx-10 2xl:mx-120 xl:mx-90 lg:mx-60 sm:mx-30 mt-32 font-extralight">
      <div className="col-span-4">
        {/* NAVBAR */}
        <div className="flex justify-between mb-2">
          {/* ICON */}
          <ThemeToggle />

          {/* NAV PAGES */}
          <div className="flex gap-4 univers font-extralight">
            <h1>home</h1>
            <h1>credits</h1>
          </div>
        </div>
        <h1 className="text-2xl md:text-4xl poppins font-medium">
          Creativity flourishing
        </h1>
        <p className="text-sm text-justify mt-2 md:mt-6 univers font-light md:text-lg">
          At its core, creativity is the act of transforming the intangible into
          the tangible. It’s the ability to see connections where others may
          not, to ask questions no one else dares to ask, and to bring something
          new into existence.
        </p>

        {/* ABOUT BUTTON */}
        <div className="mt-6">
          <Button> about </Button>
        </div>

        <div className="flex gap-4 mt-12 univers text-lg">
          <div className="content-center align-middle">
            <GradientCircle size={20} />
          </div>
          <div>Latest: March</div>
        </div>

        <div className="flex univers text-lg justify-between">
          <h1 className="mt-2 text-2xl md:text-4xl poppins font-medium">
            Submissions
          </h1>

         {/* GRID TOGGLE */}
          <div className="ml-auto mt-2">
            <GridToggle />
          </div>
        </div>

        {/* IMAGE GRID */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
            <Poster
              src="/images/portfolio7.png"
              alt="MAP 1st Submission"
              className="w-full h-full"
            />
            <Poster
              src="/images/portfolio6.png"
              alt="MAP 1st Submission"
              className="w-full h-full"
            />
            <Poster
              src="/images/portfolio5.png"
              alt="Portfolio Image 2"
              className="w-full h-full"
            />
            <Poster
              src="/images/portfolio4.jpg"
              alt="Portfolio Image 3"
              className="w-full h-full"
            />
            <Poster
              src="/images/portfolio3.png"
              alt="Portfolio Image 3"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </main>
  );
}
