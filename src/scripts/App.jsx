import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="inner">
          <h1>DetecTify</h1>
          <form action="10.12.143.251:8080/upload" method="post" encType="multipart/form-data">
            <input type="file" name="brain" id="brain" />
            <br/>
            <button type="submit" value="Submit" className="btn btn-sm btn-primary">Submit</button>
          </form>
        </div>  
      </div>
    );
  }
}

export default App;
