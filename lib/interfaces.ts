export interface Game {
  name: string;
  description: string;
  image: { src: string; width: number; height: number };
  url: string;
  downloadUrl?: string;
}

export interface TeamMember {
  name: string;
  description: string;
  socialLinks: {
    github?: string;
    discord?: string;
    youtube?: string;
  };
}
