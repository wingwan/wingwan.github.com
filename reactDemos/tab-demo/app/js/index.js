var React = require('react');
var data = [
    {name: 'tab1', value: 'red', content: 'I am content1'},
    {name: 'tab2', value: 'blue', content: 'I am content2'},
    {name: 'tab3', value: 'yellow', content: 'I am content3'},
    {name: 'tab4', value: 'green', content: 'I am content4'},
    {name: 'tab5', value: 'White', content: 'I am content5'}
];

var TabSelector = React.createClass({
    getInitialState: function() {
        return {selected: this.props.selected};
    },

    handleOnClick: function (evt) {
        this.setState({'selected': evt.target.getAttribute('data-value')})
    },

    render: function() {
        var tabs = this.props.data.map(function (item) {
            var selected = item.value == this.state.selected ? 'selected' : '';
            return <li data-value={item.value} className={selected} onClick={this.handleOnClick}>{item.name}</li>;
        }, this);

        var cnts = this.props.data.map(function(item){
            var active = item.value == this.state.selected ? 'active' : 'hide';
            return <li data-value={item.value} className={active}>{item.content}</li>;
        }, this);

        return <div className="tab-selector">
            <label>{this.props.label}</label>
            <ul>
                {tabs}
            </ul>
            <ul className="tab-cnt">
                {cnts}
            </ul>
        </div>;
    }
});

React.render(
    TabSelector({label: '', data: data, selected: 'red'}),
    document.getElementById('container')
);