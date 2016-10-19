class App
{
    public static Main() : void
    {
        let menu : Menu = new Menu("#Menu-open", "#Menu-close");

        console.log("Started !");
    } 
}

$(window).bind('load', function(){ App.Main();});