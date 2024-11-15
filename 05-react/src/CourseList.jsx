import { useEffect, useState } from "react";
import { COURSES, formatCourseName, maybePluralizeCourseNoun } from "./constants";

function CourseList({
    addedCourseIds,
    setAddedCourseIds,
}) {
    // { course ID: [list of courses that require given course ID as prereq] }
    // ex: { CNIT 133: [CNIT 133I, CNIT133M] }
    const [prereqDependencyMap, setPrereqDependencyMap] = useState({});
    const [completedCourses, setCompletedCourses] = useState(new Set());

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
        if (completedCourses.has(courseId)) {
            let completedList = new Set([...completedCourses]);
            completedList.delete(courseId);
            setCompletedCourses(completedList);
        }
    }

    function handleToggleCheckbox(courseId) {
        let completedList = new Set([...completedCourses]);
        if (completedCourses.has(courseId)) {
            completedList.delete(courseId);
        } else {
            completedList.add(courseId);
        }
        setCompletedCourses(completedList);
    }

    const getPrereqDependencies = (courseId) => {
        return prereqDependencyMap[courseId];
    }

    const shouldDisableDelete = (courseId) => {
        return getPrereqDependencies(courseId)?.length > 0
    }

    const formatPrereqErrorText = (courseId) => {
        let dependencies = getPrereqDependencies(courseId);
        const courseNoun = maybePluralizeCourseNoun(dependencies.length);
        let errorText = `Cannot remove because this is a prerequisite for other listed ${courseNoun}: `
        for (let i = 0; i < dependencies.length; i++) {
            errorText += dependencies[i];
            if (i < (dependencies.length - 1)) { errorText += ', ' }
        }
        return errorText;
    }

    return (
        <ul className='form-check'>
            {addedCourseIds?.map(courseId =>
                <li
                    className='added-course-item'
                    key={courseId}
                    id={`display-${courseId}`}
                >
                    <input
                        type='checkbox'
                        className='form-check-input'
                        id={`checkbox-${courseId}`}
                        onChange={() => handleToggleCheckbox(courseId)}
                    />
                    <label htmlFor={`checkbox-${courseId}`}>
                        {formatCourseName(courseId)}
                    </label>
                    <button
                        className='delete-btn'
                        onClick={() => handleDelete(courseId)}
                        disabled={shouldDisableDelete(courseId)}
                        title={shouldDisableDelete(courseId) ? formatPrereqErrorText(courseId) : 'Remove course'}
                    >
                        ❌
                    </button>
                </li>
            )
            }
        </ul >
    );
}

export default CourseList