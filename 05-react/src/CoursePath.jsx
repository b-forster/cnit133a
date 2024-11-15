import { useState } from "react";
import AddCourseForm from "./AddCourseForm";
import CourseList from "./CourseList";
import { DEFAULT_COURSE_SELECTION, maybePluralizeCourseNoun } from './constants'

function CoursePath() {
    const [addedCourseIds, setAddedCourseIds] = useState(DEFAULT_COURSE_SELECTION || []); // ex: ['CNIT 132', 'CNIT 133']
    const courseNoun = maybePluralizeCourseNoun(addedCourseIds.length);
    const cnitUrl = 'https://prod.ccsf.edu/academics/ccsf-catalog/courses-by-department/computer-networking-and-information-technology'

    return (
        <>
            <h1>CNIT Student Course Plan</h1>
            <p>This tool will help you map out your academic schedule for courses
                offered by the Computer Networking & Information Technology (CNIT) Department at CCSF.</p>
            <p>For details about each course, please refer to
                the <a href={cnitUrl} target='blank' noopener noreferrer>department website</a>.</p>
            <h2>{addedCourseIds.length} {courseNoun} listed</h2>
            <AddCourseForm
                addedCourseIds={addedCourseIds}
                setAddedCourseIds={setAddedCourseIds}
            />

            <CourseList
                addedCourseIds={addedCourseIds}
                setAddedCourseIds={setAddedCourseIds}
            />
        </>
    );
}

export default CoursePath