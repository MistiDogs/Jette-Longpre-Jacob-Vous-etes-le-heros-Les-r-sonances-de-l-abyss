let chapitre = {
    arrive: {
        titre: "Emménagement en ville",
        description: "Vous êtes un détective qui a entendu des rumeurs d'une ville fantôme où surviennent des événements étranges, vous êtes venu enquêter. Il y a deux endroits qui vous tapent à l'oeil.",
        media: {
            type: 'img',
            path: "./assets/images/arrive.jpg"
        },
        audio: "./assets/audio/horror-violin_9xxpnRR.mp3",
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
        description: "Pendant votre promenade, vous êtes enveloppé dans une atmosphère intrigante où des murmures lointains et des ombres éveillent votre curiosité. Vous envisagez de vous précipiter vers votre véhicule ou de poursuivre l'enquête.",
        media: {
            type: 'img',
            path: "./assets/images/principale.jpg"
        },
        audio: "./assets/audio/Ghost Whispering Sound Effect.mp3",
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
        audio: "./assets/audio/police-beep.mp3",
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
        audio: "./assets/audio/pulse3d-106110.mp3",
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
        audio: "./assets/audio/spongebob-sad-song.mp3",
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
        audio: "./assets/audio/Roar Sound Effect.mp3",
        buttons: [{
                titre: 'Courir',
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
        titre: "Surprise !",
        description: "La créature bondit avec une férocité déconcertante, vous laissant suffisamment de temps pour rejoindre votre voiture et la démarrer, mais elle vous poursuit toujours de près...",
        media: {
            type: 'video',
            path: "./assets/images/attendreEtLancer.mp4"
        },
        audio: "./assets/audio/bo-womp.mp3",
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
        audio: "./assets/audio/fortnite-gun-shot-sound.mp3",
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
            path: "./assets/images/escape.mp4"
        },
        audio: "/assets/audio/bfdi-throw-sound.mp3",
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
let audioChapitre = document.querySelector('audio')


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
    let chapitrenow = chapitreKey;
    localStorage.setItem("chapitre", `${chapitrenow}`);

    videoChapitre.pause();
    videoChapitre.currentTime = 0;

    if (chapitre[chapitreKey]) {
        const ChapitreActuel = chapitre[chapitreKey];
        titreChapitre.textContent = ChapitreActuel.titre;
        descriptionChapitre.textContent = ChapitreActuel.description;

        audioChapitre.src = ChapitreActuel.audio;
        audioChapitre.play();

        if (chapitreKey === `arrive` ) {
            mediaClone.innerHTML = `<video src="${''}" autoplay muted loop></video>`;

        };

        if (chapitreKey === 'police') {
            iHaveGun = true;
            localStorage.setItem(`iHaveGun`, `true`)
        };

        if (chapitreKey === 'arrive') {
            iHaveGun = false;
            localStorage.setItem(`iHaveGun`, `false`)
        };

        if (ChapitreActuel.media.type === 'img') {
            mediaClone.style.backgroundImage = "url('"+ChapitreActuel.media.path+"')";
            imageChapitre.src = ChapitreActuel.media.path;
            imageChapitre.style.display = 'block';
            videoChapitre.style.display = 'none';
        } else if (ChapitreActuel.media.type === 'video') {
            mediaClone.style.backgroundImage = "";
            videoChapitre.src = ChapitreActuel.media.path;
            videoChapitre.style.display = 'block';
            imageChapitre.style.display = 'none';
            videoChapitre.autoplay = true;
            videoChapitre.controls = false;
            mediaClone.innerHTML = `<video class='Ref117' src="${ChapitreActuel.media.path}" autoplay muted loop></video>`;
        }
        generateButtons(ChapitreActuel.buttons);
    }
}

// Appel initial pour démarrer le jeu

let lieu = localStorage.getItem('chapitre');
let twist = localStorage.getItem(`iHaveGun`);

if (lieu != undefined) {
    goToChapter(lieu);

    if (twist === 'true') {
        iHaveGun = true;
    } else {
        iHaveGun = false;
    }
} else {
    goToChapter('arrive');
}

document.getElementById('reset').addEventListener('click', function(){
    localStorage.clear()
    goToChapter('arrive')
})

//animation fade to black 

//Bouton MUTE

let muteCheckBox = document.getElementById("mute")

let isMuted = localStorage.getItem("isMuted") === "true";
videoChapitre.muted = isMuted;
audioChapitre.muted = isMuted;
muteCheckBox.checked = isMuted

muteCheckBox.addEventListener('change', function(){

localStorage.setItem("isMuted", muteCheckBox.checked);

videoChapitre.muted = muteCheckBox.checked;
audioChapitre.muted = muteCheckBox.checked;
});