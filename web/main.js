requirejs(['root', 'modules/request'], function(required) {
  console.log(required);

  const root = document.querySelector('#root');
  ReactDOM.render(React.createElement(Root), root);
});
