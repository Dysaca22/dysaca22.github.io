import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";

async function loadParticles(options) {
    await loadAll(tsParticles);

    await tsParticles.load({ id: "tsparticles", options });
}

const configs = {
    "fullScreen": {
        "zIndex": 0,
        "enable": false,
        "mode": "fullscreen",
    },
    "particles": {
        "number": {
            "value": 10,
        },
        "shape": {
            "type": "image",
            "options": {
                "image": [
                    {
                        "src": "images/skills/python-logo.png",
                        "width": 20,
                        "height": 20
                    },
                    {
                        "src": "images/skills/js-logo.png",
                        "width": 20,
                        "height": 20
                    },
                    {
                        "src": "images/skills/sql-logo.png",
                        "width": 20,
                        "height": 20
                    },
                    {
                        "src": "images/skills/latex-logo.png",
                        "width": 20,
                        "height": 20
                    },
                    {
                        "src": "images/skills/gcp-logo.png",
                        "width": 20,
                        "height": 20
                    },
                    {
                        "src": "images/skills/power-bi-logo.png",
                        "width": 20,
                        "height": 20
                    },
                    {
                        "src": "images/skills/java-logo.png",
                        "width": 20,
                        "height": 20
                    }
                ]
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false
        },
        "size": {
            "value": 20,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 1.2,
            "out_mode": "bounce",
        }
    },
    "retina_detect": true
};

loadParticles(configs);
