var first = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

     
    componentDidUpdate: function() {
        console.log('componentDidUpdate');
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState ({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return  React.createElement('div', {className: 'counter'}, 
          React.createElement('div', {id:'counter'}, this.state.counter),
          React.createElement('button', {onClick:this.increment}, 'Dodaj'),
          React.createElement('button', {onClick:this.decrement}, 'Odejmij')
          );        
    }
});

var element = React.createElement(first);
ReactDOM.render(element, document.getElementById('first'));


var second = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate');
    },

   
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState ({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return  React.createElement('div',  {className: 'counter'}, 
          React.createElement('div', {id:'counter'}, this.state.counter),
          React.createElement('button', {onClick:this.increment}, 'Dodaj'),
          React.createElement('button', {onClick:this.decrement}, 'Odejmij')
         );     
    }
});

var element = React.createElement(second);
ReactDOM.render(element, document.getElementById('second'));