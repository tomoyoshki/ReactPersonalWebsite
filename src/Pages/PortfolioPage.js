import React from 'react'
import { 
    Routes, 
    Route,
    Link} from 'react-router-dom'
import Projects from '../data/projects.json';

import Header from '../components/Header'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import TocIcon from '@mui/icons-material/Toc'

import MobileDrawer from '../components/MobileDrawer'

class PortfolioPage extends React.Component{
    constructor() {
        super()
        this.state = {
            currentType: "all",
            currentLabel: "All",
            width: window.innerWidth,
            drawer: false
        }
        // this.myRef = React.createRef()   // Create a ref object 

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    scrollToTop = () => {
        if(window.innerWidth > 0) {
            window.scrollTo(0, 0)
        } 
    }

    toggleDrawer = () => {
        this.scrollToTop()
        this.setState({
            drawer: this.state.drawer ? false : true
        })
    }

    setType = (label, value) => {
        this.setState({
            currentType: value,
            currentLabel: label,
        })
        this.toggleDrawer();
        this.scrollToTop()
    }

    Input = (type, label) => {
        
        if(this.state.currentLabel === label) {
            return (
                // <div className='selectType'>
                //     <input
                //     type="radio" 
                //     value={type}
                //     onChange={(e) => this.setType(label, e.target.value)}
                //     name="select"
                //     checked = "checked"
                //     />
                //     <label>{label}</label>
                // </div>
                <span className='selectType' onClick={()=>{this.setType(label, type)}}>
                    <label style={{color: "rgb(255, 85, 46)"}}>{label}</label>
                </span>
            )
        }
        return (
            // <div className='selectType'>
            //     <input
            //     type="radio" 
            //     value={type}
            //     onChange={(e) => this.setType(label, e.target.value)}
            //     name="select"
            //     />
            //     <label>{label}</label>
            // </div>
            <span className='selectType' onClick={()=>{this.setType(label, type)}}>
                <label>{label}</label>
            </span>
        )
    }

    PortfolioMain = () => {
        const images = importAll(require.context('../assets', false));
        let projectsRoute = []
        for(let i = 0; i < Projects.length; i++) {
            let project = Projects[i]
            let categories = project.area
            let current_category = this.state.currentType
            const project_img_path = project.img === "none" ? 'tk_1.png' : project.img
            if(current_category === "all" || categories.includes(current_category)) {
                projectsRoute.push(
                    <Link to={'/portfolio/' + project.id} key={project.id} className="projectLink">
                        <div className='projectCover'>
                            <img src={images[project_img_path]} alt={project.id}/>
                        </div>
                        <div className='projectInfo'>
                            <div className='info'>{project.name}</div>
                            <div className='info'>{project.time}</div>
                        </div>
                    </Link>
                )
            }
        }

        let drawerDisplay = {
            display: "block"
        }
        if(window.innerWidth <= 700 && this.state.drawer === false) {
            drawerDisplay = {display: "none"}
        }
        return (
            <div className='portfolioPage'>
                <div className='portfolioSection' style={drawerDisplay}>
                    <div className='title'>Types</div>
                    <div className='selectionInput'>
                    <form>
                        {this.Input("all", "All")}
                        {this.Input("fe", "Frontend")}
                        {this.Input("md", "Mobile Development")}
                        {this.Input("db", "Database")}
                        {this.Input("ml", "Machine Learning & Computer Vision")}
                        {this.Input("be", "Backend")}
                        {this.Input("cp", "Computational Photography")}
                    </form>
                    </div>
                </div>
                <div className='portfolioSection'>
                    <div className='title'>Projects - {this.state.currentLabel}</div>
                    <div className='projectRoute'>
                        {projectsRoute}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let projectContainer = []
        for(let i = 0; i < Projects.length; i++) {
            let project = Projects[i]
            let pathname = '/' + project.id
            projectContainer.push(
                <Route key={project.id} path={pathname} element={<Project project={project} />} />
            )
        }


        let buttonStyle = {
            position: "fixed",
            zIndex: 100000000,
            display: "flex",
            justifyContent: "center",
            aligmItems: "center",
            bottom: "10px",
            right: "0px"
        }


        if(this.state.drawer)
        console.log(this.state.width)
        return (
            <div className='Portfolio'>
                {this.state.width > 700 ? Header("portfolio") : <MobileDrawer page="portfolio"/>}
                <Routes>
                    <Route path='/' element={this.PortfolioMain()} />
                    {projectContainer}
                </Routes>
                
                {window.innerWidth <= 700 ?  
                <Button className='drawerButton' style={buttonStyle} onClick={()=>{this.toggleDrawer()}}>
                    <TocIcon style={{color: "var(--primaryText)"}}/>
                </Button> : null}
            </div>
        )
    }
}

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); return true});
    return images;
}

function Project(project_input) {
    let project = project_input.project
    let r = require.context('../assets', false);
    const img = importAll(r);
    let imageContainer = []
    for(let i = 0; i < project.img_number; i++) {
        let image_format = '.png'
        if(project.img_dir === 'facemask_detection') {
            image_format = '.gif'
        }
        let path = project.img_dir + i + image_format
        imageContainer.push(
            <div className="projectImages" key={path}>
                <img src={img[path]} alt={path}/>
            </div>
        )
    }
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
    let link = ""
    if(project.link !== "none") {
        link = project.link
    }

    let projectSkills = []
    for(let i = 0; i < project.skills.length; i++) {
        projectSkills.push(
            <div className='skill' key={project.skills[i]}>
                {project.skills[i]}
            </div>
        )
    }

    let Purpose = (purpose) => {
        if(purpose === "none") {
            return <div></div>
        }
        return (
            <div className='subsection'>
                <div className='subtitle'>
                    Purpose
                </div>
                &emsp;{project.purpose}
            </div>
        )
    }
    return (
        <div className='project'>
            <Link to="/portfolio/" className='backButton'>
                <Button>
                    <CloseIcon />
                </Button>
            </Link>
            <div className='projectContent'>
                <div className='half'>
                    <div className='imageSlider'>
                        <Slide {...properties}>
                            {imageContainer}
                        </Slide>
                    </div>
                </div>
                <div className='half'>
                    <div className='subhalf'>
                        <div className='title'>
                            {project.name}
                        </div>
                        <div className='links'>
                            <a href={link} target="_blank" rel="noreferrer">{link}</a>
                        </div>
                        <div className='timeline'>
                            {project.time}
                        </div>
                    </div>
                    <div className='subhalf'>
                        <div className='subsection'>
                            <div className='subtitle'>
                                Description
                            </div>
                            &emsp;{project.description}
                        </div>
                        {Purpose(project.purpose)}
                        <div className='subsection'>
                            <div className='subtitle'>
                                Skills
                            </div>
                            <div className='skills'>
                                {projectSkills}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage