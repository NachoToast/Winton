const images = [
    {
        id: "base",
        title: "Vanilla",
        description: "Looks like shit.",
        dh: "Disabled",
        sh: "Disabled",
        frameTime: 1
    },
    {
        id: "distant_horizons",
        title: "Distant Horizons",
        description: "The visuals of a much higher render distance with a fraction of the cost.",
        dh: "Medium",
        sh: "Disabled",
        frameTime: 2
    },
    {
        id: "shaders_potato",
        title: "Potato",
        description: "Massive improvement in lighting, reflections, and the skybox.",
        dh: "Medium",
        sh: "Potato",
        frameTime: 3
    },
    {
        id: "shaders_verylow",
        title: "Very Low",
        description: "Lighting of far-away things becomes a lot more detailed and accurate; look at how the distant trees consist of more colours now, as does the snowy sky island on the left.",
        dh: "Medium",
        sh: "Very Low",
        frameTime: 3
    },
    {
        id: "shaders_low",
        title: "Low",
        description: "Lighting becomes even more accurate, especially with leaves (see how the leaves of the close dark oak tree on the left light up). Reflections get more detailed too, look at how more trees and geological features are shown in the lake's reflection. Water also gets improved visuals, allowing you to see more of the kelp in the lake.",
        dh: "Medium",
        sh: "Low",
        frameTime: 3
    },
    {
        id: "shaders_medium",
        title: "Medium",
        description: "More lighting and shadow improvements, albeit not very visible in this situation. The most notable are the leaves of the close trees. Shadows cast from far away objects (e.g. sky islands) also stop looking so harsh at this level. The overall haze can be turned off too if you don't like it.",
        dh: "Medium",
        sh: "Medium",
        frameTime: 5
    },
    {
        id: "shaders_high",
        title: "High",
        description: "The leaf changes from before now apply to more distant trees. Shadows cast from far away objects (e.g. sky islands) also stop looking so harsh at this level.",
        dh: "Medium",
        sh: "High",
        frameTime: 6
    },
    {
        id: "shaders_veryhigh",
        title: "Very High",
        description: "Diminishing returns at this point, only noticeable difference here is the fog over the water.",
        dh: "Medium",
        sh: "High",
        frameTime: 8
    }
];

const titleEl = document.querySelector('#title');
const descriptionEl = document.querySelector('#description');
const frameTimeEl = document.querySelector('#frame-time');
const calcFpsEl = document.querySelector('#calc-fps');
const dhEl = document.querySelector('#dh');
const shEl = document.querySelector('#sh');
const imgEl = document.querySelector('#img');
const prevEl = document.querySelector('#previous');
const nextEl = document.querySelector('#next');

let currentIndex = 0;

function handleIndexChanged() {
    if (currentIndex <= 0) {
        prevEl.disabled = true;
        nextEl.disabled = false;
    } else if (currentIndex >= images.length - 1) {
        prevEl.disabled = false;
        nextEl.disabled = true;
    } else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }

    const { id, title, description, dh, sh, frameTime } = images[currentIndex];

    titleEl.textContent = title;
    descriptionEl.textContent = description;
    dhEl.textContent = dh;
    shEl.textContent = sh;
    imgEl.src = `performance/${currentIndex}_${id}.png`;

    frameTimeEl.textContent = frameTime.toLocaleString();
    calcFpsEl.textContent = Math.floor(1000 / frameTime).toLocaleString();
}

function handlePrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    handleIndexChanged();
}

function handleNext() {
    currentIndex = Math.min(currentIndex + 1, images.length - 1);
    handleIndexChanged();
}

prevEl.addEventListener('click', handlePrev);
nextEl.addEventListener('click', handleNext);

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowLeft":
        case "a":
            e.preventDefault();
            handlePrev();
            break;

        case "ArrowRight":
        case "d":
            e.preventDefault();
            handleNext();
            break;
    }
})

handleIndexChanged();