import React, { Component  } from 'react';

export default class ShoutPublisher extends Component {

  _postShout() {
    console.log(this._body.value);
  }

  render() {
    return (
      <div className='shout-publisher-component row'>
        <div className='col s12'>
          <textarea placeholder="What's on your mind?" rows='10'
            ref={ (input) => this._body = input }></textarea>
        </div>
        <div className='col s12'>
          <button onClick={this._postShout.bind(this)}
            className='right waves-effect waves-light btn'>Shout!</button>
        </div>
      </div>
    );
  }
}
