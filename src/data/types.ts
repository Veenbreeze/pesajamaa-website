export interface Bullet {
  en: string;
  sw: string;
}

export interface Section {
  heading: string;
  headingSw: string;
  body: string;
  bodySw: string;
  bullets?: Bullet[];
}

export interface Card {
  title: string;
  titleSw: string;
  body: string;
  bodySw: string;
  href?: string;
}

export interface Stat {
  value: string;
  label: string;
  labelSw: string;
}

export interface InfoPage {
  slug: string;
  eyebrow: string;
  eyebrowSw: string;
  title: string;
  titleSw: string;
  intro: string;
  introSw: string;
  stats?: Stat[];
  sections: Section[];
  cards?: Card[];
}
