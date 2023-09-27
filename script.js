let chapters =  {
    arrive : {
        titre: "Emménagement en ville",
        description: "Vous êtes un détective qui a entendu des rumeurs d'une ville fantôme où surviennent des événements étranges, vous êtes venu enquêter. Il y a deux endroits qui vous tapent à l'oeil.",
        image: "",
        option:[
            {titre: 'Poste de police', 'destination': 'police'},
            {titre: 'Rue principale', 'destination': 'principale'}
        ]
    },

    principale : {
        titre: "Sueurs froides",
        description: "Pendant votre promenade, vous êtes enveloppé dans une atmosphère intrigante où des murmures lointains et des ombres furtives éveillent votre curiosité. Vous envisagez de vous précipiter vers votre véhicule ou de poursuivre l'enquête.",
        image: "",
        option:[
            {titre: 'Continuer', 'destination': 'bizarre'},
            {titre: 'Se Replier', 'destination': 'vide'}
        ]
    },

    police : {
        titre: "Centre de police",
        description: "Dans le centre de police, vous trouvez un pistolet sur un bureau, accompagné d'affiches de disparitions incomplètes.",
        image: "",
        option:[ 
            {titre: 'Presévérer', 'destination': 'trouve'},
            {titre: 'Délaisser', 'destination': 'principale'}
        ]
    },

    trouve : {
        titre: "Le Piège de l'Ombre Mortelle",
        description: "Vous abaissez vos gardes, relâchant votre vigilance un instant fatal, persuadé d'avoir trouvé refuge, et c'est alors qu'une créature invisible surgit de l'ombre pour vous terrasser.",
        image: "",
        option:[{titre: 'Recommencer', 'destination': 'arrive'}]
    },

    vide : {
        titre: "T'es pas toi même quand t'as faim",
        description: "Lors de votre fuite, vous perdez votre chemin dû au brouillard et vous finissez par mourir de faim.",
        image: "",
        option:[{titre: 'Recommencer', 'destination': 'arrive'}]
    },  

    bizarre : {
        titre: "Entre chaos et l'imprévu",
        description: "Vous puisez votre courage et avancez d'un pas déterminé. Quelques instants plus tard, une créature énigmatique se révèle, figée dans une posture intrigante.",
        image: "",
        option:[
            {titre: 'Attendre', 'destination': 'attendre'},
            {titre: 'Tirer', 'destination': 'pow'},
            {titre: 'Lancer le pow', 'destination': 'lancer'}
        ]
    },

    attendre : {
        titre: "Surpise !",
        description: "La créature bondit avec férocité et vous élimine.",
        image: "",
        option:[{titre: 'Recommencer', 'destination': 'arrive'}]
    },

    pow : {
        titre: "Explosion Sonore",
        description: "La créature s'effondre, déclenchant l'arrivée d'une meute de monstres qui vous submergent et vous éliminent implacablement.",
        image: "",
        option:[{titre: 'Recommencer', 'destination': 'arrive'}]
    },

    lancer : {
        titre: "Escapade",
        description: "La créature se précipite à la poursuite du pistolet, vous offrant une opportunité de fuir la ville, avec assez de preuve. ",
        image: "",
        option:[{titre: 'Recommencer', 'destination': 'arrive'}]
    },
};


function goToChapter(cle) {
    if (chapters[cle]) {
        console.log(chapters[cle].titre)
        console.log(chapters[cle].description)

        
    }
   return  console.log(chapters[cle].titre),
}

//ÉCRIRE LE VRAI CONTENUE !