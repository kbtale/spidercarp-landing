export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export type SocialPlatform = "kick" | "x" | "instagram" | "tiktok" | "youtube";

export interface SocialLink {
  id: SocialPlatform;
  label: string;
  ariaLabel: string;
  href: string;
}

export interface TikTokVideo {
  id: string;
  url: string;
  title: string;
}

export interface CollaborationItem {
  number: string;
  title: string;
  description: string;
}

export interface ScheduleSlot {
  id: string;
  title: string;
  cadence: string;
  platform: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export const EXTERNAL_LINKS = {
  kickChannel: "https://kick.com/spidercarp23",
  kickPlayer: "https://player.kick.com/spidercarp23?autoplay=false&muted=true",
  kickClips: "https://kick.com/spidercarp23/clips",
  xProfile: "https://x.com/SpiderCarp23",
  instagram: "https://instagram.com/SpiderCarp23",
  tiktokProfile: "https://tiktok.com/@SpiderCarp23",
  youtubePlaylist:
    "https://www.youtube.com/playlist?list=PLLMvtaKe9aBPrDWuzzAl6d4iTDwgRzfjS",
  youtubeEmbed:
    "https://www.youtube.com/embed/videoseries?list=PLLMvtaKe9aBPrDWuzzAl6d4iTDwgRzfjS",
  discord: "https://discord.gg/5f4dve8Fd",
  githubRepo: "https://github.com/kbtale/spidercarp-landing",
} as const;

export const SITE_META = {
  brand: "SPIDERCARP",
  handle: "spidercarp23",
  tagline: "El Más Grande Lejos",
  url: "https://spidercarp.com",
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "streams", label: "Streams", href: "#streams" },
  { id: "tiktok", label: "TikTok", href: "#tiktok" },
  { id: "colaboraciones", label: "Colaboraciones", href: "#colaboraciones" },
  { id: "comunidad", label: "Comunidad", href: "#comunidad" },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: "kick",
    label: "Kick",
    ariaLabel: "Canal de Spidercarp en Kick",
    href: EXTERNAL_LINKS.kickChannel,
  },
  {
    id: "x",
    label: "X",
    ariaLabel: "Perfil de Spidercarp en X",
    href: EXTERNAL_LINKS.xProfile,
  },
  {
    id: "instagram",
    label: "Instagram",
    ariaLabel: "Perfil de Spidercarp en Instagram",
    href: EXTERNAL_LINKS.instagram,
  },
  {
    id: "tiktok",
    label: "TikTok",
    ariaLabel: "Perfil de Spidercarp en TikTok",
    href: EXTERNAL_LINKS.tiktokProfile,
  },
  {
    id: "youtube",
    label: "YouTube",
    ariaLabel: "Playlist Paladar Riverplatense en YouTube",
    href: EXTERNAL_LINKS.youtubePlaylist,
  },
];

export const HERO_WORDS: readonly string[] = [
  "MILLONARIA",
  "RIVERPLATENSE",
  "MONUMENTAL",
  "MUNDIAL",
  "FUTBOLERA",
  "SPIDERCARP",
];

export const TIKTOK_VIDEOS: readonly TikTokVideo[] = [
  {
    id: "7280990549757218053",
    url: "https://www.tiktok.com/@spidercarp23/video/7280990549757218053",
    title: "Reacción millonaria destacada en TikTok",
  },
  {
    id: "7637345327443430673",
    url: "https://www.tiktok.com/@spidercarp23/video/7637345327443430673",
    title: "Momento viral del stream en TikTok",
  },
  {
    id: "7634747504772320528",
    url: "https://www.tiktok.com/@spidercarp23/video/7634747504772320528",
    title: "Clip reciente de River en TikTok",
  },
];

export const COLLABORATIONS: readonly CollaborationItem[] = [
  {
    number: "01",
    title: "Discords con BocaEnLaCopa",
    description:
      "El clásico del stream. Debates picantes, chicanas y mucho folklore del fútbol argentino.",
  },
  {
    number: "02",
    title: "Invitados Especiales",
    description:
      "Figuras y streamers de la escena se suman a la mesa para hablar del Más Grande.",
  },
  {
    number: "03",
    title: "Entrevistas y opiniones",
    description:
      "Charlas picantes, análisis tácticos exhaustivos y reflexiones honestas sobre el día a día institucional y futbolístico de River.",
  },
];

export const STREAM_SCHEDULE: readonly ScheduleSlot[] = [
  {
    id: "matchday",
    title: "Días de Partido de River",
    cadence: "Previa 1 h antes · Post-partido en vivo",
    platform: "Kick",
    description:
      "Reacción en directo, puntajes jugador por jugador y el análisis caliente apenas termina el partido.",
    href: EXTERNAL_LINKS.kickChannel,
    ctaLabel: "Ir a Kick",
  },
  {
    id: "weekly",
    title: "Streams Nocturnos y Debates",
    cadence: "Entre semana · Noche (ARG)",
    platform: "Kick",
    description:
      "Actualidad del plantel, mercado de pases, discords con BocaEnLaCopa y charla directa con el chat.",
    href: EXTERNAL_LINKS.kickChannel,
    ctaLabel: "Seguir canal",
  },
  {
    id: "paladar",
    title: "Paladar Riverplatense",
    cadence: "Nuevos episodios semanales",
    platform: "YouTube",
    description:
      "Mesa de debate con invitados especiales analizando el presente futbolístico e institucional del club.",
    href: EXTERNAL_LINKS.youtubePlaylist,
    ctaLabel: "Ver playlist",
  },
  {
    id: "alerts",
    title: "Avisos de Prendido al Instante",
    cadence: "Notificaciones en tiempo real",
    platform: "Discord",
    description:
      "Activá las alertas en el servidor oficial para enterarte al segundo cada vez que arranca el stream.",
    href: EXTERNAL_LINKS.discord,
    ctaLabel: "Sumarse al Discord",
  },
];
