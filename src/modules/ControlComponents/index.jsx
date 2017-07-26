import React from 'react';

class ControlComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', designation: null, tech: [], city: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleCheckboxChange(event) {
    const value = event.target.value;
    const tech = this.state.tech;
    const checked = event.target.checked;
    if (checked && !tech.includes(value)) {
      this.setState(prevState => ({
        tech: prevState.tech.concat(value)
      }))
    } else if (!checked) {
      this.setState(prevState => {
        const index = prevState.tech.indexOf(value);
        return {
          tech: prevState.tech.filter((_, i) => i !== index)
        };
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Designation:
            <select name="designation" value={this.state.designation || 'placeholder'} onChange={this.handleChange}>
              <option value="placeholder" disabled></option>
              <option value="Software Developer">Software Developer</option>
              <option value="Testing Engineer">Testing Engineer</option>
              <option value="Human Resource Manager">Human Resource Manager</option>
              <option value="Finance Manager">Finance Manager</option>
            </select>
          </label>
          <br/>
          <label>
            Technologies:
            <input type="checkbox" id="Node.js" name="tech" value="Node.js" onChange={this.handleCheckboxChange} checked={this.state.tech.includes('Node.js')} />
            <label htmlFor="Node.js">Node.js</label>
            <input type="checkbox" id="ReactJS" name="tech" value="ReactJS" onChange={this.handleCheckboxChange} checked={this.state.tech.includes('ReactJS')} />
            <label htmlFor="ReactJS">ReactJS</label>
            <input type="checkbox" id="Angular" name="tech" value="Angular" onChange={this.handleCheckboxChange} checked={this.state.tech.includes('Angular')} />
            <label htmlFor="Angular">Angular</label>
          </label>
          <br/>
          <label>
            City:
            <input type="radio" id="Bangalore" name="city" value="Bangalore" onChange={this.handleChange} checked={this.state.city === 'Bangalore'} />
            <label htmlFor="Bangalore">Bangalore</label>
            <input type="radio" id="Mumbai" name="city" value="Mumbai" onChange={this.handleChange}  checked={this.state.city === 'Mumbai'} />
            <label htmlFor="Mumbai">Mumbai</label>
            <input type="radio" id="Delhi" name="city" value="Delhi" onChange={this.handleChange}  checked={this.state.city === 'Delhi'} />
            <label htmlFor="Delhi">Delhi</label>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ControlComponents;
