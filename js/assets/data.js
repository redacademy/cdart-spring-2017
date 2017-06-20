//HOME SCENE
// Pet Emergency Kit
export const petEmergencyKit = [
  'Preferred food for one week',
  'Water for one week',
  'Bowls for food and water',
  'I.D tags/tattoos/microchip',
  'Collar & leash',
  'Medication',
  'Litter, litter box, scoop',
  'Picture of you with your pet',
  'Cloth with your scent, bagged',
  'Out of area contact information',
  'Carrier',
  'Documents - Vaccinations – prescriptions - Veterinary contacts',
  'Emergency Boarding contacts',
]
// Forms
export const homeForms = [
  { title: 'Animal Intake Form', targetRoute: 'singleForm'},
  { title: 'Action Request Form', targetRoute: 'singleForm'},
  { title: 'Daily Animal Care Log', targetRoute: 'singleForm'},
  { title: 'Volunteer Sign-In Form', targetRoute: 'singleForm'},
  { title: 'Transportation Records', targetRoute: 'singleForm'},
  { title: 'Basic Animal Care', targetRoute: 'singleForm'}
]
// Procedures
export const procedureList = [
  { title: 'Daily Volunteer Duties', targetRoute: 'animalFlow'},
  { title: 'Animal Rescue Flow', targetRoute: 'animalFlow'},
  { title: 'Incident Command Flow', targetRoute: 'singleIncident'},
  { title: 'Reception Centre Setup', targetRoute: 'reception'},
  { title: 'Animal Condition Inspection', targetRoute: 'animalCondition'},
  { title: 'Basic Animal Care', targetRoute: 'animalCare'}
]
// Get Involved
export const getInvolved = [
  {
    title: `CDART's Mission`,
    icon: 'mission',
    image: 'mission',
    subsection: [
      {
        subtitle:'About the app',
        description: 'CDART Assist aims to help volunteers and pet owners be prepared for disasters and emergencies. The content of the app is developed by CDART.',
      },
      {
        subtitle:'Canadian Disaster Animal Response Team',
        description: 'CDART volunteers respond in times of disaster and emergencies when domestic animals are in need of rescue and sheltering. CDART is 100% volunteer based and 100% of our funding comes from donations.'
      }
    ],
    link:'https://www.google.ca/',
    linktext: 'Learn more at cdart.org'
  },
  {
    title: 'Take a Course',
    icon: 'course',
    image: 'course',
    subsection: [
      {
        subtitle:'Training',
        description: `CDART offers a basic introductory training coure and in-depth training courses for volunteers. \n \nYou don't have to be an existing registered CDART volunteer in order to be able to take this course. Some people take hte course first and then decide to become a volunteer.`,
      }
    ],
    link:'https://www.google.ca/',
    linktext: 'Course Information'
  },
  {
    title: 'Volunteer with CDART',
    icon: 'volunteer',
    image: 'volunteer',
    subsection: [
      {
        subtitle:'Training',
        description: `CDART offers a basic introductory training coure and in-depth training courses for volunteers. \n \nYou don't have to be an existing registered CDART volunteer in order to be able to take this course. Some people take hte course first and then decide to become a volunteer.`,
      }
    ],
    link:'https://www.google.ca/',
    linktext: 'Course Information'
  },
  {
    title: 'Donate',
    icon: 'donate',
    image: 'donate',
    subsection: [
      {
        subtitle:'Training',
        description: `CDART offers a basic introductory training coure and in-depth training courses for volunteers. \n \nYou don't have to be an existing registered CDART volunteer in order to be able to take this course. Some people take hte course first and then decide to become a volunteer.`,
      }
    ],
    link:'https://www.google.ca/',
    linktext: 'Course Information'
  },
  {
    title: '',
    icon: ''
  },
  {
    title: 'Rate this app',
    icon: 'rate',
    image: 'rate',
    subsection: [
      {
        subtitle:'Training',
        description: `CDART offers a basic introductory training coure and in-depth training courses for volunteers. \n \nYou don't have to be an existing registered CDART volunteer in order to be able to take this course. Some people take hte course first and then decide to become a volunteer.`,
      }
    ],
    link:'https://www.google.ca/',
    linktext: 'Learn more at cdart.org'
  }
]



export const incidentList = [
  {
    title: 'Command',
    text: 'The operations role controls and supports the tactical field response activities. They are responsible for determining the needed resources. ',
    color: 'green'
  },
  {
    title: 'Operations',
    text: 'The operations role controls and supports the tactical field response activities. They are responsible for determining the needed resources. ',
    color: 'red'
  },
  {
    title: 'Logistics',
    text: 'The operations role controls and supports the tactical field response activities. They are responsible for determining the needed resources. ',
    color: 'red'
  },
  {
    title: 'Planning',
    text: 'The operations role controls and supports the tactical field response activities. They are responsible for determining the needed resources. ',
    color: 'gold'
  },
  {
    title: 'Finance',
    text: 'The operations role controls and supports the tactical field response activities. They are responsible for determining the needed resources. ',
    color: 'blue'
  }
]

export const volunteerSupplyList = [
  'T-shirts , Jeans, sweatshirt (layers) ',
  'Appropriate ID',
  'Outerwear for expected conditions',
  'Footwear, closed toed – as required',
  'Personal hygiene items',
  'Medication – photocopy of prescriptions',
  'First aid kit (personal)',
  'Electronic devices and charger',
  'Multi tool (Leatherman)',
  'Sunscreen, hat, hydration device',
  'Earplugs, sleeping mask',
  'Sleeping bag, air mattress',
  'Sleepwear'
]

export const animalIntakeSupplyList = [
  'Binder One -  Animal intake forms',
  'Binder Two - dividers and page protectors',
  'Binder Three - Volunteer sign-in sheet and signage',
  'Shelter managers log book',
  'Daily animal care form',
  'Action request form',
  'Release of responsibility form',
  'Request to foster animal form',
  'Clipboards, file folder with extra forms',
  'Stationary Supplies, White-bard and marker',
  'Communication radios',
  'Camera and photo printer, paper',
  'Tyvek wrist bands for ID'
]

export const shelterSupplyList = [
  'Crates, XL, L, M',
  'First Aid Kit, boxes of gloves',
  'Can opener, bowls 2 per',
  'Spray bottles for 10% Bleach solution',
  'Dish Soap, Small squeegees, Paper towels',
  'Large garbage bags, Garbage cans with lids',
  'Sheets & towels, bedding',
  'Tool kit, long cable ties',
  'Slip leads, collars, leashes Muzzles',
  'Watering cans, poop bags',
  'Mop, buckets. Undiluted bleach',
  'Long-gauntlet bite gloves',
  'Duct tape, Caution tape Flashlights/headlamps',
  'Sharpie pens, Scissors',
  'Live capture traps - handled nets'
]

export const barnSupplyList = [
  'Halters, lead ropes',
  'Hoof picks, brush, combs',
  'Shovels & Forks',
  'Grass hay only',
  'Water buckets',
  'Radios',
  'Wheelbarrow',
  'Work gloves',
  'Equine forms',
  'Bedding'
]

export const communitySupplyResources = [
  'High visibility vests',
  'Kneww pads, safety glasses, gloves',
  'Kleenex, hand sanitizer',
  'Surgical masks for mortality recovery',
  'Vicks/ other scent to mask odours',
  'Litter pans and litter non clumping',
  'Extra leashes and collars',
  'Flashlights & extra batteries',
  'Self-closing bags - various sizes',
  'Extra stationary supplies',
  'Paper towels',
  'N95 respirator masks',
  'Other animal rescue groups contact information',
  'Veterinary clinics contact information',
  'Locate pet supply stores nearby'
]
export const checkLists = [
  {
    title: `Volunteer Packing Checklist`,
    subsection: volunteerSupplyList,
    subsectionText: `Volunteer Packing Checklist`,
    targetRoute: 'checklistsPage'
  },
  {
    title: `Animal Intake Supply List (First Aid Kit)`,
    subsection: animalIntakeSupplyList,
    subsectionText: `Animal Intake Supply List (First Aid Kit)`,
    targetRoute: 'checklistsPage'
  },
  {
    title: `Shelter Supply List, Human First Aid Kit`,
    subsection: shelterSupplyList,
    subsectionText: `Shelter Supply List (Including human first aid kits)`,
    targetRoute: 'checklistsPage'
  },
  {
    title: `Barn Supply List`,
    subsection: barnSupplyList,
    subsectionText: `Barn Supply List`,
    targetRoute: 'checklistsPage'
  },
  {
    title: `Community Supply Resources`,
    subsection: communitySupplyResources,
    subsectionText: `Community Supply Resources`,
    targetRoute: 'checklistsPage'
  },
]
export const intakeInstructions= [
  {
    title: 'Upon intake, every animal evacuee is:',
    descriptions: [
      'Photographed',
      'Tagged',
      'Assessed'
    ]
  },
  {
    title: 'Basic Info',
    descriptions: [
      'Date and times',
      'Your FIRST name – bottom left'
    ]
  },
  {
    title: 'Status of Animal On Arrival',
    descriptions: [
      'Brought in by CDART',
      'Non-Owner Drop off',
      'Brought in by Owner',
      'Owner Surrender',
      'Dead on Arrival'
    ]
  },
  {
    title: 'Owner Information',
    descriptions: [
      'Name',
      'ID',
      'Permanent vs. Temp'
    ]
  },
  {
    title: 'Animal Information',
    descriptions: [
      'EACH animal gets a form',
      'Describe as best as possible',
      'Intact – is important',
      'Immediate medical needs',
    ]
  },
  {
    title: 'Agency Information',
    descriptions: [
      'Ess file number',
      'PEP Task Number',
      'Confidentail File',
      'First Nations',
      'Media Permission',
    ]
  },
  {
    title: 'Status of Animal on Departure',
    descriptions: [
      'Completed when animal leaves – very important to remember!',
      'Get Signature',
      'Put your FIRST name on the bottom right space'
    ]
  }
]
