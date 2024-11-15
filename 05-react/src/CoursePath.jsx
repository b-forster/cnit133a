import { useState, useEffect } from "react";

function CoursePath({ courseList }) {
    const [courseIds, setCourseIds] = useState([]); // ex: ['CNIT 132', 'CNIT 133']
    const [selectedCourseId, setSelectedCourseId] = useState(''); // ex: 'CNIT 133'
    const [availableCourseIds, setAvailableCourseIds] = useState(Object.keys(courseList)); // courses in list that are not yet added to course path
    const [unmetPrereqs, setUnmetPrereqs] = useState([]); // ex: ['CNIT 132', 'CNIT 133']

    // When list of courses is updated
    useEffect(() => {
        setAvailableCourseIds(Object.keys(courseList).filter(courseId => { return !courseIds.includes(courseId) }))
        setUnmetPrereqs([]);
    }, [courseIds])

    function handleChangeCourseSelection(e) {
        const selectedCourseId = e.target.value;
        setSelectedCourseId(selectedCourseId);
        if (selectedCourseId) { validatePrereqs(selectedCourseId) };
    }

    function handleAddCourse(e) {
        e.preventDefault();
        setCourseIds([...courseIds, selectedCourseId]);
    }

    const formatCourseName = (courseId) => {
        return `${courseId} - ${courseList[courseId]?.title}`
    }

    const validatePrereqs = (courseId) => {
        const prereqs = courseList[courseId]?.prereqs;
        const unmet = prereqs?.filter(prereq => { return !courseIds.includes(prereq) });
        setUnmetPrereqs(unmet);
    }

    const hasUnmetPrereqs = () => {
        return unmetPrereqs?.length > 0;
    }

    const shouldDisableAdd = () => {
        return hasUnmetPrereqs() || !selectedCourseId;
    }

    return (
        <>
            <form onSubmit={handleAddCourse}>
                <select onChange={handleChangeCourseSelection}>
                    <option value={""}>
                        Choose a course to add to your plan:
                    </option>
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
                <button type="submit" disabled={shouldDisableAdd()}>Add</button>
                {hasUnmetPrereqs() &&
                    (<div className='error'>
                        This course must be taken after the following prerequisite(s):
                        <ul>
                            {unmetPrereqs.map(prereq =>
                                <li key={prereq}>{formatCourseName(prereq)}</li>
                            )}
                        </ul>
                    </div>)
                }
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