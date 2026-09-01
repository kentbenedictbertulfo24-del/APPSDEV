# APPSDEV
REACT
|

React is a JavaScript library used to build user interfaces, especially web applications. It allows us to create reusable components and update the page efficiently when data changes.

2. What is a component?
A component is a reusable part of a React application. In my project, I created components such as Header, StudentProfile, CourseList, ActivityCounter, and Footer.

3. What are props?
Props, short for properties, are used to pass data from one component to another. For example, I passed the student's name, program, year, and student ID to the StudentProfile component:

<StudentProfile
  name="Teddy Boy"
  program="BSCS"
  year="3rd Year"
  studentId="2026-001"
/>

4. What is state?
State is data that can change while the application is running. I used useState in my ActivityCounter to keep track of the number of completed activities.

const [count, setCount] = useState(0);

5. What event did you implement?
I implemented click events using onClick. The + button increases the activity count, the - button decreases it, and the Reset button sets the count back to zero.

<button onClick={() => setCount(count + 1)}>
  [ + ]
</button>

6. How did you compose your components?
I composed my components by importing them into App.jsx and placing them together to create the Student Portal.

<Header />

<StudentProfile ... />

<ActivityCounter />

<CourseList />

<Footer />

This makes the application easier to organize and maintain because each component has its own responsibility.

7. What problem did you encounter during installation or development?
During installation, I encountered a PowerShell execution policy error that prevented npm from running. I also initially encountered an invalid package name because I used uppercase letters in the project name.

8. How did you solve it?
For the package name problem, I changed the project name to lowercase, for example:

vite-firstprod

For the PowerShell problem, I changed the execution policy for my current user:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

After that, I was able to run:

npm install
npm run dev

and successfully open the React application in the browser.
