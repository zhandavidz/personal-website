// NOTE: this is from: https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db


class HeadTags extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
            <!-- favicons -->
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
            <link rel="manifest" href="/favicons/site.webmanifest">
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#3828ee">
            <link rel="shortcut icon" href="/favicons/favicon.ico">
            <meta name="msapplication-TileColor" content="#3828ee">
            <meta name="msapplication-config" content="/favicons/browserconfig.xml">
            <meta name="theme-color" content="#ffffff">
            
            

            <script src="https://kit.fontawesome.com/ccf5dd8bbb.js" crossorigin="anonymous"></script>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700,900">
            
            
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118954244-2"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
            
                gtag('config', 'UA-118954244-2');
            </script>
        `;
    }
}

customElements.define('head-tags', HeadTags);
