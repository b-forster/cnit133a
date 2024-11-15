import { useState, useEffect } from "react";

function CoursePath({ courseList }) {
    const [courseIds, setCourseIds] = useState([]); // ex: ['CNIT 132', 'CNIT 133']
    const [selectedCourseId, setSelectedCourseIds] = useState(''); // ex: 'CNIT 133'
    const [availableCourseIds, setAvailableCourseIds] = useState(Object.keys(courseList)); // courses in list that are not yet added to course path

    useEffect(() => {
        setAvailableCourseIds(Object.keys(courseList).filter(courseId => { return !courseIds.includes(courseId) }))
    }, [courseIds])

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
                    {availableCourseIds
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