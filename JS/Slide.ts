class Slide
{
    private target : JQuery;

    constructor(target: string)
    {
        this.target = $(target);

        this.ApplyStyles();

        console.log("Slide !");
    }

    private ApplyStyles() : void
    {
        // Application des styles
        this.target.find("li").removeClass("focus");
        this.target.find("li").addClass("dark");

        let number : number = this.target.find("li").length;
        $(this.target.find("li").get(Math.floor(number/2))).removeClass("dark");
        $(this.target.find("li").get(Math.floor(number/2))).addClass("focus");
    }

    public Next() : void
    {
        let self: Slide = this;
        let first : JQuery = this.target.find("li:first");
        let iMargin : string  = first.css("margin-left"); // sauvegarde du margin pour restauration
        first.animate(
            {
                "margin-left" : -first.width() 
            }, 50, function()
            {
                self.target.find("li:last").after(first);    
                first.css("margin-left", iMargin);
                self.ApplyStyles();
                
            });
    


    }

    public Previous() :  void
    {

    }
}