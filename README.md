My SBA project is a traditional photographer's gallery website (of the most popular photographer in the world, only known by his alias 'John Doe'.)  It has your usual photo gallery (with 24 curated pictures), it is responsive on mobile devices, has mouse (pc) specific support and animations, and is (nearly) 100% complete (as of 09/08 11:41pm).

It also has rudimentary theme support (black and white) that is persistent as you jump across pages (it uses a ton of javascript to manage the theme and session Storage).

NOTHING HERE IS A TEMPLATE.

The github link: https://github.com/timotholt/sba

The live page link is at: https://timotholt.github.io/sba/

The current main branch can be download from: https://github.com/timotholt/sba/archive/refs/heads/main.zip

There are currently 21 commits in the repository.

== OVERALL FUNCTIONALITY =====

1. As of this moment (11:41pm on Sunday, 09/08), the website has all the HTML requirements as outlined by the assignemnt requirements:

a. Requirement: Have at least 3 pages.  Site includes:

    index.html
    contact.html
    about.html

    The index.html actually uses display: grid for the photo gallery, and display: flex for the navigation menu.

b. Requirment: include at least ten different HTML tags.  Site includes 19 tags:

html head meta title link style body div br form select option a img script table tbody tr td.

c. Requirement: have at least one table.  Site includes 3 tables:

     Contact page form is a table
     Contact social media links is a table
     Bio page is also a table

d. Requirement: Site includes one dropdown menu:

    The light / dark theme selector at the top is the site's only dropdown menu (extensive notes in the form selection below)

e. Requirement: Site includes one of each of the forms of content (text, images, gifs):

    Text is utilized all over the place
    24 images is part of the photo gallery
    Animated GIFs are in the social media section in the about.html

2. As of this moment (11:41pm on Sunday, 09/08), the website has all the CSS requirements as outlined by the assignemnt requirements:

a. Requirement: make use of inline, internal, and external styling.

    inline css + external css media query is used in the photo gallery in index.html to correctly position the pictures when on devices < 480px wide.  it's pretty clever since the amount of adjustment is specific to each picture that doesn't look good centered.

    internal css is used on the contact form in contact.html, cause forms need styling and no other page would use those styles.

    external stying is used everywhere else.

b. Requirement: Use five different CSS selectors

    Got that one covered.  'nuff said.

c. Requirement: Use colors that compliment each other:

    Photo galleries look best in white and black, but I did include two website themes (see below) so some effort was made to make white and black pretty enough.

d. Requirement: Use flexbox.  I used display: flexbox in the navigation bar (it could have also been display:grid).

e. Requirement: Use two CSS animations.  The website has three animations: uses onload()+CSS for the page load "fade in" animation, :hover for mouse hover CSS animations (more details in animation section below), and a fade between themes when a new theme is selected.

3. NOTE: As of this moment (11:41pm on Sunday, 09/08), the website is currently has a very HUGE glaring ommission that is the most important part of a photography website:

    The ability to click on a picture and provide a modal popup that shows the complete picture on the entire screen.

This feature has conciously been pushed to last as it wasn't a requirement for the assignment. Yes it makes sense to have it, it wasn't a requirement to be graded.  So I made this last.  It needs alot of javascript/multi-resolution responsive css, css :target nonsense so for time reasons it was ommitted.  I may get around to it or not.

== FORMS ================

There are two forms:

1. First form is the dropdown box under the website title to select a dark / light theme. Yes it's a (lame looking) one item form, but hidden behind a single form line is a TON of javascript to implement the functionality.  It works (well too) and has javascript in it to swap the theme between dark and light, to write the theme to the site's session storage (to make it persist across the three different pages) --so selecting a dark theme and jumping to different page keeps the dark theme until you close your browser or change the theme..  It properly handles the state of the dropdown properly too, so if you have a dark theme and jump to another page the drop down box is set correctly to dark/light.

It fulfills the letter of the law (it is a form, albeit one line), and has alot of extra stuff to make it work:

body onload function()
external javascript file included in the end of the body of the html code
uses javascript to read and write to session storage
uses javascript to set the correct setting of the dropdown box to match the session storage
uses javascript to set an event handler to change the theme when the dropdown is changed

2. The second form is in the contact page.  Your usual basic empty contact form that does nothing.

== ANIMATIONS ================

1. There is a onload() page animation that fades the entire body of the page in over 3 seconds.

2. There is a mouse only (no touchpad support) to fade in the project name over each image when the mouse hovers over it.  the names fade out when the mouse moves away.  it uses a media query, and if a mouse is detected (pointer:fine), it adds a full sized overlaid div over each image that responds to :hover with additional text.  because it uses pointer:fine, it obviously only works on a computer devices that suppport pointer:fine (mostly PCs or possibly a pc with a pen).

3. There is your usual lame .gif animations on the contact form.  I rather not have them but using a GIF was a requirement so I might as well make it obvious it's a gif.

== FILES ================

There are a ton of files, including the usual suspects (3 .html files, one .css, one README.md).  In addition there are 24 pics, 5 gifs, and an external sba.js on top of it in a scripts directory.  The pictures are legally copyright free and can be distributed freely (AI generated over the last year with with midjourney).

If you got this far, you're awesome!

Thanks,

Tim Otholt



