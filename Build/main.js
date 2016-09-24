var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        console.log("starting...");
        var pc = new Parcours();
        pc.Draw("sigma-container");
    };
    return Program;
}());
window.addEventListener("load", Program.Main);
var Parcours = (function () {
    function Parcours() {
    }
    /**
     * Dessine le parcours
     */
    Parcours.prototype.Draw = function (endpoint) {
        console.log("drawing");
        sigma.parsers.json('parcours.json', {
            container: endpoint,
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
    };
    return Parcours;
}());
//# sourceMappingURL=main.js.map