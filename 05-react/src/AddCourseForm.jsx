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
        <>
            <form className='row row-cols-sm-auto align-items-center' onSubmit={handleAddCourse}>
                <div className='col-small'>
                    <label className='visually-hidden' htmlFor='course-select'>Username</label>
                    <select id='course-select' className='form-select' onChange={handleChangeCourseSelection}>
                        <option value={''}>
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
                </div>
                <div className='col-small'>
                    <button type='submit'
                        className='btn btn-danger'
                        disabled={shouldDisableAdd()}
                    >
                        Add
                    </button>
                </div>
            </form>

            <div className='error-container'>
                {hasUnmetPrereqs() && (
                    <div class='error'>
                        <p>To add this course, you must first add the following prerequisite(s):
                        </p>
                        <ul>
                            {unmetPrereqs.map(prereq =>
                                <li key={prereq}>{formatCourseName(prereq)}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div >

        </>
    )
}

export default AddCourseForm