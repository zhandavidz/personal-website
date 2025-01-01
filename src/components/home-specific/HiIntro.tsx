


export default function HiIntro({ wrapperStyles }: { wrapperStyles: string }) {
    return (
        <div className={wrapperStyles}>
          <h1 className="text-3xl font-bold">Hi, I&apos;m David. I&apos;m a software developer.</h1>
          {/* <p className="text-lg">
            student, software developer, full-stack web developer, car enthusiast, 
            occasional gym-goer, and computer nerd.
          </p> */}
          <p className="text-lg">
            <span className="font-semibold">Current Work:</span> Undergraduate Course Assistant @ UMass Amherst
          </p>
          <p className="text-lg">
            <span className="font-semibold">Current Projects:</span> (this) Personal Website, Expenser
          </p>
        </div>
    );
}