import React, { Component } from 'react';
import { List, Segment } from 'semantic-ui-react'


class Test extends Component {

  render() {

  	const {question, options} = this.props

    return (
      
      <div>
      <h2>{question}</h2>
      <Segment inverted >
          <List divided inverted relaxed>
            {options.map((option, index) =>
            <List.Item key={index} onClick={this.props.getComponent.bind(this, index)}>
              {option}
            </List.Item>          
         )}
          </List>
          
        </Segment>
      </div>     
    );
  }
}

export default Test;