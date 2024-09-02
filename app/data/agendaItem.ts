
export interface AgendaItem {
    title: string;
    time: string;
    description?: string;
}

export const AGENDA_ITEMS: AgendaItem[] = [
    { title: "Introduction to Virtual Surgical Planning", time: "3:30 PM - 3:45 PM", description: "Overview of the course and objectives as well as case presentations. During this time we will also assist attendees with software setup." },
    { title: "3D Slicer Basics and Creating a Model", time: "3:45 PM - 4:15 PM", description: "Hands-on session with 3D Slicer that will guide attendees through loading a scan and creating a mandible model" },
    { title: "Creation of Virtual Surgical Plan and Cutting Guides", time: "4:15 PM - 4:45 PM", description: "Demonstration of creating a surgical plan for reconstruction of a mandible defect with fibula free flap" },
    { title: "Model Printing and Debrief", time: "4:45 PM - 5:00 PM", description: "Demonstration of model printing and postprocessing steps" },
  ];