export type Tag = 'ai' | 'games' | 'tools' | 'hardware';

export interface ProjectLink {
    label: string;
    href: string;
}

export type ProjectMedia =
    | { kind: 'image'; src: string; alt: string }
    | { kind: 'terminal' };

export interface Project {
    name: string;
    year: number;
    // Which filters the project appears under. It always appears under "All",
    // and projects with no tags appear under "Other".
    tags: Tag[];
    summary: string;
    description: string;
    stack: string[];
    // Empty for private repos; the site shows "Private repo" instead of a link.
    links: ProjectLink[];
    media?: ProjectMedia;
}
