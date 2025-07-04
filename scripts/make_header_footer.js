/*
This file generates html when you add a header or footer id to a div
Example:    <div id=header></div> on line 12 of index.html
            <div id=footer></div> on line 43 of index.html
This allows you to update the header and footer across your site but editing only this
file, instead of editing every html page when you want to change a link
*/

// Header
// You can use internal (index.html) links to point to pages you have in this website
// or external links (like if you have a store or patreon)
document.querySelector("#header").innerHTML = `
<img src="/images/logo.png"/>
<div id="navLinks">
<a href="https://www.gxbtx.net/">Home</a>
<a href="/about">About</a>
<a href="/galleries">Galleries</a>
</div>
`;

// Footer
document.querySelector("#footer").innerHTML = `GXBTX &#169; 2025`; // &#169; is the C copyright symbol
