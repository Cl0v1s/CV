class App
{
    public static Main() : void
    {
        let menu : Menu = new Menu("#Menu-open", "#Menu-close");

        console.log("Started !");
    } 
}

$(document).ready(function(){ App.Main();});