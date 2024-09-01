import { GRANTS_SCHOLARSHIPS, GrantScholarshpItem } from "./certifications";
import { EDUCATION, EducationItem } from "./education";
import { ExperienceItem, EXPERIENCES } from "./experiences";
import { PosterItem, POSTERS } from "./posters";
import { PresentationItem, PRESENTATIONS } from "./presentations";
import { PublicationItem, PUBLICATIONS } from "./publications";




export interface CVData {
    summary: string;
    experience: ExperienceItem[];
    education: EducationItem[];
    publications: PublicationItem[];
    posters: PosterItem[];
    presentations: PresentationItem[];
    grantScholarships: GrantScholarshpItem[];
}

export const cvData: CVData = {
  summary: "I am an experienced ENT specialist and otolaryngologist with a strong background in virtual surgical planning and head & neck surgery. Over the past 15 years, I have developed expertise in minimally invasive techniques, patient-specific 3D modeling, and advanced airway management.",
  experience: EXPERIENCES,
  education: EDUCATION,
  grantScholarships: GRANTS_SCHOLARSHIPS,
  publications: PUBLICATIONS,
  posters: POSTERS,
  presentations: PRESENTATIONS,
};

  