import { Instructor } from "../data/instructor";

interface CourseInstructorsProps {
    instructors: Instructor[];
}

export function CourseInstructors({ instructors }: CourseInstructorsProps) {
    return (
        <div className="mb-12">
            <div className="space-y-6">
                {instructors.map((instructor, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                        <h3 className="text-xl font-semibold">{instructor.name}</h3>
                        <p className="text-gray-600">{instructor.title}</p>
                        <p className="text-gray-700">{instructor.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
