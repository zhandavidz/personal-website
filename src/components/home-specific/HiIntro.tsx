


export default function HiIntro({ wrapperStyles }: { wrapperStyles: string }) {
    return (
        <div className={wrapperStyles}>
            <h1 className="text-3xl font-bold">Hi, I&apos;m David. I&apos;m a software engineer.</h1>

            <div className="flex flex-row">
              <div className="text-lg mb-1 hidden md:block">
                <span className="font-semibold">Current Work:&nbsp;</span>
              </div>
              <div className="text-lg flex flex-col">
                <span>
                  Software Engineer @&nbsp;
                  <a
                    href="https://www.trumptech.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Trumptech Digital Education Services"
                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">Trumptech Digital Education Services</a>
                </span>
                <span className="italic text-opacity-50 text-black dark:text-white dark:text-opacity-50">
                  (Part-Time during school while I pursue my Master&apos;s)
                </span>
              </div>
            </div>


            <p className="text-lg hidden md:inline-block">
              <span className="font-semibold">Current Projects:</span> (this) Personal Website, Expenser
            </p>
        </div>
    );
}