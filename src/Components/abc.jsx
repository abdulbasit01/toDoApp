import React, { Component } from 'react';
import "../App.css"
function mapingList() {
    let navBar=["Home", "About Us", "Contact"];
    //imageUrl:'https://picsum.photos/200',
    let sideMenu=["My Rect Side"]
    let data=[
        {   
            id:1,
            name:"Abdul Basit",
            age:23,
            skills:"Graphics Designer",
            experience:"5 years"
        },
        {   
            id:2,
            name:"Rao Shoiab",
            age:21,
            skills:"Photographer",
            experience:'6 years'
        }
    ];
    const style={
        backgroundColor:"#1212",
        textAlign:"left",
        fontSize:"20px",
        height:"200px",
        overflow: "overlay",
        width:"40%",
        border:"1px #1215 groove",
        float:"left",
    }
    const personDate=data.map(data=><ul key ={data.id}><li >I'm {data.name} and I'm {data.skills} with experience over more than {data.experience}</li></ul>)
    return(
        <div className="customDiv">
            
            {
                navBar.map(navBar =><span key={navBar}><a href="index.html">{navBar}</a></span>)
                
            }
            {
                sideMenu.map(sideMenu =><div key={sideMenu}><a href="#">{sideMenu}</a></div>)
            }
            {
                <div style={style}>{personDate}</div>
            }
        </div>
    )
}   
 
export default mapingList;