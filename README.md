My SBA project is a traditional photographer's gallery website (of the most popular photographer in the world, only known by his alias 'John Doe'.) It has your usual photo gallery (with 24 curated pictures), it is responsive on mobile devices, has mouse (pc) specific support and animations, persistent theme support (built with javascript and session storage) and is (nearly) 100% complete.

The github link: https://github.com/timotholt/sba

The live page link is at: https://timotholt.github.io/sba/

The current main branch can be download from: https://github.com/timotholt/sba/archive/refs/heads/main.zip

== ASSIGNMENT REQUIREMENTS AND HOW THEY ARE MET WITH THE SBA PROJECT =====

1. Here is a list of HTML requirements of the assignment and how this submission meets them:

a. Requirement: Have at least 3 pages. Site includes:

    index.html
    contact.html
    about.html

    The index.html uses display: grid for the photo gallery, and display: flex for the navigation menu.

b. Requirment: include at least ten different HTML tags.  Site includes 19 tags:

    html, head, meta, title, link, style, body, div, br, form, select, option, a, img, script, table, tbody, tr, td.

c. Requirement: have at least one table. Site includes 3 tables:

     Contact page form is a table
     Contact social media links is a table
     Bio page is also a table

d. Requirement: Site includes one dropdown menu:

    The light / dark theme selector at the top is the site's use of a dropdown menu

e. Requirement: Site includes one of each of the forms of content (text, images, gifs):

    Text is utilized all over the place
    24 images is part of the photo gallery
    Animated GIFs are in the social media section in the about page

2. The website has all the CSS requirements as outlined by the assignemnt requirements:

a. Requirement: make use of inline, internal, and external styling.

    inline css + external css media query is used in the photo gallery in index.html to correctly position the pictures when on devices < 480px wide. It's pretty clever since the amount of adjustment is specific to each picture that doesn't look good centered.

    internal css is used on the contact form in contact.html, cause forms need styling and no other page would use those styles.

    external stying is used everywhere else.

b. Requirement: Use five different CSS selectors

    Got that one covered. 'nuff said.

c. Requirement: Use colors that compliment each other:

    Photo galleries look best in white and black, but I did include two website themes (see below) so some effort was made to make white and black pretty enough.

d. Requirement: Use flexbox. I used "display: flex" in the navigation bar.

e. Requirement: Use two CSS animations.  The website has three animations: uses onload()+CSS for the page load "fade in" animation, :hover for mouse hover CSS animations (more details in animation section below), and a fade between themes when a new theme is selected.

3. The website is currently has a very HUGE glaring ommission that is the most important part of a photography website:

    The ability to click on a picture and provide a modal popup that shows the complete picture on the entire screen.

I've intentionally pushed this feature off to last due to time constraints.

== FORMS ================

There are two forms:

1. The dropdown box under the website title to select a dark / light theme is a single one line form + a few dozen lines of javascript.

2. The second form is your usual basic empty contact form that does nothing.

== ANIMATIONS ================

1. There is a onload() page animation that fades the entire body on load.

2. There is a theme transition animation when the theme is changed.

3. There is a mouse only hover (no touch support) animation to fade in the project name over each image.

4. There is your usual lame .gif animations on the contact form.

== FILES ================

There are the usual suspects (3 .html files, one .css, one README.md). In addition there are 24 copyright pics (midjourney), 5 gifs, and an external sba.js.

If you got this far, you're awesome!

Thanks,

Tim Otholt
