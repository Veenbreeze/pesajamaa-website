import type { InfoPage } from './types';

export const solutionPages: InfoPage[] = [
  {
    slug: 'churches',
    eyebrow: 'Solutions · Churches',
    eyebrowSw: 'Ufumbuzi · Makanisa',
    title: 'Church giving, fully transparent',
    titleSw: 'Utoaji wa kanisa, kwa uwazi kamili',
    intro:
      'Run tithes, offerings, building funds and special appeals on one platform, so leadership and members always see the same numbers.',
    introSw:
      'Endesha zaka, sadaka, mifuko ya ujenzi na michango maalum kwenye jukwaa moja, ili uongozi na wanachama waone namba zile zile kila wakati.',
    stats: [
      { value: 'TZS 52.3M', label: 'Raised in a single building fund', labelSw: 'Zilizokusanywa kwenye mfuko mmoja wa ujenzi' },
      { value: '1,284', label: 'Contributions tracked', labelSw: 'Michango iliyofuatiliwa' },
      { value: '0', label: 'Paper lists needed', labelSw: 'Orodha za karatasi zinazohitajika' },
    ],
    sections: [
      {
        heading: 'One home for every giving stream',
        headingSw: 'Sehemu moja kwa kila aina ya utoaji',
        body:
          'Create a campaign for each need, from weekly offerings to a multi-year building project, and keep the story of every shilling in one place.',
        bodySw:
          'Tengeneza kampeni kwa kila hitaji, kutoka sadaka za kila wiki hadi mradi wa ujenzi wa miaka mingi, na weka historia ya kila shilingi sehemu moja.',
        bullets: [
          { en: 'Tithes and offerings recorded against each member', sw: 'Zaka na sadaka zikirekodiwa kwa kila mwanachama' },
          { en: 'Dedicated building and project funds', sw: 'Mifuko maalum ya ujenzi na miradi' },
          { en: 'Special appeals and harvest campaigns', sw: 'Michango maalum na kampeni za mavuno' },
        ],
      },
      {
        heading: 'Pledges members can see and honour',
        headingSw: 'Ahadi ambazo wanachama wanaweza kuona na kutimiza',
        body:
          'Give every member a clear view of what they pledged and what remains, and send gentle reminders before every deadline.',
        bodySw:
          'Mpe kila mwanachama mtazamo wazi wa alichoahidi na kilichobaki, na tuma vikumbusho vya upole kabla ya kila mwisho wa muda.',
        bullets: [
          { en: 'Pledge amounts and due dates per member', sw: 'Kiasi cha ahadi na tarehe za malipo kwa kila mwanachama' },
          { en: 'Paid and unpaid status at a glance', sw: 'Hali ya kulipa na kutolipa kwa mtazamo mmoja' },
          { en: 'Automated SMS reminders', sw: 'Vikumbusho vya SMS vya kiotomatiki' },
        ],
      },
      {
        heading: 'Accountability without spreadsheets',
        headingSw: 'Uwajibikaji bila majedwali ya hesabu',
        body:
          'Close the gap between the treasurer and the congregation with receipts, monthly reports and role-based access.',
        bodySw:
          'Funga pengo kati ya mweka hazina na waumini kwa risiti, ripoti za kila mwezi na ufikiaji kulingana na majukumu.',
        bullets: [
          { en: 'Instant receipts for every payment', sw: 'Risiti papo hapo kwa kila malipo' },
          { en: 'Monthly and annual reports ready to share', sw: 'Ripoti za kila mwezi na mwaka tayari kushiriki' },
          { en: 'Role-based permissions for leaders', sw: 'Ruhusa kulingana na majukumu kwa viongozi' },
        ],
      },
    ],
    cards: [
      {
        title: 'Building fund campaigns',
        titleSw: 'Kampeni za mfuko wa ujenzi',
        body: 'Track a multi-year project with live progress, receipts and member pledges.',
        bodySw: 'Fuatilia mradi wa miaka mingi kwa maendeleo ya moja kwa moja, risiti na ahadi za wanachama.',
      },
      {
        title: 'Pledge & harvest tracking',
        titleSw: 'Ufuatiliaji wa ahadi na mavuno',
        body: 'Know exactly who has paid and who still owes before the next service.',
        bodySw: 'Jua hasa nani amelipa na nani bado anadaiwa kabla ya ibada ijayo.',
      },
      {
        title: 'Member self-service',
        titleSw: 'Huduma za wanachama wenyewe',
        body: 'Let members check their giving history and receive SMS confirmations.',
        bodySw: 'Waache wanachama waangalie historia yao ya utoaji na kupokea uthibitisho wa SMS.',
      },
    ],
  },
  {
    slug: 'vicoba-chamas',
    eyebrow: 'Solutions · VICOBA / Chamas',
    eyebrowSw: 'Ufumbuzi · VICOBA / Chamas',
    title: 'A clean ledger for every chama',
    titleSw: 'Daftari safi kwa kila chama',
    intro:
      'Run weekly shares, loans and repayments with a shared ledger every member can trust, and reminders that keep the cycle on track.',
    introSw:
      'Endesha hisa za wiki, mikopo na marejesho kwa daftari la pamoja ambalo kila mwanachama anaweza kuamini, na vikumbusho vinavyoweka mzunguko sawa.',
    stats: [
      { value: '18.0M', label: 'TZS group balance tracked', labelSw: 'Salio la kikundi lililofuatiliwa' },
      { value: '100%', label: 'Member visibility', labelSw: 'Uonekano kwa wanachama' },
      { value: '1', label: 'Shared source of truth', labelSw: 'Chanzo kimoja cha ukweli' },
    ],
    sections: [
      {
        heading: 'Savings cycles that stay organised',
        headingSw: 'Mizunguko ya akiba inayobaki kwa mpangilio',
        body:
          'Record weekly or monthly shares, see who has contributed, and keep a running balance that matches the group’s cash box.',
        bodySw:
          'Rekodi hisa za wiki au mwezi, ona nani amechangia, na weka salio linaloendelea linalolingana na sanduku la fedha la kikundi.',
        bullets: [
          { en: 'Weekly and monthly savings cycles', sw: 'Mizunguko ya akiba ya wiki na mwezi' },
          { en: 'Member share history', sw: 'Historia ya hisa za wanachama' },
          { en: 'Running group balance', sw: 'Salio la kikundi linaloendelea' },
        ],
      },
      {
        heading: 'Loans and repayments, clearly tracked',
        headingSw: 'Mikopo na marejesho, yakifuatiliwa kwa uwazi',
        body:
          'Capture every loan, interest charge and repayment so the group always knows who owes what and when it is due.',
        bodySw:
          'Rekodi kila mkopo, riba na marejesho ili kikundi kijue kila wakati nani anadaiwa nini na lini inatakiwa.',
        bullets: [
          { en: 'Loan issue and approval records', sw: 'Kumbukumbu za kutoa na kuidhinisha mikopo' },
          { en: 'Interest and repayment schedules', sw: 'Ratiba za riba na marejesho' },
          { en: 'Outstanding balance per member', sw: 'Salio linalodaiwa kwa kila mwanachama' },
        ],
      },
      {
        heading: 'Transparency that prevents disputes',
        headingSw: 'Uwazi unaozuia migogoro',
        body:
          'Members can review the ledger and receive SMS updates, so meetings focus on decisions instead of arguments about the books.',
        bodySw:
          'Wanachama wanaweza kukagua daftari na kupokea taarifa za SMS, hivyo mikutano huzingatia maamuzi badala ya migogoro kuhusu vitabu.',
        bullets: [
          { en: 'Shared ledger visible to members', sw: 'Daftari la pamoja linaloonekana kwa wanachama' },
          { en: 'Automatic reminders before meetings', sw: 'Vikumbusho vya kiotomatiki kabla ya mikutano' },
          { en: 'Statements ready for every cycle', sw: 'Taarifa tayari kwa kila mzunguko' },
        ],
      },
    ],
    cards: [
      {
        title: 'Weekly shares',
        titleSw: 'Hisa za wiki',
        body: 'Record contributions by member and watch the group fund grow in real time.',
        bodySw: 'Rekodi michango kwa mwanachama na uangalie mfuko wa kikundi ukikua papo hapo.',
      },
      {
        title: 'Loan ledger',
        titleSw: 'Daftari la mikopo',
        body: 'Track every loan, its interest and the repayments attached to it.',
        bodySw: 'Fuatilia kila mkopo, riba yake na marejesho yanayohusiana nayo.',
      },
      {
        title: 'Member statements',
        titleSw: 'Taarifa za wanachama',
        body: 'Give each member a clear statement of shares, loans and balances.',
        bodySw: 'Mpe kila mwanachama taarifa wazi ya hisa, mikopo na salio.',
      },
    ],
  },
  {
    slug: 'ngos',
    eyebrow: 'Solutions · NGOs',
    eyebrowSw: 'Ufumbuzi · NGOs',
    title: 'Donor-ready reporting for every project',
    titleSw: 'Ripoti tayari kwa wafadhili kwa kila mradi',
    intro:
      'Track donor pledges, project budgets and spending in one place, and show exactly where every shilling goes.',
    introSw:
      'Fuatilia ahadi za wafadhili, bajeti za miradi na matumizi sehemu moja, na onyesha hasa kila shilingi inakoenda.',
    sections: [
      {
        heading: 'Pledges and grants under control',
        headingSw: 'Ahadi na ruzuku chini ya udhibiti',
        body:
          'Record pledges from donors and partners, set expected dates, and see what has been received against what was promised.',
        bodySw:
          'Rekodi ahadi kutoka kwa wafadhili na washirika, weka tarehe zinazotarajiwa, na ona kilichopokelewa dhidi ya kilichoahidiwa.',
        bullets: [
          { en: 'Donor and grant records', sw: 'Kumbukumbu za wafadhili na ruzuku' },
          { en: 'Pledged versus received totals', sw: 'Jumla zilizoahidiwa dhidi ya zilizopokelewa' },
          { en: 'Campaign-level reporting', sw: 'Ripoti kwa ngazi ya kampeni' },
        ],
      },
      {
        heading: 'Project budgets that stay honest',
        headingSw: 'Bajeti za miradi zinazobaki za kweli',
        body:
          'Give each project its own budget and ledger, so field teams and headquarters work from the same numbers.',
        bodySw:
          'Ipe kila mradi bajeti na daftari lake, ili timu za uwandani na makao makuu zifanye kazi kwa namba zile zile.',
        bullets: [
          { en: 'Budget per project or programme', sw: 'Bajeti kwa kila mradi au programu' },
          { en: 'Spending tracked against budget lines', sw: 'Matumizi yakifuatiliwa dhidi ya vifungu vya bajeti' },
          { en: 'Role-based access for field teams', sw: 'Ufikiaji kulingana na majukumu kwa timu za uwandani' },
        ],
      },
      {
        heading: 'Reports funders actually trust',
        headingSw: 'Ripoti ambazo wafadhili huamini',
        body:
          'Export clean summaries and contribution histories that answer the questions funders ask most.',
        bodySw:
          'Toa muhtasari safi na historia za michango zinazojibu maswali ambayo wafadhili huuliza mara nyingi.',
        bullets: [
          { en: 'Monthly and annual summaries', sw: 'Muhtasari wa kila mwezi na mwaka' },
          { en: 'Export-ready PDF and CSV files', sw: 'Faili za PDF na CSV tayari kusafirishwa' },
          { en: 'Contribution history per donor', sw: 'Historia ya michango kwa kila mfadhili' },
        ],
      },
    ],
    cards: [
      {
        title: 'Donor pledges',
        titleSw: 'Ahadi za wafadhili',
        body: 'Track commitments from individuals, partners and institutional funders.',
        bodySw: 'Fuatilia ahadi kutoka kwa watu binafsi, washirika na wafadhili wa taasisi.',
      },
      {
        title: 'Project budgets',
        titleSw: 'Bajeti za miradi',
        body: 'Keep every programme inside its budget with clear spending lines.',
        bodySw: 'Weka kila programu ndani ya bajeti yake kwa vifungu wazi vya matumizi.',
      },
      {
        title: 'Impact reporting',
        titleSw: 'Ripoti za athari',
        body: 'Share transparent results with boards, donors and the communities you serve.',
        bodySw: 'Shiriki matokeo ya uwazi na bodi, wafadhili na jamii unazozihudumia.',
      },
    ],
  },
  {
    slug: 'event-organizers',
    eyebrow: 'Solutions · Event Organizers',
    eyebrowSw: 'Ufumbuzi · Waandaji wa Matukio',
    title: 'Sell, track and reconcile every event',
    titleSw: 'Uza, fuatilia na upatanishe kila tukio',
    intro:
      'Manage tickets, RSVPs and event budgets from one dashboard, with reminders that keep guests and members in the loop.',
    introSw:
      'Simamia tiketi, mahudhurio na bajeti za matukio kutoka dashibodi moja, na vikumbusho vinavyowaweka wageni na wanachama taarifa.',
    sections: [
      {
        heading: 'Ticketing and RSVPs without the chaos',
        headingSw: 'Tiketi na mahudhurio bila vurugu',
        body:
          'Create an event, share a link and watch RSVPs and ticket sales update in real time.',
        bodySw:
          'Tengeneza tukio, shiriki kiungo na uangalie mahudhurio na mauzo ya tiketi yakisasishwa papo hapo.',
        bullets: [
          { en: 'RSVP lists updated live', sw: 'Orodha za mahudhurio zikisasishwa papo hapo' },
          { en: 'Ticket sales tracked per event', sw: 'Mauzo ya tiketi yakifuatiliwa kwa kila tukio' },
          { en: 'Guest and member segmentation', sw: 'Mgawanyo wa wageni na wanachama' },
        ],
      },
      {
        heading: 'Budgets that match the event',
        headingSw: 'Bajeti zinazolingana na tukio',
        body:
          'Set a budget before you announce the event and watch income and spending land against it.',
        bodySw:
          'Weka bajeti kabla ya kutangaza tukio na uangalie mapato na matumizi yakilingana nayo.',
        bullets: [
          { en: 'Event income and expense tracking', sw: 'Ufuatiliaji wa mapato na matumizi ya tukio' },
          { en: 'Live budget versus actuals', sw: 'Bajeti dhidi ya matumizi halisi papo hapo' },
          { en: 'Post-event profit summary', sw: 'Muhtasari wa faida baada ya tukio' },
        ],
      },
      {
        heading: 'Reminders that fill the room',
        headingSw: 'Vikumbusho vinavyojaza ukumbi',
        body:
          'Send SMS invitations and reminders to selected guests, and confirm payments automatically.',
        bodySw:
          'Tuma mialiko na vikumbusho vya SMS kwa wageni waliochaguliwa, na uthibitishe malipo kiotomatiki.',
        bullets: [
          { en: 'Bulk SMS invitations', sw: 'Mialiko ya SMS za wingi' },
          { en: 'Automatic payment confirmations', sw: 'Uthibitisho wa malipo wa kiotomatiki' },
          { en: 'Scheduled pre-event reminders', sw: 'Vikumbusho vilivyopangwa kabla ya tukio' },
        ],
      },
    ],
    cards: [
      {
        title: 'Ticketing',
        titleSw: 'Tiketi',
        body: 'Sell tickets and track every sale against the right event.',
        bodySw: 'Uza tiketi na fuatilia kila mauzo dhidi ya tukio sahihi.',
      },
      {
        title: 'RSVP lists',
        titleSw: 'Orodha za mahudhurio',
        body: 'Know who is coming and who needs a reminder before the day.',
        bodySw: 'Jua nani anakuja na nani anahitaji kikumbusho kabla ya siku.',
      },
      {
        title: 'Event reports',
        titleSw: 'Ripoti za matukio',
        body: 'Close every event with a clean income and spending summary.',
        bodySw: 'Funga kila tukio kwa muhtasari safi wa mapato na matumizi.',
      },
    ],
  },
  {
    slug: 'schools',
    eyebrow: 'Solutions · Schools',
    eyebrowSw: 'Ufumbuzi · Shule',
    title: 'Fees and projects without the paperwork',
    titleSw: 'Ada na miradi bila karatasi',
    intro:
      'Collect fees and project contributions from parents, issue receipts instantly and keep class and stream records organised.',
    introSw:
      'Kusanya ada na michango ya miradi kutoka kwa wazazi, toa risiti papo hapo na weka kumbukumbu za madarasa na mikondo kwa mpangilio.',
    sections: [
      {
        heading: 'Fee collection parents understand',
        headingSw: 'Ukusanyaji wa ada unaoeleweka kwa wazazi',
        body:
          'Record payments per learner, track balances and send confirmations that parents can keep.',
        bodySw:
          'Rekodi malipo kwa kila mwanafunzi, fuatilia salio na tuma uthibitisho ambao wazazi wanaweza kuuhifadhi.',
        bullets: [
          { en: 'Payments recorded per learner', sw: 'Malipo yakirekodiwa kwa kila mwanafunzi' },
          { en: 'Outstanding balance tracking', sw: 'Ufuatiliaji wa salio linalodaiwa' },
          { en: 'Instant receipts for parents', sw: 'Risiti papo hapo kwa wazazi' },
        ],
      },
      {
        heading: 'Project contributions with a clear goal',
        headingSw: 'Michango ya miradi yenye lengo wazi',
        body:
          'Run campaigns for new classrooms, desks or trips and show the whole school community how close the goal is.',
        bodySw:
          'Endesha kampeni za madarasa mapya, madawati au safari na uonyeshe jamii yote ya shule jinsi lengo linavyokaribia.',
        bullets: [
          { en: 'Campaign progress bars', sw: 'Pau za maendeleo za kampeni' },
          { en: 'Contributions linked to each family', sw: 'Michango ikiunganishwa na kila familia' },
          { en: 'Reports for the school committee', sw: 'Ripoti kwa kamati ya shule' },
        ],
      },
      {
        heading: 'Communication that reaches every parent',
        headingSw: 'Mawasiliano yanayomfikia kila mzazi',
        body:
          'Send fee reminders and project updates by bulk SMS, even to parents without smartphones.',
        bodySw:
          'Tuma vikumbusho vya ada na taarifa za miradi kwa SMS za wingi, hata kwa wazazi wasio na simu janja.',
        bullets: [
          { en: 'Bulk SMS to all parents', sw: 'SMS za wingi kwa wazazi wote' },
          { en: 'Targeted reminders by class', sw: 'Vikumbusho vilivyolengwa kwa darasa' },
          { en: 'Automatic payment confirmations', sw: 'Uthibitisho wa malipo wa kiotomatiki' },
        ],
      },
    ],
    cards: [
      {
        title: 'Fee collection',
        titleSw: 'Ukusanyaji wa ada',
        body: 'Track payments and balances for every learner in one register.',
        bodySw: 'Fuatilia malipo na salio kwa kila mwanafunzi kwenye rejista moja.',
      },
      {
        title: 'Receipts for parents',
        titleSw: 'Risiti kwa wazazi',
        body: 'Every payment triggers a receipt parents can keep or print.',
        bodySw: 'Kila malipo hutengeneza risiti ambayo wazazi wanaweza kuihifadhi au kuchapisha.',
      },
      {
        title: 'Class and stream reports',
        titleSw: 'Ripoti za madarasa na mikondo',
        body: 'See collection progress by class, stream or project.',
        bodySw: 'Ona maendeleo ya ukusanyaji kwa darasa, mkondo au mradi.',
      },
    ],
  },
];

export const featurePages: InfoPage[] = [
  {
    slug: 'pledges',
    eyebrow: 'Features · Pledges',
    eyebrowSw: 'Vipengele · Ahadi',
    title: 'Pledges that actually get paid',
    titleSw: 'Ahadi ambazo kwa kweli hulipwa',
    intro:
      'Create campaigns, record member commitments and follow every pledge to payment with automatic reminders.',
    introSw:
      'Tengeneza kampeni, rekodi ahadi za wanachama na fuatilia kila ahadi hadi malipo kwa vikumbusho vya kiotomatiki.',
    sections: [
      {
        heading: 'Set up a campaign in minutes',
        headingSw: 'Weka kampeni kwa dakika chache',
        body:
          'Name the goal, set the amount and due date, and invite members by phone or SMS link.',
        bodySw:
          'Taja lengo, weka kiasi na tarehe ya mwisho, na alika wanachama kwa simu au kiungo cha SMS.',
        bullets: [
          { en: 'Flexible campaign goals and deadlines', sw: 'Malengo na tarehe za mwisho zinazobadilika' },
          { en: 'Invite by phone number or link', sw: 'Alika kwa namba ya simu au kiungo' },
          { en: 'Works for one-off or recurring pledges', sw: 'Inafaa kwa ahadi za mara moja au za mara kwa mara' },
        ],
      },
      {
        heading: 'Know who has paid at a glance',
        headingSw: 'Jua nani amelipa kwa mtazamo mmoja',
        body:
          'Every member has a clear paid or unpaid status, with totals that update the moment money lands.',
        bodySw:
          'Kila mwanachama ana hali wazi ya kulipa au kutolipa, na jumla zikisasishwa mara tu fedha zinapoingia.',
        bullets: [
          { en: 'Paid and unpaid status per member', sw: 'Hali ya kulipa na kutolipa kwa kila mwanachama' },
          { en: 'Live campaign totals', sw: 'Jumla za kampeni za moja kwa moja' },
          { en: 'Contribution history', sw: 'Historia ya michango' },
        ],
      },
      {
        heading: 'Reminders that close the gap',
        headingSw: 'Vikumbusho vinavyofunga pengo',
        body:
          'Automatically remind members with outstanding pledges before and after the deadline.',
        bodySw:
          'Wakumbushe wanachama wenye ahadi zinazodaiwa kiotomatiki kabla na baada ya tarehe ya mwisho.',
        bullets: [
          { en: 'Automated SMS reminders', sw: 'Vikumbusho vya SMS vya kiotomatiki' },
          { en: 'Scheduled follow-ups', sw: 'Ufuatiliaji uliopangwa' },
          { en: 'Fewer manual phone calls', sw: 'Simu chache za mikono' },
        ],
      },
    ],
    cards: [
      {
        title: 'Campaign builder',
        titleSw: 'Kijenzi cha kampeni',
        body: 'Create and launch a pledge campaign without any training.',
        bodySw: 'Tengeneza na uzindue kampeni ya ahadi bila mafunzo yoyote.',
      },
      {
        title: 'Paid/unpaid dashboard',
        titleSw: 'Dashibodi ya kulipa/kutolipa',
        body: 'See the whole group’s progress in one simple view.',
        bodySw: 'Ona maendeleo ya kikundi chote kwa mtazamo mmoja rahisi.',
      },
      {
        title: 'Automated reminders',
        titleSw: 'Vikumbusho vya kiotomatiki',
        body: 'Let SMS do the follow-up so nobody is forgotten.',
        bodySw: 'Acha SMS zifanye ufuatiliaji ili hakuna anayesahaulika.',
      },
    ],
  },
  {
    slug: 'events',
    eyebrow: 'Features · Events',
    eyebrowSw: 'Vipengele · Matukio',
    title: 'Plan events and budgets in one view',
    titleSw: 'Panga matukio na bajeti kwa mtazamo mmoja',
    intro:
      'Organise fundraisers, meetings and celebrations with RSVP tracking, ticket sales and a clear budget attached.',
    introSw:
      'Panga kampeni za kukusanya fedha, mikutano na sherehe kwa ufuatiliaji wa mahudhurio, mauzo ya tiketi na bajeti wazi.',
    sections: [
      {
        heading: 'RSVPs and guest lists that stay current',
        headingSw: 'Mahudhurio na orodha za wageni zinazobaki za sasa',
        body:
          'Share an event and watch responses arrive, with separate views for members, guests and sponsors.',
        bodySw:
          'Shiriki tukio na uangalie majibu yakifika, kwa mitazamo tofauti kwa wanachama, wageni na wadhamini.',
        bullets: [
          { en: 'Live RSVP tracking', sw: 'Ufuatiliaji wa mahudhurio wa moja kwa moja' },
          { en: 'Guest and sponsor lists', sw: 'Orodha za wageni na wadhamini' },
          { en: 'Ticket sales per event', sw: 'Mauzo ya tiketi kwa kila tukio' },
        ],
      },
      {
        heading: 'A budget for every event',
        headingSw: 'Bajeti kwa kila tukio',
        body:
          'Plan income and expenses up front, then track actuals so the event does not run away with the funds.',
        bodySw:
          'Panga mapato na matumizi mapema, kisha fuatilia halisi ili tukio lisichukue fedha kupita kiasi.',
        bullets: [
          { en: 'Budget versus actuals', sw: 'Bajeti dhidi ya matumizi halisi' },
          { en: 'Income and expense categories', sw: 'Makundi ya mapato na matumizi' },
          { en: 'Profit and loss summary', sw: 'Muhtasari wa faida na hasara' },
        ],
      },
      {
        heading: 'Close the event with a clean report',
        headingSw: 'Funga tukio kwa ripoti safi',
        body:
          'After the last guest leaves, share a clear report with the committee, sponsors and members.',
        bodySw:
          'Baada ya mgeni wa mwisho kuondoka, shiriki ripoti wazi na kamati, wadhamini na wanachama.',
        bullets: [
          { en: 'One-click event reports', sw: 'Ripoti za tukio kwa mbofyo mmoja' },
          { en: 'PDF ready to share', sw: 'PDF tayari kushiriki' },
          { en: 'Full contribution trail', sw: 'Historia kamili ya michango' },
        ],
      },
    ],
    cards: [
      {
        title: 'RSVP tracking',
        titleSw: 'Ufuatiliaji wa mahudhurio',
        body: 'Know who is coming and follow up with the rest.',
        bodySw: 'Jua nani anakuja na ufuatilie wengine.',
      },
      {
        title: 'Ticket sales',
        titleSw: 'Mauzo ya tiketi',
        body: 'Track every ticket sold against the right event.',
        bodySw: 'Fuatilia kila tiketi iliyouzwa dhidi ya tukio sahihi.',
      },
      {
        title: 'Event reports',
        titleSw: 'Ripoti za matukio',
        body: 'Finish with a summary that satisfies the whole committee.',
        bodySw: 'Maliza kwa muhtasari unaoridhisha kamati yote.',
      },
    ],
  },
  {
    slug: 'bulk-sms',
    eyebrow: 'Features · Bulk SMS',
    eyebrowSw: 'Vipengele · SMS za Wingi',
    title: 'Reach every member, smartphone or not',
    titleSw: 'Fikia kila mwanachama, mwenye simu janja au la',
    intro:
      'Send reminders, receipts and updates to hundreds of members in seconds, straight to the phones they already use.',
    introSw:
      'Tuma vikumbusho, risiti na taarifa kwa mamia ya wanachama kwa sekunde, moja kwa moja kwenye simu wanazotumia tayari.',
    sections: [
      {
        heading: 'Send to everyone or just the right people',
        headingSw: 'Tuma kwa wote au kwa watu sahihi tu',
        body:
          'Message the whole group, a single campaign list or members with outstanding balances.',
        bodySw:
          'Tuma ujumbe kwa kikundi chote, orodha ya kampeni moja au wanachama wenye salio linalodaiwa.',
        bullets: [
          { en: 'Send to all members at once', sw: 'Tuma kwa wanachama wote kwa mpigo' },
          { en: 'Target groups and campaign lists', sw: 'Vikundi vilivyolengwa na orodha za kampeni' },
          { en: 'Personalised messages', sw: 'Ujumbe wa kibinafsi' },
        ],
      },
      {
        heading: 'Automatic confirmations build trust',
        headingSw: 'Uthibitisho wa kiotomatiki hujenga uaminifu',
        body:
          'Every payment can trigger an SMS receipt, so members have proof without asking the treasurer.',
        bodySw:
          'Kila malipo yanaweza kusababisha risiti ya SMS, hivyo wanachama wanapata uthibitisho bila kumuuliza mweka hazina.',
        bullets: [
          { en: 'Instant SMS payment receipts', sw: 'Risiti za malipo za SMS papo hapo' },
          { en: 'Contribution confirmations', sw: 'Uthibitisho wa michango' },
          { en: 'Fewer “did you receive it?” calls', sw: 'Simu chache za “mmeipokea?”' },
        ],
      },
      {
        heading: 'Reminders that arrive on time',
        headingSw: 'Vikumbusho vinavyofika kwa wakati',
        body:
          'Schedule reminders before deadlines, meetings and events, and let PesaJamaa send them for you.',
        bodySw:
          'Panga vikumbusho kabla ya tarehe za mwisho, mikutano na matukio, na acha PesaJamaa izitume kwa niaba yako.',
        bullets: [
          { en: 'Scheduled SMS campaigns', sw: 'Kampeni za SMS zilizopangwa' },
          { en: 'Deadline and meeting reminders', sw: 'Vikumbusho vya tarehe na mikutano' },
          { en: 'Delivery reporting', sw: 'Ripoti za uwasilishaji' },
        ],
      },
    ],
    cards: [
      {
        title: 'Bulk sending',
        titleSw: 'Utumaji wa wingi',
        body: 'Message hundreds of members in a single step.',
        bodySw: 'Tuma ujumbe kwa mamia ya wanachama kwa hatua moja.',
      },
      {
        title: 'Payment confirmations',
        titleSw: 'Uthibitisho wa malipo',
        body: 'Automatic SMS receipts for every contribution.',
        bodySw: 'Risiti za SMS za kiotomatiki kwa kila mchango.',
      },
      {
        title: 'Scheduled reminders',
        titleSw: 'Vikumbusho vilivyopangwa',
        body: 'Set it once and let the reminders go out on time.',
        bodySw: 'Weka mara moja na acha vikumbusho vitoke kwa wakati.',
      },
    ],
  },
  {
    slug: 'group-savings',
    eyebrow: 'Features · Group Savings',
    eyebrowSw: 'Vipengele · Akiba ya Kikundi',
    title: 'One shared ledger, zero disputes',
    titleSw: 'Daftari moja la pamoja, bila migogoro',
    intro:
      'Run savings cycles, loans and repayments on a ledger the whole group can see, updated in real time.',
    introSw:
      'Endesha mizunguko ya akiba, mikopo na marejesho kwenye daftari ambalo kikundi chote kinaweza kuona, likisasishwa papo hapo.',
    sections: [
      {
        heading: 'Savings cycles without spreadsheets',
        headingSw: 'Mizunguko ya akiba bila majedwali',
        body:
          'Record each member’s weekly or monthly share and keep a running balance the group can verify.',
        bodySw:
          'Rekodi hisa ya kila mwanachama ya wiki au mwezi na weka salio linaloendelea ambalo kikundi kinaweza kuthibitisha.',
        bullets: [
          { en: 'Weekly or monthly cycles', sw: 'Mizunguko ya wiki au mwezi' },
          { en: 'Member share history', sw: 'Historia ya hisa za wanachama' },
          { en: 'Running group balance', sw: 'Salio la kikundi linaloendelea' },
        ],
      },
      {
        heading: 'Loans stay visible to everyone',
        headingSw: 'Mikopo inabaki kuonekana kwa kila mtu',
        body:
          'Record loan approvals, interest and repayments so nobody has to rely on memory or a private notebook.',
        bodySw:
          'Rekodi idhini za mikopo, riba na marejesho ili hakuna anayelazimika kutegemea kumbukumbu au daftari la siri.',
        bullets: [
          { en: 'Loan approval records', sw: 'Kumbukumbu za idhini za mikopo' },
          { en: 'Interest and repayment schedules', sw: 'Ratiba za riba na marejesho' },
          { en: 'Outstanding balances per member', sw: 'Salio linalodaiwa kwa kila mwanachama' },
        ],
      },
      {
        heading: 'Statements that settle arguments',
        headingSw: 'Taarifa zinazomaliza migogoro',
        body:
          'Generate a statement for any member or cycle, and share it before the next meeting.',
        bodySw:
          'Tengeneza taarifa kwa mwanachama au mzunguko wowote, na uishiriki kabla ya mkutano ujao.',
        bullets: [
          { en: 'Member statements on demand', sw: 'Taarifa za wanachama zinapohitajika' },
          { en: 'Cycle summaries', sw: 'Muhtasari wa mzunguko' },
          { en: 'Export for meetings', sw: 'Safirisha kwa ajili ya mikutano' },
        ],
      },
    ],
    cards: [
      {
        title: 'Weekly shares',
        titleSw: 'Hisa za wiki',
        body: 'Track every contribution and keep the cash box reconciled.',
        bodySw: 'Fuatilia kila mchango na uweke sanduku la fedha likilingana.',
      },
      {
        title: 'Loan ledger',
        titleSw: 'Daftari la mikopo',
        body: 'Manage loans, interest and repayments in one clear view.',
        bodySw: 'Simamia mikopo, riba na marejesho kwa mtazamo mmoja wazi.',
      },
      {
        title: 'Member statements',
        titleSw: 'Taarifa za wanachama',
        body: 'Give every member proof of their shares and balances.',
        bodySw: 'Mpe kila mwanachama uthibitisho wa hisa na salio lake.',
      },
    ],
  },
  {
    slug: 'receipts',
    eyebrow: 'Features · Receipts',
    eyebrowSw: 'Vipengele · Risiti',
    title: 'Proof of payment, instantly',
    titleSw: 'Uthibitisho wa malipo, papo hapo',
    intro:
      'Every contribution generates a receipt the moment it is recorded, so members always have proof they can keep.',
    introSw:
      'Kila mchango hutengeneza risiti mara tu unaporekodiwa, hivyo wanachama wana uthibitisho wa kuhifadhi kila wakati.',
    sections: [
      {
        heading: 'Receipts without manual work',
        headingSw: 'Risiti bila kazi ya mikono',
        body:
          'No more writing receipt books by hand. Each payment produces a numbered receipt automatically.',
        bodySw:
          'Hakuna kuandika vitabu vya risiti kwa mkono tena. Kila malipo hutoa risiti yenye namba kiotomatiki.',
        bullets: [
          { en: 'Automatic numbered receipts', sw: 'Risiti zenye namba za kiotomatiki' },
          { en: 'Member name and campaign attached', sw: 'Jina la mwanachama na kampeni vimeambatishwa' },
          { en: 'Instant SMS or in-app delivery', sw: 'Uwasilishaji wa SMS au ndani ya programu papo hapo' },
        ],
      },
      {
        heading: 'Share or print in one tap',
        headingSw: 'Shiriki au chapisha kwa mbofyo mmoja',
        body:
          'Download a PDF receipt to print, forward to a member or attach to a report.',
        bodySw:
          'Pakua risiti ya PDF kuchapisha, kutumia kwa mwanachama au kuambatisha kwenye ripoti.',
        bullets: [
          { en: 'PDF receipt downloads', sw: 'Upakuaji wa risiti za PDF' },
          { en: 'Ready to print or share', sw: 'Tayari kuchapisha au kushiriki' },
          { en: 'Works for every payment method', sw: 'Inafaa kwa kila njia ya malipo' },
        ],
      },
      {
        heading: 'A trail you can always audit',
        headingSw: 'Historia unayoweza kukagua kila wakati',
        body:
          'Every receipt is linked to a contribution, so the books can be checked from any direction.',
        bodySw:
          'Kila risiti imeunganishwa na mchango, hivyo vitabu vinaweza kukaguliwa kwa mwelekeo wowote.',
        bullets: [
          { en: 'Receipt-to-payment matching', sw: 'Ulinganishaji wa risiti na malipo' },
          { en: 'Complete audit trail', sw: 'Historia kamili ya ukaguzi' },
          { en: 'Role-based access', sw: 'Ufikiaji kulingana na majukumu' },
        ],
      },
    ],
    cards: [
      {
        title: 'Instant receipts',
        titleSw: 'Risiti papo hapo',
        body: 'A receipt is created automatically for every payment.',
        bodySw: 'Risiti hutengenezwa kiotomatiki kwa kila malipo.',
      },
      {
        title: 'PDF export',
        titleSw: 'Utoaji wa PDF',
        body: 'Download, print or forward a receipt in one tap.',
        bodySw: 'Pakua, chapisha au tuma risiti kwa mbofyo mmoja.',
      },
      {
        title: 'Audit trail',
        titleSw: 'Historia ya ukaguzi',
        body: 'Every receipt stays linked to its contribution and member.',
        bodySw: 'Kila risiti inabaki imeunganishwa na mchango na mwanachama wake.',
      },
    ],
  },
];

export const toolPages: InfoPage[] = [
  {
    slug: 'web-portal',
    eyebrow: 'Tools · Web Portal',
    eyebrowSw: 'Zana · Portal ya Wavuti',
    title: 'The full command centre for your group',
    titleSw: 'Kituo kamili cha udhibiti kwa kikundi chako',
    intro:
      'Admins and treasurers get a secure dashboard for members, campaigns, payments and reports, all in a browser.',
    introSw:
      'Wasimamizi na waweka hazina wanapata dashibodi salama kwa wanachama, kampeni, malipo na ripoti, yote kwenye kivinjari.',
    sections: [
      {
        heading: 'Everything in one dashboard',
        headingSw: 'Kila kitu kwenye dashibodi moja',
        body:
          'See total raised, outstanding pledges, recent payments and campaign progress the moment you log in.',
        bodySw:
          'Ona jumla iliyokusanywa, ahadi zinazodaiwa, malipo ya hivi karibuni na maendeleo ya kampeni mara tu unapoingia.',
        bullets: [
          { en: 'Live totals and campaign progress', sw: 'Jumla za moja kwa moja na maendeleo ya kampeni' },
          { en: 'Recent contributions feed', sw: 'Mkondo wa michango ya hivi karibuni' },
          { en: 'Group-wide overview', sw: 'Muhtasari wa kikundi chote' },
        ],
      },
      {
        heading: 'Manage members and access',
        headingSw: 'Simamia wanachama na ufikiaji',
        body:
          'Add members, assign roles and control who can view or change sensitive information.',
        bodySw:
          'Ongeza wanachama, gawa majukumu na dhibiti nani anaweza kuona au kubadilisha taarifa nyeti.',
        bullets: [
          { en: 'Member register and profiles', sw: 'Rejista na wasifu wa wanachama' },
          { en: 'Admin, treasurer and member roles', sw: 'Majukumu ya msimamizi, mweka hazina na mwanachama' },
          { en: 'Permission controls', sw: 'Udhibiti wa ruhusa' },
        ],
      },
      {
        heading: 'Reports whenever you need them',
        headingSw: 'Ripoti wakati wowote unapohitaji',
        body:
          'Generate monthly, campaign and member reports without rebuilding spreadsheets from scratch.',
        bodySw:
          'Tengeneza ripoti za kila mwezi, kampeni na wanachama bila kuunda majedwali upya tangu mwanzo.',
        bullets: [
          { en: 'One-click report generation', sw: 'Utengenezaji wa ripoti kwa mbofyo mmoja' },
          { en: 'PDF and CSV exports', sw: 'Utoaji wa PDF na CSV' },
          { en: 'Ready for meetings and audits', sw: 'Tayari kwa mikutano na ukaguzi' },
        ],
      },
    ],
    cards: [
      {
        title: 'Admin dashboard',
        titleSw: 'Dashibodi ya msimamizi',
        body: 'A single home for the numbers that matter most.',
        bodySw: 'Nyumbani moja kwa namba muhimu zaidi.',
      },
      {
        title: 'Member register',
        titleSw: 'Rejista ya wanachama',
        body: 'Keep profiles, roles and contact details organised.',
        bodySw: 'Weka wasifu, majukumu na mawasiliano kwa mpangilio.',
      },
      {
        title: 'Report exports',
        titleSw: 'Utoaji wa ripoti',
        body: 'Download clean reports for any meeting or audit.',
        bodySw: 'Pakua ripoti safi kwa mkutano au ukaguzi wowote.',
      },
    ],
  },
  {
    slug: 'android-app',
    eyebrow: 'Tools · Android App',
    eyebrowSw: 'Zana · Programu ya Android',
    title: 'Your group in every member’s pocket',
    titleSw: 'Kikundi chako kwenye mfuko wa kila mwanachama',
    intro:
      'Members can contribute, check progress and receive updates from the PesaJamaa Android app, even on low-cost phones.',
    introSw:
      'Wanachama wanaweza kuchangia, kuangalia maendeleo na kupokea taarifa kutoka programu ya PesaJamaa ya Android, hata kwenye simu za bei nafuu.',
    sections: [
      {
        heading: 'Contribute from anywhere',
        headingSw: 'Changia kutoka popote',
        body:
          'Members make contributions through mobile money and see the confirmation in the app right away.',
        bodySw:
          'Wanachama huchangia kupitia pesa za simu na kuona uthibitisho kwenye programu papo hapo.',
        bullets: [
          { en: 'Mobile money contributions', sw: 'Michango ya pesa za simu' },
          { en: 'Instant confirmations', sw: 'Uthibitisho wa papo hapo' },
          { en: 'Contribution history', sw: 'Historia ya michango' },
        ],
      },
      {
        heading: 'Stay informed without asking',
        headingSw: 'Baki taarifa bila kuuliza',
        body:
          'Members receive reminders and updates in the app and by SMS, so nobody misses a deadline.',
        bodySw:
          'Wanachama hupokea vikumbusho na taarifa kwenye programu na kwa SMS, hivyo hakuna anayekosa tarehe ya mwisho.',
        bullets: [
          { en: 'App notifications', sw: 'Arifa za programu' },
          { en: 'SMS fallback for every update', sw: 'SMS kama mbadala kwa kila taarifa' },
          { en: 'Event and campaign reminders', sw: 'Vikumbusho vya matukio na kampeni' },
        ],
      },
      {
        heading: 'Built for real Tanzanian networks',
        headingSw: 'Imejengwa kwa mitandao halisi ya Tanzania',
        body:
          'The app is lightweight and syncs when a connection is available, so it works in the field too.',
        bodySw:
          'Programu ni nyepesi na husawazisha mtandao unapopatikana, hivyo inafanya kazi uwandani pia.',
        bullets: [
          { en: 'Small download and low data use', sw: 'Upakuaji mdogo na matumizi machache ya data' },
          { en: 'Sync when back online', sw: 'Husawazisha mtandao unaporejea' },
          { en: 'Works on affordable Android phones', sw: 'Inafanya kazi kwenye simu za Android za bei nafuu' },
        ],
      },
    ],
    cards: [
      {
        title: 'Mobile contributions',
        titleSw: 'Michango ya simu',
        body: 'Members pay from their phones in a few taps.',
        bodySw: 'Wanachama hulipa kutoka simu zao kwa mibofyo michache.',
      },
      {
        title: 'Push & SMS alerts',
        titleSw: 'Arifa za push na SMS',
        body: 'Every member stays informed on the channel they have.',
        bodySw: 'Kila mwanachama anabaki taarifa kwenye njia aliyonayo.',
      },
      {
        title: 'Low data use',
        titleSw: 'Matumizi machache ya data',
        body: 'Designed to stay useful on slow connections.',
        bodySw: 'Imeundwa kubaki muhimu kwenye mtandao wa polepole.',
      },
    ],
  },
  {
    slug: 'reports',
    eyebrow: 'Tools · Reports',
    eyebrowSw: 'Zana · Ripoti',
    title: 'Reports ready for the next meeting',
    titleSw: 'Ripoti tayari kwa mkutano ujao',
    intro:
      'Generate monthly, campaign and member reports in seconds, with numbers that reconcile to the last receipt.',
    introSw:
      'Tengeneza ripoti za kila mwezi, kampeni na wanachama kwa sekunde, na namba zinazolingana hadi risiti ya mwisho.',
    sections: [
      {
        heading: 'Monthly summaries in one click',
        headingSw: 'Muhtasari wa kila mwezi kwa mbofyo mmoja',
        body:
          'Choose a month and get totals, contributions and outstanding balances ready to share.',
        bodySw:
          'Chagua mwezi na upate jumla, michango na salio linalodaiwa tayari kushiriki.',
        bullets: [
          { en: 'Monthly income summaries', sw: 'Muhtasari wa mapato ya mwezi' },
          { en: 'Outstanding balance reports', sw: 'Ripoti za salio linalodaiwa' },
          { en: 'Member-level detail', sw: 'Maelezo kwa ngazi ya mwanachama' },
        ],
      },
      {
        heading: 'Campaign and event reports',
        headingSw: 'Ripoti za kampeni na matukio',
        body:
          'Report on any campaign, project or event without rebuilding the numbers by hand.',
        bodySw:
          'Toa ripoti ya kampeni, mradi au tukio lolote bila kuunda namba kwa mkono.',
        bullets: [
          { en: 'Campaign progress reports', sw: 'Ripoti za maendeleo ya kampeni' },
          { en: 'Event income and spending', sw: 'Mapato na matumizi ya tukio' },
          { en: 'Donor-ready summaries', sw: 'Muhtasari tayari kwa wafadhili' },
        ],
      },
      {
        heading: 'Export in the format you need',
        headingSw: 'Safirisha kwa muundo unaohitaji',
        body:
          'Download PDFs for meetings and CSVs for further analysis or filing.',
        bodySw:
          'Pakua PDF kwa mikutano na CSV kwa uchambuzi zaidi au kuweka kwenye faili.',
        bullets: [
          { en: 'PDF for printing and sharing', sw: 'PDF kwa kuchapisha na kushiriki' },
          { en: 'CSV for analysis', sw: 'CSV kwa uchambuzi' },
          { en: 'Consistent numbers across formats', sw: 'Namba zinazolingana kwenye miundo yote' },
        ],
      },
    ],
    cards: [
      {
        title: 'Monthly reports',
        titleSw: 'Ripoti za kila mwezi',
        body: 'A clean summary for every month of activity.',
        bodySw: 'Muhtasari safi kwa kila mwezi wa shughuli.',
      },
      {
        title: 'Campaign summaries',
        titleSw: 'Muhtasari wa kampeni',
        body: 'See progress against the goal at any point.',
        bodySw: 'Ona maendeleo dhidi ya lengo wakati wowote.',
      },
      {
        title: 'PDF & CSV export',
        titleSw: 'Utoaji wa PDF na CSV',
        body: 'Take the numbers wherever they need to go.',
        bodySw: 'Peleka namba popote zinapohitajika.',
      },
    ],
  },
  {
    slug: 'notifications',
    eyebrow: 'Tools · Notifications',
    eyebrowSw: 'Zana · Arifa',
    title: 'Keep everyone in the loop',
    titleSw: 'Weka kila mtu taarifa',
    intro:
      'Send reminders, milestones and urgent updates by SMS and in-app notification, so no member is left behind.',
    introSw:
      'Tuma vikumbusho, hatua za maendeleo na taarifa za haraka kwa SMS na arifa za ndani ya programu, ili hakuna mwanachama anayebaki nyuma.',
    sections: [
      {
        heading: 'Choose the right channel',
        headingSw: 'Chagua njia sahihi',
        body:
          'Reach smartphone users in the app and everyone else by SMS, from the same notification.',
        bodySw:
          'Wafikie watumiaji wa simu janja kwenye programu na wengine wote kwa SMS, kutoka arifa moja.',
        bullets: [
          { en: 'In-app notifications', sw: 'Arifa za ndani ya programu' },
          { en: 'Bulk SMS for everyone else', sw: 'SMS za wingi kwa wengine wote' },
          { en: 'One message, multiple channels', sw: 'Ujumbe mmoja, njia nyingi' },
        ],
      },
      {
        heading: 'Schedule the important moments',
        headingSw: 'Panga matukio muhimu',
        body:
          'Set reminders before deadlines and meetings, and send milestone updates when goals are reached.',
        bodySw:
          'Weka vikumbusho kabla ya tarehe za mwisho na mikutano, na tuma taarifa za hatua malengo yanapofikiwa.',
        bullets: [
          { en: 'Deadline reminders', sw: 'Vikumbusho vya tarehe za mwisho' },
          { en: 'Goal milestone alerts', sw: 'Arifa za hatua za lengo' },
          { en: 'Meeting announcements', sw: 'Matangazo ya mikutano' },
        ],
      },
      {
        heading: 'Know that messages arrived',
        headingSw: 'Jua kwamba ujumbe umefika',
        body:
          'Delivery reports show how many members received each message, so follow-up is never guesswork.',
        bodySw:
          'Ripoti za uwasilishaji zinaonyesha wanachama wangapi walipokea kila ujumbe, hivyo ufuatiliaji si kubahatisha.',
        bullets: [
          { en: 'SMS delivery reports', sw: 'Ripoti za uwasilishaji wa SMS' },
          { en: 'Failed-message retries', sw: 'Majaribio ya ujumbe ulioshindikana' },
          { en: 'Read and response insight', sw: 'Maarifa ya usomaji na majibu' },
        ],
      },
    ],
    cards: [
      {
        title: 'Bulk SMS',
        titleSw: 'SMS za wingi',
        body: 'Reach every member on the phone they already have.',
        bodySw: 'Fikia kila mwanachama kwenye simu aliyonayo tayari.',
      },
      {
        title: 'In-app alerts',
        titleSw: 'Arifa za ndani ya programu',
        body: 'Give app users instant updates without SMS cost.',
        bodySw: 'Wape watumiaji wa programu taarifa za papo hapo bila gharama ya SMS.',
      },
      {
        title: 'Scheduled reminders',
        titleSw: 'Vikumbusho vilivyopangwa',
        body: 'Plan communications ahead and let them send themselves.',
        bodySw: 'Panga mawasiliano mapema na uyaache yajitume.',
      },
    ],
  },
  {
    slug: 'payments',
    eyebrow: 'Tools · Payments',
    eyebrowSw: 'Zana · Malipo',
    title: 'Every shilling matched to a member',
    titleSw: 'Kila shilingi inaunganishwa na mwanachama',
    intro:
      'Contributions arrive through the mobile-money and bank channels members already use, and every payment is matched automatically.',
    introSw:
      'Michango huingia kupitia njia za pesa za simu na benki ambazo wanachama wanazitumia tayari, na kila malipo huunganishwa kiotomatiki.',
    sections: [
      {
        heading: 'The channels your members trust',
        headingSw: 'Njia ambazo wanachama wako wanaziamini',
        body:
          'Accept payments from M-Pesa, Mixx by Yas, Airtel Money, HaloPesa and major Tanzanian banks.',
        bodySw:
          'Pokea malipo kutoka M-Pesa, Mixx by Yas, Airtel Money, HaloPesa na benki kuu za Tanzania.',
        bullets: [
          { en: 'Mobile money (M-Pesa, Mixx, Airtel, HaloPesa)', sw: 'Pesa za simu (M-Pesa, Mixx, Airtel, HaloPesa)' },
          { en: 'Bank transfers and deposits', sw: 'Uhamisho na amana za benki' },
          { en: 'Cash entries recorded by treasurers', sw: 'Fedha taslimu zikirekodiwa na waweka hazina' },
        ],
      },
      {
        heading: 'Automatic matching, no manual entry',
        headingSw: 'Ulinganishaji wa kiotomatiki, bila kuandika kwa mkono',
        body:
          'Each payment is linked to the right member and campaign, so reconciliation takes minutes instead of hours.',
        bodySw:
          'Kila malipo huunganishwa na mwanachama na kampeni sahihi, hivyo upatanisho huchukua dakika badala ya masaa.',
        bullets: [
          { en: 'Payments linked to members', sw: 'Malipo yakihusishwa na wanachama' },
          { en: 'Payments linked to campaigns', sw: 'Malipo yakihusishwa na kampeni' },
          { en: 'Reconciliation in minutes', sw: 'Upatanisho kwa dakika' },
        ],
      },
      {
        heading: 'Receipts the moment money lands',
        headingSw: 'Risiti mara tu fedha zinapoingia',
        body:
          'Every successful payment triggers a receipt and an SMS confirmation, so members have proof instantly.',
        bodySw:
          'Kila malipo yaliyofanikiwa huzua risiti na uthibitisho wa SMS, hivyo wanachama wanapata uthibitisho papo hapo.',
        bullets: [
          { en: 'Instant receipts', sw: 'Risiti papo hapo' },
          { en: 'SMS confirmations', sw: 'Uthibitisho wa SMS' },
          { en: 'Visible payment history', sw: 'Historia ya malipo inayoonekana' },
        ],
      },
    ],
    cards: [
      {
        title: 'Mobile money',
        titleSw: 'Pesa za simu',
        body: 'Accept contributions from all major Tanzanian networks.',
        bodySw: 'Pokea michango kutoka mitandao yote mikuu ya Tanzania.',
      },
      {
        title: 'Bank channels',
        titleSw: 'Njia za benki',
        body: 'Record transfers and deposits alongside mobile payments.',
        bodySw: 'Rekodi uhamisho na amana pamoja na malipo ya simu.',
      },
      {
        title: 'Reconciliation',
        titleSw: 'Upatanisho',
        body: 'Every payment matched to a member and campaign automatically.',
        bodySw: 'Kila malipo huunganishwa na mwanachama na kampeni kiotomatiki.',
      },
    ],
  },
];
