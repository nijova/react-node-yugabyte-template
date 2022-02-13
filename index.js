'use strict';

const e = React.createElement;

class App extends React.Component {
  render() {
    return e(
      'h1',
      {},
      'YugabyteDB ...coming soon'
    );
  }
}

const root = document.querySelector('#root');
ReactDOM.render(e(App), root);