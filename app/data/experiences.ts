export interface ExperienceItem {
    title: string;
    date: string;
    details: string[];
}

export const EXPERIENCES:ExperienceItem[] = [
  {
    title: "Research Assistant - Department of Radiology, Thomas Jefferson University",
    date: "2020-2021",
    details: [
      "Built an application that manages medical images and predictive algorithms, allowing physicians to integrate machine learning into their clinical practice.",
      "Adapted award-winning algorithms for diagnosing pulmonary embolism, pneumonia, and intracranial hemorrhage.",
      "Distributed the application in an open-source fashion to facilitate broader use."
    ],
  },
  {
    title: "Research Assistant - Department of Radiology, Thomas Jefferson University",
    date: "2018-2019",
    details: [
      "Utilized machine learning and neural networks to create predictive models for diagnosing intracranial hemorrhage on head CT scans.",
      "Worked with a dataset of over 66,000 head CT scans, applying necessary statistical methods to build and train models."
    ],
  },
  {
    title: "Graduate Research Assistant - Department of Neuroscience, Brigham Young University",
    date: "2018",
    details: [
      "Led a team of graduate and undergraduate students researching the neuroimmune connections in alcohol addiction.",
      "Performed statistical analysis on data from in vivo electrophysiologic studies, flow cytometry, and confocal imaging."
    ],
  },
  {
    title: "Undergraduate Research Assistant - Department of Neuroscience, Brigham Young University",
    date: "2016-2017",
    details: [
      "Researched the physical substrates of reward underlying alcohol, cocaine, and methamphetamine addiction.",
      "Performed flow cytometry, immunohistochemistry, fluorescent microscopy, electrophysiology, voltammetry, and various surgeries in mice and rats."
    ],
  },
  {
    title: "Software Engineer - Dynasty Owner",
    date: "2018-2020",
    details: [
      "Worked on a team to build a fantasy football web application.",
      "Directed a team of remote workers in India on engineering best practices and project direction."
    ],
  },
  {
    title: "Software Engineer - Sara Jones Lab, FSCAV",
    date: "2018",
    details: [
      "Built an application extending the capabilities of existing fast scan cyclic voltammetry software.",
      "Quantified neurotransmitter levels in animal experiments using Fast Scan Controlled Absorption Voltammetry."
    ],
  },
  {
    title: "Software Engineer - DealerSocket Inc.",
    date: "2014-2017",
    details: [
      "Built and maintained CRM software for car dealerships.",
      "Promoted from data validation intern to software engineer by self-learning software engineering in spare time."
    ],
  },
  {
    title: "Physical Therapy Technician - Pack Physical Therapy",
    date: "2011",
    details: [
      "Instructed patients on proper exercise technique and charted patient visits.",
      "Operated class III laser therapy equipment."
    ],
  },
  ]