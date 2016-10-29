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
        var _this = this;
        this.target = $(target);
        this.Update();
        this.ApplyStyles();
        $(window).resize(function () { _this.Update(); });
    }
    Slide.prototype.Update = function () {
        var childs = this.target.find("ul li").length;
        var size = this.target.find("ul li").width();
        var position = 0;
        // Récupération du centre de l'écran
        position = $(window).width() / 2;
        position -= (childs * size) / 2;
        this.target.css("margin-left", position);
    };
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
        }, 100, "swing", function () {
            $(this).remove();
            $(this).css("margin-left", iMargin);
            self.target.find("li:last").after($(this));
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
        }, 100, "swing", function () {
            self.ApplyStyles();
        });
    };
    return Slide;
})();
var Sort = (function () {
    function Sort(target) {
        this.target = $(target);
        this.Apply();
    }
    Sort.prototype.Apply = function () {
        var _this = this;
        var Types = {
            Games: "games",
            Web: "web",
            Apps: "apps",
            All: "all"
        };
        var type;
        type = window.location.toString().split("?show=")[1];
        switch (type) {
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
        if (type == Types.All)
            return;
        Object.keys(Types).forEach(function (e) {
            if (type != Types[e]) {
                _this.target.find("." + Types[e]).remove();
                console.log(Types[e]);
            }
        });
        ;
    };
    return Sort;
})();
var App = (function () {
    function App() {
    }
    App.Main = function () {
        var menu = new Menu("#Menu-open", "#Menu-close");
        if (window.location.toString().indexOf("index.html") != -1 || window.location.toString().indexOf(".html") == -1) {
            var sort = new Sort("#slide ul");
            var slide = new Slide("#slide");
            $("#slide .next").click(function () { slide.Next(); });
            $("#slide .previous").click(function () { slide.Previous(); });
        }
        console.log("Started !");
    };
    return App;
})();
$(window).bind('load', function () { App.Main(); });
//# sourceMappingURL=main.js.map