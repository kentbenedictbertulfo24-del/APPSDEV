import Course from "./Course";
function CourseList() {
return (
<section>
<h2>My Courses</h2>
<ul>
<Course name="Mobile App Dev" />
<Course name="Software Engineering" />
<Course name="Database Systems" />
<Course name="Applications Dev" />
</ul>
</section>
);
}
export default CourseList;