import React, { Component } from 'react';
import Projects from './Components/projects'
import Todos from './Components/Todos'
import AddProject from './Components/AddProject'
import uuid from 'uuid'
import $ from 'jquery'

class App extends Component {
  constructor(){
    super();
    this.state= {
        projects: [],
        todos:[]
    }
  }

  // this is lifecyle method which will fire when component is re rendered
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success:function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error:function(xhr,status,err){
        console.log(err);
      }
    })
  }

  getProjects(){
    this.setState({projects:
      [
        {
          id:uuid.v4(),
          title: 'Bussniess Website',
          category: 'Web Design'
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce shopping cart',
          category: 'Web Development'
        }
    ]});
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        < AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
