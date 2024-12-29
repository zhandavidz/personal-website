import ExportedImage from "next-image-export-optimizer";
import testPictureStatic from "../..//public/images/me.jpg";

export default function Home() {
  return (
    <div>
      <h1>David Zhan</h1>
      <p>David Zhan&apos;s personal website, holding his portfolio, resume, and transcript.</p>
      <ExportedImage
        src={testPictureStatic}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
