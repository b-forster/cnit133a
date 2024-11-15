import { useState } from "react";
import AddCourseForm from "./AddCourseForm";
import { DEFAULT_COURSE_SELECTION, formatCourseName } from './constants'

function CoursePath() {
    const [addedCourseIds, setAddedCourseIds] = useState(DEFAULT_COURSE_SELECTION || []); // ex: ['CNIT 132', 'CNIT 133']

    function handleDelete(courseId) {
        setAddedCourseIds((prev) => prev.filter(cId => { return cId !== courseId }))
    }
    return (
        <>
            <AddCourseForm
                addedCourseIds={addedCourseIds}
                setAddedCourseIds={setAddedCourseIds}
            />

            <ul>
                {addedCourseIds?.map(courseId =>
                    <li key={courseId} id={`display-${courseId}`}>
                        {formatCourseName(courseId)}
                        <button onClick={() => handleDelete(courseId)}>❌</button>
                    </li>
                )}
            </ul>
        </>
    );
}

export default CoursePath