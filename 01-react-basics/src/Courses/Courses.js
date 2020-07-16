import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const Course = (props) => {
    const {match} = props;
    return (
        <div>
            You opted for {match.params.name}...
        </div>
    )
}

const Courses = () => {
    return (
        <div>
            <h3>Course</h3>
            <strong>Select your Course</strong>
            <ul>
                <li><Link to="/courses/react">React</Link></li>
                <li><Link to="/courses/angular">Angular</Link></li>
                <li><Link to="/courses/vue">Vue</Link></li>
            </ul>

            <Route path="/courses/:name" component={Course}/>
        </div>
    )
}

export default Courses;