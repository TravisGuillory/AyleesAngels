import React, { useState, useEffect } from "react";
import {Nav} from "../../components/Nav/Nav";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";


export const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([
          {
            id: 1,
            title: "We've officially partnered with Maddie's Footprints!",
            subtitle: "Together, our goal is to fill the arms of families leaving the hospital without their babies, an unfortunate reality for so many of us, right here in Acadiana.",
            user_name: "Katherine Broussard Leblanc",
            post_date: "September 24, 2019"
          },
          {
            id: 2,
            title: "We were officially approved for AmazonSmile today!",
            subtitle: "This is a FREE way to support our little nonprofit. By setting your AmazonSmile account to support Aylee’s Angels, we’ll get 0.5% every time you shop!",
            user_name: "Katherine Broussard Leblanc",
            post_date: "March 30, 2021"
          }
        ]);
      }, []);


    return (
        <>
        <Nav/>
        
        <Header 
            imgName= "LogoMain.jpg"
            altImg= "Aylee;s Angels Logo"
            title = "Aylee's Angels"
            subtitle = "Welcome to Aylee's Angels"
        />
        
        <div id="postListContainer" className="container p-2 mb-2" >
        <h1 className="text-center mt-4">Recent News</h1>
          {posts.map((post) => ( 
            <div key={post.id} className="col postContainer mt-3">
              <h4 className ="postTitle">{post.title}</h4>
              <h5 className="postSubTitle">{post.subtitle}</h5>
              <p className="postUserName">{post.user_name}</p>
              <p className="postDate">{post.post_date}</p>
            </div>
          ))}
        </div>
        <Footer/>
        </>
    );
};