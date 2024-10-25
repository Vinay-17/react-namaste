{/* <div id="parent">
    <div id= "child1">
        <h1>VINAY</h1>
        <h2>VINAY</h2>
    </div>
</div> */}
    // <div id= "child2">
    //     <h1>VINAY</h1>
    //     <h2>VINAY</h2>
    // </div>



    const parent = React.createElement("div",{ id : "parent"},
        [React.createElement("div",{id : "child1"},
            [React.createElement("h1",{id : "heading"}, "heading1 from child1"),
                React.createElement("h2",{id : "heading"}, "heading2 from child1")]
    
    )],
    [React.createElement("div",{id : "child2"},
        [React.createElement("h1",{id : "heading"}, "vinay heading1 from child2"),
            React.createElement("h2",{id : "heading"}, "vinay heading1 from child2")]
    )])
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)
    
    