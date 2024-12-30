import ExportedImage from "next-image-export-optimizer";
import testPictureStatic from "../../public/images/me.png";

export default function Home() {
  return (
    <div>
      <h1>Hi, I&apos;m David Zhan. I&apos;m a software developer.</h1>
      <h1>Currently: Japan Intern / Undergraduate Course Assistant</h1>
      <p>David Zhan&apos;s personal website, holding his portfolio, resume, and transcript.</p>
      <ExportedImage
        src={testPictureStatic}
        alt="Picture of the author"
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>
  );
}
