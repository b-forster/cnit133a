import { useState } from "react";

function CoursePath({ courseList }) {
    const [courseIds, setCourseIds] = useState([]); // ex: ['CNIT 132', 'CNIT 133']
    const [selectedCourseId, setSelectedCourseIds] = useState(''); // ex: 'CNIT 133'

    function handleChangeCourseSelection(e) {
        setSelectedCourseIds(e.target.value);
    }

    function handleAddCourse(e) {
        e.preventDefault();
        setCourseIds([...courseIds, selectedCourseId]);
    }

    const formatCourseName = (courseId) => {
        return `${courseId} - ${courseList[courseId]?.title}`
    }

    return (
        <>
            <form onSubmit={handleAddCourse}>
                <select onChange={handleChangeCourseSelection}>
                    {Object.keys(courseList)
                        .map(courseId =>
                            <option
                                value={courseId}
                                id={`select-${courseId}`}
                                key={courseId}
                            >
                                {formatCourseName(courseId)}
                            </option>
                        )}
                </select>
                <button type="submit">Add</button>
            </form>

            <ul>
                {courseIds?.map(courseId =>
                    <li key={courseId} id={`display-${courseId}`}>{formatCourseName(courseId)}</li>
                )}
            </ul>
        </>
    );
}

export default CoursePath