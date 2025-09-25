const prompt = require("prompt-sync")();

let Joueurs = [];
var choix;
var nextid = 1;
var counter = 0;
function ajouter_joueur()
{
    do{
        console.log("1- Ajouter un joueur\n");
        console.log("2- Ajouter plusieurs joueurs, not work now \n");
        console.log("3- Exit\n");
        choix = parseInt(prompt("entrer votre choix : "));

        if(choix == 1)
        {
            let id = nextid++;
            let nom = prompt("entrer le nom de votre joueur : ");
            let prenom = prompt("entrer le prenom de votre joueur : ");
            let poste = prompt("entrer le poste de votre joueur : ");
            let age = prompt("Entrer l'age du joueur : ");
            let numerodeMaillot = prompt("entrer le numero de votre joueur : ");
            let status = prompt("entrer le status de votre joueur : ");

            let joueur = {
                id : id,
                nom : nom,
                prenom : prenom,
                poste : poste,
                age : age,
                numerodeMaillot : numerodeMaillot,
                satatus : status,
            };
            Joueurs.push(joueur);
            counter++;
            console.log("joueur ajoute avec succes !");
        }
    }while(choix != 3); 
}

function afficher_joueurs()
{
    if(Joueurs.length === 0)
    {
        console.log("aucun joueur exist !\n");
    }
    else{
        do{
            console.log("\n\nmerci de choisir la fonctionnalite de recherche\n");
            console.log("1- Afficher par le Nom\n");
            console.log("2- Afficher par le Poste\n");
            console.log("3- Afficher par L'age\n");
            console.log("4- Exit\n");
            choix = parseInt(prompt("Entrer Votre Choix : "));

            if(choix == 1)
            {
                let joueurstriee = [...Joueurs].sort((a,b) =>
                    a.nom.localeCompare(b.nom, 'fr',{sensitivity : 'base'}));

                joueurstriee.forEach(joueur => {
                        console.log(`ID : ${joueur.id} | NOM : ${joueur.nom} | PRENOM : ${joueur.prenom} | POSTE : ${joueur.poste} | ${joueur.age} |NUMERO : ${joueur.numerodeMaillot} | ${joueur.satatus} |`)
                });
            }
            else if(choix == 2)
                {
                    let postes = ["attaquant","milieu","defense","gardien"];
                    postes.forEach(poste=>{

                        console.log(`\n${poste.toUpperCase()}\n`);
                        Joueurs.forEach(joueur =>{
                            if(joueur.poste === poste)
                            {
                                console.log(`ID : ${joueur.id} | NOM : ${joueur.nom} | PRENOM : ${joueur.prenom} | POSTE : ${joueur.poste} | ${joueur.age} |NUMERO : ${joueur.numerodeMaillot} | ${joueur.satatus} |`)

                            }
                        });
                    });
                }else if(choix == 3)
                {
                    let agetriee = [...Joueurs].sort((a,b)=> a.age - b.age);
                    agetriee.forEach(joueur =>{
                        console.log(`ID : ${joueur.id} | NOM : ${joueur.nom} | PRENOM : ${joueur.prenom} | POSTE : ${joueur.poste} | ${joueur.age} |NUMERO : ${joueur.numerodeMaillot} | ${joueur.satatus} |`)
                    });
                }
        }while(choix != 4);
    }
}
console.log("bienvenue dans le systeme de gestion des joueurs\n");
do{
        console.log("1- Ajouter un joueur\n");
        console.log("2- Afficher la liste des joueurs\n");
        console.log("3- Modifier un joueur\n");
        console.log("4- Supprimer un joueur\n");
        console.log("5- Rechercher sur un joueur\n");
        console.log("6- Statistiques\n");
        console.log("7- Exit\n");
        choix = parseInt(prompt("Entrer votre choix : "));
        switch(choix)
        {
            case 1:
                ajouter_joueur();
                break;
            case 2: 
                afficher_joueurs();
            default :
            console.log("aucun choix exist\n");
        }
}while(choix != 7);