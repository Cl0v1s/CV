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
        this.locked = false;
        this.Toggle();
        $(toggle).mouseover(function () {
            _this.Open();
        });
        $(target).mouseleave(function () {
            _this.Close();
        });
        $(toggle).click(function () {
            _this.Toggle();
        });
    }
    Menu.prototype.Lock = function () {
        var _this = this;
        this.locked = true;
        setTimeout(function () { _this.locked = false; }, 50);
    };
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
        if (this.locked)
            return;
        this.target.css("display", "block");
        this.target.animate({
            height: this.height,
            width: this.width
        }, 50, function () {
            _this.open = true;
        });
        this.Lock();
    };
    Menu.prototype.Close = function () {
        var _this = this;
        if (this.locked)
            return;
        this.target.animate({
            height: 0,
            width: 0
        }, 50, function () {
            _this.target.css("display", "none");
            _this.open = false;
        });
        this.Lock();
    };
    return Menu;
})();
var Slide = (function () {
    function Slide(target) {
        this.target = $(target);
        var childs = this.target.find("ul li").length;
        var size = this.target.find("ul li").width();
        console.log(-((childs * size) / 1.5));
        $(target).css("margin-left", -((childs * size) / 1.5));
        this.ApplyStyles();
        console.log("Slide !");
    }
    Slide.prototype.ApplyStyles = function () {
        // Application des styles
        this.target.find("li").removeClass("focus");
        this.target.find("li").addClass("dark");
        var number = this.target.find("li").length;
        $(this.target.find("li").get(Math.floor(number / 2))).removeClass("dark");
        $(this.target.find("li").get(Math.floor(number / 2))).addClass("focus");
    };
    Slide.prototype.Next = function () {
        var self = this;
        var first = this.target.find("li:first");
        var iMargin = first.css("margin-left"); // sauvegarde du margin pour restauration
        first.animate({
            "margin-left": -first.width()
        }, 50, function () {
            self.target.find("li:last").after(first);
            first.css("margin-left", iMargin);
            self.ApplyStyles();
        });
    };
    Slide.prototype.Previous = function () {
        var self = this;
        var last = this.target.find("li:last");
        var iMargin = last.css("margin-left");
        last.css("margin-left", -last.width());
        this.target.find("li:first").before(last);
        last.animate({
            "margin-left": iMargin
        }, 50, function () {
            self.ApplyStyles();
        });
    };
    return Slide;
})();
var App = (function () {
    function App() {
    }
    App.Main = function () {
        var menu = new Menu("#Menu-open", "#Menu-close");
        var slide = new Slide("#slide");
        $("#slide .next").click(function () { slide.Next(); });
        $("#slide .previous").click(function () { slide.Previous(); });
        console.log("Started !");
    };
    return App;
})();
$(window).bind('load', function () { App.Main(); });
//# sourceMappingURL=main.js.map