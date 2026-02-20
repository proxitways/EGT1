export const countries = [
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    shortName: 'UK',
    description: 'Form a UK Limited Company with ease. Access to European markets, strong legal framework, and international credibility.',
    features: [
      'Company formation in 24-48 hours',
      'Access to UK banking system',
      'Strong legal and regulatory framework',
      'International business credibility',
      'Low corporate tax options available',
      'Easy to manage remotely'
    ],
    requirements: [
      'At least one director (any nationality)',
      'At least one shareholder',
      'UK registered office address',
      'Memorandum and Articles of Association',
      'Confirmation statement'
    ],
    timeline: '24-48 hours',
    pricing: {
      basic: 299,
      standard: 599,
      premium: 999
    },
    benefits: [
      'Limited liability protection',
      'Separate legal entity',
      'Enhanced credibility',
      'Tax efficiency',
      'Easy to raise capital'
    ]
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    shortName: 'USA',
    description: 'Establish your business in the world\'s largest economy. Delaware and Wyoming offer business-friendly environments.',
    features: [
      'Fast LLC or Corporation formation',
      'World\'s largest consumer market',
      'Strong intellectual property protection',
      'Access to venture capital',
      'Business-friendly states (DE, WY, NV)',
      'No minimum capital requirement'
    ],
    requirements: [
      'Registered agent in the state',
      'Articles of Incorporation/Organization',
      'EIN (Employer Identification Number)',
      'Operating Agreement (LLC)',
      'Annual report filing'
    ],
    timeline: '3-5 business days',
    pricing: {
      basic: 399,
      standard: 799,
      premium: 1299
    },
    benefits: [
      'Access to US banking',
      'Credibility with US clients',
      'Strong legal protections',
      'Flexible business structures',
      'No residency requirement'
    ]
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    shortName: 'Saudi Arabia',
    description: 'Tap into the Middle East\'s largest economy with Vision 2030 initiatives supporting foreign investment.',
    features: [
      '100% foreign ownership in most sectors',
      'Strategic location for MENA markets',
      'Tax-free environment (0% income tax)',
      'Growing economy with Vision 2030',
      'Modern infrastructure',
      'Government support for startups'
    ],
    requirements: [
      'Commercial registration',
      'MISA (Saudi Investment) approval',
      'Memorandum of Association',
      'Office lease agreement',
      'Bank account in Saudi Arabia',
      'Zakat and tax registration'
    ],
    timeline: '2-4 weeks',
    pricing: {
      basic: 1499,
      standard: 2499,
      premium: 3999
    },
    benefits: [
      'No corporate income tax',
      'Rapidly growing market',
      'Strategic MENA location',
      'Government incentives',
      'Oil-rich economy'
    ]
  },
  {
    id: 'qatar',
    name: 'Qatar',
    flag: '🇶🇦',
    shortName: 'Qatar',
    description: 'One of the world\'s wealthiest nations with a thriving business environment and tax-free income.',
    features: [
      '100% foreign ownership allowed',
      'No corporate or income tax',
      'Strategic location in the Gulf',
      'World-class infrastructure',
      'Political and economic stability',
      'Free zones available'
    ],
    requirements: [
      'Commercial registration with MOC',
      'Qatar Chamber of Commerce membership',
      'Local office address',
      'Memorandum and Articles of Association',
      'Bank account in Qatar',
      'Municipal license'
    ],
    timeline: '2-3 weeks',
    pricing: {
      basic: 1599,
      standard: 2699,
      premium: 4299
    },
    benefits: [
      'Tax-free environment',
      'High-income market',
      'Modern infrastructure',
      'Gateway to GCC markets',
      'Political stability'
    ]
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    shortName: 'India',
    description: 'Access one of the world\'s fastest-growing economies with a massive consumer base and skilled workforce.',
    features: [
      'Fast-growing economy',
      'Large consumer market (1.4B people)',
      'Skilled workforce',
      'Government digitalization initiatives',
      'Startup India benefits available',
      'Low operational costs'
    ],
    requirements: [
      'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)',
      'Name approval from MCA',
      'Memorandum and Articles of Association',
      'PAN and TAN registration',
      'GST registration'
    ],
    timeline: '7-10 business days',
    pricing: {
      basic: 199,
      standard: 499,
      premium: 899
    },
    benefits: [
      'Huge market potential',
      'Cost-effective operations',
      'Growing middle class',
      'Digital India initiatives',
      'Skilled talent pool'
    ]
  }
];

export const faqs = [
  {
    question: 'How long does company formation typically take?',
    answer: 'The timeline varies by country. UK formations take 24-48 hours, USA takes 3-5 business days, India takes 7-10 days, while Saudi Arabia and Qatar take 2-4 weeks due to additional regulatory requirements.'
  },
  {
    question: 'Do I need to be physically present in the country?',
    answer: 'No, for most countries we can handle the entire formation process remotely. We provide virtual office services and registered agent services where required. However, for banking, some countries may require physical presence or video verification.'
  },
  {
    question: 'What ongoing compliance is required?',
    answer: 'Each country has different requirements. Generally, you\'ll need to file annual returns, maintain proper accounting records, and submit tax filings. We offer ongoing compliance packages to handle all these requirements for you.'
  },
  {
    question: 'Can foreign nationals own 100% of the company?',
    answer: 'Yes, in UK, USA, Qatar (in designated sectors), and India, 100% foreign ownership is allowed. Saudi Arabia also allows 100% foreign ownership in most sectors under Vision 2030 reforms. Some restricted sectors may require local partners.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, bank transfers, and PayPal. Payment plans are available for premium packages.'
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. We maintain strict confidentiality and comply with international data protection regulations. Your information is encrypted and securely stored.'
  },
  {
    question: 'Do you provide support after company formation?',
    answer: 'Yes! We offer comprehensive post-formation support including banking assistance, tax registration, compliance management, virtual office services, and ongoing business consulting.'
  },
  {
    question: 'What business structures can I form?',
    answer: 'We help form various structures: Limited Companies and LLPs in UK, LLCs and Corporations in USA, Private Limited Companies in India, and LLCs/WLLs in Saudi Arabia and Qatar.'
  }
];

export const services = [
  {
    title: 'Company Formation',
    description: 'Complete registration and incorporation services across all jurisdictions',
    icon: 'building-2'
  },
  {
    title: 'Tax Registration',
    description: 'VAT, GST, and corporate tax registration handled professionally',
    icon: 'receipt'
  },
  {
    title: 'Banking Assistance',
    description: 'Help opening business bank accounts locally and internationally',
    icon: 'landmark'
  },
  {
    title: 'Compliance Management',
    description: 'Ongoing filing, reporting, and regulatory compliance support',
    icon: 'shield-check'
  },
  {
    title: 'Virtual Office',
    description: 'Professional business address and mail handling services',
    icon: 'mail'
  },
  {
    title: 'Legal Documentation',
    description: 'Preparation of all necessary legal documents and contracts',
    icon: 'file-text'
  }
];

export const mockInquiries = [];
