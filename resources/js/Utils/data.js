import {
  ArticleIcon,
  BookIcon,
  FileIcon,
  FilterIcon,
  GlobeIcon,
  GridPlusIcon,
  HomeIcon,
  LayoutIcon,
  PageIcon,
  SliderIcon,
  TagIcon,
  UserGroup,
  Users,
} from '@/Components/Frontend/icons';

export const feature = {
  name: 'Reform Monitoring Platform',
  image: '/assets/Policy-Reform-Banner-green-sized.webp',
  link: '/reform-monitoring-platform',
};

const font_heading =
  'Figtree, ui-serif, system-ui, serif, "Apple Color Emoji", -apple-system, BlinkMacSystemFont, "Segoe UI Emoji",Segoe UI Symbol, "Noto Color Emoji"';

const font_body =
  'Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", -apple-system, BlinkMacSystemFont, "Segoe UI Emoji",Segoe UI Symbol, "Noto Color Emoji"';

const font_mono = "'IBM Plex Mono', Consolas, monospace";

export const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

export const customTheme = {
  colors: {
    darkgray: {
      base: '#6D6D6D',
      light: '#DCD7CA',
      lighter: '#F5EFE0',
    },
    primary: {
      50: '#e1f8ff',
      100: '#bee4f1',
      200: '#9ad1e5',
      300: '#74bed9',
      400: '#50acce',
      500: '#3892b4',
      600: '#29728d',
      700: '#1a5165',
      800: '#09313f',
      900: '#001219',
    },
    accent: {
      50: '#e3f7fb',
      100: '#cbdfe3',
      200: '#afc8ce',
      300: '#92b2ba',
      400: '#759ca5',
      500: '#5b838b',
      600: '#45666d',
      700: '#30494f',
      800: '#192d31',
      900: '#001115',
    },
    light: {
      50: '#f0f4f3',
      100: '#d9dcdb',
      200: '#bec6c3',
      300: '#a3b0ac',
      400: '#879a94',
      500: '#6d807a',
      600: '#55645f',
      700: '#3e4744',
      800: '#252b29',
      900: '#0b0f0d',
    },
    youtube: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    headerBg: '#d9d9d9',
    footerBg: '#262626',
    linkColor: 'rgba(8 ,126, 164, 1)',
  },
  fonts: {
    heading: font_heading,
    body: font_body,
    mono: font_mono,
  },
};

export const memberInstitutions = [
  {
    id: 1,
    country: 'Bangladesh',
    institutes: [
      {
        id: 1,
        member_name:
          'Bangladesh Environmental Lawyers’ Association (BELA), Dhaka',
        member_website_link: 'https://www.belabangla.org/',
      },
      {
        id: 2,
        member_name: 'Unnayan Shamannay, Dhaka',
        member_website_link: 'https://www.unsy.org/',
      },
    ],
  },
  {
    id: 2,
    country: 'India',
    institutes: [
      {
        id: 1,
        member_name: 'Citizen consumer and civic Action Group (CAG), Chennai',
        member_website_link: 'https://www.cag.org.in/',
      },
      {
        id: 2,
        member_name: 'Consumer Unity & Trust Society (CUTS), Jaipur',
        member_website_link: 'https://cuts-international.org/',
      },
      {
        id: 3,
        member_name: 'Development Research and Action Group (DRAG), New Delhi',
        member_website_link: 'https://dragindia.org/',
      },
    ],
  },
  {
    id: 3,
    country: 'Nepal',
    institutes: [
      {
        id: 1,
        member_name:
          'Society for Legal and Environmental Analysis and Development Research (LEADERS), Kathmandu',
        member_website_link: 'https://leadersnepal.org.np/',
      },
      {
        id: 2,
        member_name:
          'Forum for Protection of Public Interest (Pro Public), Kathmandu',
        member_website_link: 'http://propublic.org/',
      },
    ],
  },
  {
    id: 4,
    country: 'Pakistan',
    institutes: [
      {
        id: 1,
        member_name:
          'Journalists for Democracy and Human Rights (JDHR), Islamabad',
        member_website_link: 'http://www.jdhr.org/',
      },
      {
        id: 2,
        member_name:
          'Sustainable Development Policy Institute (SDPI), Islamabad',
        member_website_link: 'https://sdpi.org/',
      },
    ],
  },
  {
    id: 5,
    country: 'Sri Lanka',
    institutes: [
      {
        id: 1,
        member_name: 'Institute of Policy Studies (IPS), Colombo',
        member_website_link: 'https://www.ips.lk/',
      },
      {
        id: 2,
        member_name: 'Law & Society Trust (LST), Colombo',
        member_website_link: 'https://www.lstlanka.org/',
      },
    ],
  },
];

export const aboutMenuData = {
  introText:
    'South Asia Watch on Trade, Economics and Environment (SAWTEE) was launched in 1994 as a loose regional network of non-governmental organizations (NGOs) from five South Asian countries: Bangladesh, India, Nepal, Pakistan and Sri Lanka. Taking into consideration the emerging need for fair, effective and meaningful integration of South Asian countries into the regional as well as global economies, the major motto of this regional initiative has been “GLOBALIZATION YES, BUT WITH SAFETY NETS”',
  introImage: '/assets/Airports_Network_Map.png',
};

export const DashBoardMenuItems = [
  {
    name: 'Dashboard',
    icon: HomeIcon,
    route: 'admin.dashboard',
  },
  {
    name: 'Website',
    icon: GlobeIcon,
    route: 'home',
  },
  {
    name: 'Menu',
    icon: GridPlusIcon,
    route: 'admin.menus.index',
  },
  {
    name: 'Pages',
    icon: PageIcon,
    route: 'admin.pages.index',
  },
  {
    name: 'Sections',
    icon: LayoutIcon,
    route: 'admin.sections.index',
  },
  {
    name: 'Posts',
    icon: ArticleIcon,
    route: 'admin.posts.index',
  },
  {
    name: 'Themes',
    icon: TagIcon,
    route: 'admin.themes.index',
  },
  {
    name: 'Tags',
    icon: TagIcon,
    route: 'admin.tags.index',
  },
  {
    name: 'Categories',
    icon: FilterIcon,
    route: 'admin.categories.index',
  },
  {
    name: 'Publications',
    icon: BookIcon,
    route: 'admin.publications.index',
  },
  {
    name: 'Research',
    icon: FileIcon,
    route: 'admin.research.index',
  },
  {
    name: 'Team Members',
    icon: Users,
    route: 'admin.teams.index',
  },
  {
    name: 'Slider',
    icon: SliderIcon,
    route: 'admin.sliders.index',
  },
  {
    name: 'Subscribers',
    icon: UserGroup,
    route: 'admin.subscribers.list',
  },
];

export const primarMenu = [
  {
    title: 'Home',
    url: '/',
    children: null,
  },
  {
    title: 'Know Us',
    url: '/about',
    children: [
      {
        title: 'Genesis',
        url: '/about#genesis',
        children: null,
      },
      {
        title: 'Registration and Recognition',
        url: '/about#registration-and-recognition',
        children: null,
      },
      {
        title: 'Governance Structure',
        url: '/about#governance-structure',
        children: null,
      },
      {
        title: 'Vision, Goal and Objectives',
        url: '/about#vision-goal-and-objectives',
        children: null,
      },
      {
        title: 'Strategies',
        url: '/about#strategies',
        children: null,
      },
      {
        title: 'Resources',
        url: '/about#resources',
        children: null,
      },
      {
        title: 'Member Institutions',
        url: '/about#member-institutions',
        children: null,
      },
    ],
    introText:
      'South Asia Watch on Trade, Economics and Environment (SAWTEE) was launched in 1994 as a loose regional network of non-governmental organizations (NGOs) from five South Asian countries: Bangladesh, India, Nepal, Pakistan and Sri Lanka. Taking into consideration the emerging need for fair, effective and meaningful integration of South Asian countries into the regional as well as global economies, the major motto of this regional initiative has been “GLOBALIZATION YES, BUT WITH SAFETY NETS”',
    introImage: '/assets/Airports_Network_Map.png',
    // experts: [...staticExperts],
  },
  {
    title: 'Our Work',
    url: '/our-work',
    children: [
      {
        title: 'Thematic Areas',
        url: '/our-work#thematic-areas',
        children: [
          {
            title: 'Economic and social reform, growth and poverty',
            url: '/our-work#theme1',
            children: null,
          },
          {
            title: 'Trade integration and supply-side constrants',
            url: '/our-work#theme2',
            children: null,
          },
          {
            title: 'Trade and climate change',
            url: '/our-work#theme3',
            children: null,
          },
          {
            title:
              'Agriculture policies, biodiversity management and food security',
            url: '/our-work#theme4',
            children: null,
          },
          {
            title: 'Competition, regulation and competitiveness',
            url: '/our-work#theme5',
            children: null,
          },
          {
            title: 'Financial resource management',
            url: '/our-work#theme6',
            children: null,
          },
          {
            title: 'Remittance and development',
            url: '/our-work#theme7',
            children: null,
          },
          {
            title: 'Covid-19',
            url: '/our-work#theme8',
            children: null,
          },
          {
            title: "Advancing LDCs' Trade Interest",
            url: '/our-work#theme9',
            children: null,
          },
        ],
      },
      {
        title: 'Programmes',
        url: '/category/programme',
        children: [
          {
            title: 'Ongoing Programmes',
            url: '/category/ongoing-programmes',
            children: null,
          },
          {
            title: 'Completed Programmes',
            url: '/category/completed-programmes',
            children: null,
          },
        ],
      },
      {
        title: 'Research',
        url: '/category/research',
        children: null,
      },
    ],
  },
  {
    title: 'Publications',
    url: '/category/publications',
    children: [
      {
        title: 'Trade Insight',
        url: '/category/publications/trade-insight',
        children: null,
      },
      {
        title: 'Policy Brief',
        url: '/category/publications/policy-brief',
        children: null,
      },
      {
        title: 'Briefing Paper',
        url: '/category/publications/briefing-paper',
        children: null,
      },
      {
        title: 'Discussion Paper',
        url: '/category/publications/discussion-paper',
        children: null,
      },
      {
        title: 'Research Brief',
        url: '/category/publications/research-brief',
        children: null,
      },
      {
        title: 'Books',
        url: '/category/publications/books',
        children: null,
      },
      {
        title: 'Working Paper',
        url: '/category/publications/working-paper',
        children: null,
      },
      {
        title: 'Others',
        url: '/category/publications/others',
        children: null,
      },
      {
        title: 'Publications in Nepali',
        url: '/category/publications/publication-in-nepali',
        children: [
          {
            title: 'Nepali Briefing Paper',
            url: '/category/publications/publications-in-nepali/nepali-briefing-paper',
            children: null,
          },
          {
            title: 'Nepali Policy Brief',
            url: '/category/publications/publications-in-nepali/nepali-policy-brief',
            children: null,
          },
          {
            title: 'Nepali Newsletters',
            url: '/category/publications/publications-in-nepali/nepali-newsletters',
            children: [
              {
                title: 'Swachha Pratispardha',
                url: '/category/publications/publications-in-nepali/nepali-newsletters/swachha-pratispardha',
                children: null,
              },
              {
                title: 'Byapar ra Bikash',
                url: '/category/publications/publications-in-nepali/nepali-newsletters/byapar-ra-bikash',
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Policy Research',
    url: '/category/featured-events',
    children: null,
  },
];

export const FooterMenu = [
  {
    title: 'Contact Us',
    url: '/contact',
    children: [
      {
        title: 'Phone: +977-1-4544438',
        url: 'tel:+977-1-4544438',
      },
      {
        title: 'Fax: +977-1-4544570',
        url: 'fax:+977-1-4544570',
      },
      {
        title: 'Email: sawtee@sawtee.org',
        url: 'mailto:sawtee@sawtee.org',
      },
      {
        title: 'Address: Tukucha Marg, Baluwatar, Kathmandu',
        url: null,
      },
      {
        title: 'P.O Box: 19366',
        url: null,
      },
    ],
  },
  {
    title: 'Publications',
    url: '/category/publications',
    children: [
      {
        title: 'Trade Insight',
        url: '/category/publications/trade-insight',
      },
      {
        title: 'Policy Brief',
        url: '/category/publications/policy-brief',
      },
      {
        title: 'Books',
        url: '/category/publications/books',
      },
      {
        title: 'Briefing Paper',
        url: '/category/publications/briefing-paper',
      },
      {
        title: 'Discussion Paper',
        url: '/category/publications/discussion-paper',
      },
    ],
  },
  {
    title: 'Useful Links',
    url: null,
    children: [
      {
        title: 'InFocus',
        url: '/category/infocus',
      },
      {
        title: 'Work with Us',
        url: '/career',
      },
      {
        title: 'Contact Us',
        url: '/contact',
      },
      {
        title: 'Newsletters',
        url: '/category/newsletters',
      },
      {
        title: 'SAES',
        url: 'https://sawtee.org/saes',
      },
    ],
  },
];

export const socialMenu = [
  {
    name: 'twitter',
    link: 'https://www.twitter.com/SAWTEENP/',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/sawteenp/',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/sawteenp/',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/@sawteenp/',
  },
];

export const mobileMenu = [
  {
    title: 'Home',
    url: '/',
    children: null,
  },
  {
    title: 'Know Us',
    url: '/about',
    children: null,
  },
  {
    title: 'Our Work',
    url: '/our-work',
    children: [
      {
        title: 'Thematic Areas',
        url: '/our-work#thematic-areas',
        children: null,
      },
      {
        title: 'Programmes',
        url: '/category/programme',
        children: [
          {
            title: 'Ongoing Programmes',
            url: '/category/ongoing-programmes',
            children: null,
          },
          {
            title: 'Completed Programmes',
            url: '/category/completed-programmes',
            children: null,
          },
        ],
      },
      {
        title: 'Research',
        url: '/category/research',
        children: null,
      },
    ],
  },
  {
    title: 'Publications',
    url: '/category/publications',
    children: [
      {
        title: 'Trade Insight',
        url: '/category/publications/trade-insight',
        children: null,
      },
      {
        title: 'Policy Brief',
        url: '/category/publications/policy-brief',
        children: null,
      },
      {
        title: 'Briefing Paper',
        url: '/category/publications/briefing-paper',
        children: null,
      },
      {
        title: 'Discussion Paper',
        url: '/category/publications/discussion-paper',
        children: null,
      },
      {
        title: 'Research Brief',
        url: '/category/publications/research-brief',
        children: null,
      },
      {
        title: 'Books',
        url: '/category/publications/books',
        children: null,
      },
      {
        title: 'Working Paper',
        url: '/category/publications/working-paper',
        children: null,
      },
      {
        title: 'Others',
        url: '/category/publications/others',
        children: null,
      },
      {
        title: 'Publications in Nepali',
        url: '/category/publications/publication-in-nepali',
        children: [
          {
            title: 'Nepali Briefing Paper',
            url: '/category/publications/publications-in-nepali/nepali-briefing-paper',
            children: null,
          },
          {
            title: 'Nepali Policy Brief',
            url: '/category/publications/publications-in-nepali/nepali-policy-brief',
            children: null,
          },
          {
            title: 'Nepali Newsletters',
            url: '/category/publications/publications-in-nepali/nepali-newsletters',
            children: [
              {
                title: 'Swachha Pratispardha',
                url: '/category/publications/publications-in-nepali/nepali-newsletters/swachha-pratispardha',
                children: null,
              },
              {
                title: 'Byapar ra Bikash',
                url: '/category/publications/publications-in-nepali/nepali-newsletters/byapar-ra-bikash',
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Policy Research',
    url: '/category/featured-events',
    children: null,
  },
];
