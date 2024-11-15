import { formatCourseName } from "./constants";

function CourseList({
    addedCourseIds,
    setAddedCourseIds,
}) {
    function handleDelete(courseId) {
        setAddedCourseIds((prev) => prev.filter(cId => { return cId !== courseId }))
    }

    return (
        <ul>
            {addedCourseIds?.map(courseId =>
                <li key={courseId} id={`display-${courseId}`}>
                    {formatCourseName(courseId)}
                    <button onClick={() => handleDelete(courseId)}>❌</button>
                </li>
            )}
        </ul>
    );
}

export default CourseList