
var gestionPosition = require("../models/position.model")


class ControlleurPositionUsager {



    static async register_position(req, res, next) {


        //  Désaggregation des données
        var attributs = [
            "api_key",
            "telephone",
            "latitute",
            "longitude",
            "date_register"
        ];



        //  Contôles à effectuer en cas de besoins

        var isError = false

        Object.keys(req.body).map((value, index) => {

            console.log(value + " => " + req.body[value])

            if (req.body[value] == "") {
                res.json({
                    status: 0,
                    details: "Une valeur est nulle"
                })
                isError = true
            }

            attributs.shift()

        })

        if (isError) {
            return false
        }


        //  On vérifie si tous les paramètres ont été envoyés
        if (attributs.length > 0) {
            res.json({
                status: 0,
                details: "Certains paramètres manquent"
            })

            return false

        }




        //  On commence par recuperer le  code de l'utilisateur

        var codeUsager = await modelUsager.getCodeByTelephoneAndApi(req.body.telephone, req.body.api_key)



        if (codeUsager && codeUsager.status == 1) {

            codeUsager = codeUsager.codeindividu

            //  On enregistre la position de l'individu


            gestionPosition.register({ ...req.body, codeUsager: codeUsager })


        }



    }




}


module.exports = ControlleurUsager;