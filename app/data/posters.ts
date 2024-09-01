
export interface PosterItem {
    title: string;
    conference: string;
    year: string;
    authors: string[];
  }

export const POSTERS: PosterItem[] = [
    {
        title: "Deep Learning Inference on Medical Images Using an Open Source Framework.",
        conference: "Conference on Machine Intelligence in Medical Imaging 2020",
        year: "2020",
        authors: ["Travis Clarke", "Paras Lakhani"]
      },
      {
        title: "Acute Ethanol Increases Monocyte Infiltration of CNS and Influences Microglia Phenotype.",
        conference: "Research Society on Alcoholism Annual Meeting 2018",
        year: "2018",
        authors: ["T. Clarke", "J.D. Obray", "J. Brundage", "J. Lattin", "S. Williams", "J.T. Yorgason", "S. Hope", "S.C. Steffensen"]
      },
      {
        title: "Ethanol Enhancement of Dopamine Release in the Nucleus Accumbens and Ethanol Reward is Mediated by Peripheral Neuroimmune Interactions.",
        conference: "Research Society on Alcoholism Annual Meeting 2018",
        year: "2018",
        authors: ["J.D. Obray", "M. Parsons", "J. Lattin", "T. Clarke", "E.Y. Jang", "S. Hope", "C.H. Yang", "J.T. Yorgason", "S.C. Steffensen"]
      },
      {
        title: "Ethanol-mediated Inhibition of Ventral Tegmental Area GABAergic Neurons and Involvement of Connexin-36 Mediated Electrical Coupling.",
        conference: "University of Utah Neuroscience Snowbird Symposium – Society for Neuroscience Intermountain Chapter Poster Presentation",
        year: "2017",
        authors: ["T. Clarke", "S. Williams", "J.D. Obray", "E. Shawkey", "J. Lattin", "E. Eisinger", "J. Yorgason", "S.C. Steffensen"]
      },
      {
        title: "Expression Changes of Dopamine Type 2 Receptors on the Surface of Human Monocytes and Lymphocytes After Exposure to Dopamine In Vitro.",
        conference: "Mary Lou Fulton 13th Annual Mentored Student Research Conference",
        year: "2016",
        authors: ["B. Garcia", "T. Clarke", "T. Wright", "J. Lattin", "J. Peterson", "S. Hope", "S.C. Steffensen"]
      },
      {
        title: "Peripheral Dopamine D2 Receptors Mediate Ethanol Reward.",
        conference: "Mary Lou Fulton 13th Annual Mentored Student Research Conference",
        year: "2016",
        authors: ["T. Clarke", "J. Lattin", "T. Wright", "A. Klomp", "A. Richardson", "J.D. Obray", "B. Garcia", "J. Brundage", "J.G. Lee", "E.Y. Jang", "C.H. Yang", "S. Hope", "S.C. Steffensen"]
      }
  ]