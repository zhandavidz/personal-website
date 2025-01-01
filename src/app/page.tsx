'use client';
import ExportedImage from "next-image-export-optimizer";
import testPictureStatic from "../../public/images/me.png";

import Badge from "@/components/Badge";
import ThemeToggle from "@/components/theme/ThemeToggle";

import Link from "next/link";
import HiIntro from "@/components/home-specific/HiIntro";

export default function Home() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center lg:px-8"
    >
      <HiIntro wrapperStyles="space-y-4 m-8 order-1 lg:hidden" />

      {/* main "about me" section */}
      <div
        className="lg:basis-2/3 m-8 lg:space-y-8 order-3 lg:order-1"
      >
        {/* <h1>Hi, I&apos;m David Zhan. I&apos;m a software developer.</h1>
        <h1>Currently: Japan Intern / Undergraduate Course Assistant</h1>
        <p>I am a graduating senior majoring in Computer Science at the University of Massachusetts Amherst, and I am excited to be continuing my education in the accelerated master&apos;s program. I have a strong foundation in software development, with experience in various programming languages and frameworks. I am currently seeking software engineering internships to further develop my skills and gain practical experience in the industry. My interests include web/app development, machine learning, and networking. In my free time, I enjoy working on personal projects, taking photos of cool cars, and finding new food places in my neighborhood.</p> */}

        <HiIntro wrapperStyles="space-y-4 hidden lg:block" />

        {/* Elevator Pitch */}
        <div className="space-y-4 sm:px-8 lg:px-0">
          <p className="text-lg">
            I am a graduating senior majoring in Computer Science at the University of Massachusetts Amherst, and I am excited to be continuing my education in the accelerated master&apos;s program. I have a strong foundation in software development, with experience in various programming languages and frameworks. I am currently seeking software engineering internships to further develop my skills and gain practical experience in the industry. My interests include web/app development, machine learning, and networking. In my free time, I enjoy working on personal projects, taking photos of cool cars, and finding new food places in my neighborhood.
          </p>
          <p className="text-lg italic text-gray-600 dark:text-gray-400">
            Note that this website is still under development. You can preview the current progress at <Link href="https://preview.dzhan.dev" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">preview.dzhan.dev</Link>.
          </p>
          <p>Note that you can play around with this cool theme toggler! <ThemeToggle /></p>
        </div>
      </div>



      {/* "mini-resume area" */}
      <div
        className="lg:basis-1/3 lg:m-8 justify-between min-w-[310px] max-w-[370px] order-2"
      >
        <div className="p-4 rounded-t-3xl bg-gray-200 dark:bg-gray-800">
          <div className="flex flex-row left-align items-center space-x-4">
            <div className="">
              <ExportedImage
                src={testPictureStatic}
                alt="Picture of the author"
                width={80}
                height={80}
                className="rounded-full p-2"
              />
            </div>
            <div className="">
              <h1 className="font-bold">David Zhan</h1>
              <h1>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="inline pe-1 w-7 h-7 icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg> 
                <Badge color="blue" size="small">Albany, CA</Badge> <Badge color="green" size="small">Amherst, MA</Badge></h1>
            </div>
          </div>
          <h3 className="py-1">University of Massachusetts Amherst</h3>
          <p className="py-1 text-sm"><span className="font-bold">MS</span>, Computer Science <Badge color="white">May 2026</Badge></p>
          <p className="py-1 text-sm">BS, Computer Science <Badge color="white">May 2025</Badge></p>
          <p className="py-1 text-sm">GPA: <Badge>3.98</Badge> (Major GPA: <Badge color="green">4.0</Badge>)</p>
          <p className="py-1 text-sm">See: <Link href="#"><Badge color="yellow">Transcript</Badge></Link></p>
        </div>
        <div className="flex flex-row rounded-none h-10">
          {/* color scheme for linkedin, but more subtle */}
          <div className="basis-1/2 bg-blue-200 dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700 space-fill">
            <a
              href="https://www.linkedin.com/in/zhandavidz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
          </div>
          {/* color scheme for github */}
          <div className="basis-1/2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600  space-fill">
            <a
              href="https://www.github.com/zhandavidz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="rounded-none h-10 flex flex-row">
          <div className="basis-full bg-green-200 dark:bg-green-800 hover:bg-green-300 dark:hover:bg-green-700">
            <a
              href="mailto:zhandavidz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="px-1 w-8 h-8 icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg> 
              zhandavidz@gmail.com
            </a>
          </div>
          <button onClick={() => {navigator.clipboard.writeText("zhandavidz@gmail.com")}} className="basis-10 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:bg-green-400 dark:focus:bg-green-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
            <p className="text-xs">Copy</p>
          </button>
        </div>
        <div className="rounded-b-3xl bg-red-200 hover:bg-red-300 dark:bg-red-800 dark:hover:bg-red-700 h-10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            See my resume 
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"
            className="text-red-600 dark:text-red-400 px-1 w-9 h-9 icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><path d="M17 18h2" /><path d="M20 15h-3v6" /><path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
