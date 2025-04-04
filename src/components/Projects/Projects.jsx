// import "./Projects.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Component } from 'react';
// import TabItem from './TabItem/TabItem';
// import ProjectItem from './ProjectItem/ProjectItem';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

// const tabsList = [
//   { tabId: 'AI', displayText: 'AI' },
//   { tabId: 'JAVA', displayText: 'Java' },
//   { tabId: 'PYTHON', displayText: 'Python' },
//   { tabId: 'DYNAMIC', displayText: 'Dynamic' },
//   { tabId: 'RESPONSIVE', displayText: 'Responsive' },
// ];

// const projectsList = [
//   {
//     projectId: 4,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
//     title: 'VR Website',
//     description: 'Explore AR and VR Products and Industry happenings.',
//   },
//   {
//     projectId: 5,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
//     projectLink:"https://foodmuchfood.ccbp.tech",
//     title: 'Food Munch',
//     description: 'User-centric food tech website.',
//   },
//   {
//     projectId: 6,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
//     title: 'Portfolio',
//     description: 'Best alternative for a resume to showcase your skills to the digital world.',
//   },
//   {
//     projectId: 7,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
//     title: 'Design',
//     description: 'Showcase the best features and give more information about the Design tool.',
//   },
//   {
//     projectId: 10,
//     category: 'DYNAMIC',
//     imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1716910287/Screenshot_2024-05-28_210046_i1x94b.png',
//     title: 'Wiki Search Application',
//     projectLink:"https://umarprojectwiki.ccbp.tech",
//     description: 'Dynamic web application uses Wikipedia API to search for articles.',
//   },
//   {
//     projectId: 9,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
//     projectLink:"https://umarrandomjoke.ccbp.tech",
//     title: 'Random Joke Page',
//     description: 'API-based dynamic Web Application that generates a new joke.',
//   },
//   {
//     projectId: 8,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
//     projectLink:"https://umarspeedtyping.ccbp.tech",
//     title: 'Speed Typing Test',
//     description: 'Calculate the time to type the randomly generated quote.',
//   },
//   {
//     projectId: 11,
//     category: 'JAVA',
//     imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1716910287/Screenshot_2024-05-28_210046_i1x94b.png',
//     title: 'MySQL Project',
//     projectLink:"https://github.com/imumar07/CSV-to-Mysql",
//     description: 'JDBC with the Java programming language for MySQL.',
//   },
//   {
//     projectId: 12,
//     category: 'AI',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
//     title: 'Floral AI',
//     projectLink: "https://floralai.herokuapp.com/",
//     description: 'AI-based application for predicting floral species.',
//   }
// ];
// class Projects extends Component{
//     state = {
//         activeTabId: tabsList[0].tabId,
//       }
    
//       clickTabItem = tabValue => {
//         this.setState({activeTabId: tabValue})
//       }
    
//       getFilteredProjects = () => {
//         const {activeTabId} = this.state
//         const filteredProjects = projectsList.filter(
//           eachprojectDetails => eachprojectDetails.category === activeTabId,
//         )
//         return filteredProjects
//       }
//     render(){
//         const {activeTabId}=this.state
//         const filteredProjects = this.getFilteredProjects()
//         return (
//             <div id="projects" className="projects-container pt-1 ml-0" >
//               <h1 className="text-center" style={{margin:"20px",marginTop:"70px"}}>Projects</h1>
//             <ul className="tabs-container">
//                   {tabsList.map(tabDetails => (
//                     <TabItem
//                       key={tabDetails.tabId}
//                       tabDetails={tabDetails}
//                       clickTabItem={this.clickTabItem}
//                       isActive={activeTabId === tabDetails.tabId}
//                     />
//                   ))}
//                 </ul>
//                 <Row xs={1} s={2} md={2} xl={4} className="g-4"  style={{marginRight:"0",justifyContent:"center"}}>
//                 {
//                 filteredProjects.map
//                     (projectDetails => (
//                     <ProjectItem
//                         key={projectDetails.projectId}
//                         projectDetails={projectDetails}
//                     />
//                     ))
//                 }
//                 </Row>
//             </div>
//           );
//     }
// }


// export default Projects;

import "./Projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import TabItem from './TabItem/TabItem';
import ProjectItem from './ProjectItem/ProjectItem';
import Container from 'react-bootstrap/Container';

const tabsList = [
  {tabId:'AI',displayText:'AI'},
  // {tabId: 'JAVA', displayText: 'Java'},
  // {tabId: 'PYTHON', displayText: 'Python'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DATA ANALYTICS', displayText: 'Data Analytics'},
]
const projectsList = [
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description: 'Explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    projectLink:"https://foodmuchfood.ccbp.tech",
    title: 'Food Munch',
    description: 'User-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description: 'Best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: 7,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
    title: 'Design',
    description: 'Showcase the best features and give more information about the Design tool.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1716910287/Screenshot_2024-05-28_210046_i1x94b.png',
    title: 'Wiki Search Application',
    projectLink:"https://wikiteja.ccbp.tech",
    description: 'Dynamic web application uses Wikipedia API to search for articles.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    projectLink:"https://umarrandomjoke.ccbp.tech",
    title: 'Random Joke Page',
    description: 'API-based dynamic Web Application that generates a new joke.',
    
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    projectLink:"https://typespeedhelper.ccbp.tech",
    title: 'Speed Typing Test',
    description: 'Calculate the time to type the randomly generated quote.',
  },
  
  // {
  //   projectId: 11,
  //   category: 'JAVA',
  //   imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1708767497/8316271_wleyov.jpg',
  //   title: 'Hotel Application',
  //   projectLink:"https://github.com/imumar07/HotelBooking.git",
  //   description: 'Java based Full stack hotel application .',
  // },
  // {
  //   projectId: 12,
  //   category: 'PYTHON',
  //   imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1708767862/6982904_3371524_ozjjzx.jpg',
  //   title: 'Calculator',
  //   projectLink:"https://github.com/imumar07/Calculator.git",
  //   description: 'Python-based calculator with user friendly User Interface',
  // },
  // {
  //   projectId: 13,
  //   category: 'PYTHON',
  //   imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1708770852/registration_bztwbk.jpg',
  //   title: 'Registration',
  //   projectLink:"https://github.com/imumar07/registrationform_dbconnected.git",
  //   description: 'Python-based student registration form',
  // }
  ,

  {
    projectId: 14,
    category: 'AI',
    imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1710735729/FloralAI_xwvj43.png',
    title: 'Floral AI',
    description: 'Flutter-based flower image recognition project with AI.',
  },
  {
    projectId: 15,
    category: 'AI',
    imageURL: 'https://res.cloudinary.com/dqe4ld4cx/image/upload/v1715449444/Untitled_design_uktqkb.png',
    title: 'Prediction Of Disease',
    projectLink:"https://github.com/Sivatejach/ML-Mini-Project",
    description: 'AI based disease prediction tool aids early detection.',
  },
  {
    projectId: 16,
    category: 'DATA ANALYTICS',
    imageURL: 'https://res.cloudinary.com/dqc90vi99/image/upload/v1743218827/uhdmomiujsyjbe2zkwzc.png'  ,
    title: 'Data Analytics',
    projectLink:"https://drive.google.com/file/d/1r5wB0jvX4l3FN32XFzxQBDpohBteO1BP/view",
    description: 'Developed an interactive Power BI dashboard for RealMart to analyze sales trends, category performance, and state-wise distribution, enhancing data-driven decision-making',
  }
  ];


class Projects extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  };

  clickTabItem = tabValue => {
    this.setState({ activeTabId: tabValue });
  };

  getFilteredProjects = () => {
    const { activeTabId } = this.state;
    return projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId
    );
  };

  render() {
    const { activeTabId } = this.state;
    const filteredProjects = this.getFilteredProjects();

    return (
      <div id="projects" className="projects-container pt-1">
        <h1 className="text-center" style={{ margin: "20px", marginTop: "70px" }}>
          Projects
        </h1>

        {/* Tabs */}
        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>
        <div className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem key={projectDetails.projectId} projectDetails={projectDetails} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;