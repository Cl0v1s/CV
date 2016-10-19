/**
 * Permet de gérer l'ouverture et la fermeture d'un menu
 */
var Menu = (function () {
    function Menu(target, toggle) {
        var _this = this;
        this.target = $(target);
        this.height = this.target.css("height");
        this.width = this.target.css("width");
        this.open = true;
        this.Toggle();
        $(toggle).mouseover(function () {
            _this.Open();
        });
        $(toggle).mouseout(function () {
            _this.Close();
        });
        $(toggle).click(function () {
            _this.Toggle();
        });
    }
    /**
     * Ouvre le menu si il est fermé, le ferme sinon
     */
    Menu.prototype.Toggle = function () {
        if (this.open == true) {
            this.Close();
        }
        else {
            this.Open();
        }
    };
    Menu.prototype.Open = function () {
        var _this = this;
        this.target.css("display", "block");
        this.target.animate({
            height: this.height,
            width: this.width
        }, 50, function () {
            _this.open = true;
        });
    };
    Menu.prototype.Close = function () {
        var _this = this;
        this.target.animate({
            height: 0,
            width: 0
        }, 50, function () {
            _this.target.css("display", "none");
            _this.open = false;
        });
    };
    return Menu;
})();
var App = (function () {
    function App() {
    }
    App.Main = function () {
        var menu = new Menu("#Menu-open", "#Menu-close");
        console.log("Started !");
    };
    return App;
})();
$(window).bind('load', function () { App.Main(); });
//# sourceMappingURL=main.js.map