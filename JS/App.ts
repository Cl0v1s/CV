class App
{
    public static Main() : void
    {
        let menu : Menu = new Menu("#Menu-open", "#Menu-close");
        let slide : Slide = new Slide("#slide");

        $("#slide .next").click(() => {slide.Next();});
        $("#slide .previous").click(() => {slide.Previous();});

        console.log("Started !");
    } 
}

$(window).bind('load', function(){ App.Main();});