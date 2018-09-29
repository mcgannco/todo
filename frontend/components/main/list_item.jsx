import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
      return(
        <li>
          <div className="list-options">
            <p>View</p>
            <p>Edit</p>
            <p>Delete</p>
          </div>

          <div className="list-title">
            <h4>{this.props.list.name}</h4>
          </div>
        </li>
      )
    }
  }


export default ListItem;
