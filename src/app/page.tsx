import ExportedImage from "next-image-export-optimizer";
import testPictureStatic from "../../public/images/me.jpg";
import ThemeToggle from "@/theme-toggle";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
    {/* // <div className="dark:bg-white bg-black dark:text-black text-white"> */}
      <h1>David Zhan</h1>
      <p>David Zhan&apos;s personal website, holding his portfolio, resume, and transcript.</p>
      <ExportedImage
        src={testPictureStatic}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <ThemeToggle />
    </div>
  );
}
