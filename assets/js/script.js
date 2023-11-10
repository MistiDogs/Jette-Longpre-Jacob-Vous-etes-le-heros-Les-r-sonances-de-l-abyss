let chapitre = {
    // début
    arrive: {
        titre: "Emménagement en ville",
        description: "Vous êtes un détective qui a entendu des rumeurs d'une ville fantôme où surviennent des événements étranges, vous êtes venu enquêter. Il y a deux endroits qui vous tapent à l'oeil.",
        media: {
            type: 'img',
            path: "./assets/images/arrive.jpg"
        },
        audio: "./assets/audio/26-game-over-1.mp3",
        buttons: [{
                titre: 'Poste de police',
                'destination': 'police'
            },
            {
                titre: 'Rue principale',
                'destination': 'principale'
            }
        ]
    },

    principale: {
        titre: "Sueurs froides",
        description: "Pendant votre promenade, vous êtes enveloppé dans une atmosphère intrigante où des murmures lointains et des ombres furtives éveillent votre curiosité. Vous envisagez de vous précipiter vers votre véhicule ou de poursuivre l'enquête.",
        media: {
            type: 'img',
            path: "./assets/images/principale.jpg"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
                titre: 'Continuer',
                'destination': 'bizarre'
            },
            {
                titre: 'Se Replier',
                'destination': 'vide'
            }
        ]
    },


    police: {
        titre: "Centre de police",
        description: "Dans le centre de police, vous trouvez un pistolet sur un bureau, accompagné d'affiches de disparitions incomplètes.",
        media: {
            type: 'img',
            path: "./assets/images/police.jpg"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
                titre: 'Presévérer',
                'destination': 'trouve'
            },
            {
                titre: 'Délaisser',
                'destination': 'principale'
            }
        ]
    },

    trouve: {
        titre: "Le Piège de l'Ombre Mortelle",
        description: "Vous abaissez vos gardes, relâchant votre vigilance un instant fatal, persuadé d'avoir trouvé refuge, et c'est alors qu'une créature surgit de l'ombre pour vous terrasser.",
        media: {
            type: 'img',
            path: "./assets/images/trouve.jpg"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
            titre: 'Recommencer',
            'destination': 'arrive'
        }]
    },

    vide: {
        titre: "T'es pas toi même quand t'as faim",
        description: "Lors de votre fuite, vous perdez votre chemin dû au brouillard et vous finissez par mourir de faim.",
        media: {
            type: 'img',
            path: "./assets/images/vide.jpg"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
            titre: 'Recommencer',
            'destination': 'arrive'
        }]
    },

    bizarre: {
        titre: "Entre chaos et l'imprévu",
        description: "Vous puisez votre courage et avancez d'un pas déterminé. Quelques instants plus tard, une créature énigmatique se révèle, figée dans une posture intrigante.",
        media: {
            type: 'img',
            path: "./assets/images/bizarre.jpg"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
                titre: 'Attendre',
                'destination': 'attendre'
            },
            {
                titre: 'Tirer',
                'destination': 'pow'
            },
            {
                titre: 'Lancer le gun',
                'destination': 'lancer'
            }
        ]
    },

    attendre: {
        titre: "Surpise !",
        description: "La créature bondit avec une férocité déconcertante, vous laissant suffisamment de temps pour rejoindre votre voiture et la démarrer, mais elle vous poursuit toujours de près...",
        media: {
            type: 'video',
            path: "./assets/images/attendreEtLancer.mp4"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
            titre: 'Recommencer',
            'destination': 'arrive'
        }]
    },

    pow: {
        titre: "Explosion Sonore",
        description: "La créature s'effondre, cela déclenche l'arrivée d'une meute d'ombre volante qui vous submerge.",
        media: {
            type: 'video',
            path: "./assets/images/pow.mp4"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
            titre: 'Recommencer',
            'destination': 'arrive'
        }]
    },

    lancer: {
        titre: "Escapade",
        description: "La créature se précipite à la poursuite du pistolet, vous offrant une opportunité de fuir la ville.",
        media: {
            type: 'video',
            path: "./assets/images/pasencoretrouvé"
        },
        audio: "./assets/audio/arrive.mp3",
        buttons: [{
            titre: 'Recommencer',
            'destination': 'arrive'
        }]
    },
};

let titreChapitre = document.querySelector('.titre');
let descriptionChapitre = document.querySelector('.description');
let imageChapitre = document.querySelector('.img');
let videoChapitre = document.querySelector('video');

let iHaveGun = false;

function generateButtons(buttons) {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = '';
    buttons.forEach((button) => {
        if (iHaveGun || button.titre === 'Attendre' || (button.titre !== 'Lancer le gun' && button.titre !== 'Tirer')) {
            if (button.titre === 'Lancer le gun' || button.titre === 'Tirer') {
                if (iHaveGun) {
                    const newButton = document.createElement('button');
                    newButton.textContent = button.titre;
                    newButton.addEventListener('click', () => {
                        goToChapter(button.destination);
                    });
                    buttonContainer.appendChild(newButton);
                }
            } else {
                const newButton = document.createElement('button');
                newButton.textContent = button.titre;
                newButton.addEventListener('click', () => {
                    goToChapter(button.destination);
                });
                buttonContainer.appendChild(newButton);
            }
        }
    });
}

function goToChapter(chapitreKey) {
    if (chapitre[chapitreKey]) {
        const ChapitreActuel = chapitre[chapitreKey];
        titreChapitre.textContent = ChapitreActuel.titre;
        descriptionChapitre.textContent = ChapitreActuel.description;

        if (chapitreKey === 'police') {
            iHaveGun = true;
        }

        if (ChapitreActuel.media.type === 'img') {
            imageChapitre.src = ChapitreActuel.media.path;
            imageChapitre.style.display = 'block';
            videoChapitre.style.display = 'none';
        } else if (ChapitreActuel.media.type === 'video') {
            videoChapitre.src = ChapitreActuel.media.path;
            videoChapitre.style.display = 'block';
            imageChapitre.style.display = 'none';
            videoChapitre.autoplay = true;
            videoChapitre.controls = true;
        }

        generateButtons(ChapitreActuel.buttons);
    }
}

// Appel initial pour démarrer le jeu
goToChapter('arrive');


/* JEU DANS LA CONSOLE, MAYBE IT'S BROKEN BTW
goToChapter('bizarre');
if (chapters[chapterKey]) {
    const chapter = chapters[chapterKey];
    console.log(chapter.titre);
    console.log(chapter.description);
    console.log("buttonss:");
    for (const buttons of chapter.buttons) {
        console.log(buttons.titre);
    }
} else {
    console.log("chapitre non trouvé : " + chapterKey);
}
*/




/* 

Notes... skip !



if ''bizarre && gun true... 
*/