var React = require ('react');
var ReactDOM = require('react-dom');

var samples = require('./sample-data');

var App = React.createClass({
  getInitialState: function(){
    return{
      "humans":{},
      "stores":{}
    }
  },
  loadSampleData(){
    this.setState(sample);
  },
  render: function(){
    return (
      <div>
        <div id="header"></div>
        <button onClick={this.loadSampleData}>Load Sample Data</button>
        <div className="container">
          <div className="column">
            <InboxPane humans={this.state.humans}/>
          </div>
          <div className="column">
            
          </div>
          <div className="column">
            
          </div>
        </div>

      </div>
    );
  }
});

var InboxPane = React.createClass({
  renderInboxItem: function(human){
    return <InboxItem key={human} details={this.props.humans[human]} />;
  },
  render: function(){
    return (
          <div id="inbox-pane">
        <h1>Inbox </h1>
         <table>
           <thead>
             <tr>
               <th>chat received</th>
               <th>name</th>
               <th>status</th>
               </tr>
           </thead>
           <tbody>
             {object.keys(this.props.humans).map(this.renderInboxItem)}
             
          </tbody>
          </table>
      </div>
    );
  }
});

var InboxItem = React.createClass({
render: function(){
  return(
   
    <tr>
      <td ref="name">5pm</td>
      <td>Rami loves pizza</td>
      <td>confirmed</td>
    </tr>
    
  );
}
});


ReactDOM.render(<App />, document.getElementById("main"));