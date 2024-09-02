export interface Instructor {
    name: string;
    title: string;
    bio: string;
    imageUrl?: string; // Optional field for instructor's image
}

export const COURSE_INSTRUCTORS = [
    {
      name: "Travis Jonathan Clarke, MD",
      title: "Lead Instructor",
      bio: "University of Tennessee Health Science Center",
    },
    {
      name: "Aaron L. Zebolsky, MD",
      title: "Instructor",
      bio: "University of Tennessee Health Science Center",
    },
    {
      name: "C. Burton Wood, MD",
      title: "Instructor",
      bio: "University of Tennessee Health Science Center",
    },
    {
      name: "Anas A. Eid, MD",
      title: "Instructor",
      bio: "University of Tennessee Health Science Center",
    },
    {
      name: "Daron B. Harrison, MD",
      title: "Instructor",
      bio: "University of Tennessee Health Science Center",
    },
    {
      name: "John P. Gleysteen, MD",
      title: "Instructor",
      bio: "UTHSC Department of Otolaryngology Head-Neck Surgery",
    },
  ];