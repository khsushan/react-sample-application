import React, { Component } from 'react';
import uuid from 'uuid'

class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    console.log('handle submit');
    if(this.refs.title.value === ''){

    }else{
      this.setState({newProject:
        {
          id: uuid.v4(),
          title:this.refs.title.value ,
          category:this.refs.category.value
        }
      },
      function(){
          this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="AddProjects">
        Add Project
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <lable>Title</lable>
            <input type="text"ref="title" />
          </div>
          <div>
            <lable>Category</lable>
            <select type="text"ref="category">
              {categoryOptions}
            </select>
          </div>
          <div>
            <input type="submit" value="Add Subject" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
