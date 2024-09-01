
export interface PresentationItem {
    title: string;
    event: string;
    year: string;
    authors: string[];
    location?: string;  // Optional field for the location of the presentation
  }
  
export const PRESENTATIONS: PresentationItem[] = [
    {
        title: 'Artificial in Otolaryngologic Endoscopy​',
        event: 'AAO-HNS 2023',
        year: '2023',
        location: 'Nashville, TN',
        authors: ['T. Clarke', 'M. Chanamolu', 'A. Zebolsky', 'S. Rangarajan', 'A. Eid']
    },
    {
        title: '3D Modeling of Lacrimal Sac Tumor Growth Patterns',
        event: 'NASBS 2023',
        year: '2023',
        location: 'Tampa, FL',
        authors: ['T. Clarke', 'R. Banoub', 'S. Siddiqui', 'G. D\'Souza', 'V. Jegede', 'M. Luo', 'J. Curry']
    },
    {
        title: 'Testing the Performance of Intracranial Hemorrhage Detection Models Two Years Following Kaggle Competition',
        event: 'RSNA 2022',
        year: '2022',
        location: 'Chicago, IL',
        authors: ['T. Clarke', 'L. M. Trunz', 'R. J. Gorniak', 'A. E. Flanders', 'P. Lakhani']
    },
    {
        title: "Acute ethanol activates microglia and affects the excitability of ventral tegmental area neurons.",
        event: "Soc. Neurosci. Absts 42",
        year: "2017",
        location: "N/A",
        authors: ["Williams S.B.", "Pistorius S.S.", "Anderson E.Q.", "Clarke D.R.", "Clarke T.", "Hope S.", "Steffensen S.C."]
    },
    {
        title: "Ethanol enhancement of dopamine release in the nucleus accumbens and ethanol reward are mediated by peripheral neuroimmune interactions.",
        event: "Soc. Neurosci. Absts 42",
        year: "2017",
        location: "N/A",
        authors: ["Obray J.D.", "Clarke T.", "Jang E.Y.", "Garcia B.", "Klomp A.", "Richardson A.", "Payne A.", "Hope S.", "Yang C.H.", "Yorgason J.T.", "Steffensen S.C."]
    },
  ]