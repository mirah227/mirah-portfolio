import { ContributedProject, WhatIBringValue, CommunityReview } from '../types';

/**
 * ==============================================================================
 * MIRAH'S WEB3 PROJECTS & VALUE PROPOSITIONS DATA
 * ==============================================================================
 * Edit your projects, experience, screenshots, and review details here.
 * Any unsupplied field is hidden automatically or displayed with an unobtrusive notice.
 */

export const WHAT_I_BRING_VALUES: WhatIBringValue[] = [
  {
    id: 'welcoming',
    number: '01',
    title: 'A Community That Feels Welcoming',
    description:
      'First impressions matter. I help create a welcoming environment where new members can understand the project, find their place, and feel comfortable participating.',
    valueToProject:
      'Better onboarding and a more approachable community experience.',
  },
  {
    id: 'safer-space',
    number: '02',
    title: 'A Safer, More Organized Space',
    description:
      'A growing community needs structure. I help maintain community guidelines, monitor disruptive activity, address member concerns, and escalate issues that require the team\'s attention.',
    valueToProject:
      'A more organized environment where members can focus on meaningful conversations.',
  },
  {
    id: 'purposeful-engagement',
    number: '03',
    title: 'Engagement with Purpose',
    description:
      'Community activity should be more than messages and reaction counts. I support conversations, community initiatives, and interactive activities that encourage genuine participation.',
    valueToProject:
      'More opportunities to build relationships and keep members involved.',
  },
  {
    id: 'team-user-connection',
    number: '04',
    title: 'A Stronger Connection Between the Team and Its Users',
    description:
      'Community members often have questions, feedback, and concerns that matter. I help surface useful feedback, communicate updates clearly, and direct issues to the right people.',
    valueToProject:
      'Better communication and greater visibility into community needs.',
  },
];

export const CONTRIBUTED_PROJECTS: ContributedProject[] = [
  {
    id: 'sonoluminescence',
    name: 'Sonoluminescence',
    role: 'Website Developer & Social Media Manager',
    roles: ['Website Developer', 'Social Media Manager'],
    highlightStat: '4 → 300+ Community Members',
    description:
      "At Sonoluminescence, I worked across website development, social media management, and community growth. My role combined building for the project's online presence with helping it connect with a growing audience.\n\nOne of my key achievements was growing the community from just 4 members to over 300. This experience strengthened my understanding of community building, consistent engagement, and the importance of creating an online presence that gives people a reason to participate.",
    contributions: [
      "Developed the project's website.",
      'Managed social media activities and its online presence.',
      'Helped grow the community from 4 to 300+ members.',
      'Supported digital visibility and community engagement.',
    ],
    responsibilities: [
      'Website development and user interface design.',
      'Social media content scheduling, announcements, and channel moderation.',
      'Community growth strategy and onboarding new participants.',
    ],
    results: [
      'Grew community footprint from 4 to 300+ members.',
    ],
    images: [
      {
        id: 'sono-proof-1',
        url: '/assets/aistudio/IMG_20261026_220600_159_d3fc3336.jpg',
        title: 'Sonoluminescence Community Channel',
        caption: 'Sonoluminescence Telegram group milestone during growth sprint (Mirah as Admin, 104+ members milestone).',
        category: 'community',
      },
    ],
    projectUrl: '',
  },
  {
    id: 'agentbet',
    name: 'Agentbet',
    role: 'Community Moderator',
    roles: ['Community Moderator'],
    description:
      'At Agentbet, I contributed to the community side of the project as a moderator. My focus was on supporting a positive community environment, helping maintain order in conversations, and contributing to a better experience for members.',
    contributions: [
      'Community moderation and member support.',
    ],
    responsibilities: [
      'Active chat moderation and enforcement of community rules.',
      'Assisting community members with inquiries and platform updates.',
      'Escalating technical issues to core contributors.',
    ],
    results: [],
    images: [
      {
        id: 'agentbet-proof-1',
        url: '/assets/aistudio/IMG_20261028_105126_052_92cf2074.jpg',
        title: 'AgentBet Telegram Community',
        caption: 'AgentBet Telegram group with 417+ members, with Mirah active on community moderation and member support.',
        category: 'moderation',
      },
    ],
    projectUrl: 'https://agentbet.io',
  },
  {
    id: 'puralabs',
    name: 'Puralabs',
    role: '', // Editable: e.g. 'Community Contributor'
    description: '', // Editable: Add brief verified description
    responsibilities: [], // Editable: Add verified responsibilities
    contributions: [], // Editable: Add specific contributions
    results: [], // Editable: Add verified results if available
    images: [], // Editable: Add screenshot objects here
    projectUrl: '', // Optional: Official project link
  },
  {
    id: 'based-dogs',
    name: 'Based Dogs',
    role: '',
    description: '',
    responsibilities: [],
    contributions: [],
    results: [],
    images: [],
    projectUrl: '',
  },
  {
    id: 'daneng-ai',
    name: 'DANENG AI',
    role: '',
    description: '',
    responsibilities: [],
    contributions: [],
    results: [],
    images: [],
    projectUrl: '',
  },
  {
    id: 'xwonbet',
    name: 'XWONBET',
    role: '',
    description: '',
    responsibilities: [],
    contributions: [],
    results: [],
    images: [],
    projectUrl: '',
  },
];

/**
 * ==============================================================================
 * GENUINE REVIEWS & COMMUNITY FEEDBACK SCREENSHOTS
 * ==============================================================================
 * Mirah can upload real screenshot proof from Telegram, Discord, X, or email.
 * No fictional reviews or artificial testimonials are allowed.
 */
export const COMMUNITY_REVIEWS: CommunityReview[] = [
  {
    id: 'review-1',
    screenshotUrl: '/assets/aistudio/IMG_20261026_220952_679_8f1fa250.jpg',
    reviewerName: 'Project Lead / Team Collaborator',
    roleOrProject: 'Web3 Project Coordination',
    caption: 'Direct community feedback recognizing proactive support and dedication: "You are doing an amazing job. Once I get this page for you verified... cuz I know how bad we need it"',
  },
];

