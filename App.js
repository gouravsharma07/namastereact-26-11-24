const heading = React.createElement("div", {id: "parent"}, 
    [
        React.createElement('div',{id: 'child-1'}, [
            React.createElement("h1", {id:"child-1-h1"}, "Hello ReactJS World H1")
        ]),
        React.createElement('div', {id: 'child-2'},[
            React.createElement('h2',{id: 'child-2-h2'}, 'Hello ReactJS World H2')
        ])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
