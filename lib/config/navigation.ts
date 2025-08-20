export interface NavItem {
  href: string;
  label: string;
  target: "_self" | "_blank";
}

export const navigationItems: NavItem[] = [
  { href: "/", label: "Home", target: "_self" },
  { href: "/games", label: "Games", target: "_self" },
  { href: "/about", label: "About", target: "_self" },
  { href: "/privacy", label: "Privacy", target: "_self" },
  {
    href: "https://github.com/noecoofficial",
    label: "GitHub",
    target: "_blank",
  },
  {
    href: "https://discord.gg/QNgcKCAJn3",
    label: "Discord",
    target: "_blank",
  },
];