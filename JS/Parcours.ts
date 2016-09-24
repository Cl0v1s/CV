class Parcours
{
    constructor()
    {

    }

    /**
     * Dessine le parcours
     */
    public Draw(endpoint : string)
    {
        console.log("drawing");
        sigma.parsers.json('parcours.json', {
            container: endpoint,
            settings: {
                defaultNodeColor: '#ec5148'
            }
        });
    }
}

