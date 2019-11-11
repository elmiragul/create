
import React, { Component } from "react";
import { observer } from "mobx-react";
import store from '../Store/Store'


if (typeof window != 'undefined') window.store = store;


class Species extends Component {


    handleNameChanged(value) {
        store.setName(value)
    }
    handleClassificationChanged(value) {
        store.setClassification(value)
    }
    handleHeightChanged(value) {
        store.setHeight(value)
    }
    handleClick(e) {
        e.preventDefault()
        store.handleClick()
        console.log('lslsl')
    }


    render() {
        return (
            <div className="search">
            <div className="search__title">Search for species </div>

                <div className=" ">

                    <lable> Name: <input className="search__input" value={store.name} type="search" id="site-search" name="q"
                        onChange={(event) => { this.handleNameChanged(event.currentTarget.value) }} /></lable>
                </div>
                <div className=" ">

                    <lable> Classification: <input className="search__input" value={store.classification} type="search" id="site-search" name="q"
                        onChange={(event) => { this.handleClassificationChanged(event.currentTarget.value) }} /></lable>
                </div>
                <div className=" ">

                    <lable> Average Height: <input className="search__input" value={store.inputValue} type="search" id="site-search" name="q"
                        onChange={(event) => { this.handleHeightChanged(event.currentTarget.value) }} /></lable>
                </div>
                <div className="search__input"><button onClick={this.handleClick.bind(this)} className="">Search</button></div>
            </div>



        )
    }


}

export default observer(Species);



