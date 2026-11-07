import type { InfoPage } from './types';

export const legalPages: InfoPage[] = [
  {
    slug: 'privacy',
    eyebrow: 'Legal · Privacy',
    eyebrowSw: 'Kisheria · Faragha',
    title: 'Privacy Policy',
    titleSw: 'Sera ya Faragha',
    intro:
      'Last updated: November 2026. This policy explains what information PesaJamaa collects, why we collect it and how we protect it.',
    introSw:
      'Imesasishwa mwisho: Novemba 2026. Sera hii inaeleza taarifa gani PesaJamaa inakusanya, kwa nini tunazikusanya na jinsi tunavyozilinda.',
    sections: [
      {
        heading: 'Information we collect',
        headingSw: 'Taarifa tunazokusanya',
        body:
          'We collect the information needed to run your group’s account and keep records accurate.',
        bodySw:
          'Tunakusanya taarifa zinazohitajika kuendesha akaunti ya kikundi chako na kuweka kumbukumbu sahihi.',
        bullets: [
          { en: 'Account details such as name, phone number and group role', sw: 'Taarifa za akaunti kama jina, namba ya simu na jukumu kwenye kikundi' },
          { en: 'Contribution, pledge and payment records', sw: 'Kumbukumbu za michango, ahadi na malipo' },
          { en: 'Basic device and usage information', sw: 'Taarifa za msingi za kifaa na matumizi' },
        ],
      },
      {
        heading: 'How we use your information',
        headingSw: 'Jinsi tunavyotumia taarifa zako',
        body:
          'Your information is used to operate the platform, send the notifications you expect and produce reports for your group.',
        bodySw:
          'Taarifa zako hutumika kuendesha jukwaa, kutuma arifa unazotarajia na kutoa ripoti kwa kikundi chako.',
        bullets: [
          { en: 'To record contributions and issue receipts', sw: 'Kurekodi michango na kutoa risiti' },
          { en: 'To send SMS and in-app reminders', sw: 'Kutuma vikumbusho vya SMS na arifa za programu' },
          { en: 'To improve reliability and support', sw: 'Kuboresha uimara na huduma kwa wateja' },
        ],
      },
      {
        heading: 'Sharing and disclosure',
        headingSw: 'Kushiriki na kufichua',
        body:
          'We do not sell your personal information. We share it only with service providers that help us operate the platform, or where the law requires it.',
        bodySw:
          'Hatuuzi taarifa zako binafsi. Tunazishiriki tu na watoa huduma wanaotusaidia kuendesha jukwaa, au pale sheria inapohitaji.',
        bullets: [
          { en: 'Mobile-money and banking partners for payment processing', sw: 'Washirika wa pesa za simu na benki kwa ajili ya malipo' },
          { en: 'SMS providers for message delivery', sw: 'Watoa huduma za SMS kwa uwasilishaji wa ujumbe' },
          { en: 'Authorities where legally required', sw: 'Mamlaka pale inapohitajika kisheria' },
        ],
      },
      {
        heading: 'Retention and your rights',
        headingSw: 'Uhifadhi na haki zako',
        body:
          'We keep records for as long as your group uses PesaJamaa and as required by law. You may request access, correction or deletion of your personal information.',
        bodySw:
          'Tunahifadhi kumbukumbu kwa muda ambao kikundi chako kinatumia PesaJamaa na kama sheria inavyohitaji. Unaweza kuomba ufikiaji, marekebisho au kufutwa kwa taarifa zako binafsi.',
        bullets: [
          { en: 'Request a copy of your data', sw: 'Omba nakala ya data yako' },
          { en: 'Ask us to correct inaccurate details', sw: 'Tuombe kurekebisha maelezo yasiyo sahihi' },
          { en: 'Contact us with any privacy question', sw: 'Wasiliana nasi kwa swali lolote la faragha' },
        ],
      },
    ],
    cards: [
      {
        title: 'Questions about privacy?',
        titleSw: 'Maswali kuhusu faragha?',
        body: 'Email privacy@pesajamaa.co.tz and we will respond as soon as possible.',
        bodySw: 'Barua pepe privacy@pesajamaa.co.tz na tutajibu haraka iwezekanavyo.',
        href: 'mailto:privacy@pesajamaa.co.tz',
      },
      {
        title: 'Read our terms',
        titleSw: 'Soma masharti yetu',
        body: 'See the rules that govern use of the PesaJamaa platform.',
        bodySw: 'Ona kanuni zinazosimamia matumizi ya jukwaa la PesaJamaa.',
        href: '/legal/terms',
      },
      {
        title: 'Security practices',
        titleSw: 'Mbinu za usalama',
        body: 'Learn how we protect group money and member data.',
        bodySw: 'Jifunze jinsi tunavyolinda fedha za kikundi na data ya wanachama.',
        href: '/legal/security',
      },
    ],
  },
  {
    slug: 'terms',
    eyebrow: 'Legal · Terms',
    eyebrowSw: 'Kisheria · Masharti',
    title: 'Terms of Service',
    titleSw: 'Masharti ya Huduma',
    intro:
      'Last updated: November 2026. These terms govern your use of PesaJamaa. By creating an account or using the platform you agree to them.',
    introSw:
      'Imesasishwa mwisho: Novemba 2026. Masharti haya yanasimamia matumizi yako ya PesaJamaa. Kwa kutengeneza akaunti au kutumia jukwaa unakubali.',
    sections: [
      {
        heading: 'Using PesaJamaa',
        headingSw: 'Kutumia PesaJamaa',
        body:
          'PesaJamaa helps groups record pledges, savings, payments and events. You agree to use the platform lawfully and only for your group’s legitimate activities.',
        bodySw:
          'PesaJamaa husaidia vikundi kurekodi ahadi, akiba, malipo na matukio. Unakubali kutumia jukwaa kwa sheria na kwa shughuli halali za kikundi chako pekee.',
        bullets: [
          { en: 'Provide accurate account and member information', sw: 'Toa taarifa sahihi za akaunti na wanachama' },
          { en: 'Keep your login credentials secure', sw: 'Weka siri za kuingia zikiwa salama' },
          { en: 'Do not misuse the platform or other members’ data', sw: 'Usitumie vibaya jukwaa au data ya wanachama wengine' },
        ],
      },
      {
        heading: 'Accounts and responsibilities',
        headingSw: 'Akaunti na majukumu',
        body:
          'Group leaders are responsible for the members they invite and the roles they assign. Members are responsible for the accuracy of their own contributions.',
        bodySw:
          'Viongozi wa kikundi wanawajibika kwa wanachama wanaowaalika na majukumu wanayowapa. Wanachama wanawajibika kwa usahihi wa michango yao wenyewe.',
        bullets: [
          { en: 'Admins manage access and roles', sw: 'Wasimamizi husimamia ufikiaji na majukumu' },
          { en: 'Members review their own records', sw: 'Wanachama hukagua kumbukumbu zao wenyewe' },
          { en: 'Report any suspicious activity promptly', sw: 'Ripoti shughuli yoyote ya kutia shaka haraka' },
        ],
      },
      {
        heading: 'Payments and records',
        headingSw: 'Malipo na kumbukumbu',
        body:
          'PesaJamaa records transactions and issues receipts, but does not itself hold or move your group’s money. Payments are processed by licensed mobile-money and banking partners.',
        bodySw:
          'PesaJamaa hurekodi miamala na kutoa risiti, lakini haiheshimu wala kuhamisha fedha za kikundi chako yenyewe. Malipo huchakatwa na washirika wenye leseni wa pesa za simu na benki.',
        bullets: [
          { en: 'Records are the shared source of truth', sw: 'Kumbukumbu ndizo chanzo cha pamoja cha ukweli' },
          { en: 'Receipts are issued for successful payments', sw: 'Risiti hutolewa kwa malipo yaliyofanikiwa' },
          { en: 'Disputes should be raised with your group first', sw: 'Migogoro inapaswa kuwasilishwa kwa kikundi chako kwanza' },
        ],
      },
      {
        heading: 'Changes and termination',
        headingSw: 'Mabadiliko na kusitisha',
        body:
          'We may update these terms or the platform over time. If you do not agree with a change, you may stop using PesaJamaa. We may suspend accounts that break these terms.',
        bodySw:
          'Tunaweza kusasisha masharti haya au jukwaa kwa muda. Ikiwa hukubaliani na mabadiliko, unaweza kuacha kutumia PesaJamaa. Tunaweza kusimamisha akaunti zinazovunja masharti haya.',
        bullets: [
          { en: 'Material changes will be communicated', sw: 'Mabadiliko makubwa yatatangazwa' },
          { en: 'You can export your records', sw: 'Unaweza kusafirisha kumbukumbu zako' },
          { en: 'Contact us with any questions', sw: 'Wasiliana nasi kwa maswali yoyote' },
        ],
      },
    ],
    cards: [
      {
        title: 'Privacy Policy',
        titleSw: 'Sera ya Faragha',
        body: 'Understand how your information is collected and protected.',
        bodySw: 'Elewa jinsi taarifa zako zinavyokusanywa na kulindwa.',
        href: '/legal/privacy',
      },
      {
        title: 'Security',
        titleSw: 'Usalama',
        body: 'See the controls that protect accounts and records.',
        bodySw: 'Ona udhibiti unaolinda akaunti na kumbukumbu.',
        href: '/legal/security',
      },
      {
        title: 'Contact us',
        titleSw: 'Wasiliana nasi',
        body: 'Questions about these terms? Talk to the team.',
        bodySw: 'Maswali kuhusu masharti haya? Zungumza na timu.',
        href: '/contact',
      },
    ],
  },
  {
    slug: 'security',
    eyebrow: 'Legal · Security',
    eyebrowSw: 'Kisheria · Usalama',
    title: 'Security',
    titleSw: 'Usalama',
    intro:
      'Your community’s money and data are protected at every step. Here is how we keep accounts, payments and records safe.',
    introSw:
      'Fedha na data za jamii yako zinalindwa katika kila hatua. Hivi ndivyo tunavyoweka akaunti, malipo na kumbukumbu salama.',
    sections: [
      {
        heading: 'Protected access',
        headingSw: 'Ufikiaji uliolindwa',
        body:
          'Role-based permissions keep sensitive information in the right hands, and every account is tied to a verified member.',
        bodySw:
          'Ruhusa kulingana na majukumu huweka taarifa nyeti mikononi sahihi, na kila akaunti inaunganishwa na mwanachama aliyethibitishwa.',
        bullets: [
          { en: 'Admin, treasurer and member roles', sw: 'Majukumu ya msimamizi, mweka hazina na mwanachama' },
          { en: 'Least-privilege access by default', sw: 'Ufikiaji wa kiwango cha chini kwa msingi' },
          { en: 'Secure login and session handling', sw: 'Kuingia salama na udhibiti wa kikao' },
        ],
      },
      {
        heading: 'Data protection',
        headingSw: 'Ulinzi wa data',
        body:
          'Data is encrypted in transit, and access to production systems is limited and monitored.',
        bodySw:
          'Data husimbwa wakati wa uhamishaji, na ufikiaji wa mifumo ya uzalishaji ni mdogo na hufuatiliwa.',
        bullets: [
          { en: 'Encrypted connections', sw: 'Miunganisho iliyosimbwa' },
          { en: 'Restricted internal access', sw: 'Ufikiaji mdogo wa ndani' },
          { en: 'Activity logging for sensitive actions', sw: 'Kurekodi shughuli kwa vitendo nyeti' },
        ],
      },
      {
        heading: 'Reliable backups',
        headingSw: 'Nakala za uhakika',
        body:
          'Your group’s records are backed up automatically, so a lost phone or a mistake does not erase the ledger.',
        bodySw:
          'Kumbukumbu za kikundi chako huhifadhiwa kiotomatiki, hivyo simu iliyopotea au kosa haliwezi kufuta daftari.',
        bullets: [
          { en: 'Automatic backups', sw: 'Nakala za kiotomatiki' },
          { en: 'Recovery procedures tested regularly', sw: 'Taratibu za urejeshaji hujaribiwa mara kwa mara' },
          { en: 'Receipt and audit trail preserved', sw: 'Risiti na historia ya ukaguzi huhifadhiwa' },
        ],
      },
      {
        heading: 'Responsible disclosure',
        headingSw: 'Ufichuzi wa kuwajibika',
        body:
          'If you believe you have found a security issue, please tell us privately so we can fix it before it affects anyone.',
        bodySw:
          'Ikiwa unaamini umepata tatizo la usalama, tafadhali tujulishe kwa faragha ili tuliweze kurekebisha kabla ya kuathiri mtu yeyote.',
        bullets: [
          { en: 'Email security@pesajamaa.co.tz', sw: 'Barua pepe security@pesajamaa.co.tz' },
          { en: 'Include steps to reproduce the issue', sw: 'Jumuisha hatua za kuiga tatizo' },
          { en: 'Do not access other members’ data', sw: 'Usifikie data ya wanachama wengine' },
        ],
      },
    ],
    cards: [
      {
        title: 'Privacy Policy',
        titleSw: 'Sera ya Faragha',
        body: 'How we collect, use and protect personal information.',
        bodySw: 'Jinsi tunavyokusanya, kutumia na kulinda taarifa binafsi.',
        href: '/legal/privacy',
      },
      {
        title: 'Terms of Service',
        titleSw: 'Masharti ya Huduma',
        body: 'The rules that govern use of the platform.',
        bodySw: 'Kanuni zinazosimamia matumizi ya jukwaa.',
        href: '/legal/terms',
      },
      {
        title: 'Report an issue',
        titleSw: 'Ripoti tatizo',
        body: 'Contact the team if something looks wrong.',
        bodySw: 'Wasiliana na timu ikiwa kitu kinaonekana si sawa.',
        href: '/contact',
      },
    ],
  },
  {
    slug: 'cookies',
    eyebrow: 'Legal · Cookies',
    eyebrowSw: 'Kisheria · Vidakuzi',
    title: 'Cookie Policy',
    titleSw: 'Sera ya Vidakuzi',
    intro:
      'Last updated: November 2026. This policy explains how PesaJamaa uses cookies and similar technologies on our website and portal.',
    introSw:
      'Imesasishwa mwisho: Novemba 2026. Sera hii inaeleza jinsi PesaJamaa inavyotumia vidakuzi na teknolojia kama hiyo kwenye tovuti na portal yetu.',
    sections: [
      {
        heading: 'What cookies are',
        headingSw: 'Vidakuzi ni nini',
        body:
          'Cookies are small files stored on your device that help websites remember your preferences and keep you signed in.',
        bodySw:
          'Vidakuzi ni faili ndogo zinazohifadhiwa kwenye kifaa chako zinazosaidia tovuti kukumbuka mapendeleo yako na kukuweka umeingia.',
        bullets: [
          { en: 'They do not contain your payment details', sw: 'Hazina taarifa zako za malipo' },
          { en: 'They help keep sessions secure', sw: 'Husaidia kuweka vikao salama' },
          { en: 'You can control them in your browser', sw: 'Unaweza kuzidhibiti kwenye kivinjari chako' },
        ],
      },
      {
        heading: 'How we use them',
        headingSw: 'Jinsi tunavyozitumia',
        body:
          'We use essential cookies to run the portal and, where enabled, analytics cookies to understand how the site is used.',
        bodySw:
          'Tunatumia vidakuzi muhimu kuendesha portal na, pale vinapowekwa, vidakuzi vya uchambuzi kuelewa jinsi tovuti inavyotumika.',
        bullets: [
          { en: 'Essential cookies for login and security', sw: 'Vidakuzi muhimu kwa kuingia na usalama' },
          { en: 'Preference cookies for language settings', sw: 'Vidakuzi vya mapendeleo kwa mipangilio ya lugha' },
          { en: 'Analytics cookies to improve the site', sw: 'Vidakuzi vya uchambuzi kuboresha tovuti' },
        ],
      },
      {
        heading: 'Managing cookies',
        headingSw: 'Kudhibiti vidakuzi',
        body:
          'You can block or delete cookies in your browser settings. Blocking essential cookies may prevent parts of the portal from working.',
        bodySw:
          'Unaweza kuzuia au kufuta vidakuzi kwenye mipangilio ya kivinjari chako. Kuzuia vidakuzi muhimu kunaweza kuzuia sehemu za portal kufanya kazi.',
        bullets: [
          { en: 'Most browsers let you clear cookies', sw: 'Vivinjari vingi hukuruhusu kufuta vidakuzi' },
          { en: 'You can set alerts before cookies are stored', sw: 'Unaweza kuweka tahadhari kabla vidakuzi kuhifadhiwa' },
          { en: 'Essential cookies are required for login', sw: 'Vidakuzi muhimu vinahitajika kwa kuingia' },
        ],
      },
    ],
    cards: [
      {
        title: 'Privacy Policy',
        titleSw: 'Sera ya Faragha',
        body: 'More detail on how personal information is handled.',
        bodySw: 'Maelezo zaidi kuhusu jinsi taarifa binafsi zinavyoshughulikiwa.',
        href: '/legal/privacy',
      },
      {
        title: 'Terms of Service',
        titleSw: 'Masharti ya Huduma',
        body: 'Read the rules for using PesaJamaa.',
        bodySw: 'Soma kanuni za kutumia PesaJamaa.',
        href: '/legal/terms',
      },
      {
        title: 'Contact us',
        titleSw: 'Wasiliana nasi',
        body: 'Ask us anything about cookies or privacy.',
        bodySw: 'Tuulize chochote kuhusu vidakuzi au faragha.',
        href: '/contact',
      },
    ],
  },
];

export const aboutPage: InfoPage = {
  slug: 'about',
  eyebrow: 'Company · About',
  eyebrowSw: 'Kampuni · Kuhusu',
  title: 'Built in Tanzania for Tanzanian communities',
  titleSw: 'Imejengwa Tanzania kwa ajili ya jamii za Tanzania',
  intro:
    'PesaJamaa is a community finance and engagement platform made for the way churches, chamas, NGOs, schools and families already organise and raise money.',
  introSw:
    'PesaJamaa ni jukwaa la fedha na ushirikiano wa jamii lililoundwa kulingana na jinsi makanisa, vyama, NGOs, shule na familia tayari zinavyojipanga na kukusanya fedha.',
  stats: [
    { value: '150+', label: 'Community groups', labelSw: 'Vikundi vya jamii' },
    { value: '9,200+', label: 'Active members', labelSw: 'Wanachama hai' },
    { value: 'TZS 480M+', label: 'Pledges tracked', labelSw: 'Ahadi zilizofuatiliwa' },
  ],
  sections: [
    {
      heading: 'Our mission',
      headingSw: 'Dhamira yetu',
      body:
        'We exist to make community money transparent, organised and trustworthy, so groups can focus on their goals instead of bookkeeping.',
      bodySw:
        'Tupo kufanya fedha za jamii ziwe za uwazi, zenye mpangilio na za kuaminika, ili vikundi vizingatie malengo yao badala ya uhasibu.',
      bullets: [
        { en: 'Transparency by default', sw: 'Uwazi kwa msingi' },
        { en: 'Financial inclusion for every member', sw: 'Ujumuishwaji wa kifedha kwa kila mwanachama' },
        { en: 'Local support in English and Kiswahili', sw: 'Msaada wa ndani kwa Kiingereza na Kiswahili' },
      ],
    },
    {
      heading: 'Why we built PesaJamaa',
      headingSw: 'Kwa nini tulijenga PesaJamaa',
      body:
        'We watched community groups run large sums of money on paper lists, chat groups and memory. Misunderstandings were common, and good projects stalled. PesaJamaa replaces that chaos with one shared platform.',
      bodySw:
        'Tuliona vikundi vya jamii vikiendesha fedha nyingi kwenye orodha za karatasi, vikundi vya gumzo na kumbukumbu. Misunderstandings ilikuwa mingi, na miradi mizuri ilikwama. PesaJamaa inachukua nafasi ya vurugu hiyo kwa jukwaa moja la pamoja.',
      bullets: [
        { en: 'One record everyone can see', sw: 'Kumbukumbu moja ambayo kila mtu anaweza kuona' },
        { en: 'Reminders that reach every member', sw: 'Vikumbusho vinavyomfikia kila mwanachama' },
        { en: 'Reports that build confidence', sw: 'Ripoti zinazojenga ujasiri' },
      ],
    },
    {
      heading: 'How we work',
      headingSw: 'Jinsi tunavyofanya kazi',
      body:
        'We design with community leaders, test in the field and keep the platform simple enough to use on an affordable phone.',
      bodySw:
        'Tunabuni pamoja na viongozi wa jamii, tunajaribu uwandani na tunaweka jukwaa rahisi vya kutosha kutumika kwenye simu ya bei nafuu.',
      bullets: [
        { en: 'Design with real groups', sw: 'Kubuni pamoja na vikundi halisi' },
        { en: 'Low-data, mobile-first tools', sw: 'Zana za data ndogo zinazozingatia simu' },
        { en: 'Support that speaks your language', sw: 'Msaada unaozungumza lugha yako' },
      ],
    },
  ],
  cards: [
    {
      title: 'Talk to us',
      titleSw: 'Zungumza nasi',
      body: 'Questions about PesaJamaa? The team is ready to help.',
      bodySw: 'Maswali kuhusu PesaJamaa? Timu iko tayari kusaidia.',
      href: '/contact',
    },
    {
      title: 'Partner with us',
      titleSw: 'Shirikiana nasi',
      body: 'Work with us to bring transparent finance to more groups.',
      bodySw: 'Fanya kazi nasi kuleta fedha za uwazi kwa vikundi zaidi.',
      href: '/partners',
    },
    {
      title: 'Join the team',
      titleSw: 'Jiunge na timu',
      body: 'Help build tools that strengthen communities.',
      bodySw: 'Saidia kujenga zana zinazoimarisha jamii.',
      href: '/careers',
    },
  ],
};

export const careersPage: InfoPage = {
  slug: 'careers',
  eyebrow: 'Company · Careers',
  eyebrowSw: 'Kampuni · Kazi',
  title: 'Do work that strengthens communities',
  titleSw: 'Fanya kazi inayoimarisha jamii',
  intro:
    'We are a small Tanzanian team building technology for community finance. If you care about transparency and financial inclusion, we would love to hear from you.',
  introSw:
    'Sisi ni timu ndogo ya Kitanzania inayojenga teknolojia kwa fedha za jamii. Ikiwa unajali uwazi na ujumuishwaji wa kifedha, tungependa kusikia kutoka kwako.',
  sections: [
    {
      heading: 'Why join PesaJamaa',
      headingSw: 'Kwa nini ujiunge na PesaJamaa',
      body:
        'Every feature you ship helps a church, chama or school handle money with more trust. The impact is visible in the communities around you.',
      bodySw:
        'Kila kipengele unachojenga husaidia kanisa, chama au shule kushughulikia fedha kwa uaminifu zaidi. Athari inaonekana katika jamii zinazokuzunguka.',
      bullets: [
        { en: 'Real, local impact', sw: 'Athari halisi ya ndani' },
        { en: 'Small team, real ownership', sw: 'Timu ndogo, umiliki halisi' },
        { en: 'Learning budget and mentorship', sw: 'Bajeti ya kujifunza na ushauri' },
      ],
    },
    {
      heading: 'How we work',
      headingSw: 'Jinsi tunavyofanya kazi',
      body:
        'We work in short cycles, test with real groups and keep the product simple. We value clear communication more than long meetings.',
      bodySw:
        'Tunafanya kazi kwa mizunguko mifupi, tunajaribu na vikundi halisi na tunaweka bidhaa rahisi. Tunathamini mawasiliano wazi kuliko mikutano mirefu.',
      bullets: [
        { en: 'Remote-friendly with a Dar es Salaam base', sw: 'Tunafaa kwa kazi ya mbali na msingi wa Dar es Salaam' },
        { en: 'Short cycles and clear priorities', sw: 'Mizunguko mifupi na vipaumbele wazi' },
        { en: 'Respect for family and community time', sw: 'Heshima kwa muda wa familia na jamii' },
      ],
    },
    {
      heading: 'Open roles',
      headingSw: 'Nafasi zilizo wazi',
      body:
        'We hire as the team grows. Even when there is no listed role, we keep strong applications on file for engineering, customer success and field operations.',
      bodySw:
        'Tunaajiri timu inapokua. Hata pale hakuna nafasi iliyoorodheshwa, tunahifadhi maombi mazuri kwa uhandisi, huduma kwa wateja na shughuli za uwandani.',
      bullets: [
        { en: 'Full-stack engineering', sw: 'Uhandisi wa full-stack' },
        { en: 'Customer success and onboarding', sw: 'Huduma kwa wateja na uanzishaji' },
        { en: 'Field training and partnerships', sw: 'Mafunzo ya uwandani na ushirikiano' },
      ],
    },
  ],
  cards: [
    {
      title: 'Send your CV',
      titleSw: 'Tuma CV yako',
      body: 'Email careers@pesajamaa.co.tz with the role you are interested in.',
      bodySw: 'Tuma barua pepe careers@pesajamaa.co.tz na nafasi unayoipenda.',
      href: 'mailto:careers@pesajamaa.co.tz',
    },
    {
      title: 'Engineering',
      titleSw: 'Uhandisi',
      body: 'Help build a reliable platform for thousands of members.',
      bodySw: 'Saidia kujenga jukwaa la kuaminika kwa maelfu ya wanachama.',
    },
    {
      title: 'Customer success',
      titleSw: 'Huduma kwa wateja',
      body: 'Guide groups from sign-up to confident daily use.',
      bodySw: 'Ongoa vikundi kutoka kujiandikisha hadi matumizi ya kila siku kwa ujasiri.',
    },
  ],
};

export const contactPage: InfoPage = {
  slug: 'contact',
  eyebrow: 'Company · Contact',
  eyebrowSw: 'Kampuni · Mawasiliano',
  title: 'Talk to the PesaJamaa team',
  titleSw: 'Zungumza na timu ya PesaJamaa',
  intro:
    'Whether you are starting a group, moving from paper lists or exploring a partnership, we are here to help in English and Kiswahili.',
  introSw:
    'Iwe unaanza kikundi, unahama kutoka orodha za karatasi au unachunguza ushirikiano, tuko hapa kusaidia kwa Kiingereza na Kiswahili.',
  sections: [
    {
      heading: 'Sales and onboarding',
      headingSw: 'Mauzo na uanzishaji',
      body:
        'Tell us about your group and we will help you set up campaigns, members and reminders correctly from day one.',
      bodySw:
        'Tuambie kuhusu kikundi chako na tutakusaidia kuweka kampeni, wanachama na vikumbusho kwa usahihi tangu siku ya kwanza.',
      bullets: [
        { en: 'Email hello@pesajamaa.co.tz', sw: 'Barua pepe hello@pesajamaa.co.tz' },
        { en: 'Free onboarding support', sw: 'Msaada wa uanzishaji bila malipo' },
        { en: 'Guidance on the right plan for your group', sw: 'Mwongozo wa mpango unaofaa kikundi chako' },
      ],
    },
    {
      heading: 'Support',
      headingSw: 'Usaidizi',
      body:
        'Existing groups can reach support for help with accounts, payments, receipts and reports.',
      bodySw:
        'Vikundi vilivyopo vinaweza kufikia usaidizi kwa msaada wa akaunti, malipo, risiti na ripoti.',
      bullets: [
        { en: 'Email support@pesajamaa.co.tz', sw: 'Barua pepe support@pesajamaa.co.tz' },
        { en: 'Help centre and guides', sw: 'Kituo cha usaidizi na miongozo' },
        { en: 'Response in English or Kiswahili', sw: 'Majibu kwa Kiingereza au Kiswahili' },
      ],
    },
    {
      heading: 'Partnerships',
      headingSw: 'Ushirikiano',
      body:
        'We work with mobile-money providers, banks, NGOs and implementation partners who share our goal of financial inclusion.',
      bodySw:
        'Tunafanya kazi na watoa huduma za pesa za simu, benki, NGOs na washirika wa utekelezaji wanaoshiriki lengo letu la ujumuishwaji wa kifedha.',
      bullets: [
        { en: 'Email partners@pesajamaa.co.tz', sw: 'Barua pepe partners@pesajamaa.co.tz' },
        { en: 'Integration and referral partnerships', sw: 'Ushirikiano wa muunganisho na rufaa' },
        { en: 'Training and rollout support', sw: 'Mafunzo na msaada wa uzinduzi' },
      ],
    },
  ],
  cards: [
    {
      title: 'Email us',
      titleSw: 'Tutumie barua pepe',
      body: 'hello@pesajamaa.co.tz for general questions.',
      bodySw: 'hello@pesajamaa.co.tz kwa maswali ya jumla.',
      href: 'mailto:hello@pesajamaa.co.tz',
    },
    {
      title: 'Support',
      titleSw: 'Usaidizi',
      body: 'support@pesajamaa.co.tz for help with your account.',
      bodySw: 'support@pesajamaa.co.tz kwa msaada wa akaunti yako.',
      href: 'mailto:support@pesajamaa.co.tz',
    },
    {
      title: 'Start free',
      titleSw: 'Anza bila malipo',
      body: 'Create your group in minutes, no credit card required.',
      bodySw: 'Tengeneza kikundi chako kwa dakika chache, bila kadi ya mkopo.',
      href: 'https://portal.pesajamaa.co.tz/register',
    },
  ],
};

export const partnersPage: InfoPage = {
  slug: 'partners',
  eyebrow: 'Company · Partners',
  eyebrowSw: 'Kampuni · Washirika',
  title: 'Grow with the PesaJamaa partner network',
  titleSw: 'Kua na mtandao wa washirika wa PesaJamaa',
  intro:
    'We work with payment providers, banks, NGOs and implementation partners to bring transparent community finance to more groups across Tanzania.',
  introSw:
    'Tunafanya kazi na watoa huduma za malipo, benki, NGOs na washirika wa utekelezaji kuleta fedha za jamii za uwazi kwa vikundi zaidi kote Tanzania.',
  sections: [
    {
      heading: 'Payment and banking partners',
      headingSw: 'Washirika wa malipo na benki',
      body:
        'PesaJamaa connects to the mobile-money and banking channels members already trust, so contributions land quickly and reconcile cleanly.',
      bodySw:
        'PesaJamaa inaunganisha njia za pesa za simu na benki ambazo wanachama wanaamini tayari, hivyo michango huingia haraka na kupatanishwa kwa usafi.',
      bullets: [
        { en: 'Mobile money networks', sw: 'Mitandao ya pesa za simu' },
        { en: 'Commercial banks', sw: 'Benki za biashara' },
        { en: 'Payment aggregators', sw: 'Wakusanyaji wa malipo' },
      ],
    },
    {
      heading: 'Implementation partners',
      headingSw: 'Washirika wa utekelezaji',
      body:
        'NGOs, associations and consultancies help groups adopt PesaJamaa with training and local support.',
      bodySw:
        'NGOs, vyama na kampuni za ushauri husaidia vikundi kutumia PesaJamaa kwa mafunzo na msaada wa ndani.',
      bullets: [
        { en: 'Onboarding and training', sw: 'Uanzishaji na mafunzo' },
        { en: 'Local language support', sw: 'Msaada wa lugha ya ndani' },
        { en: 'Community rollout programmes', sw: 'Programu za uzinduzi wa jamii' },
      ],
    },
    {
      heading: 'Become a partner',
      headingSw: 'Kuwa mshirika',
      body:
        'If your organisation shares our goal of financial inclusion, tell us how you would like to work together.',
      bodySw:
        'Ikiwa taasisi yako inashiriki lengo letu la ujumuishwaji wa kifedha, tuambie jinsi ungependa kufanya kazi pamoja.',
      bullets: [
        { en: 'Email partners@pesajamaa.co.tz', sw: 'Barua pepe partners@pesajamaa.co.tz' },
        { en: 'Integration partnerships', sw: 'Ushirikiano wa muunganisho' },
        { en: 'Referral and training partnerships', sw: 'Ushirikiano wa rufaa na mafunzo' },
      ],
    },
  ],
  cards: [
    {
      title: 'Payment partners',
      titleSw: 'Washirika wa malipo',
      body: 'Connect your network to groups that contribute every week.',
      bodySw: 'Unganisha mtandao wako na vikundi vinavyochangia kila wiki.',
      href: 'mailto:partners@pesajamaa.co.tz',
    },
    {
      title: 'Implementation partners',
      titleSw: 'Washirika wa utekelezaji',
      body: 'Help groups adopt PesaJamaa with training and support.',
      bodySw: 'Saidia vikundi kutumia PesaJamaa kwa mafunzo na msaada.',
      href: 'mailto:partners@pesajamaa.co.tz',
    },
    {
      title: 'Talk to us',
      titleSw: 'Zungumza nasi',
      body: 'Start a partnership conversation with the team.',
      bodySw: 'Anzisha mazungumzo ya ushirikiano na timu.',
      href: '/contact',
    },
  ],
};

export const howItWorksPage: InfoPage = {
  slug: 'how-it-works',
  eyebrow: 'Resources · How it works',
  eyebrowSw: 'Rasilimali · Inafanya kazi vipi',
  title: 'From first pledge to lasting growth',
  titleSw: 'Kutoka ahadi ya kwanza hadi ukuaji wa kudumu',
  intro:
    'PesaJamaa follows the way Tanzanian communities already organise: set up a group, invite members, collect contributions and show progress. Here is the flow step by step.',
  introSw:
    'PesaJamaa inafuata jinsi jamii za Tanzania zinavyojipanga tayari: weka kikundi, alika wanachama, kusanya michango na onyesha maendeleo. Huu ni mtiririko hatua kwa hatua.',
  sections: [
    {
      heading: '1. Create and connect',
      headingSw: '1. Tengeneza na unganisha',
      body:
        'Set up your group in minutes, add your first campaign and invite members by phone number or SMS link.',
      bodySw:
        'Weka kikundi chako kwa dakika chache, ongeza kampeni yako ya kwanza na alika wanachama kwa namba ya simu au kiungo cha SMS.',
      bullets: [
        { en: 'Create a group and campaign', sw: 'Tengeneza kikundi na kampeni' },
        { en: 'Invite members by phone or link', sw: 'Alika wanachama kwa simu au kiungo' },
        { en: 'Assign admin and treasurer roles', sw: 'Gawa majukumu ya msimamizi na mweka hazina' },
      ],
    },
    {
      heading: '2. Contribute and engage',
      headingSw: '2. Changia na shirikisha',
      body:
        'Members pay through mobile money or cash, get instant receipts, and receive reminders by SMS and in-app notification.',
      bodySw:
        'Wanachama hulipa kupitia pesa za simu au taslimu, wanapata risiti papo hapo, na hupokea vikumbusho kwa SMS na arifa za programu.',
      bullets: [
        { en: 'Mobile-money and cash contributions', sw: 'Michango ya pesa za simu na taslimu' },
        { en: 'Instant receipts and confirmations', sw: 'Risiti na uthibitisho wa papo hapo' },
        { en: 'Bulk SMS and scheduled reminders', sw: 'SMS za wingi na vikumbusho vilivyopangwa' },
      ],
    },
    {
      heading: '3. Track and grow',
      headingSw: '3. Fuatilia na kua',
      body:
        'Watch progress live, share monthly reports and build a financial footprint that opens doors to credit and growth.',
      bodySw:
        'Angalia maendeleo papo hapo, shiriki ripoti za kila mwezi na jenga alama ya kifedha inayofungua milango ya mikopo na ukuaji.',
      bullets: [
        { en: 'Live campaign and savings progress', sw: 'Maendeleo ya kampeni na akiba ya moja kwa moja' },
        { en: 'Monthly and annual reports', sw: 'Ripoti za kila mwezi na mwaka' },
        { en: 'A credible financial footprint', sw: 'Alama ya kifedha yenye uhakika' },
      ],
    },
  ],
  cards: [
    {
      title: 'See the product',
      titleSw: 'Ona bidhaa',
      body: 'Watch the self-playing demo on the home page.',
      bodySw: 'Tazama onyesho linalojicheza kwenye ukurasa wa mwanzo.',
      href: '/#demo',
    },
    {
      title: 'Read the guides',
      titleSw: 'Soma miongozo',
      body: 'Practical playbooks for churches, chamas and schools.',
      bodySw: 'Miongozo ya vitendo kwa makanisa, vyama na shule.',
      href: '/guides',
    },
    {
      title: 'Start free',
      titleSw: 'Anza bila malipo',
      body: 'Create your group and invite your first members.',
      bodySw: 'Tengeneza kikundi chako na ualike wanachama wa kwanza.',
      href: 'https://portal.pesajamaa.co.tz/register',
    },
  ],
};

export const helpCenterPage: InfoPage = {
  slug: 'help-center',
  eyebrow: 'Resources · Help Center',
  eyebrowSw: 'Rasilimali · Kituo cha Usaidizi',
  title: 'Answers when you need them',
  titleSw: 'Majibu wakati unayohitaji',
  intro:
    'Find quick answers about setup, payments, receipts, accounts and reports, or reach the team if you need more help.',
  introSw:
    'Pata majibu ya haraka kuhusu uanzishaji, malipo, risiti, akaunti na ripoti, au fikia timu ikiwa unahitaji msaada zaidi.',
  sections: [
    {
      heading: 'Getting started',
      headingSw: 'Kuanza',
      body:
        'New groups can create an account, add members and launch a first campaign in one sitting.',
      bodySw:
        'Vikundi vipya vinaweza kutengeneza akaunti, kuongeza wanachama na kuzindua kampeni ya kwanza kwa mkupuo mmoja.',
      bullets: [
        { en: 'Creating and naming your group', sw: 'Kutengeneza na kuipa jina kikundi chako' },
        { en: 'Inviting members', sw: 'Kualika wanachama' },
        { en: 'Setting up your first campaign', sw: 'Kuweka kampeni yako ya kwanza' },
      ],
    },
    {
      heading: 'Payments and receipts',
      headingSw: 'Malipo na risiti',
      body:
        'Most payment questions are answered by checking the member’s payment history and receipt trail.',
      bodySw:
        'Maswali mengi ya malipo hujibiwa kwa kuangalia historia ya malipo ya mwanachama na historia ya risiti.',
      bullets: [
        { en: 'Where contributions appear', sw: 'Michango inaonekana wapi' },
        { en: 'Downloading or resending receipts', sw: 'Kupakua au kutuma risiti tena' },
        { en: 'What to do if a payment is missing', sw: 'La kufanya ikiwa malipo hayapatikani' },
      ],
    },
    {
      heading: 'Accounts and security',
      headingSw: 'Akaunti na usalama',
      body:
        'Admins control roles, and every member should keep their login details private.',
      bodySw:
        'Wasimamizi hudhibiti majukumu, na kila mwanachama anapaswa kuweka siri za kuingia zikiwa za faragha.',
      bullets: [
        { en: 'Resetting access', sw: 'Kuweka upya ufikiaji' },
        { en: 'Changing member roles', sw: 'Kubadilisha majukumu ya wanachama' },
        { en: 'Reporting suspicious activity', sw: 'Kuripoti shughuli ya kutia shaka' },
      ],
    },
  ],
  cards: [
    {
      title: 'Read the FAQ',
      titleSw: 'Soma maswali yanayoulizwa',
      body: 'The most common questions, answered on the home page.',
      bodySw: 'Maswali yanayoulizwa zaidi, yakijibiwa kwenye ukurasa wa mwanzo.',
      href: '/#faq',
    },
    {
      title: 'Browse guides',
      titleSw: 'Vinjari miongozo',
      body: 'Step-by-step help for common group activities.',
      bodySw: 'Msaada wa hatua kwa hatua kwa shughuli za kawaida za kikundi.',
      href: '/guides',
    },
    {
      title: 'Contact support',
      titleSw: 'Wasiliana na usaidizi',
      body: 'Email support@pesajamaa.co.tz for personal help.',
      bodySw: 'Barua pepe support@pesajamaa.co.tz kwa msaada wa kibinafsi.',
      href: '/contact',
    },
  ],
};

export const guidesPage: InfoPage = {
  slug: 'guides',
  eyebrow: 'Resources · Guides',
  eyebrowSw: 'Rasilimali · Miongozo',
  title: 'Practical guides for stronger groups',
  titleSw: 'Miongozo ya vitendo kwa vikundi vyenye nguvu',
  intro:
    'Playbooks for the situations community groups face most often: building funds, savings cycles, events and member communication.',
  introSw:
    'Miongozo kwa hali ambazo vikundi vya jamii hukabiliana nazo mara nyingi: mifuko ya ujenzi, mizunguko ya akiba, matukio na mawasiliano na wanachama.',
  sections: [
    {
      heading: 'Start with the basics',
      headingSw: 'Anza na misingi',
      body:
        'Set up your group, define clear roles and agree on how contributions will be recorded before the first shilling arrives.',
      bodySw:
        'Weka kikundi chako, fafanua majukumu wazi na kukubaliana jinsi michango itakavyorekodiwa kabla shilingi ya kwanza kuwasili.',
      bullets: [
        { en: 'Choose admins and treasurers', sw: 'Chagua wasimamizi na waweka hazina' },
        { en: 'Agree contribution cycles', sw: 'Kubaliana mizunguko ya michango' },
        { en: 'Tell members how receipts work', sw: 'Wajulishe wanachama jinsi risiti zinavyofanya kazi' },
      ],
    },
    {
      heading: 'Run transparent campaigns',
      headingSw: 'Endesha kampeni za uwazi',
      body:
        'A clear goal, regular updates and visible progress keep members motivated and reduce questions.',
      bodySw:
        'Lengo wazi, taarifa za mara kwa mara na maendeleo yanayoonekana huwaweka wanachama motisha na kupunguza maswali.',
      bullets: [
        { en: 'Set a specific goal and deadline', sw: 'Weka lengo na tarehe mahususi' },
        { en: 'Share progress at every milestone', sw: 'Shiriki maendeleo katika kila hatua' },
        { en: 'Send reminders before the deadline', sw: 'Tuma vikumbusho kabla ya tarehe ya mwisho' },
      ],
    },
    {
      heading: 'Grow member engagement',
      headingSw: 'Kuza ushiriki wa wanachama',
      body:
        'Use the channels members already have. SMS works for everyone, and the app adds convenience for smartphone users.',
      bodySw:
        'Tumia njia ambazo wanachama wanazo tayari. SMS inafaa kwa kila mtu, na programu inaongeza urahisi kwa watumiaji wa simu janja.',
      bullets: [
        { en: 'Mix SMS and in-app updates', sw: 'Changanya SMS na taarifa za programu' },
        { en: 'Recognise consistent contributors', sw: 'Wathamini wachangiaji thabiti' },
        { en: 'Close every cycle with a report', sw: 'Funga kila mzunguko kwa ripoti' },
      ],
    },
  ],
  cards: [
    {
      title: 'Church building fund guide',
      titleSw: 'Mwongozo wa mfuko wa ujenzi wa kanisa',
      body: 'Collect pledges and show members where every shilling goes.',
      bodySw: 'Kusanya ahadi na uonyeshe wanachama kila shilingi inakoenda.',
      href: '/insights',
    },
    {
      title: 'VICOBA savings playbook',
      titleSw: 'Mwongozo wa akiba ya VICOBA',
      body: 'Keep weekly shares, loans and repayments in one clean ledger.',
      bodySw: 'Weka hisa za wiki, mikopo na marejesho kwenye daftari moja safi.',
      href: '/insights',
    },
    {
      title: 'Bulk SMS best practices',
      titleSw: 'Mbinu bora za SMS za wingi',
      body: 'Write reminders that get read and acted on.',
      bodySw: 'Andika vikumbusho vinavyosomwa na kutekelezwa.',
      href: '/insights',
    },
  ],
};
