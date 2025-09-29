


export default function HiIntro({ wrapperStyles }: { wrapperStyles: string }) {
    return (
        <div className={wrapperStyles}>
            <h1 className="text-3xl font-bold">Hi, I&apos;m David. I&apos;m a software engineer.</h1>


            <div className="flex flex-row">
              <div className="text-xl mb-1 hidden md:block">
                <span className="font-semibold">Current Work:&nbsp;</span>
              </div>
              <div className="text-xl flex flex-col">
                <span>
                  Software Engineering Intern @&nbsp;
                  <a
                    href="https://torqsports.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TORQ Sports"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline">TORQ Sports</a>
                </span>
                {/* <span className="italic text-opacity-50 text-black dark:text-white dark:text-opacity-50">
                  (Part-Time during school while I pursue my Master&apos;s)
                </span> */}
              </div>
            </div>

            
            <div className="flex flex-row italic text-opacity-70 text-black dark:text-white dark:text-opacity-70">
              <div className="text-lg mb-1 hidden md:block">
                <span className="font-semibold">Currently looking for:&nbsp;</span>
              </div>
              <div className="text-lg flex flex-col">
                Full Time Software Engineer, Graduating Spring 2026 (US)
              </div>
            </div>

            {/* <p className="text-lg hidden md:inline-block">
              <span className="font-semibold">Current projects:</span> (this) Personal Website, Expenser
            </p> */}
        </div>
    );
}