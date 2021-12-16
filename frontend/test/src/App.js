// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import AddEvent from './components/AddEvent';
import CourseInfo from './components/CourseInfo';
import EditCourse from './components/EditCourse';
import Courses from './components/Courses';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from './components/Events';
import CoursesById from './components/CoursesById';
import EventInfo from './components/EventInfo';
import Trainers from './components/Trainers';
function App() {
  return (
    <BrowserRouter>
     <Header />
      
      <Switch>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/add-course' exact>
          <AddCourse />
        </Route>
        <Route path='/course-info/:id' exact>
          <CourseInfo />
        </Route>
        <Route path='/courses' exact>
          <Courses />
        </Route>
        <Route path='/edit-course/:id' exact>
          <EditCourse />
        </Route>
        <Route path='/myCourse/:userId' exact>
          <CoursesById />
        </Route>
        <Route path='/events' exact>
          <Events />
        </Route>
        <Route path='/add-event' exact>
          <AddEvent />
        </Route>
        <Route path='/Event-Info/:id' exact>
          <EventInfo />
        </Route>
        <Route path='/trainers' exact>
          <Trainers />
        </Route>
        <Redirect to='/login'></Redirect>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
