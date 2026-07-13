export const company = {
  phoneHref: 'tel:+15162345678',
  phoneLabel: '+1 (516) 234-5678',
  email: 'kdf@msinterdigital.com',
  calendlyUrl: 'https://calendly.com/kdf-msinterdigital'
};

export const localeMeta = {
  en: {flag: '🇺🇸', labelKey: 'en'},
  es: {flag: '🇪🇸', labelKey: 'es'},
  fr: {flag: '🇫🇷', labelKey: 'fr'},
  it: {flag: '🇮🇹', labelKey: 'it'}
};

export const testimonials = [
  {
    quote:
      'The affirmations in Breathe Peaceful genuinely helped me start my mornings with intention. Simple, grounding, and real.',
    author: 'Community Member'
  },
  {
    quote:
      "Booking a consultation was the best decision I made this year. I felt heard immediately. I'm so grateful for this space.",
    author: 'Counseling Client'
  },
  {
    quote:
      "As a parent trying to balance everything, the coaching sessions gave me practical tools and a sense of calm I hadn't felt in years.",
    author: 'Coaching Client'
  }
];

export const reviews = [
  {
    quote:
      'This eBook came into my life at the perfect time. Between work and family responsibilities I felt completely overwhelmed, and the affirmations helped me slow down and reconnect with myself. I now start every morning reading a few pages.',
    author: 'Sarah M., Teacher'
  },
  {
    quote:
      "Breathe Peaceful Affirmations is beautifully written and incredibly uplifting. I didn't realize how much negative self-talk I had until I started replacing it with these affirmations. After just a few weeks I feel more confident and peaceful.",
    author: 'Sarah M., Teacher'
  },
  {
    quote:
      "What I appreciate most is how practical it is. The affirmations are simple but powerful, and I've started sharing some of the techniques with my own clients to help them manage stress and stay focused.",
    author: 'Angela R., Small Business Owner'
  }
];

export const affiliateSections = [
  {
    label: 'Skincare',
    title: 'Mented Cosmetics',
    cards: [
      {
        className: 'aff-card aff-card-bg aff-card-mented-1',
        badge: 'Skincare · Top Choice',
        title: 'Mented Skincare - Option 1',
        body:
          'My top choice for skincare. Mented creates beautiful, inclusive products with clean ingredients. Click to browse and purchase.',
        href: 'https://amzn.to/45qb2Gt',
        action: 'Shop on Amazon →'
      },
      {
        className: 'aff-card aff-card-bg aff-card-mented-2',
        badge: 'Skincare · Top Choice',
        title: 'Mented Skincare - Option 2',
        body:
          'Another top Mented pick. High-quality, thoughtfully formulated skincare for all skin tones.',
        href: 'https://amzn.to/4b6fUEh',
        action: 'Shop on Amazon →'
      }
    ]
  },
  {
    label: 'Wellness',
    title: 'Melaleuca - The Wellness Company',
    cards: [
      {
        className:
          'aff-card aff-card-bg aff-card-melaleuca-member',
        style: {borderColor: 'rgba(74,44,107,.2)', background: 'var(--purple-pale)'},
        badge: 'Membership',
        badgeStyle: {color: 'var(--purple-mid)'},
        title: 'Become a Melaleuca Member',
        body:
          'The Wellness Company offers premium health, wellness, and home products. Become a member for exclusive access and savings.',
        href: 'http://mymelaleuca.com/keandeyfoy',
        action: 'Become a Member →',
        actionStyle: {color: 'var(--purple-mid)'}
      },
      {
        className: 'aff-card aff-card-bg aff-card-melagel',
        badge: 'Wellness Product',
        title: 'MelaGel Topical Balm',
        body:
          "Melaleuca's MelaGel Topical Balm - a versatile wellness staple for the home medicine cabinet.",
        href: 'https://amzn.to/4r7xMDv',
        action: 'Shop on Amazon →'
      },
      {
        className: 'aff-card aff-card-bg aff-card-cleaner',
        badge: 'Home & Wellness',
        title: 'Tough & Tender All-Purpose Cleaner',
        body:
          "Melaleuca's concentrated 12x all-purpose cleaner - safe, effective, and eco-friendly for the whole household.",
        href: 'https://amzn.to/3YNSk7Z',
        action: 'Shop on Amazon →'
      }
    ]
  },
  {
    label: 'Books',
    title: 'Recommended Reading',
    cards: [
      {
        className: 'aff-card aff-card-bg aff-card-book-jamie',
        badge: 'Book · Author Jamie Myers',
        title: 'Recommended Book by Jamie Myers',
        body:
          'A recommended read curated for our community. Click to view on Amazon and read the full description.',
        href: 'https://amzn.to/49qyCE7',
        action: 'View on Amazon →'
      },
      {
        className: 'aff-card aff-card-bg aff-card-book-kate',
        badge: 'Book · Author Kate Wander',
        title: 'Recommended Book by Kate Wander',
        body:
          'Another curated recommendation from our reading list. Click to view details and purchase on Amazon.',
        href: 'https://amzn.to/4r7xyMF',
        action: 'View on Amazon →'
      }
    ]
  },
  {
    label: 'Tea & Wellness',
    title: 'Naturally Sourced',
    cards: [
      {
        className: 'aff-card aff-card-bg aff-card-rooibos',
        badge: 'Organic Tea',
        title: 'Rooibos Tea - 100% Certified Organic',
        body:
          'Naturally sourced South African Rooibos Tea. Caffeine-free, rich in antioxidants, and a perfect evening wellness ritual.',
        href: 'https://amzn.to/49LXpCK',
        action: 'Shop on Amazon →',
        containerStyle: {maxWidth: '320px'}
      }
    ]
  }
];
