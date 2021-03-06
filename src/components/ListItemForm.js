import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import StorageService from '../utils/StorageService';

class ListItemForm extends React.Component {
  state = {
    title: '',
    date: '',
  };

  handleSubmit = () => {
    StorageService.setItems(this.state, this.props.projectTitle);
    this.props.undisplayForm();
    this.props.getTask(this.state);
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDate = (e) => {
    this.setState({ date: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <br />
          <input type="text" value={this.state.title} onChange={this.handleTitle}></input>
          <label>Complete By:</label>
          <br />
          <input type="date" value={this.state.date} onChange={this.handleDate}></input>
          <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        </form>
      </div>
    );
  }
}

export default ListItemForm;
