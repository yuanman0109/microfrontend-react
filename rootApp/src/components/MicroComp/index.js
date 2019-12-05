import React from 'react';
import { connect } from 'react-redux';
 class MicroComp extends React.Component { 
  state = { 
    Comp: null
  }

  componentDidMount() {
    window.System.import(`http://localhost:9002/zmc-client-child/zmc-client-child.js`).then(m => {
      this.setState({ Comp: connect(store => store)(m.default.default) }); 
    });
  }

  render() { 
    let { Comp } = this.state; 
    if (!Comp) { 
        return <div>Loading...</div>; 
    } else { 
      return <Comp key={location.hash} /> 
    } 
  }
}
export default MicroComp;