import React from 'react'
import Header from '../components/Header'
import pic from '../assets/tk.JPG'
import resume from '../assets/resume.pdf';
import MobileDrawer from '../components/MobileDrawer'

class AboutPage extends React.Component{
    constructor() {
        super()
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('resize', this.handleWindowSizeChange);
        const img = new Image();
        img.src = "../assets/tk.JPG";
        const imagesPreload = [pic];
        imagesPreload.forEach((image) => {
            const newImage = new Image();
            newImage.src = image;
            window[image] = newImage;
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    aboutPage = () => {
        return (
            <div className='aboutPage'>
                <div className='section'>
                    <div className='half'>
                        <img src={pic} alt='Profile Pic' />
                        <div className='halfMain'>
                            <div>TOMOYOSHI KIMURA -- 木村智源</div>
                            <div className='aboutDescriptionText'>(Engineer, Programmer, Student, Designer)</div>
                        </div>
                    </div>
                    <div className='half'>
                        <div className='aboutText'>
                            <div className='textTitle'>
                                <div className='underLine'>
                                    Bio
                                </div>
                            </div>
                            <div className='descriptionText'>&emsp;Hello, I am currently a Computer Science student at the University of Illinois at Urbana-Champaign.
                                <br />&emsp;I was born in Tokyo, Japan in 2002. Right before schooling began, I moved to Beijing, China to live with my grandparents, who are Korean Chinese. After eighth grade, I came to the United States to attend a high school in upstate New York. Now, I am enrolled at the University of Illinois at Urbana Champaign.
                            </div>
                        </div>
                        <div className='aboutText'>
                            <div className='textTitle'>
                                <div className='underLine'>
                                    Experience
                                </div>
                            </div>
                            <div className='descriptionText'>&emsp;I am expected to graduate with a Bachelor’s degree in 2023. In addition to Undergraduate studies, I am considering to apply the BS-MCS program at UIUC and graduate with both a Bachelor’s degree and a Master degree of Computer Science in 2024. My current academic transcript at UIUC has reflected my interests in Big Data, Intelligence, and Computer System. Beside my academic life, I have also been a SPIN intern at National Center for Supercomputing Application, conducting research with Dr. Kaiyu Guan’s Lab on Illinois agricultural system.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='subsection'>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className='subtitle'>RESUMÉ</a>
                    </div>
                    <div className='subsection'>
                        <div className='subtitle'>CONTACT</div>
                        <ul>
                            <li className='subElement'>Work: tomoyoshki[at]gmail.com</li>
                            <li className='subElement'>School: tkimura4[at]illinois.com</li>
                            <li className='subElement'>Instagram: tommy_kimura</li>
                            <li className='subElement'>Wechat: GTK_hb-B</li>
                        </ul>
                    </div>
                    <div className='subsection'>
                        <div className='subtitle'>SKILLS</div>
                        <ul>
                            <li className='subElement'>C, C++, Python, HTML, CSS, JavaScript</li>
                            <li className='subElement'>TensorFlow, Pytorch, React, React Native</li>
                            <li className='subElement'>Firebase, Computational Photography, OpenCV</li>
                            <li className='subElement'>Numpy, Pandas, Matplotlib</li>
                        </ul>
                    </div>
                    <div className='subsection'>
                        <div className='subtitle'>INTERESTS</div>
                        <ul>
                            <li className='subElement'>Software Engineering</li>
                            <li className='subElement'>Big Data & Intelligence</li>
                            <li className='subElement'>System & Security</li>
                            <li className='subElement'>Computational Sustainability</li>
                            <li className='subElement'>Computational Finance</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='About'>
                {this.state.width > 700 ? Header("about") : <MobileDrawer page="about"/>}
                {this.aboutPage()}
            </div>
        )
    }
}

export default AboutPage