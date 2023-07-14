class NavBar extends HTMLElement {
    connectedCallback() {
        // location of isearch:
        let location = "/projects/isearch-ai";
        
        this.innerHTML = `
            <link rel="stylesheet" href="${location}/nav.css">
            <div id="nav">
                <h1>
                    <span><a id="home-link" href="${location}" title="Jack Wilson, Ph.D.">Jack Wilson, Ph.D.</a><a id="real-author" href="${location}/real" title="About the Real Author">*</a></span>
                </h1>
            
                <div id="nav-inner">
                    <h1>
                        <a title="The History of AI - Powerpoint" href="${location}/powerpoint">History of AI</a>
                    </h1>
                    <h1>
                        <a title="The Future of AI - Essay" href="${location}/essay">The Future of AI</a>
                    </h1>
                    <h1>
                        <a title="AI Is Too Dumb For Us - News Article" href="${location}/news-article">AI Is Too Dumb For Us</a>
                    </h1>
                    <h1>
                        <a title="An Interview - Interview" href="${location}/interview">An Interview</a>
                    </h1>
                    <h1>
                        <a title="Weekly Journal - Journal" href="${location}/journal">Weekly Journal</a>
                    </h1>
                    <h1>
                        <a title="Works Cited" href="${location}/works-cited">Works Cited</a>
                    </h1>
                    <h1>
                        <a title="About the Real Author" href="${location}/real">About the Real Author</a>
                    </h1>
                </div>
            </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);