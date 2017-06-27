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
  {
    title: 'Animal Intake Form',
    targetRoute: 'singleForm',
    imageName: 'animalintake',
    imagePath: '../assets/images/animalIntake.pdf'
  },
  {
    title: 'Action Request Form',
    targetRoute: 'singleForm',
    imageName: 'actionrequest',
    imagePath: '../assets/images/actionRequest.pdf'
  },
  {
    title: 'Daily Animal Care Log',
    targetRoute: 'singleForm',
    imageName: 'dailyanimalcare',
    imagePath: '../assets/images/animalCare.pdf'
  },
  {
    title: 'Volunteer Sign-In Form',
    targetRoute: 'singleForm',
    imageName: 'volunteerSignIn',
    imagePath: '../assets/images/volunteerSignIn.pdf'
  },
  {
    title: 'Foster Locations Form',
    targetRoute: 'singleForm',
    imageName: 'fosterLocations',
    imagePath: '../assets/images/fosterLocations.pdf'
  },
  {
    title: 'Offer to Help Form',
    targetRoute: 'singleForm',
    imageName: 'offerHelp',
    imagePath: '../assets/images/offerHelp.pdf'
  },
  {
    title: 'Position Log Form',
    targetRoute: 'singleForm',
    imageName: 'positionLog',
    imagePath: '../assets/images/positionLog.pdf'
   },
  {
    title: 'Publication Consent Form',
    targetRoute: 'singleForm',
    imageName: 'publicationConsent',
    imagePath: '../assets/images/publicationConsent.pdf'
  },
  {
    title: 'Release of Responsibility Form',
    targetRoute: 'singleForm',
    imageName: 'releaseResponsibility',
    imagePath: '../assets/images/releaseResponsibility.pdf'
  },
  {
    title: 'Foster Request Form',
    targetRoute: 'singleForm',
    imageName: 'fosterRequest',
    imagePath: '../assets/images/fosterRequest.pdf'
   },
  {
    title: 'Situation Report Form',
    targetRoute: 'singleForm',
    imageName: 'situationReport',
    imagePath: '../assets/images/situationReport.pdf'
   },
  {
    title: 'Supplies Borrowed by CDART',
    targetRoute: 'singleForm',
    imageName: 'suppliesBorrowed',
    imagePath: '../assets/images/suppliesBorrowed.pdf'
  },
  {
    title: 'Supplies Lent by CDART',
    targetRoute: 'singleForm',
    imageName: 'suppliesLent',
    imagePath: '../assets/images/suppliesLent.pdf'
   },
  {
    title: 'Supplies Lent by Volunteers',
    targetRoute: 'singleForm',
    imageName: 'volunteerSuppliesLent',
    imagePath: '../assets/images/suppliesLent.pdf'
   },
  {
    title: 'Volunteer Phone Contact List',
    targetRoute: 'singleForm',
    imageName: 'volunteerPhone',
    imagePath: '../assets/images/volunteerPhone.pdf'
   },
  {
    title: 'Volunteer Hauler Form',
    targetRoute: 'singleForm',
    imageName: 'volunteerHauler',
    imagePath: '../assets/images/volunteerHauler.pdf'
   }
]
// Procedures
export const procedureList = [
  { title: 'Daily Volunteer Duties', targetRoute: 'reception'},
  { title: 'Animal Rescue Flow', targetRoute: 'animalFlow'},
  { title: 'Incident Command Flow', targetRoute: 'singleIncident'},
  { title: 'Reception Shelter Centre Setup', targetRoute: 'reception'},
  { title: 'Animal Condition Inspection', targetRoute: 'reception'},
  { title: 'Basic Animal Care', targetRoute: 'reception'}
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
    text: 'Responsible for overall emergency policy and coordination; public information and media relations; agency liaison',
    color: 'green'
  },
  {
    title: 'Operations',
    text: 'Responsible for coordinating all jurisdictional operations in support of the emergency response through implementation of the jurisdiction’s Action Plan.',
    color: 'red'
  },
  {
    title: 'Planning',
    text: 'Responsible for collecting, evaluating, and disseminating information',
    color: 'red'
  },
  {
    title: 'Logistics',
    text: 'Responsible for providing facilities, services, personnel, equipment and materials.',
    color: 'gold'
  },
  {
    title: 'Finance / Administration',
    text: 'Responsible for financial activities and other administrative aspects',
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
  'Knee pads, safety glasses, gloves',
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
    title: `Animal Intake Supply List`,
    subsection: animalIntakeSupplyList,
    subsectionText: `Animal Intake Supply List (First Aid Kit)`,
    targetRoute: 'checklistsPage'
  },
  {
    title: `Shelter Supply List`,
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

export const receptionShelterSetup = [
  'On arrival report to Incident Command and sign in',
  'Receive Situation briefing, liaise with Management team',
  'Identify priorities for next Operational Period',
  'Identity and establish Shelter location, quiet dividable area, outside access and fresh water supply',
  'Identify resources needed – volunteers, equipment, transport',
  'Secure Intake Bins',
  'Designate attending volunteers to Shelters roles, Intake, Safety , PIO, meet and greet, team leaders ie – dog section',
  'Set up Intake area – intake bin – tables – chairs, forms, office supplies, slip, leads, printer – camera, communications.',
  'Set up animal care area, Daily care bins, kennels, food/water dishes, bedding, cleaning supplies',
  'Set up food preparation area',
  'Establish dog walk areas, stock with waste bags',
  'First aid and triage area',
  'Volunteer quiet area',
  'Waste removal/storage',
  'Morgue',

]

export const dailyVolunteerDuties = [
  'Attend training sessions - update and practice skills',
  'Update personal preparedness plan',
  'Discuss deployment with family - friends - employers(Letter from CDART available)',
  'Assemble personal grab and go bag, Include I.D badge, uniform, snacks, personal hygiene items, device chargers',
  'Keep vehicles fueled',
  'When called record task number/Shelter address',
  'Be honest with yourself about your readiness to respond'
]

export const basicAnimalCare = [
  'If space permits, crates or kennels should be 12" or more apart',
  'Animals should be segregated by species',
  'Crates should be oriented to keep animals facing away from each other',
  'Provide food and water bowls, ID tag, leash, and bedding for each crate',
  'For animals sensitive to noise, activity or other animals, provide a sheet to keep the sides of the crate covered.',
  'The dog area should be close to an exit door to facilitate reaching dog walk areas; provide all owners with plastic bags for clean-up each time they walk their dog.',
  'Provide separate areas for animals that are sick.',
  'Animals that are seriously ill or pose a health risk to others should be transported to a local vet. Contact the on-call veterinarian for assistance.',
  'Aggressive animals must be securely contained. Ideally the owner will be responsible for care and feeding of an aggressive animal, however if that is not possible, only experienced volunteers should be handling that animal. A muzzle maybe required',
  'Staff may refuse admittance to any animal that appears uncontrollable or dangerously aggressive.',
  'Isolate animals that are in heat.',
  'Provide food and water bowls, ID tag, and bedding for each crate.',
  'Provide a litter box inside the crate. Litter boxes should be cleaned (scooped) regularly.',
  'Keep the areas as quiet as possible',
  'Assign specific shelter staff to care for sick animals, or develop a special protocol to prevent disease transmission between sick and healthy animals. (Supplies to consider: gloves, gowns, hand sanitizer, etc.).',
  'Establish protocols to protect volunteers and evacuees from infection from zoonotic diseases',
  'Rehearse established protocol for escaped/loose animals'

]

export const animalConditionInspection = [
  'Perform a basic wellness check as each animal comes in',
  'Assess over all demeanour and attitude',
  'Discharge from eyes or nose',
  'Listen for coughing or sneezing',
  'Check animals elimination for presence of parasites or abnormal discharge',
  'Assess general body condition',
  'Assess for any signs of injury'
]
