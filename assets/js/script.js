const titre = document.querySelector('.titre');
const description = document.querySelector('.description');
const image = document.querySelector('.img');
const video = document.querySelector('.video')

//if else image sinon video, changer toute la ligne 

let chapters =  {
    arrive : {
        titre: "Emménagement en ville",
        description: "Vous êtes un détective qui a entendu des rumeurs d'une ville fantôme où surviennent des événements étranges, vous êtes venu enquêter. Il y a deux endroits qui vous tapent à l'oeil.",
        media: { type: 'img', path: "./assets/images/arrive.jpg"},
        option:[
            {titre: 'Poste de police | goToChapter("police")', 'destination': 'police'},
            {titre: 'Rue principale | goToChapter("principale")', 'destination': 'principale'}
        ]
    },

    principale : {
        titre: "Sueurs froides",
        description: "Pendant votre promenade, vous êtes enveloppé dans une atmosphère intrigante où des murmures lointains et des ombres furtives éveillent votre curiosité. Vous envisagez de vous précipiter vers votre véhicule ou de poursuivre l'enquête.",
        media: { type: 'img', path: "./assets/images/principale.jpg"},
        option:[
            {titre: 'Continuer | goToChapter("bizarre")', 'destination': 'bizarre'},
            {titre: 'Se Replier | goToChapter("vide")', 'destination': 'vide'}
        ]
    },

    police : {
        titre: "Centre de police",
        description: "Dans le centre de police, vous trouvez un pistolet sur un bureau, accompagné d'affiches de disparitions incomplètes.",
        media: { type: 'img', path: "./assets/images/police.jpg"},
        option:[ 
            {titre: 'Presévérer | goToChapter("trouve")', 'destination': 'trouve'},
            {titre: 'Délaisser | goToChapter("principale")', 'destination': 'principale'}
        ]
    },

    trouve : {
        titre: "Le Piège de l'Ombre Mortelle",
        description: "Vous abaissez vos gardes, relâchant votre vigilance un instant fatal, persuadé d'avoir trouvé refuge, et c'est alors qu'une créature surgit de l'ombre pour vous terrasser.",
        media: { type: 'img', path: "./assets/images/trouve.jpg"},
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },

    vide : {
        titre: "T'es pas toi même quand t'as faim",
        description: "Lors de votre fuite, vous perdez votre chemin dû au brouillard et vous finissez par mourir de faim.",
        media: { type: 'img', path: "./assets/images/vide.jpg"},
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },  

    bizarre : {
        titre: "Entre chaos et l'imprévu",
        description: "Vous puisez votre courage et avancez d'un pas déterminé. Quelques instants plus tard, une créature énigmatique se révèle, figée dans une posture intrigante.",
        media: { type: 'img', path: "./assets/images/bizarre.jpg"},
        option:[
            {titre: 'Attendre | goToChapter("attendre")', 'destination': 'attendre'},
            {titre: 'Tirer | goToChapter("pow")', 'destination': 'pow'},
            {titre: 'Lancer le pow | goToChapter("lancer")', 'destination': 'lancer'}
        ]
    },

    attendre : {
        titre: "Surpise !",
        description: "La créature bondit avec une férocité déconcertante, vous laissant suffisamment de temps pour rejoindre votre voiture et la démarrer, mais elle vous poursuit toujours de près...",
        media: { type: 'video', path: "./assets/images/attendreEtLancer.mp4"},
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },

    pow : {
        titre: "Explosion Sonore",
        description: "La créature s'effondre, cela déclenche l'arrivée d'une meute d'ombre volante qui vous submerge.",
        media: { type: 'video', path: "./assets/images/pow.mp4"},
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },

    lancer : {
        titre: "Escapade",
        description: "La créature se précipite à la poursuite du pistolet, vous offrant une opportunité de fuir la ville. ",
        media: { type: 'video', path: "./assets/images/pasencoretrouvé"},
        option:[{titre: 'Recommencer | goToChapter("arrive")', 'destination': 'arrive'}]
    },
};


function goToChapter(chapterKey) {
  
    const chapter = chapters[chapterKey];

    titre.innerHTML = chapter.titre;
    description.innerHTML = chapter.description;
    image.src = chapter.image;


    

}


//Jeu dans la console
goToChapter('bizarre');
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
//fin de jeu 


