webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(152), RootInstanceProvider = __webpack_require__(150), ReactMount = __webpack_require__(58), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var data = [
	    {name: 'tab1', value: 'red', content: 'I am content1'},
	    {name: 'tab2', value: 'blue', content: 'I am content2'},
	    {name: 'tab3', value: 'yellow', content: 'I am content3'},
	    {name: 'tab4', value: 'green', content: 'I am content4'},
	    {name: 'tab5', value: 'White', content: 'I am content5'}
	];

	var TabSelector = React.createClass({displayName: "TabSelector",
	    getInitialState: function() {
	        return {selected: this.props.selected};
	    },

	    handleOnClick: function (evt) {
	        this.setState({'selected': evt.target.getAttribute('data-value')})
	    },

	    render: function() {
	        var tabs = this.props.data.map(function (item) {
	            var selected = item.value == this.state.selected ? 'selected' : '';
	            return React.createElement("li", {"data-value": item.value, 
	                       className: selected, 
	                       onClick: this.handleOnClick
	                }, item.name)
	                ;
	        }, this);

	        var cnts = this.props.data.map(function(item){
	            var active = item.value == this.state.selected ? 'active' : 'hide';
	            return React.createElement("li", {"data-value": item.value, 
	                       className: active
	                }, item.content)
	                ;

	        }, this);

	        return React.createElement("div", {className: "tab-selector"}, 
	            React.createElement("label", null, this.props.label), 
	            React.createElement("ul", null, 
	                tabs
	            ), 
	            React.createElement("ul", {className: "tab-cnt"}, 
	                cnts
	            )
	        )
	            ;
	    }
	});

	React.render(
	    TabSelector({label: '', data: data, selected: 'red'}),
	    document.getElementById('container')
	);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(160); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }
])