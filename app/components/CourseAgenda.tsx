import React from 'react';
import { AgendaItem } from '../data/agendaItem';

interface CourseAgendaProps {
    agendaItems: AgendaItem[];
}

export default function CourseAgenda({ agendaItems }: CourseAgendaProps) {
    return (
        <div className="mb-12">
            <ul className="space-y-4">
                {agendaItems.map((item, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <span className="text-sm text-gray-600">{item.time}</span>
                        </div>
                        {item.description && <p className="text-gray-700">{item.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
}
