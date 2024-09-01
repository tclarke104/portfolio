
export interface PublicationItem {
    title: string;
    journal: string;
    authors: string[];
    year: string;
    doi?: string;  // Optional field for DOI if available
  }

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: 'The utility and accuracy of ChatGPT in providing post-operative instructions following tonsillectomy: A pilot study',
    journal: 'International Journal of Pediatric Otolaryngology',
    year: '2024',
    doi: '10.1016/j.ijporl.2024.111901',
    authors: [
      "Sarit Dhar",
      "Dhruv Kothari",
      "Missael Vasquez",
      "Travis Clarke",
      "Andrew Maroda",
      "Wade G McClain",
      "Anthony Sheyn",
      "Robert M Tuliszewski",
      "Dennis M Tang",
      "Sanjeet V Rangarajan"
    ]
  },
  {
    title: "Mechanical stimulation of cervical vertebrae modulates the discharge activity of ventral tegmental area neurons and dopamine release in the nucleus accumbens.",
    journal: "Brain Stimulation",
    year: "2019",
    doi: "10.1016/j.brs.2019.11.012",
    authors: ["Bills K.B.", "Obray J.D.", "Clarke T.", "Parsons M.", "Brundage J.", "Yang C.H.", "Kim H.Y.", "Yorgason J.T.", "Blotter J.D.", "Steffensen S.C."]
  },
  {
    title: "Targeted Subcutaneous Vibration With Single-Neuron Electrophysiology As a Novel Method for Understanding the Central Effects of Peripheral Vibrational Therapy in a Rodent Model.",
    journal: "Dose-response: a publication of International Hormesis Society",
    year: "2019",
    doi: "10.1177/1559325818825172",
    authors: ["Bills K.B.", "Clarke T.", "Major G.H.", "Jacobson C.B.", "Blotter J.D.", "Feland J.B.", "Steffensen S.C."]
  },
  {
    title: "Peripheral Dopamine in Restless Legs Syndrome.",
    journal: "Frontiers in Neurology",
    year: "2018",
    doi: "http://doi.org/10.3389/fneur.2018.00155",
    authors: ["Mitchell U.H.", "Obray J.D.", "Hunsaker E.", "Garcia B.T.", "Clarke T.J.", "Hope S.", "Steffensen S.C."]
  },
]