import React from 'react' ;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  render(){

    return (
      <div className="widget">
        <h1>Tabs</h1>
      </div>
    );
  }
}

export default Tabs;
