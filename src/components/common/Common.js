import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Home extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         toggler: false
    //     }
    // }


    render() {
        return (
            
                <div className="wrapper">
                    <div className="common">
                        <div className="common__link"><NavLink to="/species" className="common__img "><img alt="" width="450px" height="350px" src="https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2019/08/yoda-force-ghost-last-jedi.jpeg?itok=12nkMhl3" /></NavLink></div>
                        <div className="common__link"> <NavLink to="/people" className="common__img "><img alt="" width="450px" height="350px" src="https://www.geek.com/wp-content/uploads/2018/01/star-wars-625x352.jpg" /></NavLink></div>
                    </div>
                </div>
            
        )
    }


}
export default Home

