import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const About = () => {
    return (
        <>
            <Nav />
            <Header imgName="img/family.jpg" 
            title="About Us" 
            alt="Founders Family Photo"
            subtitle="Aylee's Angels supplies bereavement boxes and keepsakes to families that experience miscarriage, stillbirth or infant loss."/>

            <div className="container">
                <div className="row">
                <div className="col mt-3 justify-content-center mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                </div>
                </div>
            </div>

            <Footer />
        </>
    );
};