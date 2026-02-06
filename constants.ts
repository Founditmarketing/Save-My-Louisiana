import { SectionData } from './types';

export const SECTIONS: SectionData[] = [
  {
    id: 'problem',
    menuLabel: 'The Problem',
    baseTitle: 'The Problem',
    imageSrc: 'https://picsum.photos/id/164/800/600', // Industrial/Infrastructure
    imageAlt: 'Industrial pipelines',
    videoUrl: 'https://www.youtube.com/embed/VqGIHbSprVk?si=VpPLjC7XAOnJuE73',
    environmental: {
      title: 'The Problem',
      subtitle: 'Industrial Overreach: A massive infrastructure expansion.',
      body: [
        'Louisiana is facing an unprecedented proposal to build a vast network of high-pressure carbon pipelines and underground injection wells. This isn\'t just about one project; it\'s a statewide transformation of our landscape.',
        'These projects propose to transport hazardous CO2 through our rural communities and inject it permanently beneath the wetlands that protect us from storms.'
      ],
      bulletPoints: [],
      fact: {
        statistic: "100+",
        label: "Miles of Pipe",
        description: "Initial proposals map out hundreds of miles of new pipeline corridors cutting through private property, farmland, and fragile coastal ecosystems."
      }
    },
    legal: {
      title: 'The Problem',
      subtitle: 'Property Rights: Your land is being targeted.',
      body: [
        'The core problem is the seizure of authority. Private corporations are seeking to use eminent domain—a power reserved for public good—to seize private land for private profit.',
        'Landowners are being pressured into signing perpetual easements that restrict what they can do with their own property forever, often without fully understanding the legal consequences.'
      ],
      bulletPoints: [
        'Eminent domain abuse.',
        'Perpetual easements.',
        'Loss of land control.'
      ],
      fact: {
        statistic: "Forever",
        label: "Control Lost",
        description: "Once an easement is signed for these projects, the restrictions on your land are typically permanent, binding you and all future generations."
      }
    }
  },
  {
    id: 'enemy',
    menuLabel: 'The Friction',
    baseTitle: 'The Friction',
    imageSrc: 'https://picsum.photos/id/433/800/600', // Business/Conflict
    imageAlt: 'Corporate building low angle',
    videoUrl: 'https://www.youtube.com/embed/MV7dfPqopjg?si=yQ0FnKc0nA6rTpNS',
    environmental: {
      title: 'The Friction',
      subtitle: 'Corporate Greed: Profit over preservation.',
      body: [
        'The driving force behind these projects is not environmental stewardship, but federal tax subsidies. Multinational corporations stand to make billions by burying waste in our state.',
        'These out-of-state entities view our rich biodiversity and cultural heritage as merely "pore space" on a balance sheet, willing to sacrifice our long-term health for their short-term quarterly gains.'
      ],
      cta: 'See the Lobbying Data',
      fact: {
        statistic: "$85",
        label: "Per Ton Tax Credit",
        description: "The 45Q federal tax credit pays corporations up to $85 per metric ton of CO2 stored. This subsidy is the primary economic engine driving these risky projects."
      }
    },
    legal: {
      title: 'The Friction',
      subtitle: 'Regulatory Capture: Who is protecting you?',
      body: [
        'We are challenging a system where regulators often fast-track permits for industry rather than scrutinizing them for public safety.',
        'Lobbyists have spent millions in Baton Rouge to craft legislation that favors pipeline developers, stripping away local control and leaving individual citizens to fend for themselves.'
      ],
      cta: 'Track the Money',
      fact: {
        statistic: "Zero",
        label: "Local Vetos",
        description: "Recent legislative pushes have attempted to strip local parishes of their right to zone or restrict these industrial projects, centralizing power at the state level."
      }
    }
  },
  {
    id: 'risk',
    menuLabel: 'What Is At Risk?',
    baseTitle: 'What Is At Risk?',
    imageSrc: '', // Image removed for this section
    imageAlt: 'Risk illustration',
    environmental: {
      title: 'What Is At Risk?',
      subtitle: 'The stakes could not be higher.',
      body: [
        'The proposed carbon capture buildout represents a fundamental threat to the delicate balance of life in Louisiana. It is not just an industrial project; it is an ecological gamble.',
      ],
      features: [
        {
          title: "Our Land",
          description: "Pipeline corridors will slash through forests, farmlands, and coastal wetlands, fragmenting habitats that are essential for biodiversity and storm protection.",
          backgroundImage: "/herosectionpic.png"
        },
        {
          title: "Our Water",
          description: "Injection wells threaten the Chicot Aquifer, the primary source of drinking and irrigation water for millions, with potential contamination from acidified waste.",
          backgroundImage: "/water.png"
        },
        {
          title: "Our Future",
          description: "Locking our state into a waste-disposal economy delays the transition to sustainable energy and leaves a toxic legacy for future generations.",
          backgroundImage: "/future.png"
        }
      ],
      fact: {
        statistic: "2M+",
        label: "Relies on Aquifer",
        description: "The Chicot Aquifer, which sits directly in the path of proposed injection zones, provides water for over two million people and nearly half of Louisiana's rice irrigation."
      }
    },
    legal: {
      title: 'What Is At Risk?',
      subtitle: 'A threat to ownership and sovereignty.',
      body: [
        'Beyond the physical dangers, these projects represent a dismantling of the legal protections that allow citizens to feel secure in their own homes and communities.',
      ],
      features: [
        {
          title: "Our Land",
          description: "Eminent domain is being weaponized to strip property rights from citizens, forcing pipelines onto private land against the will of the owners."
        },
        {
          title: "Our Water",
          description: "Legal protections for groundwater are being eroded, prioritizing industrial injection rights over the public's right to clean, safe water."
        },
        {
          title: "Our Future",
          description: "Long-term liability laws are shifting the burden of future accidents from the corporations to the taxpayers, creating a financial time bomb."
        }
      ],
      fact: {
        statistic: "10 Yrs",
        label: "To Transfer Liability",
        description: "Proposed legislation would allow corporations to transfer all liability for the waste to the State of Louisiana as soon as 10 years after injection operations cease."
      }
    }
  },
  {
    id: 'hope',
    menuLabel: 'Our Hope',
    baseTitle: 'Our Hope',
    imageSrc: 'https://picsum.photos/id/195/800/600', // Nature/Hope
    imageAlt: 'Green field sunrise',
    videoUrl: 'https://www.youtube.com/embed/-uL-2MkBA8E?si=VZtM_gY8gy8co7D6',
    galleryImages: ['/savemylouisianagallery.jpg', '/savemylouisianagallery1.jpg', '/savemylouisianagallery2.png'],
    environmental: {
      title: 'Our Hope',
      subtitle: 'Resilience & Restoration: Nature can recover.',
      body: [
        'Louisiana is resilient. We have seen our coast begin to heal when we stop the destruction. Our hope lies in a future where we prioritize restoration over industrialization.',
        'By blocking these hazardous projects, we buy time for real solutions—preserving our cypress swamps, restoring our barrier islands, and investing in a sustainable economy.'
      ],
      cta: 'View Restoration Plans',
      fact: {
        statistic: "100%",
        label: "Renewable Potential",
        description: "Louisiana has immense untapped potential for solar, wind, and geothermal energy that provides jobs without threatening our water or land rights."
      }
    },
    legal: {
      title: 'Our Hope',
      subtitle: 'The Power of Precedent: We can win in court.',
      body: [
        'History shows that when landowners unite, they win. Courts across the Midwest are already beginning to strike down eminent domain claims for private CO2 pipelines.',
        'Our hope is built on a strong legal defense. By challenging every permit and asserting our constitutional rights, we can set a precedent that protects private property for the next century.'
      ],
      cta: 'See Recent Victories',
      fact: {
        statistic: "Victory",
        label: "In The Midwest",
        description: "Recent court rulings in Iowa and South Dakota have blocked pipeline use of eminent domain, proving that the legal system can still protect the individual against the corporation."
      }
    }
  },
  {
    id: 'help',
    menuLabel: 'Your Help',
    baseTitle: 'Your Help',
    imageSrc: 'https://picsum.photos/id/445/800/600', // People/Handshake/Action
    imageAlt: 'Hands together',
    environmental: {
      title: 'Your Help',
      subtitle: 'Join the Coalition.',
      body: [
        'We need you. Whether you are a hunter, a birdwatcher, or just a concerned citizen, your voice matters. We are building a massive coalition to show Baton Rouge that Louisiana is not for sale.',
        'Sign the petition, attend a town hall, or simply share this message. Every action builds the momentum we need to stop these projects.'
      ],
      cta: 'Volunteer Now',
      fact: {
        statistic: "15,000",
        label: "Citizens United",
        description: "Join over 15,000 Louisianans who have already signed the pledge to protect our state from carbon waste dumping."
      }
    },
    legal: {
      title: 'Your Help',
      subtitle: 'Fund the Defense.',
      body: [
        'Legal battles against billion-dollar corporations are expensive. We provide pro-bono legal assistance to landowners who cannot afford to defend their rights alone.',
        'Your donation goes directly to expert witnesses, legal filing fees, and educational resources. Help us keep the courtroom doors open for every Louisiana family.'
      ],
      cta: 'Donate Today',
      fact: {
        statistic: "100%",
        label: "Direct Impact",
        description: "We are a non-profit organization. Every dollar you give goes directly to advocacy, legal defense, and community education."
      }
    }
  }
];