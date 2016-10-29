class Sort
{
    private target : JQuery;

    constructor(target: string)
    {
        this.target = $(target);
        this.Apply();
    }

    public Apply() : void
    {
        let Types = 
        {
            Games : "games", 
            Web : "web",
            Apps : "apps", 
            All : "all"
        };
        let type : string;
        type = window.location.toString().split("?show=")[1];
        switch(type)
        {
            case "games":
                type = Types.Games;
                break;
            case "web": 
                type = Types.Web;
                break;
            case "apps":
                type = Types.Apps;
                break;
            default:
                type = Types.All;
                break;
        }

        if(type == Types.All)
            return;
        
        Object.keys(Types).forEach((e) => {
            if(type != Types[e])
            {
                this.target.find("."+Types[e]).remove();
                console.log(Types[e]);
            }
        });;


    }
}