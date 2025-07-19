


export default function HiIntro({ wrapperStyles }: { wrapperStyles: string }) {
    return (
        <div className={wrapperStyles}>
          <h1 className="text-3xl font-bold">Hi, I&apos;m David. I&apos;m a software developer.</h1>
          {/* <p className="text-lg">
            student, software developer, full-stack web developer, car enthusiast, 
            occasional gym-goer, and computer nerd.
          </p> */}
          <p className="text-lg">
            <span className="font-semibold">Current Work:</span> Software Engineering Intern @ <a
              href="https://www.trumptech.com/en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trumptech Digital Education Services"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">Trumptech Digital Education Services</a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Current Projects:</span> (this) Personal Website, Expenser
          </p>
        </div>
    );
}