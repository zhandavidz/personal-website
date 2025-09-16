


export default function HiIntro({ wrapperStyles }: { wrapperStyles: string }) {
    return (
        <div className={wrapperStyles}>
            <h1 className="text-3xl font-bold">Hi, I&apos;m David. I&apos;m a software engineer.</h1>

            <div className="flex flex-row">
              <div className="text-lg mb-1 hidden md:block">
                <span className="font-semibold">Currently looking for:&nbsp;</span>
              </div>
              <div className="text-lg flex flex-col">
                Full Time Software Engineer, Graduating Spring 2026 (US)
              </div>
            </div>


            <p className="text-lg hidden md:inline-block">
              <span className="font-semibold">Current projects:</span> (this) Personal Website, Expenser
            </p>
        </div>
    );
}