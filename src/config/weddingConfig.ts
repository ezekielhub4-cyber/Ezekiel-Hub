export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  mapsUrl: string;
  variant: 'light' | 'dark';
}

export interface GalleryPhoto {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
  category: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  rotate?: 90;
}

export interface RsvpContact {
  name: string;
  phone: string;
  whatsappInternational: string;
}

export interface ColourSwatch {
  name: string;
  hex: string;
  ringClass: string;
  gradient?: string;
}

export interface GiftAccount {
  id: string;
  giftTitle: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export const weddingConfig = {
  brand: {
    title: "DEstined '26",
    monogram: 'E & D',
    brideName: 'Esther Ayomide',
    groomName: 'David Sunday',
    brideShort: 'Esther',
    groomShort: 'David',
    tagline: 'Two Hearts, One Purpose – Forever.',
    footerTagline: 'Two Hearts, One Purpose. Forever.',
    weddingDateDisplay: 'Saturday, 12 December 2026',
    weddingDateShort: '12 December 2026',
    weddingIsoDate: '2026-12-12T07:00:00+01:00',
    locationSummary: 'Ibadan, Oyo State, Nigeria',
    families: {
      brideFamily: 'Deacon Adeoye & Mrs Felicia Kolade',
      groomFamily: 'Late Mr Emmanuel & Mrs Gbemisola Dada',
    },
  },

  colors: {
    emerald: '#064B32',
    ivory: '#F8F6EA',
    gold: '#C5A04A',
    forest: '#173B2B',
  },

  photos: {
    // Supply the couple's hero photograph path here when available (e.g. '/photos/hero.jpg')
    hero: null as string | null,
    // Supply the couple's story photographs here without altering or regenerating faces
    storyPrimary: {
      src: '/assets/aistudio/IQP05934.jpg_47cd015b.jpeg',
      alt: 'Esther Ayomide and David Sunday — couple portrait in white',
      caption: 'Osun State · Where Paths Crossed',
    },
    storySecondary: {
      src: '/assets/aistudio/IQP05921.jpg_01955ff7.jpeg',
      alt: 'Esther Ayomide and David Sunday — couple portrait in traditional attire',
      caption: "DEstined '26 · Forever Begins",
    },
    invitationCard: '/assets/aistudio/invitation_card_b0edab7c.jpeg',
  },

  unionOfGrace: {
    eyebrow: 'Welcome',
    title: 'A Union of Grace',
    leftColumn: [
      {
        lines: [
          'Before our steps ever aligned,',
          'the Lord had numbered every mile.',
        ],
      },
      {
        lines: [
          'From quiet prayers to answered grace,',
          'He drew two hearts into His plan—',
          'two lives united in Christ’s embrace.',
        ],
      },
      {
        lines: [
          'Love bears all things, hopes all things,',
          'anchored in peace that never fades.',
        ],
      },
      {
        lines: [
          'To a lifetime of shared dreams,',
          'endless laughter, and abiding joy.',
        ],
      },
    ],
    rightColumn: [
      {
        lines: [
          'Two hearts, one purpose by His design,',
          'walking together in faith and truth.',
        ],
      },
      {
        lines: [
          'What God has joined in covenant love,',
          'no distance parts, no season shakes—',
          'sustained by mercy from above.',
        ],
      },
      {
        lines: [
          'Hand in hand before family and friends,',
          'we begin our forever in Christ Jesus.',
        ],
      },
      {
        lines: [
          'Two Hearts, One Purpose – Forever.',
          'Grace brought us here; grace leads us home.',
        ],
        emphasis: true,
      },
    ],
    toast:
      '“To a lifetime of shared dreams, endless laughter, and a love that grows stronger with every passing day. Join us as we begin our forever in the love of Christ Jesus.”',
  },

  ourStory: {
    eyebrow: 'OUR STORY',
    heading: 'A Divine Arrangement',
    paragraphs: [
      'Our meeting was truly a divine orchestration.',
      'We both camped in Delta State for NYSC, she was in Stream 1 and I was in Stream 2, yet we never met in Delta.',
      "She attempted to relocate first, but unfortunately, it didn't work out. Later, I applied for relocation to Osun State, and mine was successful.",
      'To our greatest surprise, her relocation was eventually approved too, and we found ourselves posted to the same state, the same community, but different Places of Primary Assignment (PPAs).',
      'Then came one fateful evening.',
      'I had gone to greet a newly posted corps member at my PPA, and that was when our paths finally crossed.',
      'What began as an ordinary NYSC friendship gradually blossomed into something much deeper. Today, we stand together, ready to begin a beautiful journey of forever.',
      "Looking back, we see God's fingerprints in every detail. From the missed encounters in Delta to the unexpected reunion in Osun, we believe He was quietly ordering our steps all along.",
      'Our meeting was not by chance. It was by divine arrangement.',
    ],
    closingQuote: '“Our meeting was not by chance. It was by divine arrangement.”',
  },

  events: [
    {
      id: 'engagement',
      title: 'Engagement',
      date: 'Saturday, 12 December 2026',
      time: '7:00 AM prompt',
      venue:
        'No. 2, Ogo Oluwa Zone E, Dabiri Road, Aroro Kole, Arulogun Road, Ojoo, Ibadan.',
      city: 'Ibadan, Oyo State',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Ogo+Oluwa+Zone+E+Dabiri+Road+Aroro+Kole+Arulogun+Road+Ojoo+Ibadan',
      variant: 'light',
    },
    {
      id: 'church-service',
      title: 'Church Service',
      date: 'Saturday, 12 December 2026',
      time: '11:00 AM prompt',
      venue: 'Trinity Baptist Church, Ajobo, along Ojoo Igbo-Oloyin Road, Ibadan.',
      city: 'Ibadan, Oyo State',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Trinity+Baptist+Church+Ajobo+Ojoo+Igbo-Oloyin+Road+Ibadan',
      variant: 'dark',
    },
  ] satisfies WeddingEvent[],

  introductionShotsUrl:
    'https://drive.google.com/drive/folders/16ke0ouK60CK3bj7lytV_-WXpqU2wnAEl',

  gallery: [
    // 1. How They Met & NYSC Days
    {
      id: 'how-we-met-1',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.48.14_AM_52fe4e6b.jpeg',
      alt: 'Esther and David during their early NYSC days in Osun State',
      caption: 'Where Our Paths Crossed · NYSC Days',
      category: 'How We Met',
      aspect: 'portrait',
    },
    {
      id: 'nysc-days-2',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.48.13_AM__3__84a67fda.jpeg',
      alt: 'Esther in NYSC uniform alongside David during service year',
      caption: 'NYSC Days · Osun State',
      category: 'NYSC Days',
      aspect: 'portrait',
    },

    // 2. Our Journey
    {
      id: 'journey-1',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.48.13_AM_43d92791.jpeg',
      alt: 'Esther and David smiling together during courtship',
      caption: 'An Ordinary Friendship Blossoming',
      category: 'Our Journey',
      aspect: 'portrait',
    },
    {
      id: 'journey-2',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.48.17_AM_170ee72a.jpeg',
      alt: 'Esther and David together during their courtship journey',
      caption: 'Growing Closer Every Day',
      category: 'Our Journey',
      aspect: 'portrait',
      rotate: 90,
    },
    {
      id: 'journey-3',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.48.17_AM__1__ec5445e8.jpeg',
      alt: 'Esther and David dressed in green and gold outfits',
      caption: 'Stepping Out in Grace',
      category: 'Our Journey',
      aspect: 'portrait',
    },
    {
      id: 'journey-4',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_10.48.19_AM__2__d1abb909.jpeg',
      alt: 'Esther and David standing together under heart arches',
      caption: 'He Ordered Our Steps',
      category: 'Our Journey',
      aspect: 'portrait',
    },

    // 3. Introduction Ceremony
    {
      id: 'intro-1',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.28.02_PM__3__707c5fe8.jpeg',
      alt: 'Esther seated with her parents during the Introduction ceremony',
      caption: 'Family Blessings · Introduction Ceremony',
      category: 'Introduction',
      aspect: 'portrait',
    },
    {
      id: 'intro-2',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.28.02_PM__2__d5c3ea90.jpeg',
      alt: 'Esther receiving prayers and blessings during the Introduction ceremony',
      caption: 'Prayers & Honour · Introduction Ceremony',
      category: 'Introduction',
      aspect: 'portrait',
    },
    {
      id: 'intro-3',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.28.02_PM_ab3376ee.jpeg',
      alt: 'Esther and David praying together at their Introduction ceremony',
      caption: 'Two Hearts Praying as One',
      category: 'Introduction',
      aspect: 'portrait',
    },
    {
      id: 'intro-4',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-22_at_3.28.01_PM_bcfe3310.jpeg',
      alt: 'Esther and David seated together at their Introduction ceremony',
      caption: 'Sealed with Joy · Introduction Ceremony',
      category: 'Introduction',
      aspect: 'portrait',
    },

    // 4. Pre-Wedding Shoots
    {
      id: 'prewedding-1',
      src: '/assets/aistudio/IQP05967.jpg_6cbc5e68.jpeg',
      alt: 'Esther and David pre-wedding portrait in crisp white shirts',
      caption: 'Walking in Purpose Together',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'prewedding-2',
      src: '/assets/aistudio/IQP05963.jpg_5bd35f1e.jpeg',
      alt: 'Esther and David embracing in pre-wedding shoot',
      caption: 'By Divine Arrangement',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'prewedding-3',
      src: '/assets/aistudio/IQP05934.jpg_47cd015b.jpeg',
      alt: 'Esther and David pre-wedding portrait in white attire',
      caption: 'Grace & Purity',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'prewedding-4',
      src: '/assets/aistudio/IQP05941.jpg_f2c1a686.jpeg',
      alt: 'Esther and David smiling warmly at each other in white attire',
      caption: 'A Lifetime of Laughter Ahead',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'prewedding-5',
      src: '/assets/aistudio/IQP05913.jpg_98140967.jpeg',
      alt: 'Esther and David full-length pre-wedding portrait in blue and gold attire',
      caption: 'Two Hearts, One Purpose',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'prewedding-6',
      src: '/assets/aistudio/IQP05921.jpg_01955ff7.jpeg',
      alt: 'Esther and David close portrait in blue and champagne gold traditional attire',
      caption: "DEstined '26 · Forever Begins",
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
  ] satisfies GalleryPhoto[],

  coloursOfTheDay: {
    heading: 'Colours of the Day',
    dressCodeMessage: 'Any shade of Green, White and Gold.',
    swatches: [
      {
        name: 'Emerald Green',
        hex: '#064B32',
        ringClass: 'ring-[#064B32]/25',
      },
      {
        name: 'White / Ivory',
        hex: '#F8F6EA',
        ringClass: 'ring-[#C5A04A]/40 border border-[#C5A04A]/35',
      },
      {
        name: 'Gold',
        hex: '#C5A04A',
        ringClass: 'ring-[#C5A04A]/30',
        gradient: 'linear-gradient(135deg, #E2C675 0%, #C5A04A 52%, #9B7729 100%)',
      },
    ] satisfies ColourSwatch[],
  },

  gifts: {
    eyebrow: 'YOUR LOVE IS ENOUGH',
    title: 'Registry & Gifts',
    subtitle:
      'Your presence at our wedding is the greatest gift of all. However, if you wish to honour us with a gift, a cash contribution towards our new life together would be deeply appreciated.',
    accounts: [
      {
        id: 'palmpay-david',
        giftTitle: 'Cash Gift',
        bankName: 'PalmPay',
        accountNumber: '8141269575',
        accountName: 'David Sunday Dada',
      },
      {
        id: 'opay-esther',
        giftTitle: 'Cash Gift',
        bankName: 'OPay',
        accountNumber: '7014770732',
        accountName: 'Esther Ayomide Kolade',
      },
    ] satisfies GiftAccount[],
  },

  rsvp: {
    eyebrow: 'Join Us',
    heading: 'RSVP',
    subtext:
      'We would be honoured to celebrate this sacred day with you. Kindly confirm your attendance ahead of Saturday, 12 December 2026.',
    contacts: [
      {
        name: 'Femi',
        phone: '08101211593',
        whatsappInternational: '2348101211593',
      },
      {
        name: 'Ezekiel',
        phone: '07066289211',
        whatsappInternational: '2347066289211',
      },
      {
        name: 'Grace',
        phone: '09034521396',
        whatsappInternational: '2349034521396',
      },
      {
        name: 'Faith',
        phone: '08137795845',
        whatsappInternational: '2348137795845',
      },
    ] satisfies RsvpContact[],
  },
};
