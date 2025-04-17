export interface Character {
  id: number;
  name: string;
  japaneseTitle: string;
  title: string;
  level: string;
  description: string;
  imageUrl: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "KIRA-572",
    japaneseTitle: "アンドロイド・ア",
    title: "Android Assassin",
    level: "Combat Level: 97",
    description: "Artificial intelligence designed for covert ops with advanced nano-enhancements and thermal optics.",
    imageUrl: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    name: "ECHO",
    japaneseTitle: "ニューロ・ハッカー",
    title: "Neuro Hacker",
    level: "Tech Level: 92",
    description: "Neural interface specialist who can hack any security system through direct brain connection.",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 3,
    name: "RONIN",
    japaneseTitle: "ストリート・サムライ",
    title: "Street Samurai",
    level: "Strength Level: 95",
    description: "Enhanced reflexes and blade-integrated limbs make this ex-military operative lethal in close combat.",
    imageUrl: "https://images.unsplash.com/photo-1613053341085-db794820ce43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 4,
    name: "NEXUS",
    japaneseTitle: "サイバー・メディク",
    title: "Cyber Medic",
    level: "Medical Level: 98",
    description: "Specialized in combat nanomedicine and field repairs of cybernetic implants during missions.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
  }
];
