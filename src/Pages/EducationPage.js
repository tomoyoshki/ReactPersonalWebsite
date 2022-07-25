import React from 'react'
import { 
    Routes, 
    Route,
    Link} from 'react-router-dom'

import Header from '../components/Header'
import MobileDrawer from '../components/MobileDrawer'

import IllinoisLogo from '../assets/i.png'
import SetonLogo from '../assets/setonLogo.png'
import Courses from '../data/courses.json';
import { Fade, Slide} from 'react-slideshow-image';


import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SchoolIcon from '@mui/icons-material/School';

import Button from '@material-ui/core/Button';

class EducationPage extends React.Component{
    constructor(props) {
        super()
        this.state = {
            screenType: props.screenType,
            presentSchool: "none",
            width: window.innerWidth,
            theme : 'light',
        }
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    handleStyleChange = () => {
        const theme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({
            theme: theme,
        });
        document.documentElement.setAttribute("data-theme", theme);
    }

    IllinoisMain = () => {
        let courseContainer = []
        
        for(let i = 0; i < Courses.length; i++) {
            let semesters = Courses[i].semesters
            for(let j = 0; j < semesters.length; j++) {
                let semester = semesters[j]

                let semesterContainer = []

                let courses = semester.courses
                for(let k = 0; k < courses.length; k++) {
                    let course = courses[k]
                    let courseTitle = course.type + " " + course.number + " " + course.title
                    let courseWebsite = "https://courses.illinois.edu/schedule/" 
                                        + Courses[i].year + "/" 
                                        + semester.semester + "/" 
                                        + course.type + "/" 
                                        + course.number;

                    semesterContainer.push(
                        <div className="course_grade" key={courseTitle}>
                            <a href={courseWebsite} target="_blank" rel="noreferrer" className='course'>{courseTitle}</a>
                            <div id="grade">{course.grade}</div>
                        </div>
                    )
                }
                let semesterString = semester.semester
                semesterString = semesterString[0].toUpperCase() + semesterString.slice(1)
                let semesterYear = Courses[i].year + " " + semesterString;
                courseContainer.push(
                    <div className="courses" key={semesterYear}>
                        <div className='semesterTitle'>{semesterYear}</div>
                        <div className='courseList'>
                            {semesterContainer}
                        </div>
                    </div>
                )
            }
        }

        const properties = {
            duration: 2500,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            autoplay: false,
            easing: 'ease',
            // arrows: ƒal,
            arrows: "false",
            prevArrow: 
                <div style={{width: "30px", marginRight: "0px", color: "var(--primaryText)"}}>
                    <ArrowBackIosOutlinedIcon />
                </div>,
            nextArrow: 
                <div style={{width: "30px", marginLeft: "0px", color: "var(--primaryText)"}}>
                    <ArrowForwardIosOutlinedIcon />
                </div>
        };

        const SlideProperties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            autoplay: false,
            // easing: 'ease',
            arrows: 'false'
            // prevArrow: 
            //     <div style={{width: "30px", marginRight: "-30px", color: "var(--primaryText)"}}>
            //         <ArrowBackIosOutlinedIcon />
            //     </div>,
            // nextArrow: 
            //     <div style={{width: "30px", marginLeft: "-30px", color: "var(--primaryText)"}}>
            //         <ArrowForwardIosOutlinedIcon />
            //     </div>
        }

        return (
            <div className='educationMain'>
                <div className='half'>
                    <img src={IllinoisLogo} alt='Illinois Logo'/>
                </div>
                <div className='half'>
                    <div className='schoolTitle'>UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN</div>
                    <div id="gradYear">
                        <div>
                            Bachelor of Science in Computer Science 
                        </div>
                        <div>
                            &emsp;2020 - 2023
                        </div>
                    </div>
                    <div className='slides'>
                        <div className='slideSection' id="relativeCourses">
                                <div className='title'>Related Courses</div>
                                <Fade 
                                    {...properties}>
                                    {courseContainer}
                                </Fade>
                            </div>
                    </div>
                </div>
                <Link to="/education/seton" className='setonButton'>
                    <Button>
                        <SchoolIcon />
                    </Button>
                </Link>
            </div>
        )
    }

    SetonMain = () => {

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            easing: 'ease',
            prevArrow: 
                <div style={{width: "30px", marginRight: "-30px", color: "var(--primaryText)"}}>
                    <ArrowBackIosOutlinedIcon />
                </div>,
            nextArrow: 
                <div style={{width: "30px", marginLeft: "-30px", color: "var(--primaryText)"}}>
                    <ArrowForwardIosOutlinedIcon />
                </div>
        };

        return (
            <div className='educationMain' id="seton">
                <div className='half'>
                    <img src={SetonLogo} alt='Seton Logo'/>
                </div>
                <div className='half'>
                    <div className='schoolTitle'>SETON CATHOLIC CENTRAL HIGH SCHOOL</div>
                    <div id="gradYear">Class of 2020 &emsp;Salutatorian</div>
                    <div className='slide'>
                        <Fade {...properties}>
                            <div className='section'>
                                <div className='sectionTitle'>Awards</div>
                                <div className='container'>
                                    <div>Class of 2020 Salutatorian</div>
                                    <div>Chemistry Olympiad National Finalist</div>
                                    <div>Science Olympiad Regional Champion</div>
                                    <div>Mathletes Regional Champion</div>
                                    <div>University of Rochester Frederick Douglass Award</div>
                                </div>
                            </div>
                            <div className='section'>
                            <   div className='sectionTitle'>Experience</div>
                                <div className='container'>
                                    <div>Science Olympiad Captain</div>
                                    <div>Mathletes Captain</div>
                                    <div>Mock Trial</div>
                                    <div>National Honor Society Vice President</div>
                                    <div>Chemistry Olympiad</div>
                                    <div>Key Club</div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    
                </div>
                <Link to="/education/" className='setonButton'>
                    <Button>
                        <SchoolIcon />
                    </Button>
                </Link>

            </div>
        )
    }

    
    render() {
        return (
            <div className='Education'>
                {this.state.width > 700 ? Header("education") : <MobileDrawer page="education"/>}
                <Routes>
                    <Route path='/' element={this.IllinoisMain()} />
                    <Route path='/seton' element={this.SetonMain()} /> 
                </Routes>
            </div>
        )
    }
}

export default EducationPage


