
import React, { Component } from "react";
import { observer } from "mobx-react";
import store from '../Store/Store';
import Person from '../person/Person'


if (typeof window != 'undefined') window.store = store;


class People extends Component {

    componentWillMount() {
        store.getPeople()
    }

    handleNameChanged(value) {
        store.setName(value)
    }
    handleBirthChanged(value) {
        store.setBirthday(value)
    }
    handleClick(e) {
        e.preventDefault()
        store.handleClick()

    }

    render() {
        return (
            <div>
                <div className="search">
                    <div className="search__title"> Search for people</div>


                    <div className=" ">

                        <lable> Name: <input className="search__input" value={store.name} type="search" id="site-search" name="q"
                            onChange={(event) => { this.handleNameChanged(event.currentTarget.value) }} /></lable>
                    </div>
                    <div className=" ">

                        <lable> Birth Date: <input className="search__input" value={store.birthDate} type="search" id="site-search" name="q"
                            onChange={(event) => { this.handleBirthChanged(event.currentTarget.value) }} /></lable>
                    </div>
                    <div className="search__input"><button onClick={this.handleClick} className="">Search</button></div>
                </div>

                <div>
                <div className="wrapper">
                <div className="common">
                    {store.people.map((person, i) => (
                        <div key={i} className="common__link"><Person name={person.name} 
                                                                      height={person.height}
                                                                      mass={person.mass} 
                                                                      hair_color={person.hair_color} 
                                                                      skin_color={person.skin_color} 
                                                                      birth_year={person.bearth_year} 
                                                                      gender={person.gender}/></div>
                    ))}

                </div>
                </div>

                </div>



            </div>



        )
    }


}

export default observer(People);



