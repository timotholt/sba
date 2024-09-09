function onLoadStuff()
{
    // Get the saved colors (if any)
    // Get saved data from sessionStorage
    let theme = sessionStorage.getItem("theme");
    if (theme!="Dark" && theme!="Light")
    {
        console.log("No theme in sessionStorage");
        theme="Light";
    }

    // Load colors from theme
    if (theme==="Dark")
    {
        console.log("Loading Dark theme from session storage");
        document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            document.getElementById("themes").selectedIndex = 1;
    } else if (theme==="Light")
    {
        console.log("Loading Light theme from session storage");
        document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.getElementById("themes").selectedIndex = 0;
    }

    // Save data to sessionStorage
    sessionStorage.setItem("theme", theme);

    // Fade in the body
    document.body.style.opacity='1';

    document.querySelector('select[name="themes"]').onchange = changeEventHandler;
}

function changeEventHandler(event)
{
    if (!event.target.value) {} else
    {
        // document.body.style.backgroundColor = event.target.value;
        if (event.target.value==="Light")
        {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            
            // Save data to sessionStorage
            sessionStorage.setItem("theme", event.target.value);
            console.log("Set theme to",event.target.value);

        } else if (event.target.value==="Dark")
        {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';

            // Save data to sessionStorage
            sessionStorage.setItem("theme", event.target.value);
            console.log("Set theme to",event.target.value);

        }
    }
}
