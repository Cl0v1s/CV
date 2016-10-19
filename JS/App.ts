class App
{
    public static Main() : void
    {
        let menu : Menu = new Menu("#Menu-open", "#Menu-close");
        let slide : Slide = new Slide("#slide");

        console.log("Started !");
    } 
}

$(window).bind('load', function(){ App.Main();});