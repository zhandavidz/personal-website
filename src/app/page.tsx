import ExportedImage from "next-image-export-optimizer";
import testPictureStatic from "../../public/images/me.png";

import Badge from "@/components/Badge";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center"
    >
      {/* main "about me" section */}
      <div
        className="lg:basis-2/3 m-8"
      >
        <h1>Hi, I&apos;m David Zhan. I&apos;m a software developer.</h1>
        <h1>Currently: Japan Intern / Undergraduate Course Assistant</h1>
        <p>I am a graduating senior majoring in Computer Science at the University of Massachusetts Amherst, and I am excited to be continuing my education in the accelerated master&apos;s program. I have a strong foundation in software development, with experience in various programming languages and frameworks. I am currently seeking software engineering internships to further develop my skills and gain practical experience in the industry. My interests include web/app development, machine learning, and networking. In my free time, I enjoy working on personal projects, taking photos of cool cars, and finding new food places in my neighborhood.</p>


      </div>
      {/* "mini-resume area" */}
      <div
        className="lg:basis-1/3 m-8 justify-between min-w-[310px] max-w-[370px]"
      >
        <div className="p-4 rounded-3xl bg-gray-200 dark:bg-gray-800">
          <div className="flex flex-row left-align items-center">
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
          <h3 className="">University of Massachusetts Amherst</h3>
          <h3 className=""><span className="font-bold">MS</span>, Computer Science <Badge color="white">May 2026</Badge></h3>
          <h3 className="">BS, Computer Science <Badge color="white">May 2025</Badge></h3>
          <h3 className="">GPA: <Badge>3.98</Badge> (Major GPA: <Badge color="green">4.0</Badge>)</h3>
          <h3 className="">See: <Link href="#">Transcript</Link></h3>
        </div>
      </div>
    </div>
  );
}
