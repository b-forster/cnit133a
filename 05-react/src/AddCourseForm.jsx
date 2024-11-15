import { useState, useEffect } from "react";
import { COURSES, formatCourseName } from './constants'


function AddCourseForm({
    addedCourseIds,
    setAddedCourseIds,
}) {
    const [availableCourseIds, setAvailableCourseIds] = useState(Object.keys(COURSES)); // courses in list that are not yet added to course path
    const [selectedCourseId, setSelectedCourseId] = useState(''); // ex: 'CNIT 133'
    const [unmetPrereqs, setUnmetPrereqs] = useState([]); // ex: ['CNIT 132', 'CNIT 133']

    // When list of courses is updated
    useEffect(() => {
        setAvailableCourseIds(Object.keys(COURSES).filter(courseId => { return !addedCourseIds.includes(courseId) }))
        setUnmetPrereqs([]);
    }, [addedCourseIds])


    const validatePrereqs = (courseId) => {
        const prereqs = COURSES[courseId]?.prereqs;
        const unmet = prereqs?.filter(prereq => { return !addedCourseIds.includes(prereq) });
        setUnmetPrereqs(unmet);
    }

    const hasUnmetPrereqs = () => {
        return unmetPrereqs?.length > 0;
    }

    const shouldDisableAdd = () => {
        return hasUnmetPrereqs() || !selectedCourseId;
    }

    function handleChangeCourseSelection(e) {
        const selectedCourseId = e.target.value;
        setSelectedCourseId(selectedCourseId);
        if (selectedCourseId) {
            validatePrereqs(selectedCourseId)
        } else {
            setUnmetPrereqs([]);
        };
    }

    function handleAddCourse(e) {
        e.preventDefault();
        setAddedCourseIds([...addedCourseIds, selectedCourseId]);
    }

    return (
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
    )
}

export default AddCourseForm