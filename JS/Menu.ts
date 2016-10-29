/**
 * Permet de gérer l'ouverture et la fermeture d'un menu
 */
class Menu {
    private target: JQuery;
    private height: string;
    private width: string;
    private open: boolean;
    public locked : boolean;

    constructor(target: string, toggle: string) {

        this.target = $(target);
        this.height = this.target.css("height");
        this.width = this.target.css("width");
        this.open = true;
        this.locked = false;

        this.Toggle();

        $(toggle).mouseover(() => {
            this.Open();
        });
        $(target).mouseleave(() => {
            this.Close();
        });
        $(toggle).click(() => {
            this.Toggle();
        });
    }

    private Lock() : void
    {
        this.locked = true;
        setTimeout(() => {this.locked = false;}, 50);
    }

    /**
     * Ouvre le menu si il est fermé, le ferme sinon
     */
    public Toggle(): void {
        if (this.open == true) {
            this.Close();
        } else {
            this.Open();
        }
    }

    public Open(): void {
        if(this.locked)
            return;
        this.target.css("display", "block");
        this.target.animate({
            height: this.height, 
            width: this.width
        }, 50, () => {
            this.open = true;
        });
        this.Lock();
    }

    public Close(): void {
        if(this.locked)
            return;
        this.target.animate({
            height: 0, 
            width: 0
        }, 50, () => {
            this.target.css("display", "none");
            this.open = false;
        });
        this.Lock();
    }
}