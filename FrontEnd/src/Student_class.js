import React from "react";

class Student_class extends React.Component {
    constructor()
    {
        super();
        this.state = {
            some: 2
        }
    }
    
    render() {
        console.log("Render");
        // Prints each time by click
        // although value of some is not chaning but still rendering !!!!!!!!!!!

        return (
            <div>
                <h1>{this.state.some}</h1>

                <button onClick={() => this.setState( { some: 3 })}>Click</button>
            </div>
        )
    }
}

export default Student_class;