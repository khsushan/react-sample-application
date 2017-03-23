import React, { Component } from 'react';
import ProjectItem  from './projectItem'

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItemsPrint;
    if(this.props.projects){
      projectItemsPrint = this.props.projects.map(project=>{
          return(
            <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
          );
      });
    }
    return (
      <div className="Projects">
         <h3>Latest Project</h3>
        {projectItemsPrint}
      </div>
    );
  }
}


//Validationg fields
Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
