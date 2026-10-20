import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import CourseList from "./components/CourseList";
import ActivityCounter from "./components/ActivityCounter";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

function App() {
return (
<>
<Header />
<StudentProfile
  name="KENTGWAPO BERTULFO"
  program="BSIT"
  year="2nd Year"
  status="Active"
/>
<CourseList />
<ActivityCounter />
<Announcement/>
<Footer />
</>
);
}
export default App;