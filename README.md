# Utilisation / installations

# Material ui

ceci nous permet de faire un design parfait, l'utilisation des icones etc.
commande :

    ng add @angular/material

documentation : https://material.angular.io/components/categories

# json server

pour stocker les données nous avons besoin de créer un server local et pour se faire
nous allons utiliser json server.
pour l'installer, tapez la commande suivante :

     npm i json-server

à partir de ça vous pouvez créer votre propre dj.son qui vous serve de base de donnée
ou vous allez stocker tous ces dernieres

pour executer le fichier json, taper la commande :

        npm run server

par contre faut mettre cette ligne de code au niveau de package.json sinon ça ne va pas
marcher :

        "server": "json-server --watch db.json --port 5000"

## Development server

Exécutez `ng serve`. Accédez à « http://localhost:4200/ ». L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
