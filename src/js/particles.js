import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";

export default async function loadParticles(options) {
    await loadAll(tsParticles);
    await tsParticles.load({ id: "tsparticles", options });
}