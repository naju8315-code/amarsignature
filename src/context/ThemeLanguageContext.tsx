/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'bn';
export type Theme = 'dark' | 'light';

interface ThemeLanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
  packages: any[];
  services: any[];
  projects: any[];
  awards: any[];
  testimonials: any[];
  blogPosts: any[];
  faq: any[];
  team: any[];
  strengths: any[];
  teamMembers: any[];
  faqData: any[];
  strengthsData: any[];
  packagesData: any[];
  servicesData: any[];
  projectsData: any[];
  awardsData: any[];
  testimonialsData: any[];
  blogPostsData: any[];
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

// Comprehensive Elite UI Translation Dictionary
const uiTranslations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About Us',
    navTeam: 'Our Team',
    navFAQ: 'FAQ Portfolio',
    navPackages: 'Packages',
    navServices: 'Services',
    navPricing: 'Pricing',
    navProjects: 'Projects',
    navContact: 'Contact',
    navBookSession: 'Book Consultation',
    navLegacyStudio: 'Dhaka Legacy Studio',

    // Hero Section
    heroPill: 'Personal Branding Consultancy · Dhaka, BD',
    heroTitlePart1: 'Define, Shape & ',
    heroTitleHighlight: 'Own the Brand',
    heroTitlePart2: ' Called You',
    heroDesc: 'Elite reputation strategy, bespoke visual positioning, and editorial publication advisory. Crafted strictly for founders, legacy conglomerate heirs, and medical directors commanding Bangladesh\'s top divisions.',
    heroCtaProjects: 'View Projects',
    heroCtaBook: 'Book Diagnostic Session',
    heroPillFounders: '50+ TRUSTED GULSHAN FOUNDERS',
    heroStatProjects: 'Projects Perfected',
    heroBadgeMark: 'AS',

    // About Section
    aboutSectionTitle: 'Bespoke Executive Authority',
    aboutSubtitle: 'WHO WE ARE',
    aboutHeadline: 'We design legends, not just profiles.',
    aboutDesc1: 'At Amar Signature, we believe that elite leadership requires silent authority. We operate behind the scenes to elevate corporate founders, luxury heirs, and national leaders to become the singular voice in their industries.',
    aboutDesc2: 'Our background covers prestige visual identities, high-stakes public relations placement in premier financial outlets, and custom publishing advisory.',
    aboutExperienceBadge: 'Yrs Experience',
    aboutTeamTitle: 'Our Strategic Advisors',
    aboutFaqTitle: 'Private Advisory Inquiries',

    // Services Section
    servicesTitle: 'Bespoke Authority Design',
    servicesSubtitle: 'OUR PORTFOLIO',
    servicesHeadline: 'Strategic Reputation Mastery',

    // Packages Section
    packagesTitle: 'Executive Branding Architecture',
    packagesSubtitle: 'BESPOKE ENGAGEMENT',
    packagesHeadline: 'Tailored Investment Models',
    pkgMostPopular: 'MOST POPULAR',
    pkgPremiumMasterclass: 'PREMIUM MASTERCLASS',
    pkgFeatureTitle: 'Key Deliverables Included:',
    pkgPriceLabel: '৳',
    pkgPriceSuffix: '/ Qtr',
    pkgPriceMonthlySuffix: ' / Monthly',
    pkgCtaBtn: 'Acquire Strategy Plan',
    pkgPromiseTitle: 'Exclusivity Guarantee',
    pkgPromiseDesc: 'We accept only 2 new private clients in the same market vertical per quarter to prevent any clash of strategic positioning interests. Privacy and non-conflict is explicitly secured by corporate NDA.',

    // Portfolio Section
    portfolioTitle: 'The Registry of Influence',
    portfolioSubtitle: 'SUCCESS SHOWCASE',
    portfolioHeadline: 'Signature Legacies Crafted',
    portfolioCatAll: 'All',
    portfolioCatStrategy: 'Strategy',
    portfolioCatBranding: 'Branding',
    portfolioCatResearch: 'Research',
    portfolioModalClose: 'Close Details',
    portfolioModalMetaClient: 'Client Authority',
    portfolioModalMetaLoc: 'Location Desk',
    portfolioModalMetaYear: 'Positioning Year',

    // Why Choose Us
    wcuTitle: 'Elite Corporate Alignment',
    wcuSubtitle: 'WHY AMAR SIGNATURE',
    wcuHeadline: 'Built on Trust. Refined by Design.',
    wcuBullet1Title: 'Complete Privacy Guarantee',
    wcuBullet1Desc: 'We safeguard your industry data with deep enterprise-grade security protocols and legal NDA protection.',
    wcuBullet2Title: 'Vetted Dhaka Expertise',
    wcuBullet2Desc: 'Aligned with the premium preferences of Gulshan, Banani, and Dhanmondi business ecosystems.',
    wcuBullet3Title: 'Guaranteed Press Placement',
    wcuBullet3Desc: 'Guaranteed editorial features inside prime business news columns and national media panels.',
    wcuStatActiveCircle: 'ACTIVE ADVISORY DESK',

    // Awards Section
    awardsTitle: 'Prestige & Industry Accolades',
    awardsSubtitle: 'OUR DISTINCTIONS',
    awardsHeadline: 'Celebrated Design Philosophy',

    // Testimonials
    testimonialsTitle: 'Vouchsafed by Conglomerates',
    testimonialsSubtitle: 'CLIENT TESTIMONIALS',
    testimonialsHeadline: 'Unfiltered Executive Voices',

    // Blog
    blogTitle: 'The Editorial Board',
    blogSubtitle: 'INSIGHTS & ESSAYS',
    blogHeadline: 'Curated Reputation Intelligence',
    blogModalClose: 'Close Read',
    blogNewsletterTitle: 'THE PRIVATE SUBSCRIBER LETTER',
    blogNewsletterDesc: 'Receive bespoke executive communications, silent luxury analysis, and digital prestige intelligence curated by our principal partner monthly. Strictly zero marketing spam.',
    blogNewsletterPlaceholder: 'Enter corporate email address',
    blogNewsletterBtn: 'Subscribe In Secrecy',
    blogNewsletterSuccess: 'Subscribed successfully. Check your secure inbox.',

    // Contact
    contactTitle: 'Schedule a Private Board Session',
    contactSubtitle: 'ACQUISITION DESK',
    contactHeadline: 'Initiate Strategic Alignment',
    contactFormName: 'Corporate Name / Full Identity',
    contactFormEmail: 'Secure Email Address',
    contactFormPhone: 'Direct Whatsapp Number',
    contactFormCompany: 'Legacy Group / Current Executive Role',
    contactFormSubject: 'Target Advisory Engagement',
    contactFormMessage: 'Strategic Objective Brief',
    contactFormSubmit: 'Request Secure Diagnostics Call',
    contactSuccessTitle: 'Acknowledge Submission Securely',
    contactSuccessDesc: 'Your objective brief has been routed to our principal adviser. Expect a private diagnostic callback on your encrypted line within 12 standard operating hours.',
    contactDetailsTitle: 'Dhaka Operations Desk',
    contactDetailsDesc: 'Direct inquiries are restricted under secure operations to preserve existing client privacy boundaries.',
    contactDetailsSocialHeader: 'Digital Security Feeds',
    contactDetailsSocialDesc: 'Sub-second operational updates and press briefs.',

    // Footer
    footerDesc: 'Defining absolute strategic distinction and visual prestige for founders, executive heirs, and conglomerate leaders across South Asia.',
    footerCopyright: '© 2026 Amar Signature. All rights and integrity preserved. Dhaka Legacy Studio.'
  },
  bn: {
    // Navbar
    navHome: 'হোম',
    navAbout: 'আমাদের সম্পর্কে',
    navTeam: 'আওয়ার টিম',
    navFAQ: 'জিজ্ঞাসাবলী',
    navPackages: 'প্যাকেজসমূহ',
    navServices: 'সেবাসমূহ',
    navPricing: 'প্রাইসিং',
    navProjects: 'প্রকল্পসমূহ',
    navContact: 'যোগাযোগ',
    navBookSession: 'পরামর্শ বুক করুন',
    navLegacyStudio: 'ঢাকা লিগ্যাসি স্টুডিও',

    // Hero Section
    heroPill: 'পার্সোনাল ব্র্যান্ডিং পরামর্শক · ঢাকা, বাংলাদেশ',
    heroTitlePart1: 'আপনার নামক ব্র্যান্ডকে ',
    heroTitleHighlight: 'সংজ্ঞায়িত করুন',
    heroTitlePart2: ', রূপ দিন ও বিস্তৃত করুন',
    heroDesc: 'অভিজাত খ্যাতি ব্যবস্থাপনা ও স্ট্র্যাটেজি, স্বকীয় ভিজ্যুয়াল পজিশনিং এবং সম্পাদকীয় প্রকাশনা পরামর্শ। মূলত বাংলাদেশের শীর্ষস্থানীয় গ্ৰুপ অব কোম্পানির প্রতিষ্ঠাতা, কর্পোরেট উত্তরাধিকারী এবং মেডিকেল ডিরেক্টরদের জন্য সতর্কতার সাথে পরিকল্পিত।',
    heroCtaProjects: 'প্রকল্পসমূহ দেখুন',
    heroCtaBook: 'কৌশলগত সেশন বুক করুন',
    heroPillFounders: '৫০+ বিশ্বস্ত গুলশান প্রতিষ্ঠাতা',
    heroStatProjects: 'সফল প্রজেক্টসমূহ',
    heroBadgeMark: 'এএস',

    // About Section
    aboutSectionTitle: 'অনন্য নির্বাহী কর্তৃত্ব',
    aboutSubtitle: 'আমাদের পরিচয়',
    aboutHeadline: 'আমরা কেবল প্রোফাইল নয়, কিংবদন্তি তৈরি করি।',
    aboutDesc1: 'আমার সিগনেচারে আমরা বিশ্বাস করি যে অভিজাত নেতৃত্বের জন্য নীরব আভিজাত্য আবশ্যক। আমরা পর্দার আড়াল থেকে কাজ করি শীর্ষ কর্পোরেট প্রতিষ্ঠাতা, বিলাসবহুল শিল্পের উত্তরসূরি এবং জাতীয় নেতৃবৃন্দকে তাঁদের নিজ নিজ ক্ষেত্রে অনন্য ব্যক্তিত্ব হিসেবে গড়ে তুলতে।',
    aboutDesc2: 'আমাদের কাজের প্রধান ক্ষেত্রগুলোর মধ্যে রয়েছে সর্বাধুনিক ভিজ্যুয়াল আইডেন্টিটি ডিজাইন, দেশের শীর্ষস্থানীয় দৈনিক ও অর্থনৈতিক নীতি নির্ধারণী পত্রিকায় মর্যাদাপূর্ণ ফিচার তৈরি এবং বিশেষ প্রকাশনা পরামর্শ।',
    aboutExperienceBadge: 'বছরের অভিজ্ঞতা',
    aboutTeamTitle: 'আমাদের কৌশলগত উপদেষ্টা',
    aboutFaqTitle: 'ব্যক্তিগত পরামর্শ সংক্রান্ত জিজ্ঞাসাবলী',

    // Services Section
    servicesTitle: 'অনন্য ব্যক্তিত্ব রূপান্তর',
    servicesSubtitle: 'আমাদের পোর্টফোলিও',
    servicesHeadline: 'কৌশলগত খ্যাতি ব্যবস্থাপনা ও আভিজাত্য',

    // Packages Section
    packagesTitle: 'এক্সিকিউটিভ ব্র্যান্ডিং আর্কিটেকচার',
    packagesSubtitle: 'সরাসরি অংশীদারিত্ব',
    packagesHeadline: 'পরিকল্পিত বিনিয়োগ মডেল',
    pkgMostPopular: 'জনপ্রিয় প্যাকেজ',
    pkgPremiumMasterclass: 'প্রিমিয়াম মাস্টারক্লাস',
    pkgFeatureTitle: 'মূল যে বিষয়গুলো অন্তর্ভুক্ত থাকছে:',
    pkgPriceLabel: '৳',
    pkgPriceSuffix: ' / তিন মাস',
    pkgPriceMonthlySuffix: ' / মাসিক',
    pkgCtaBtn: 'কৌশল পরিকল্পনা গ্রহণ করুন',
    pkgPromiseTitle: 'একচেটিয়া নিশ্চয়তা',
    pkgPromiseDesc: 'কৌশলগত স্বার্থের দ্বন্দ্ব এড়াতে আমরা একই ব্যবসায়িক খাতে প্রতি কোয়ার্টারে কেবল ২ জন নতুন ক্লায়েন্ট গ্রহণ করি। সর্বোচ্চ গোপনীয়তা এবং সুরক্ষা কর্পোরেট এনডিএ (NDA) চুক্তির মাধ্যমে নিশ্চিত করা হয়।',

    // Portfolio Section
    portfolioTitle: 'প্রভাবশালীদের বিশ্বস্ত রেজিস্ট্রি',
    portfolioSubtitle: 'সফলতার অর্জনসমূহ',
    portfolioHeadline: 'অসাধারণ সাফল্যের অনন্য স্বাক্ষর',
    portfolioCatAll: 'সবগুলো',
    portfolioCatStrategy: 'স্ট্র্যাটেজি',
    portfolioCatBranding: 'ব্র্যান্ডিং',
    portfolioCatResearch: 'গবেষণা',
    portfolioModalClose: 'বিস্তারিত বন্ধ করুন',
    portfolioModalMetaClient: 'গ্রাহকের মর্যাদা',
    portfolioModalMetaLoc: 'অপারেশন ডেস্ক',
    portfolioModalMetaYear: 'পজিশনিং এর সাল',

    // Why Choose Us
    wcuTitle: 'অভিজাত কর্পোরেট সমন্বয়',
    wcuSubtitle: 'কেনো আমার সিগনেচার',
    wcuHeadline: 'বিশ্বাসে গড়ে ওঠা, আভিজাত্যে বিকশিত।',
    wcuBullet1Title: 'সম্পূর্ণ গোপনীয়তার নিশ্চয়তা',
    wcuBullet1Desc: 'গভীর এন্টারপ্রাইজ-গ্রেড সিকিউরিটি প্রোটোকল এবং আইনি এনডিএ চুক্তির মাধ্যমে আপনার তথ্য শতভাগ সুরক্ষিত রাখা হয়।',
    wcuBullet2Title: 'অভিজাত ঢাকার বিশ্বস্ত অভিজ্ঞতা',
    wcuBullet2Desc: 'গুলশান, বনানী এবং ধানমণ্ডির কর্পোরেট ইকোসিস্টেমের উচ্চস্তরের মনস্তত্ব মাথায় রেখে কাজ করতে আমরা পারদর্শী।',
    wcuBullet3Title: 'মিডিয়া কভারেজের নিশ্চয়তা',
    wcuBullet3Desc: 'দেশের শীর্ষস্থানীয় কর্পোরেট দৈনিক এবং অভিজাত মিডিয়া আউটলেটগুলোতে আপনার সাক্ষাৎকার ও ফিচার প্রকাশের শতভাগ নিশ্চয়তা।',
    wcuStatActiveCircle: 'সক্রিয় পরামর্শ ডেস্ক',

    // Awards Section
    awardsTitle: 'মর্যাদাপূর্ণ শিল্প স্বীকৃতি সমূহ',
    awardsSubtitle: 'আমাদের অর্জন',
    awardsHeadline: 'প্রশংসিত অনন্য ডিজাইন দর্শন',

    // Testimonials
    testimonialsTitle: 'শীর্ষ কর্পোরেট প্রধানদের বিশ্বস্ত কথা',
    testimonialsSubtitle: 'গ্রাহকদের মতামত',
    testimonialsHeadline: 'নেতৃবৃন্দের অভিজ্ঞতা ও মতামত',

    // Blog
    blogTitle: 'সম্পাদকীয় বোর্ড',
    blogSubtitle: 'বিশ্লেষণ ও প্রবন্ধসমূহ',
    blogHeadline: 'খ্যাতি ও আভিজাত্য বৃদ্ধির আধুনিক গাইড',
    blogModalClose: 'পড়া শেষ করুন',
    blogNewsletterTitle: 'ব্যক্তিগত গ্রাহক চিঠি বা নিউজলেটার',
    blogNewsletterDesc: 'আমাদের প্রধান পার্টনার দ্বারা প্রতি মাসে রচিত বিলাসবহুল নীরব ব্র্যান্ডিং বিশ্লেষণ, ডিজিটাল কভারেজ কৌশল ও মর্যাদাপূর্ণ প্রতিবেদন গোপনে আপনার ইমেইলে সরাসরি বুঝে নিন। কোনো রূপ মার্কেটিং স্প্যাম থেকে সম্পূর্ণ মুক্ত।',
    blogNewsletterPlaceholder: 'আপনার কর্পোরেট ইমেইল দিন',
    blogNewsletterBtn: 'গোপনে সাবস্ক্রাইব করুন',
    blogNewsletterSuccess: 'সফলভাবে সাবস্ক্রাইব হয়েছে। আপনার ইনবক্স চেক করুন।',

    // Contact
    contactTitle: 'ব্যক্তিগত বোর্ড সেশনের শিডিউল বুক করুন',
    contactSubtitle: 'অ্যাকুইজিশন ডেস্ক',
    contactHeadline: 'কৌশলগত সমন্বয়ের সূচনা করুন',
    contactFormName: 'কর্পোরেট নাম / সম্পূর্ণ পরিচয়',
    contactFormEmail: 'সুরক্ষিত ইমেইল ঠিকানা',
    contactFormPhone: 'সরাসরি হোয়াটসঅ্যাপ নম্বর',
    contactFormCompany: 'লেগ্যাসি গ্রুপ বা বর্তমান পদবী',
    contactFormSubject: 'আকাঙ্ক্ষিত এডভাইজরি সেবাসমূহ',
    contactFormMessage: 'আপনার সংক্ষিপ্ত স্ট্র্যাটেজিক উদ্দেশ্য',
    contactFormSubmit: 'একটি ডায়াগনস্টিক কলের অনুরোধ দিন',
    contactSuccessTitle: 'আবেদনটি সফলভাবে গৃহীত হয়েছে',
    contactSuccessDesc: 'আপনার উদ্দেশ্য সম্বলিত সংক্ষিপ্ত বিবরণ আমাদের প্রধান উপদেষ্টার কাছে পাঠানো হয়েছে। ১২ কর্মঘণ্টার মধ্যে আপনার গোপন লাইনে একটি ব্যক্তিগত ফিডব্যাক কল আশা করতে পারেন।',
    contactDetailsTitle: 'ঢাকা অপারেশন ডেস্ক',
    contactDetailsDesc: 'বিদ্যমান গ্রাহকদের গোপনীয়তা ও স্বার্থ রক্ষার্থে ঢাকা অপারেশনের সরাসরি দর্শনার্থী যোগাযোগ কঠোরভাবে নিয়ন্ত্রিত ও গোপন রাখা হয়।',
    contactDetailsSocialHeader: 'ডিজিটাল সিকিউরিটি ফিড',
    contactDetailsSocialDesc: 'তাৎক্ষণিক অপারেশনাল আপডেট এবং প্রেস ব্রিফ পেতে চোখ রাখুন।',

    // Footer
    footerDesc: 'দক্ষিণ এশিয়া জুড়েই শীর্ষ প্রতিষ্ঠাতা, উত্তরাধিকারী এবং বিজনেস লিডারদের জন্য অনন্য আভিজাত্য, ভিজ্যুয়াল মর্যাদা ও স্থায়ী লিগ্যাসি প্রতিষ্ঠা করা আমাদের চিরন্তন লক্ষ্য।',
    footerCopyright: '© ২০২৬ আমার সিগনেচার। সর্বস্বত্ব ও পরম অখণ্ডতা সংরক্ষিত। ঢাকা লেগ্যাসি স্টুডিও।'
  }
};

// Translated dynamic data models
const packagesDataEn = [
  {
    id: 'standard',
    name: 'Standard Brand Build',
    priceMonthly: 35000,
    priceQuarterly: 90000,
    description: 'Perfect for emerging founders, senior executives & specialized consultants establishing their digital authority.',
    features: [
      'Personal Brand Strategy & Roadmap',
      'Professional LinkedIn Profile Optimization',
      'High-End Portrait Photoshoot Direction',
      '2 Custom Curated Editorial Articles per Month',
      'Executive Ghostwriting (3 posts/week)',
      'Basic Monthly Analytics Review'
    ]
  },
  {
    id: 'growth',
    name: 'Growth Consultant Strategy',
    priceMonthly: 50000,
    priceQuarterly: 135000,
    tag: 'MOST POPULAR',
    isFeatured: true,
    description: 'Designed for high-growth venture founders & industry specialists looking to scale their public voice and leadership.',
    features: [
      'Comprehensive Brand Audit & Positioning Matrix',
      'LinkedIn & Twitter Account Signature Design',
      'Luxury Media Pack & Press Release Draft',
      'Dhaka Executive Portrait Session (Included)',
      '4 Deep-Dive Thought-Leadership Articles',
      'Premium Ghostwriting (5 posts/week)',
      'Bi-Weekly Video Scripting (TikTok/Reels)',
      'Priority WhatsApp Strategy Support'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Legacy Program',
    priceMonthly: 75000,
    priceQuarterly: 210000,
    tag: 'PREMIUM MASTERCLASS',
    description: 'The definitive executive legacy program for top-tier CEOs, conglomerate heirs, and celebrated directors.',
    features: [
      'All Growth features + Custom Web Portfolio Space',
      'Elite Positioning & Bangladesh National Media PR Outreach',
      'Full Editorial Calendar & Personal Podcast Incubation',
      'Weekly Multi-channel Content Distribution',
      'Infinite Messaging / VIP Round-the-clock Consultancy',
      'Crisis Management & Online Reputation Protection',
      'Keynote Speechwriting & TEDx Pitch Strategy'
    ]
  }
];

const packagesDataBn = [
  {
    id: 'standard',
    name: 'স্ট্যান্ডার্ড ব্র্যান্ড বিল্ড',
    priceMonthly: 35000,
    priceQuarterly: 90000,
    description: 'উচ্চাকাঙ্ক্ষী প্রতিষ্ঠাতা, জ্যেষ্ঠ এক্সিকিউটিভ এবং বিশেষ পরামর্শকদের ডিজিটাল ব্র্যান্ড মূল্য প্রতিষ্ঠার জন্য আদর্শ।',
    features: [
      'পার্সোনাল ব্র্যান্ড স্ট্র্যাটেজি ও রোডম্যাপ',
      'পেশাদার লিংকডইন প্রোফাইল অপ্টিমাইজেশন',
      'উচ্চমানের এক্সিকিউটিভ পোর্ট্রেট ডিরেকশন',
      'প্রতি মাসে ২টি বিশেষভাবে পরিকল্পিত সম্পাদকীয় প্রবন্ধ',
      'এক্সিকিউটিভ ঘোস্টরাইটিং (প্রতি সপ্তাহে ৩টি পোস্ট)',
      'মৌলিক মাসিক অ্যানালিটিক্যাল ডেটা রিভিউ'
    ]
  },
  {
    id: 'growth',
    name: 'গ্রোথ কনসালট্যান্ট স্ট্র্যাটেজি',
    priceMonthly: 50000,
    priceQuarterly: 135000,
    tag: 'সর্বাধিক জনপ্রিয়',
    isFeatured: true,
    description: 'যেসব দ্রুত বিকাশমান স্টার্টআপ প্রতিষ্ঠাতা ও শিল্প বিশেষজ্ঞ নিজেদের সুনির্দিষ্ট কণ্ঠস্বর ও নেতৃত্ব ছড়িয়ে দিতে চান।',
    features: [
      'সমন্বিত ব্র্যান্ড অডিট ও পজিশনিং ম্যাট্রিক্স',
      'লিংকডইন ও এক্স (টুইটার) প্রোফাইলের সিগনেচার ডিজাইন',
      'লাক্সারি মিডিয়া প্যাক ও প্রেস রিলিজের খসড়া',
      'ঢাকা সিগনেচার এক্সিকিউটিভ পোর্ট্রেট সেশন (অন্তর্ভুক্ত)',
      '৪টি গভীর ও বিস্তারিত চিন্তাশীল নেতৃত্বমূলক নিবন্ধ',
      'প্রিমিয়াম স্তরের ঘোস্টরাইটিং (প্রতি সপ্তাহে ৫টি পোস্ট)',
      'পাক্ষিক ভিডিও স্ক্রিপ্টিং (টিকটক/রিলস)',
      'অগ্রাধিকার ভিত্তিতে সরাসরি হোয়াটসঅ্যাপ স্ট্র্যাটেজি সাপোর্ট'
    ]
  },
  {
    id: 'platinum',
    name: 'প্ল্যাটিনাম লিগ্যাসি প্রোগ্রাম',
    priceMonthly: 75000,
    priceQuarterly: 210000,
    tag: 'প্রিমিয়াম মাস্টারক্লাস',
    description: 'শীর্ষস্থানীয় প্রধান নির্বাহী (CEO), গ্রুপ অব কোম্পানির উত্তরসূরি এবং খ্যাতিমান পরিচালকদের চূড়ান্ত লিগ্যাসি প্ল্যান।',
    features: [
      'গ্রোথ প্যাকেজের সব ফিচারের সাথে থাকছে কাস্টম ওয়েব পোর্টফোলিও স্পেস',
      'জাতীয় এবং আন্তর্জাতিক প্রথম সারির প্রিন্ট ও ডিজিটাল মিডিয়া পিআর আউটরিচ',
      'সম্পূর্ণ সম্পাদকীয় রুটিন এবং ব্যক্তিগত পডকাস্ট ইনকিউবেশন',
      'সাপ্তাহিক মাল্টি-চ্যানেল কন্টেন্ট প্রকাশ ও বিতরণ',
      'চব্বিশ ঘণ্টা ভিআইপি কনসাল্টিং এবং জরুরি কৌশল সমর্থন',
      'কর্পোরেট সংকটের ব্যবস্থাপনা এবং অনলাইন সিকিউরিটি ও সুনাম প্রোটেকশন',
      'আন্তর্জাতিক ওTEDx স্তরের গুরুত্বপূর্ণ ভাষণ লিখন ও পিচ কৌশল'
    ]
  }
];

const servicesDataEn = [
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    description: 'Establish a clear, magnetic vision. We draft your personal mission, target audience profile, and niche alignment roadmap tailored for Bangladesh and global business domains.',
    iconName: 'Compass',
    benefits: ['Strategic Market Differentiation', 'Target Audience Optimization', 'Niche Hegemony Planning']
  },
  {
    id: 'brand-naming',
    title: 'Brand Naming & Identity',
    description: 'Crafting premium monograms, typography guidelines, signature letterheads, and taglines that project prestige, heritage, and modern sophistication.',
    iconName: 'Sparkles',
    benefits: ['Bespoke Logo Mark Design', 'Premium Visual Color Themes', 'Consistent Asset Kit']
  },
  {
    id: 'brand-consultant',
    title: 'Executive Consulting',
    description: 'Direct 1-on-1 positioning advisory blocks with Amar Signature. We help refine your boardroom presence, keynote speaking cues, and networking strategy.',
    iconName: 'Briefcase',
    benefits: ['Elite Executive Coaching', 'Public Profile Alignment', 'High-Stakes Prep']
  },
  {
    id: 'copywriting',
    title: 'Thought-leadership Ghostwriting',
    description: 'Your ideas, translated into world-class writing. Daily curated posts, deep-dive newsletters, and opinion pieces published in Bangladesh’s top financial papers.',
    iconName: 'PenTool',
    benefits: ['Zero-Effort Creation', 'Inter-Industry Thought Authority', 'Polished Editorial Tone']
  },
  {
    id: 'brand-advertising',
    title: 'Brand PR & Media Strategy',
    description: 'Strategic placement across tier-one national media (The Daily Star, Prothom Alo) and international business publications to cement your legacy.',
    iconName: 'Globe',
    benefits: ['Media Feature Booking', 'Podcast Guest Sequencing', 'Prestigious Press Coverage']
  },
  {
    id: 'brand-voice',
    title: 'Brand Voice Mastery',
    description: 'Defining a unique, recognizable tone of voice that reflects wisdom, authority, and elegance across video reels, podcasts, and digital messages.',
    iconName: 'Mic',
    benefits: ['Structured Video Scripting', 'Consistent Speech Nuance', 'Engaging Storytelling Loops']
  }
];

const servicesDataBn = [
  {
    id: 'brand-strategy',
    title: 'ব্র্যান্ড স্ট্র্যাটেজি',
    description: 'একটি পরিষ্কার এবং আকর্ষণীয় লক্ষ্য নির্ধারণ করুন। আমরা আপনার মিশনের ড্রাফ্ট, লক্ষ্যভিত্তিক গ্রাহক বিশ্লেষণ এবং দেশীয় ও আন্তর্জাতিক বাজারে সুনির্দিষ্ট রোডম্যাপ তৈরি করি।',
    iconName: 'Compass',
    benefits: ['কৌশলগত বাজার স্বাতন্ত্র্য', 'টার্গেট অডিয়েন্স অপ্টিমাইজেশন', 'নিজ সুনির্দিষ্ট খাতের নেতৃত্ব']
  },
  {
    id: 'brand-naming',
    title: 'ব্র্যান্ড ভিজ্যুয়াল আইডেন্টিটি',
    description: 'মর্যাদাশীল ব্যক্তিগত মনোগ্রাম, অনন্য টাইপোগ্রাফি গাইডলাইন, সিগনেচার প্যাড এবং লোগো ডিজাইন যা আপনার ঐতিহ্য ও আধুনিকতার জানান দেবে।',
    iconName: 'Sparkles',
    benefits: ['অনন্য লোগো বা প্রতীক ডিজাইন', 'প্রিমিয়াম ভিজ্যুয়াল কালার থিম', 'একত্রিত সমন্বিত অ্যাসেট কিট']
  },
  {
    id: 'brand-consultant',
    title: 'এক্সিকিউটিভ কনসাল্টিং',
    description: 'আমার সিগনেচারের অভিজ্ঞ পার্টনারদের সাথে সরাসরি ব্যক্তিগত পরামর্শ সেশন। আমরা বোর্ডরুম ও বিজনেস আলোচনায় আপনার অনন্য ব্যক্তিত্ব ও নেটওয়ার্ক শক্তিশালী করি।',
    iconName: 'Briefcase',
    benefits: ['অভিজাত এক্সিকিউটিভ কোচিং', 'জনসমক্ষে প্রোফাইল সমন্বয়', 'গুরুত্বপূর্ণ প্রেজেন্টেশন প্রস্তুতি']
  },
  {
    id: 'copywriting',
    title: 'চিন্তাশীল ঘোস্টরাইটিং',
    description: 'আপনার উদ্ভাবনী ধারণাগুলো বিশ্বমানের লেখনীতে অনূদিত হবে। প্রতিদিনের লিঙ্কডইন কন্টেন্ট এবং জাতীয় ও প্রথম সারির ইংরেজি কর্পোরেট সংবাদপত্রে আপনার নামে কলাম ও অপ-এড প্রকাশ।',
    iconName: 'PenTool',
    benefits: ['বিনা পরিশ্রমে আধুনিক লেখালেখি', 'শিল্পখাতে চিন্তাশীল নেতৃত্ব', 'উচ্চমানের মার্জিত কন্টেন্ট টোন']
  },
  {
    id: 'brand-advertising',
    title: 'ব্র্যান্ড পিআর ও মিডিয়া কভারেজ',
    description: 'দেশের প্রথম সারির সম্মানিত দৈনিকে (ডেইলি স্টার, প্রথম আলো) এবং আন্তর্জাতিক বাণিজ্য পত্রিকাগুলোতে আপনার প্রোফাইল ফিচার বুক করার নিখুঁত ব্যবস্থা।',
    iconName: 'Globe',
    benefits: ['মিডিয়া ফিচার বুকিং', 'পডকাস্ট ও টকশো অতিথি সজ্জা', 'সম্মানিত ও টেকসই প্রেস কভারেজ']
  },
  {
    id: 'brand-voice',
    title: 'অনন্য কন্ঠের প্রকাশ',
    description: 'একটি সুনির্দিষ্ট এবং আকর্ষণীয় কথা বলার ধরন বা ভয়েস টোন গড়ে তোলা, যা আপনার সব ধরণের ভিডিও বা পডকাস্ট কন্টেন্টে প্রজ্ঞা ও গভীরতা প্রকাশ করবে।',
    iconName: 'Mic',
    benefits: ['সরাসরি ভিডিও স্ক্রিপ্টিং সাপোর্ট', 'কথোপকথনের অসাধারণ ভারসাম্য', 'স্মরণীয় ব্যক্তিত্ব ফুটিয়ে তোলা']
  }
];

const projectsDataEn = [
  {
    id: 'proj-1',
    title: 'Re-inventing the Venture Capitalist',
    category: 'Strategy',
    clientName: 'Mahmud Rahman',
    location: 'Gulshan-2, Dhaka',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    description: 'Transformed an quiet angel investor into a recognizable champion for Bangladeshi tech founders. Secured 3 keynotes and grew LinkedIn following by 340%.'
  },
  {
    id: 'proj-2',
    title: 'Heritage Meets Modern Real Estate',
    category: 'Branding',
    clientName: 'Nusrat Jahan',
    location: 'Dhanmondi, Dhaka',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    description: 'Designed a sophisticated executive visual brand identity and digital presence for a prominent real estate heiress, establishing her as an architectural trendsetter.'
  },
  {
    id: 'proj-3',
    title: 'The Sovereign FinTech Pioneer',
    category: 'Research',
    clientName: 'Zeeshan Ahmed',
    location: 'Banani, Dhaka',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    description: 'Authored an authoritative series of regulatory research documents on decentralized finance in South Asia, launching the client as an advisor to national committees.'
  },
  {
    id: 'proj-4',
    title: 'E-commerce Disruptor Signature Launch',
    category: 'Strategy',
    clientName: 'Sajid Karim',
    location: 'Uttara, Dhaka',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    description: 'Engineered a multi-channel thought-leadership launch campaign focusing on sustainable supply chain management, driving direct enterprise inquiries.'
  },
  {
    id: 'proj-5',
    title: 'Aesthetic Medical Director Rebrand',
    category: 'Branding',
    clientName: 'Dr. Tasnim Kabir',
    location: 'Gulshan-1, Dhaka',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    description: 'Architected a sophisticated clinic brand around Tasnim’s personal authority, transforming her into Dhaka’s premium skincare luxury advisor.'
  },
  {
    id: 'proj-6',
    title: 'Corporate Green Infrastructure Initiative',
    category: 'Research',
    clientName: 'Farhan Chowdhury',
    location: 'Dhaka Cantonment',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    description: 'Conducted localized carbon footprint research and mapped it to public-private partnership strategies, positioning our client at regional green summits.'
  }
];

const projectsDataBn = [
  {
    id: 'proj-1',
    title: 'বিনিয়োগকারীর নতুন প্রকাশ',
    category: 'Strategy',
    clientName: 'মাহমুদ রহমান',
    location: 'গুলশান-২, ঢাকা',
    year: '২০২৫',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    description: 'একজন শান্ত অ্যাঞ্জেল ইনভেস্টরকে দেশীয় টেক স্টার্টআপের অন্যতম পথপ্রদর্শক হিসেবে পরিচিত করিয়েছি। ৩টি বিখ্যাত মূল বক্তব্য নিশ্চিত করে লিংকডইন ফলোয়ার ৩৪০% বাড়িয়েছি।'
  },
  {
    id: 'proj-2',
    title: 'হেঁটেচলা আধুনিক রিয়েল এস্টেট',
    category: 'Branding',
    clientName: 'নুসরত জাহান',
    location: 'ধানমণ্ডি, ঢাকা',
    year: '২০২৫',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    description: 'একজন শীর্ষস্থানীয় রিয়েল এস্টেটের উত্তরাধিকারীর জন্য অত্যন্ত মার্জিত এবং চমৎকার ব্যক্তিগত ভিজ্যুয়াল আইডেন্টিটি স্থাপন করেছি, যা তাকে স্থাপত্য জগতে প্রশংসিত করেছে।'
  },
  {
    id: 'proj-3',
    title: 'ফিনটেক ডিকোপলিং লিডারশিপ',
    category: 'Research',
    clientName: 'জিশান আহমেদ',
    location: 'বনানী, ঢাকা',
    year: '২০২৬',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    description: 'দক্ষিণ এশিয়ার ডিসেন্ট্রালাইজড ফাইন্যান্স সেক্টরে বিশ্বস্ত গবেষণা প্রবন্ধের সমন্বয় ঘটিয়ে ক্লায়েন্টকে জাতীয় অর্থনৈতিক নীতি নির্ধারণী স্তরে উপদেষ্টা হিসেবে আত্মপ্রকাশ করিয়েছি।'
  },
  {
    id: 'proj-4',
    title: 'ই-কমার্স উদ্যোক্তার সিগনেচার কভারেজ',
    category: 'Strategy',
    clientName: 'সাজিদ করিম',
    location: 'উত্তরা, ঢাকা',
    year: '২০২৫',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    description: 'টেকসই আন্তর্জাতিক সাপ্লাই চেইন থিমের উপর ফোকাস করে একটি সুনির্দিষ্ট কন্টেন্ট ক্যাম্পেইন পরিচালনা করে আমাদের ক্লায়েন্টের জন্য সরাসরি চুক্তি নিশ্চিত করেছি।'
  },
  {
    id: 'proj-5',
    title: 'এস্থেটিক মেডিকেল ডিরেক্টর ব্র্যান্ড',
    category: 'Branding',
    clientName: 'ডা. তাসনিম কবির',
    location: 'গুলশান-১, ঢাকা',
    year: '২০২৬',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    description: 'ডা. কবিরের নিজস্ব দক্ষতা প্রমাণের মাধ্যমে তাঁকে ঢাকার অন্যতম সেরা লাক্সারি স্কিনকেয়ার অ্যাডভাইজার হিসেবে আত্মপ্রকাশ করানো হয়েছে।'
  },
  {
    id: 'proj-6',
    title: 'গ্রিন ইনফ্রাস্ট্রাকচার ইনিশিয়েটিভ',
    category: 'Research',
    clientName: 'ফারহান চৌধুরী',
    location: 'ঢাকা সেনানিবাস',
    year: '২০২৫',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    description: 'কার্বন নিঃসরণ ও গ্রিন প্রজেক্ট উন্নয়নের ওপর স্থানীয় ডেটাভিত্তিক সমন্বয় ঘটিয়ে ক্লায়েন্টকে সবুজ জ্বালানি জলবায়ু সামিটে সম্মানিত ফোকাল পয়েন্ট হিসেবে প্রমোট করেছি।'
  }
];

const awardsDataEn = [
  {
    id: 'award-1',
    title: 'Best Personal Brand Campaign',
    category: 'Consulting Excellence',
    year: '2025',
    organization: 'South Asia Advisory Guild'
  },
  {
    id: 'award-2',
    title: 'Elite Executive Positioning Trophy',
    category: 'PR & Media Strategy',
    year: '2025',
    organization: 'Dhaka Brand Forum'
  },
  {
    id: 'award-3',
    title: 'Luxury Identity Craft Award',
    category: 'Visual & Digital Design',
    year: '2026',
    organization: 'Golden Pixel South Asia'
  }
];

const awardsDataBn = [
  {
    id: 'award-1',
    title: 'সেরা পার্সোনাল ব্র্যান্ডিং ক্যাম্পেইন',
    category: 'কনসাল্টিং শ্রেষ্ঠত্ব',
    year: '২০২৫',
    organization: 'সাউথ এশিয়া অ্যাডভাইজরি গিল্ড'
  },
  {
    id: 'award-2',
    title: 'এলিট এক্সিকিউটিভ পজিশনিং ট্রফি',
    category: 'পিআর ও মিডিয়া কৌশল',
    year: '২০২৫',
    organization: 'ঢাকা ব্র্যান্ড ফোরাম'
  },
  {
    id: 'award-3',
    title: 'লাক্সারি আইডেন্টিটি ক্রাফট অ্যাওয়ার্ড',
    category: 'ভিজ্যুয়াল ও ডিজিটাল ডিজাইন',
    year: '২০২৬',
    organization: 'গোল্ডেন পিক্সেল সাউথ এশিয়া'
  }
];

const testimonialsDataEn = [
  {
    id: 'test-1',
    quote: 'Amar Signature completely transformed how our industry perceives me. We walked in as operators and came out as the undisputed authorities of South Asian VC. The ROI surpassed my highest expectations.',
    author: 'Mahmud Rahman',
    role: 'Managing Partner',
    company: 'Bengal Horizon Ventures',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    quote: 'Our brand identity is now on par with ultra-premium Swiss or British design studios. The advisory team at Amar Signature brings elite corporate rigor fused with artistic excellence.',
    author: 'Nusrat Jahan',
    role: 'Chief Design Executive',
    company: 'Dhanmondi Signature Living',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    quote: 'Their thought-leadership ghostwriting is spectacular. Every article reads exactly like my individual perspective, but elevated to pristine, publication-grade literary standards.',
    author: 'Zeeshan Ahmed',
    role: 'Founder & CEO',
    company: 'FinTech Sovereign BD',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150'
  }
];

const testimonialsDataBn = [
  {
    id: 'test-1',
    quote: 'আমার সিগনেচার সম্পূর্ণভাবে বদলে দিয়েছে মানুষ আমার ব্যাপারে কীরূপ চিন্তা রাখে। আমরা কাজ শুরু করেছিলাম সাধারণ উদ্যোক্তা হিসেবে, আর এখন আমাদের পুরো সেক্টরে আমরা অনন্য আইকন। বিনিয়োগের সেরা আয় পেয়েছি।',
    author: 'মাহমুদ রহমান',
    role: 'ম্যানেজিং পার্টনার',
    company: 'বেঙ্গল হরাইজন ভেঞ্চারস',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    quote: 'আমাদের নতুন ব্র্যান্ড আইডেন্টিটি এখন বিশ্বমানের সুইস বা ব্রিটিশ লাক্সারি স্টুডিওগুলোর সমতুল্য। আমার সিগনেচারের দলটি কর্পোরেট নিয়মতান্ত্রিকতার সাথে নান্দনিক শ্রেষ্ঠত্বের এক অনন্য মেলবন্ধন ঘটিয়েছে।',
    author: 'নুসরত জাহান',
    role: 'চিফ ডিজাইন এক্সিকিউটিভ',
    company: 'ধানমণ্ডি সিগনেচার লিভিং',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    quote: 'তাদের চিন্তাশীল ঘোস্টরাইটিং এককথায় অসাধারণ। প্রতিটি আর্টিকেল অবিকল আমার ব্যক্তিগত মতামত প্রতিফলিত করে, তবে সেটিকে সাহিত্যের এক অনন্য অভিজাত কলামের পর্যায়ে উন্নীত করে প্রফেশনাল টিম।',
    author: 'জিশান আহমেদ',
    role: 'প্রতিষ্ঠাতা ও সিইও',
    company: 'ফিনটেক সোভারেন বিডি',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150'
  }
];

const blogPostsDataEn = [
  {
    id: 'blog-1',
    title: 'The Dhaka Power Loop: Why Bangladesh’s Top Founders are Investing in Personal Branding',
    category: 'Insights',
    date: 'June 02, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    excerpt: 'In competitive corporate environments like Gulshan and Banani, personal trust is of higher value than traditional advertising. Here is a look at the data.'
  },
  {
    id: 'blog-2',
    title: 'Crafting Your Monogram: The Subtle Aesthetic of Ultra-High-Net-Worth Visual Signature',
    category: 'Design & Style',
    date: 'May 28, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Loud luxury is fleeting. Discover how silent luxury layout, negative space ratios, and gold typography accents dictate power and confidence.'
  },
  {
    id: 'blog-3',
    title: 'The Ghost in the Executive Suite: Ultimate Guide to Thought-Leadership Strategy',
    category: 'Strategy & Leadership',
    date: 'May 14, 2026',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    excerpt: 'How top-tier CEOs allocate only 2 hours a month to generate a massive, consistent digital and print media footprint.'
  }
];

const blogPostsDataBn = [
  {
    id: 'blog-1',
    title: 'ঢাকার পাওয়ার লুপ: কেনো শীর্ষস্থানীয় কর্পোরেট প্রতিষ্ঠাতাগণ নিজেদের ব্র্যান্ডিংয়ে বিনিয়োগ করছেন',
    category: 'বিশ্লেষণ',
    date: '০২ জুন, ২০২৬',
    readTime: '৬ মিনিট রিড',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    excerpt: 'গুলশান এবং বনানীর মতো তীব্র প্রতিযোগিতামূলক কর্পোরেট পরিবেশে সুনির্দিষ্ট ব্যক্তিগত আস্থার মূল্য সাধারণ বিজ্ঞাপনের চেয়ে অনেক গুণ বেশি। বিস্তর ডেটাসহ দেখুন।'
  },
  {
    id: 'blog-2',
    title: 'ব্যক্তিগত মনোগ্রাম রূপায়ন: শান্ত আভিজাত্যে ভরপুর দৃষ্টিনন্দন অত্যন্ত মর্যাদাপূর্ণ সিগনেচার স্টাইল',
    category: 'ডিজাইন ও আর্ট',
    date: '২৮ মে, ২০২৬',
    readTime: '৪ মিনিট রিড',
    imageUrl: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600',
    excerpt: 'উচ্চকিত লৌকিকতা ক্ষণস্থায়ী। জানুন কীভাবে শব্দহীন নীরব আভিজাত্য, ডিজাইনে নেগেটিভ স্পেস এবং চমৎকার সোনার টাইপোগ্রাফি শক্তি ও আত্মবিশ্বাসের জানান দেয়।'
  },
  {
    id: 'blog-3',
    title: 'এক্সিকিউটিভ স্যুটের অন্তরালে: চিন্তাশীল নেতৃত্বের সুপরিকল্পিত দীর্ঘমেয়াদী আধুনিক গাইডলাইন',
    category: 'স্ট্র্যাটেজি ও নেতৃত্ব',
    date: '১৪ মে, ২০২৬',
    readTime: '৮ মিনিট রিড',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    excerpt: 'কীভাবে প্রথম সারির নির্বাহীরা প্রতি মাসে মাত্র ২ ঘণ্টা ব্যয় করে বিশাল, সুনির্দিষ্ট এবং অবিরাম কন্টেন্ট ও মিডিয়া প্রচার ধরে রাখেন।'
  }
];

const faqDataEn = [
  {
    id: 'faq-1',
    question: 'Who is Amar Signature designed for?',
    answer: 'We serve high-growth founders, venture capital partners, legacy family conglomerates, executive medical specialists, and top-tier directors who want to control their narratives and establish elite reputation authority.'
  },
  {
    id: 'faq-2',
    question: 'How do you preserve my individual authentic voice?',
    answer: 'We conduct a comprehensive 3-stage intake audit with voice recordings and strategic assessments to construct a custom Voice Matrix. Every article and post we draft flows perfectly from your personal insights, elevated by our professional editorial writers.'
  },
  {
    id: 'faq-3',
    question: 'Is my personal data and engagement confidential?',
    answer: 'Absolutely. We sign comprehensive non-disclosure agreements (NDAs) with all of our clients before commencing audits. All operations are kept completely confidential by default.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer offline public relations services in Bangladesh?',
    answer: 'Yes. We orchestrate elite media placements, profile features, podcast placements, and keynote bookings with key national newspapers, finance channels and private network forums in DAC.'
  }
];

const faqDataBn = [
  {
    id: 'faq-1',
    question: 'আমার সিগনেচার মূলত কাদের জন্য গঠন করা হয়েছে?',
    answer: 'আমরা সফল উদ্যোক্তা, ভেঞ্চার ক্যাপিটাল পার্টনার, পরিবারিক ঐতিহ্যবাহী ব্যবসায়িক গোষ্ঠী, জ্যেষ্ঠ স্পেশালিস্ট চিকিৎসক এবং প্রথম সারির কর্পোরেট প্রধানদের জন্য কাজ করি যারা নিজেদের পরিচিতি গুছিয়ে মর্যাদার শীর্ষে থাকতে চান।'
  },
  {
    id: 'faq-2',
    question: 'কীভাবে আপনারা কাজের মাঝে আমার নিজস্ব ও অকৃত্রিম কণ্ঠস্বর ফুটিয়ে তোলেন?',
    answer: 'কাজ শুরুর পূর্বে আমরা ৩ স্তরের বিশদ অডিট ও সাক্ষাৎকার গ্রহণ করি এবং সুনির্দিষ্ট ভয়েস ম্যাট্রিক্স তৈরি করি। আমাদের তৈরি প্রতিটি আর্টিকেল আপনার চিন্তাভাবনাকে সাহিত্যের মার্জিত ও পেশাদার রূপ দেয়।'
  },
  {
    id: 'faq-3',
    question: 'আমার ব্যক্তিগত ডেটা এবং কাজের বিবরণী কি পুরোপুরি গোপন রাখা হয়?',
    answer: 'অবশ্যই। কাজ শুরুর পূর্বেই আমরা প্রতিটি গ্রাহকের সাথে আইনি নন-ডিসক্লোজার চুক্তি (NDA) সম্পাদন করি। প্রতিটি মিশন এবং ক্লায়েন্টের বিবরণী ডিফল্টভাবেই শতভাগ গোপন ও সুরক্ষিত।'
  },
  {
    id: 'faq-4',
    question: 'আপনারা কি বাংলাদেশে অফলাইন পাবলিক রিলেশন্স (PR) সেবাদান করেন?',
    answer: 'হ্যাঁ। প্রথম সারির জাতীয় সংবাদপত্র, কর্পোরেট অর্থনৈতিক জার্নাল, প্রথম সারির পডকাস্ট চ্যানেল এবং ভিআইপি নেটওয়ার্কগুলোতে মর্যাদাপূর্ণ বুকিং ও সাক্ষাৎকার আয়োজন আমরা সার্থকভাবে পরিচালনা করি।'
  }
];

const teamDataEn = [
  {
    id: 'member-1',
    name: 'Amar Chowdhury',
    role: 'Principal Partner & Luxury Strategist',
    bio: 'Former global consultant advising on brand legacy, luxury design, and high-stakes executive positions in London and Dhaka.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'member-2',
    name: 'Samira Karim',
    role: 'Head of Content & Voice Architecture',
    bio: 'Expert editorial director and former business journalist specialized in translating high-level executive thoughts into clean masterpieces.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
  }
];

const teamDataBn = [
  {
    id: 'member-1',
    name: 'আমার চৌধুরী',
    role: 'প্রিন্সিপাল পার্টনার ও লাক্সারি স্ট্র্যাটেজিস্ট',
    bio: 'লন্ডন এবং ঢাকায় কাজ করা প্রাক্তন গ্লোবাল উপদেষ্টা; পার্সোনাল ব্র্যান্ড লেগ্যাসি, নীরব বিলাসবহুল ডিজাইন এবং এলিট ব্যক্তিত্ব রূপায়নে বিশেষ অভিজ্ঞ।',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'member-2',
    name: 'সামিরা করিম',
    role: 'হেড অফ কন্টেন্ট ও ভয়েস আর্কিটেকচার',
    bio: 'অভিজ্ঞ সম্পাদকীয় পরিচালক এবং প্রাক্তন বিজনেস সাংবাদিক; উদ্যোক্তাদের জটিল ও দূরদর্শী চিন্তাকে চমৎকার বিশ্বমানের লেখনীতে অনুবাদ করতে অনন্য পারদর্শী।',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
  }
];

const strengthsEn = [
  { label: 'Exclusivity Guaranteed', desc: 'Accepting only 2 leaders per market sector annually.' },
  { label: 'Strategic Integrity', desc: 'Protected by rigorous corporate non-disclosure.' },
  { label: 'Elite Network', desc: 'Direct connection to Dhaka’s top editorial platforms.' },
  { label: 'Artisan Finish', desc: 'Tailored typography & monograms designed from scratch.' }
];

const strengthsBn = [
  { label: 'একচেটিয়া অনন্য অঙ্গীকার', desc: 'প্রতিটি সুনির্দিষ্ট মার্কেট খাতে প্রতি বছর সর্বোচ্চ ২ জন সম্মানিত গ্রাহক গ্রহণ করা হয়।' },
  { label: 'কৌশলগত পরম সততা', desc: 'কঠোর ও আইনি কর্পোরেট নন-ডিসক্লোজার চুক্তি (NDA) দ্বারা সম্পূর্ণ সুরক্ষিত।' },
  { label: 'অভিজাত নেটওয়ার্ক', desc: 'দেশের শীর্ষস্থানীয় প্রিন্ট, অনলাইন ও টেলিভিশন সম্পাদকীয় মাধ্যমের সাথে চমৎকার সরাসরি যোগাযোগ।' },
  { label: 'নিপুণ কারুকার্য', desc: 'একেবারে শূন্য থেকে শুরু করে সুনির্দিষ্ট কাস্টম টাইপোগ্রাফি ও মর্যাদাপূর্ণ মনোগ্রাম ডিজাইন।' }
];

export function ThemeLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('as_language');
    return (saved as Language) || 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('as_theme');
    return (saved as Theme) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('as_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('as_theme', theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
  }, [theme]);

  const t = (key: string): string => {
    const currentDict = uiTranslations[language];
    if (currentDict && currentDict[key]) {
      return currentDict[key];
    }
    // Fallback to English dictionary
    const fallbackDict = uiTranslations['en'];
    return (fallbackDict && fallbackDict[key]) ? fallbackDict[key] : key;
  };

  const packages = language === 'bn' ? packagesDataBn : packagesDataEn;
  const services = language === 'bn' ? servicesDataBn : servicesDataEn;
  const projects = language === 'bn' ? projectsDataBn : projectsDataEn;
  const awards = language === 'bn' ? awardsDataBn : awardsDataEn;
  const testimonials = language === 'bn' ? testimonialsDataBn : testimonialsDataEn;
  const blogPosts = language === 'bn' ? blogPostsDataBn : blogPostsDataEn;
  const faq = language === 'bn' ? faqDataBn : faqDataEn;
  const team = language === 'bn' ? teamDataBn : teamDataEn;
  const strengths = language === 'bn' ? strengthsBn : strengthsEn;

  return (
    <ThemeLanguageContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      t,
      packages,
      services,
      projects,
      awards,
      testimonials,
      blogPosts,
      faq,
      team,
      strengths,
      teamMembers: team,
      faqData: faq,
      strengthsData: strengths,
      packagesData: packages,
      servicesData: services,
      projectsData: projects,
      awardsData: awards,
      testimonialsData: testimonials,
      blogPostsData: blogPosts
    }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
}
