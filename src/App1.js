//import React, { Component } from "react";

import React, { Component } from "react"

import Comp1 from "./components/Comp1";


const movies = [
    { title: 'The Shawshank Redemption', genres: ['Drama', 'Crime'] },
    { title: 'The Godfather', genres: ['Crime', 'Drama'] },
    { title: 'The Dark Knight', genres: ['Action', 'Crime', 'Drama'] },

];


class App1 extends Component {
    render() {
        return (
            <>
                <Comp1 />
            </>
        );
    }
}







export default App1;