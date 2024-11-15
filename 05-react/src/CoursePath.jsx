import { useState } from "react";
import AddCourseForm from "./AddCourseForm";
import CourseList from "./CourseList";
import { DEFAULT_COURSE_SELECTION } from './constants'

function CoursePath() {
    const [addedCourseIds, setAddedCourseIds] = useState(DEFAULT_COURSE_SELECTION || []); // ex: ['CNIT 132', 'CNIT 133']

    return (
        <>
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