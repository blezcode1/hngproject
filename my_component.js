'use strict'; 
const e = React.createElement; 
class myButton extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { isliked: false }; 
  } 
 
  render() { 
    if (this.state.isliked) { 
      return ' Hi,I am blessing'; 
    } 
 
    return e( 
      'button', 
      { onClick: () => this.setState({ isliked: true }) }, 
      'BLESSING OCHEJE' 
    ); 
  } 
} 
const domContainer = document.querySelector('#some_random_id'); 
ReactDOM.render(e(myButton), domContainer);

