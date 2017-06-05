import React from 'react';
import './circleButton.scss'

export class CircleButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      doubledSized: false,
      color: 'blue'
    }
    this.width = 100
    this.height = 100
    this.handleSize = this.handleSize.bind(this)
  }

  handleSize() {
    if(!this.state.doubledSized){
      this.width *= 2
      this.height *= 2
      this.setState({ doubledSized: true})
    } else {
      this.width /= 2
      this.height /= 2
      this.setState({ doubledSized: false})
    }
  }

  render() {

    var buttonStyles = {
      backgroundColor: this.props.color,
      width: this.width,
      height: this.height,
      textAlight: 'center',
      marginRight: 15,
      marginBottom: 15,
      display: 'inline-block',
      padding: '1em',
      borderRadius: '50%',
      textAlign: 'center'
    }

    return (
      <div className='button' style={buttonStyles} onClick={this.handleSize}>
        <span className='textReact' style={{lineHeight:`${this.height}px`}}>
          Love {this.props.name}
        </span>
      </div>
    );
  }
}

export class Heart extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className='heart-shape' >
      </div>
    );
  }
}


