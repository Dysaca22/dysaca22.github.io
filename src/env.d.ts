/// <reference path="../.astro/types.d.ts" />

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    tag: string;
    top: boolean;
}

declare module '@src/js/projects.js' {
    export const projects: Project[];
}
