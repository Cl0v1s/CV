class Program
{
    static Main() : void
    {
        console.log("starting...");
        let pc : Parcours = new Parcours();
        pc.Draw("sigma-container");
    }
}

window.addEventListener("load", Program.Main);