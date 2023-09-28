let chapters =  {
    arrive : {
        titre: "Emménagement en ville",
        description: "Vous êtes un détective qui a entendu des rumeurs d'une ville fantôme où surviennent des événements étranges, vous êtes venu enquêter. Il y a deux endroits qui vous tapent à l'oeil.",
        image: "",
        option:[
            {titre: 'Poste de police | goToChapter("police")', 'destination': 'police'},
            {titre: 'Rue principale | goToChapter("principale")', 'destination': 'principale'}
        ]
    },

    principale : {
        titre: "Sueurs froides",
        description: "Pendant votre promenade, vous êtes enveloppé dans une atmosphère intrigante où des murmures lointains et des ombres furtives éveillent votre curiosité. Vous envisagez de vous précipiter vers votre véhicule ou de poursuivre l'enquête.",
        image: "",
        option:[
            {titre: 'Continuer | goToChapter("bizarre")', 'destination': 'bizarre'},
            {titre: 'Se Replier | goToChapter("vide")', 'destination': 'vide'}
        ]
    },

    police : {
        titre: "Centre de police",
        description: "Dans le centre de police, vous trouvez un pistolet sur un bureau, accompagné d'affiches de disparitions incomplètes.",
        image: "",
        option:[ 
            {titre: 'Presévérer | goToChapter("trouve")', 'destination': 'trouve'},
            {titre: 'Délaisser | goToChapter("principale")', 'destination': 'principale'}
        ]
    },

    trouve : {
        titre: "Le Piège de l'Ombre Mortelle",
        description: "Vous abaissez vos gardes, relâchant votre vigilance un instant fatal, persuadé d'avoir trouvé refuge, et c'est alors qu'une créature surgit de l'ombre pour vous terrasser.",
        image: "",
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },

    vide : {
        titre: "T'es pas toi même quand t'as faim",
        description: "Lors de votre fuite, vous perdez votre chemin dû au brouillard et vous finissez par mourir de faim.",
        image: "",
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },  

    bizarre : {
        titre: "Entre chaos et l'imprévu",
        description: "Vous puisez votre courage et avancez d'un pas déterminé. Quelques instants plus tard, une créature énigmatique se révèle, figée dans une posture intrigante.",
        image: "",
        option:[
            {titre: 'Attendre | goToChapter("attendre")', 'destination': 'attendre'},
            {titre: 'Tirer | goToChapter("pow")', 'destination': 'pow'},
            {titre: 'Lancer le pow | goToChapter("lancer")', 'destination': 'lancer'}
        ]
    },

    attendre : {
        titre: "Surpise !",
        description: "La créature bondit avec une férocité déconcertante, vous laissant suffisamment de temps pour rejoindre votre voiture et la démarrer, mais elle vous poursuit toujours de près...",
        image: "",
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },

    pow : {
        titre: "Explosion Sonore",
        description: "La créature s'effondre, cela déclenche l'arrivée d'une meute d'ombre volante qui vous submerge.",
        image: "",
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },

    lancer : {
        titre: "Escapade",
        description: "La créature se précipite à la poursuite du pistolet, vous offrant une opportunité de fuir la ville. ",
        image: "",
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },
};


let pistolOuiNon = false;

function goToChapter(chapterKey) {
    if (chapters[chapterKey]) {
        const chapter = chapters[chapterKey];
        console.log(chapter.titre);
        console.log(chapter.description);
        console.log("Options:");
        for (const option of chapter.option) {
            console.log(option.titre);
        }
    } else {
        console.log("Chapitre non trouvé : " + chapterKey);
    }
}

goToChapter('arrive');

