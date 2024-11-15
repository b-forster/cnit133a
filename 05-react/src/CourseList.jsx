import { useEffect, useState } from "react";
import { COURSES, formatCourseName } from "./constants";

function CourseList({
    addedCourseIds,
    setAddedCourseIds,
}) {
    // { course ID: [list of courses that require given course ID as prereq] }
    // ex: { CNIT 133: [CNIT 133I, CNIT133M] }
    const [prereqDependencyMap, setPrereqDependencyMap] = useState({});

    useEffect(() => { populatePrereqDependencyMap() }, [addedCourseIds])

    function populatePrereqDependencyMap() {
        let dependencyMap = {};
        for (const courseId of addedCourseIds) {
            updatePrereqDependencyMap(courseId, dependencyMap);
        }
        setPrereqDependencyMap(dependencyMap)
    }

    function updatePrereqDependencyMap(courseId, dependencyMap = {}) {
        for (const prereq of (COURSES[courseId]?.prereqs || [])) {
            dependencyMap[prereq] = [...dependencyMap[prereq] || [], courseId]

        }
    }

    function handleDelete(courseId) {
        setAddedCourseIds((prev) => prev.filter(cId => { return cId !== courseId }))
    }

    const getPrereqDependencies = (courseId) => {
        return prereqDependencyMap[courseId];
    }

    const shouldDisableDelete = (courseId) => {
        return getPrereqDependencies(courseId)?.length > 0
    }

    const formatPrereqErrorText = (courseId) => {
        let dependencies = getPrereqDependencies(courseId);
        const courseNoun = dependencies.length === 1 ? 'course' : 'courses';
        let errorText = `Cannot delete prerequisite for other added ${courseNoun}: `
        for (let i = 0; i < dependencies.length; i++) {
            errorText += dependencies[i];
            if (i < (dependencies.length - 1)) { errorText += ', ' }
        }
        return errorText;
    }

    return (
        <ul>
            {addedCourseIds?.map(courseId =>
                <li key={courseId} id={`display-${courseId}`}>
                    {formatCourseName(courseId)}
                    <button
                        onClick={() => handleDelete(courseId)}
                        disabled={shouldDisableDelete(courseId)}
                        title={shouldDisableDelete(courseId) ? formatPrereqErrorText(courseId) : ''}
                    >
                        ❌
                    </button>
                </li>
            )}
        </ul>
    );
}

export default CourseList