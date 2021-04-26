import React from "react";


export const Header = (props) => {
    return (
        <div className="container ">
        <header className="masthead text-center" >
            <div className="overlay "></div>
            <div className="container">
                <div className="row ">
                <div className="col ">
                    <img  src={props.imgName} alt={props.altImg}/>
                    <div className="site-heading  ">
                    <h1>{props.title}</h1>
                    <h4 className="subheading ">{props.subtitle}</h4>
                    </div>
                </div>
            </div>
            </div>
        </header>
        </div>
    );

};