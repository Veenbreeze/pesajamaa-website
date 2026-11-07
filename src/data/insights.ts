export interface Insight {
  category: string;
  categorySw: string;
  date: string;
  read: string;
  readSw: string;
  title: string;
  titleSw: string;
  excerpt: string;
  excerptSw: string;
}

export const insights: Insight[] = [
  {
    category: 'Guides',
    categorySw: 'Miongozo',
    date: 'Oct 2026',
    read: '5 min read',
    readSw: 'dakika 5',
    title: 'How to run a transparent church building fund',
    titleSw: 'Jinsi ya kuendesha mfuko wa ujenzi wa kanisa kwa uwazi',
    excerpt:
      'A step-by-step playbook for collecting pledges and showing members where every shilling goes.',
    excerptSw:
      'Mwongozo wa hatua kwa hatua wa kukusanya ahadi na kuonyesha wanachama kila shilingi inakoenda.',
  },
  {
    category: 'VICOBA',
    categorySw: 'VICOBA',
    date: 'Sep 2026',
    read: '4 min read',
    readSw: 'dakika 4',
    title: '5 ways SMS reminders boost group savings',
    titleSw: 'Njia 5 ambazo vikumbusho vya SMS huongeza akiba ya kikundi',
    excerpt:
      'Simple nudges that keep chama members contributing on time, every cycle.',
    excerptSw:
      'Mikumbusho rahisi inayowafanya wanachama wa chama kuchangia kwa wakati, kila mzunguko.',
  },
  {
    category: 'Inclusion',
    categorySw: 'Ujumuishwaji',
    date: 'Sep 2026',
    read: '6 min read',
    readSw: 'dakika 6',
    title: 'Building a financial footprint for your group',
    titleSw: 'Kujenga alama ya kifedha kwa kikundi chako',
    excerpt:
      'Why a clear contribution history is the key to unlocking credit and growth.',
    excerptSw:
      'Kwa nini historia wazi ya michango ndiyo ufunguo wa kupata mikopo na ukuaji.',
  },
];
