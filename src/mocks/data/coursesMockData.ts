/* eslint-disable @typescript-eslint/no-explicit-any */
import { delay, HttpResponse } from "msw";

const mockCoursesData = [
  {
    id: "F101",
    title: "Modern HTML & CSS Fundamentals",
    description: "HTML5 semantics, responsive layouts, CSS3 modern techniques",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "HTML5 Semantic Elements", completed: false },
      { id: "l2", title: "Forms & Validation", completed: false },
      { id: "l3", title: "CSS Box Model", completed: false },
      { id: "l4", title: "CSS Flexbox", completed: false },
      { id: "l5", title: "CSS Grid Layout", completed: false },
      { id: "l6", title: "Responsive Media Queries", completed: false },
      { id: "l7", title: "CSS Transforms & Animations", completed: false },
      { id: "l8", title: "Accessibility Basics", completed: false },
      { id: "l9", title: "Preprocessors (Sass)", completed: false },
      { id: "l10", title: "Project: Landing Page", completed: false },
    ],
  },
  {
    id: "F102",
    title: "JavaScript & DOM Manipulation",
    description: "Vanilla JS, DOM APIs, ES6+ features",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "JS Syntax & Types", completed: false },
      { id: "l2", title: "DOM Traversal & Events", completed: false },
      { id: "l3", title: "Fetch API & AJAX", completed: false },
      { id: "l4", title: "Promises & Async/Await", completed: false },
      { id: "l5", title: "Modules & Bundling", completed: false },
      { id: "l6", title: "Error Handling", completed: false },
      { id: "l7", title: "LocalStorage & SessionStorage", completed: false },
      { id: "l8", title: "Web Performance Optimization", completed: false },
      { id: "l9", title: "Memory Leaks & Debugging", completed: false },
      { id: "l10", title: "Mini App: Todo List", completed: false },
    ],
  },
  {
    id: "F103",
    title: "Introduction to React",
    description: "Components, state, props, hooks",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "React Setup & JSX", completed: false },
      { id: "l2", title: "Functional Components", completed: false },
      { id: "l3", title: "Props & State", completed: false },
      { id: "l4", title: "useEffect Hook", completed: false },
      { id: "l5", title: "React Router Basics", completed: false },
      { id: "l6", title: "Conditional Rendering", completed: false },
      { id: "l7", title: "Forms in React", completed: false },
      { id: "l8", title: "Context API", completed: false },
      { id: "l9", title: "Custom Hooks", completed: false },
      { id: "l10", title: "Project: React SPA", completed: false },
    ],
  },
  {
    id: "F104",
    title: "Advanced React & Performance",
    description: "Hooks, context, code splitting, optimization",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "Render Props & HOCs", completed: false },
      { id: "l2", title: "useMemo & useCallback", completed: false },
      { id: "l3", title: "Context Performance", completed: false },
      { id: "l4", title: "React.lazy & Suspense", completed: false },
      { id: "l5", title: "Error Boundaries", completed: false },
      { id: "l6", title: "Testing with RTL & Jest", completed: false },
      { id: "l7", title: "Profiling Performance", completed: false },
      { id: "l8", title: "SSR with Next.js", completed: false },
      { id: "l9", title: "Code Splitting", completed: false },
      { id: "l10", title: "Project: Optimized React App", completed: false },
    ],
  },
  {
    id: "F105",
    title: "Frontend Frameworks: Vue & Angular",
    description: "Basics of Vue.js & Angular",
    thumbnail: "https://via.placeholder.com/150",
    status: "draft",
    lessons: [
      { id: "l1", title: "Vue Setup & Reactivity", completed: false },
      { id: "l2", title: "Vue Components & Props", completed: false },
      { id: "l3", title: "Vue CLI & Routing", completed: false },
      { id: "l4", title: "Angular Modules & Components", completed: false },
      { id: "l5", title: "Angular Services & DI", completed: false },
      { id: "l6", title: "Angular Routing", completed: false },
      { id: "l7", title: "State Management (Vuex/Ngrx)", completed: false },
      { id: "l8", title: "Forms & Validation", completed: false },
      { id: "l9", title: "Testing Vue/Angular Apps", completed: false },
      { id: "l10", title: "Mini Project: Dashboard", completed: false },
    ],
  },
  {
    id: "B201",
    title: "Node.js & Express Fundamentals",
    description: "Server-side JS, REST APIs, Express",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "Node.js Intro & Modules", completed: false },
      { id: "l2", title: "Express Setup & Routing", completed: false },
      { id: "l3", title: "Middleware", completed: false },
      { id: "l4", title: "RESTful API Design", completed: false },
      { id: "l5", title: "Connecting to MongoDB", completed: false },
      { id: "l6", title: "Error Handling & Logging", completed: false },
      { id: "l7", title: "Authentication (JWT)", completed: false },
      { id: "l8", title: "Testing APIs", completed: false },
      { id: "l9", title: "Deployment (Heroku/AWS)", completed: false },
      { id: "l10", title: "Project: Blog API", completed: false },
    ],
  },
  {
    id: "B202",
    title: "Backend Fundamentals with Python",
    description: "Flask/Django, APIs, ORM, auth",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "Python Basics & Setup", completed: false },
      { id: "l2", title: "Flask App Structure", completed: false },
      { id: "l3", title: "Routing & Templates", completed: false },
      { id: "l4", title: "Database ORM", completed: false },
      { id: "l5", title: "Building REST APIs", completed: false },
      { id: "l6", title: "User Authentication", completed: false },
      { id: "l7", title: "File Uploads", completed: false },
      { id: "l8", title: "Testing & Debugging", completed: false },
      { id: "l9", title: "Deploying to Heroku", completed: false },
      { id: "l10", title: "Project: Authenticated App", completed: false },
    ],
  },
  {
    id: "B203",
    title: "Java & Spring Boot Backend",
    description: "OOP, Spring Boot, JPA, Microservices",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "Java OOP Refresher", completed: false },
      { id: "l2", title: "Spring Boot Setup", completed: false },
      { id: "l3", title: "REST Controllers", completed: false },
      { id: "l4", title: "Spring Data JPA", completed: false },
      { id: "l5", title: "Database Migrations", completed: false },
      { id: "l6", title: "Security with Spring", completed: false },
      { id: "l7", title: "Exception Handling", completed: false },
      { id: "l8", title: "Microservices Intro", completed: false },
      { id: "l9", title: "Communication (REST/Feign)", completed: false },
      { id: "l10", title: "Project: Spring Boot App", completed: false },
    ],
  },
  {
    id: "B204",
    title: "Introduction to SQL & NoSQL Databases",
    description: "PostgreSQL, MongoDB, schema design",
    thumbnail: "https://via.placeholder.com/150",
    status: "draft",
    lessons: [
      { id: "l1", title: "Relational vs NoSQL", completed: false },
      { id: "l2", title: "PostgreSQL Basics", completed: false },
      { id: "l3", title: "Schema Design", completed: false },
      { id: "l4", title: "Joins & Aggregations", completed: false },
      { id: "l5", title: "Indexing & Optimization", completed: false },
      { id: "l6", title: "MongoDB CRUD", completed: false },
      { id: "l7", title: "Collections & Documents", completed: false },
      { id: "l8", title: "Advanced Queries", completed: false },
      { id: "l9", title: "Backup & Scaling", completed: false },
      { id: "l10", title: "Project: Data-driven API", completed: false },
    ],
  },
  {
    id: "B205",
    title: "DevOps & Deployment",
    description: "CI/CD, Docker, Kubernetes, scaling",
    thumbnail: "https://via.placeholder.com/150",
    status: "published",
    lessons: [
      { id: "l1", title: "Version Control with Git", completed: false },
      { id: "l2", title: "Docker Basics", completed: false },
      { id: "l3", title: "Docker Compose", completed: false },
      { id: "l4", title: "CI with GitHub Actions", completed: false },
      { id: "l5", title: "Kubernetes Intro", completed: false },
      { id: "l6", title: "Service & Pods", completed: false },
      { id: "l7", title: "Autoscaling", completed: false },
      { id: "l8", title: "Monitoring (Prometheus)", completed: false },
      { id: "l9", title: "Logging (ELK/EFK)", completed: false },
      { id: "l10", title: "Deploy Project to K8s", completed: false },
    ],
  },
];

export const courseMockData = async () => {
  await delay(300);

  return HttpResponse.json(mockCoursesData);
};

export const courseMockDataAfterDelete = async ({ request }: any) => {
  await delay(300);
  const { courseId, lessonId } = await request.json();

  const selectedCourse = mockCoursesData.filter(
    (course) => course.id === courseId
  );
  const fileterdLessons = selectedCourse[0].lessons.filter(
    (lesson) => lesson.id === lessonId
  );
  return HttpResponse.json({ status: "ok", lessons: fileterdLessons });
};
