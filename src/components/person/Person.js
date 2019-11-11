import React, { Component } from "react";



export default class Person extends Component {

    render() {
        return (

            <div className="person">
                <div>Name:{this.props.name}</div>
                <div>Height:{this.props.height}</div>
                <div>Mass:{this.props.mass}</div>
                <div>Hair Color:{this.props.hair_color}</div>
                <div>Scin Color:{this.props.skin_color}</div>
                <div>Birth Year:{this.props.birth_year}</div>
                <div>Gender:{this.props.gender}</div>

            </div>
        )



    }
}