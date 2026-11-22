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
      'Our paths first crossed in Delta State during the National Youth Service Corps (NYSC) programme. She was in Stream 1, while I was in Stream 2, yet somehow, we never met.',
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

  gallery: [
    {
      id: 'moment-1',
      src: null,
      alt: 'Esther and David during NYSC service days in Osun State',
      caption: 'Where Our Paths Crossed · Osun State',
      category: 'First Meeting',
      aspect: 'portrait',
    },
    {
      id: 'moment-2',
      src: null,
      alt: 'Esther Ayomide and David Sunday smiling together',
      caption: 'An Ordinary Friendship Blossoming',
      category: 'NYSC Days',
      aspect: 'portrait',
    },
    {
      id: 'moment-3',
      src: null,
      alt: 'Esther and David engagement portrait',
      caption: 'Walking in Purpose Together',
      category: 'Courtship',
      aspect: 'portrait',
    },
    {
      id: 'moment-4',
      src: null,
      alt: 'Esther and David pre-wedding portrait',
      caption: 'Two Hearts, One Purpose',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'moment-5',
      src: null,
      alt: 'Couple celebrating their engagement milestone',
      caption: 'By Divine Arrangement',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'moment-6',
      src: null,
      alt: 'Esther Ayomide and David Sunday in traditional attire',
      caption: 'Grace & Joy',
      category: 'Engagement',
      aspect: 'portrait',
    },
    {
      id: 'moment-7',
      src: null,
      alt: 'Couple holding hands in warm golden light',
      caption: 'Ordered Steps · Forever Ahead',
      category: 'Pre-Wedding',
      aspect: 'portrait',
    },
    {
      id: 'moment-8',
      src: null,
      alt: 'Official DEstined 26 Wedding Invitation Card',
      caption: "Official Wedding Invitation — DEstined '26",
      category: 'Invitation',
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
    eyebrow: 'Your Love Is Enough',
    title: 'Gifts & Blessings',
    subtitle:
      'Your prayers and presence as we exchange our vows mean everything to us. Should you wish to honour us with a gift, our gift registry details will be shared here once finalized.',
    // Keep showAccountDetails false until the couple supplies actual gift or bank details
    showAccountDetails: false,
    bankName: '',
    accountNumber: '',
    accountName: '',
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
