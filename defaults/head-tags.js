// <?php
// 	require $_SERVER['DOCUMENT_ROOT'].'/favicons/favicon.php';
// ?>

// NOTE: this is from: https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db

// TODO: Add favicons

class HeadTags extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <script src="https://kit.fontawesome.com/ccf5dd8bbb.js" crossorigin="anonymous"></script>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900">
            
            
            <meta charset="utf-8">
            
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
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
