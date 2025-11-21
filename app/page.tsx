"use client";

import { useState, useEffect } from "react";
//import { generateClient } from "aws-amplify/data";
//import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
//import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

//Amplify.configure({ ...resourcesConfig }, { ...libraryOptions });

//const client = generateClient<Schema>()

export default function App() {
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    //client.models.Todo.observeQuery().subscribe({
    //  next: (data) => setTodos([...data.items]),
    //});
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    //client.models.Todo.create({
    //  content: window.prompt("Todo content"),
   // });
  }

  return (
    <main>
     <div>      
         <header className="fixed-top scroll-change" data-menu-anima="fade-bottom">
            <div className="navbar navbar-default mega-menu-fullwidth navbar-fixed-top" role="navigation">
                <div className="navbar navbar-main">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img className="logo-default" src="images/dcratfink_logo.png" alt="logo" />
                                <img className="logo-retina" src="../images/logo-retina.png" alt="logo" />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <div className="nav navbar-nav navbar-right">
                                <ul id="menu" className="nav navbar-nav one-page-menu">
                                    <li className="active">
                                        <a href="#home" style={{ color: '#787676', fontSize: '.96em', fontWeight: '100', fontFamily: 'Questrial, sans-serif', }}>Home</a>
                                    </li>
                                    <li>
                                        <a href="#portfolio" style={{ color: '#787676', fontSize: '.96em', fontWeight: '100', fontFamily: 'Questrial, sans-serif', }}>Industries</a>
                                    </li>
                                    <li>
                                        <a href="#about" style={{ color: '#787676', fontSize: '.96em', fontWeight: '100', fontFamily: 'Questrial, sans-serif', }}>About</a>
                                    </li>
                                    <li>
                                        <a href="#events" style={{ color: '#787676', fontSize: '.96em', fontWeight: '100', fontFamily: 'Questrial, sans-serif', }}>Events</a>
                                    </li>
                                    <li>
                                        <a href="#team" style={{ color: '#787676', fontSize: '.96em', fontWeight: '100', fontFamily: 'Questrial, sans-serif', }}>Team</a>
                                    </li>
                                    <li>
                                        <a href="#contacts" style={{ color: '#787676', fontSize: '.96em', fontWeight: '100', fontFamily: 'Questrial, sans-serif', }}>Contacts</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div id="home"  className="section-bg-image parallax-window background-lines-3 ken-burn-center" data-position="top" data-natural-height="1000" data-natural-width="1920" data-parallax="scroll" data-image-src="http://via.placeholder.com/1920x1000">
            
        </div>    
        <div id="portfolio" className="section-empty">
            <div className="container content">
                <div className="title-base">
                    <hr />
                    <h2>Industries!!!</h2>
                    <p>We leverage a passion for technology to solve complex, real-world problems with a portfolio showcases expertise across diverse and critical sectors, including healthcare, national defense, education, and hospitality. We specialize in developing robust, scalable, and secure applications that enhance operational efficiency and improve user experience.</p>
                </div>
                <div className="tab-box" data-tab-anima="fade-bottom">
                    <ul className="nav nav-tabs nav-center">
                        <li className="active"><a href="#"><i className="im-chrysler-building"></i> Healthcare</a></li>
                        <li><a href="#"><i className="im-air-balloon"></i> Defense</a></li>
                        <li><a href="#"><i className="im-tree-4"></i> Hospitality</a></li>
                        <li><a href="#"><i className="im-palette"></i> Government</a></li>
                        <li><a href="#"><i className="im-palette"></i> Education</a></li>
                    </ul>
                    <div className="panel active">
                        <div className="grid-list">
                            <div className="grid-box row">
                                
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/hopkins_som.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/hopkins_som.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Citizens and people</a></h2>
                                            <p>Tempor incididunt artono</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/centene.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/centene.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Walking city tour</a></h2>
                                            <p>Tempor incididunt sedo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/apalachee_center.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/apalachee_center.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Secret live concert</a></h2>
                                            <p>Tempor incidido</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="grid-list">
                            <div className="grid-box row">
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/lockheed.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/lockheed.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Coolest hidden clubs</a></h2>
                                            <p>Tempor incididunt sede</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/nasa.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/nasa.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Citizens and people</a></h2>
                                            <p>Tempor incididunt artono</p>
                                        </div>
                                    </div>
                                </div>     
                              </div>                                                 
                        </div>
                    </div>
                    <div className="panel">
                        <div className="grid-list">
                            <div className="grid-box row">
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/marriott.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/marriott.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Coolest hidden clubs</a></h2>
                                            <p>Tempor incididunt sede</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/mcdonalds.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/mcdonalds.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Citizens and people</a></h2>
                                            <p>Tempor incididunt artono</p>
                                        </div>
                                    </div>
                                </div>    
                              </div>                     
                        </div>
                    </div>
                    <div className="panel">
                        <div className="grid-list">
                            <div className="grid-box row">
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/fec.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/fec.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Coolest hidden clubs</a></h2>
                                            <p>Tempor incididunt sede</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/nsf.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/nsf.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Citizens and people</a></h2>
                                            <p>Tempor incididunt artono</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/hud.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/hud.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Exploration by the eye</a></h2>
                                            <p>Tempor incididunt sedo</p>
                                        </div>
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="grid-list">
                            <div className="grid-box row">
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/jhu.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/jhu.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Coolest hidden clubs</a></h2>
                                            <p>Tempor incididunt sede</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-md-4">
                                    <div className="img-box adv-img adv-img-down-text">
                                        <a className="img-box img-scale-up lightbox i-center" href="../images/fsu.png">
                                            <div className="caption">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src="../images/fsu.png" alt="" />
                                        </a>
                                        <div className="caption-bottom">
                                            <h2><a href="#">Citizens and people</a></h2>
                                            <p>Tempor incididunt artono</p>
                                        </div>
                                    </div>
                                </div>                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-empty">
            <div className="container content">
                <table className="grid-table border-table grid-table-xs-12">
                    <tbody>
                        <tr>
                            <td>
                                <div className="counter-box-simple counter-box-vertical">
                                    <span className="counter text-xl" data-to="31"></span>
                                    <span className="text-m">Vested Partners</span>
                                </div>
                            </td>
                            <td>
                                <div className="counter-box-simple counter-box-vertical">
                                    <span className="counter text-xl" data-to="127"></span>
                                    <span className="text-m">Completed projects</span>
                                </div>
                            </td>
                            <td>
                                <div className="counter-box-simple counter-box-vertical">
                                    <span className="counter text-xl" data-to="19"></span>
                                    <span className="text-m">Cities</span>
                                </div>
                            </td>
                            <td>
                                <div className="counter-box-simple counter-box-vertical">
                                    <span className="counter text-xl" data-to="23"></span>
                                    <span className="text-m">Years Experience</span>
                                </div>
                            </td>
                        </tr>
    
                    </tbody>
                </table>
            </div>
        </div>
        <div className="section-empty">
            <div className="container content">
                <div className="row">
                    <div className="col-md-8 col-center" data-anima="fade-bottom">
                        <div className="title-base">
                            <hr />
                            <h2>Subscribe now</h2>
                            <p>Enter your email address below to get notifications and press releases about upcoming projects and events.</p>
                        </div>
                        <form action="http://www.framework-y.com/scripts/php/contact-form.php" className="form-box form-ajax form-inline width-80 text-center-sm" method="post" data-email="aaa@pixor.it">
                            <input id="email" name="email" placeholder="Your email address" type="email" className="form-control form-value" />
                            <hr className="space m" />
                            <button className="btn btn-sm" type="submit">Join</button>
                            <div className="success-box">
                                <div className="alert alert-success">Congratulations. Your message has been sent successfully</div>
                            </div>
                            <div className="error-box">
                                <div className="alert alert-warning">Error, please retry. Your message has not been sent</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="about" className="section-empty">
            <div className="container content">
                <table className="grid-table border-table grid-table-xs-12" data-anima="fade-bottom">
                    <tbody>
                        <tr>
                            <td>
                                <p className="text-left">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minimo.
                                </p>
                            </td>
                            <td>
                                <p className="block-quote quote-1">
                                    Then people will appreciate your leadership.
                                    <span className="quote-author">Don Jhon</span>
                                </p>
                            </td>
                            <td>
                                <img src="http://via.placeholder.com/800x600" alt="Alternate Text" />
                            </td>
                            <td>
                                <p className="text-left text-bold text-s">
                                    Arese ipsume  sit amet consectetur adipiscing
                                    elitsed do eiusmod tempore geelitsed do eiusmod tempor incididunt utlabore adipiscing elitsed do eiusmod tempor incididunto. Utenim ad minimo.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="icon-box icon-box-top-bottom">
                                    <div className="icon-box-cell">
                                        <i className="im-leafs text-xl"></i>
                                    </div>
                                    <div className="icon-box-cell">
                                        <label className="text-m">Nature and sun</label>
                                        <p className="text-s">Green leaf into the nature of the </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-left text-bold">
                                    Arese ipsume  sit amet consectetur adipiscing
                                    elitsed do eiusmod tempore geelitsed do eiusmod tempor incididunt utlabore ad ro cotto.
                                </p>
                            </td>
                            <td>
                                <p className="text-left text-b old text-s">
                                    Ipsume  sit amet kasd gubergren,  no sea takimata sanctus
                                    elitsed do eiusmod tempore geelitsed do eiusmod tempor incididunt utlabore adipiscing elitsed do eiusmod tempor incididunto. Utenim ad minimo.
                                </p>
                            </td>
                            <td>
                                <ul className="fa-ul text-m text-left">
                                    <li><i className="fa-li im-calendar"></i> Lifetime support</li>
                                    <li><i className="fa-li im-idea"></i> Dedicated membership</li>
                                    <li><i className="fa-li im-identification-badge"></i> Exlusive access</li>
                                    <li><i className="fa-li im-geo3-star"></i> Promotions and more</li>
                                </ul>
                            </td>
    
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="section-empty background-dots">
            <div className="container content">
                <div className="flexslider carousel outer-navs visible-dir-nav" data-options="minWidth:145,itemMargin:30,numItems:4,controlNav:false,directionNav:true">
                    <ul className="slides">
                        <li>
                            <a className="img-box lightbox shadow inner" href="/images/about01.jpg" data-lightbox-anima="fade-in">
                                <span>
                                    <img src="/images/about01.jpg" alt="" />
                                </span>
                                <span className="caption-box">
                                    <span className="caption">
                                       Artificial Intelligence Integration & Development
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="img-box lightbox shadow  inner" href="/images/about02.jpg" data-lightbox-anima="fade-in">
                                <span>
                                    <img src="/images/about02.jpg" alt="" />
                                </span>
                                <span className="caption-box">
                                    <span className="caption">
                                        Mobile Application Development
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a className="img-box lightbox shadow  inner" href="/images/about03.jpg" data-lightbox-anima="fade-in">
                                <span>
                                    <img src="/images/about03.jpg" alt="" />
                                </span>
                                <span className="caption-box">
                                    <span className="caption">
                                        REST API & Microservices Development
                                    </span>
                                </span>
                            </a>
                        </li>
                        
                        <li>
                            <a className="img-box lightbox shadow  inner" href="/images/about05.jpg" data-lightbox-anima="fade-in">
                                <span>
                                    <img src="/images/about05.jpg" alt="" />
                                </span>
                                <span className="caption-box">
                                    <span className="caption">
                                        Web Application & UX Design & Development
                                    </span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="section-empty">
            <div className="container content">
                <h2 className="text-center">Frequently Asked Questions .</h2>
                <hr className="space l" />
                <div className="row" data-anima="fade-bottom" data-timeline="asc">
                    <div className="col-md-4 anima">
                        <div className="list-group accordion-list">
                            <div className="list-group-item">
                                <a href="#"> Can I ask for a full refund?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <a href="#"> What are the avarage shipping times?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <a href="#"> How many payment options do I have?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <a href="#"> Can I replace an item I bought?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 anima">
                        <div className="list-group accordion-list">
                            <div className="list-group-item">
                                <a href="#"> Where can I see the service?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <a href="#"> How do you manage the users datas?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <a href="#"> Can I customize my product online?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <a href="#"> What are your support options?</a>
                                <div className="panel">
                                    <div className="inner">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                                        Utenim ad minim veniam quis nostrud exercitation ullamco laboriso.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 anima">
                        <p>
                            Lorem ipsum dolor sit amet  tsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                            Utenim ad minim veniam quis nostrud exercitation ullamco.
                        </p>
                        <hr className="space s" />
                        <a href="#" className="btn btn-xs">More informations</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="events" className="section-empty">
            <div className="container content">
                <div className="row" data-anima="fade-bottom">
                    <div className="col-md-3 col-sm-12 text-center-sm">
                        <h2>What's on and latest news .</h2>
                        <hr className="space s" />
                        <a href="#" className="btn-text">All events</a>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="flexslider slider outer-navs" data-options="minWidth:200,itemMargin:30,numItems:2,controlNav:true,directionNav:true">
                            <ul className="slides">
                                <li>
                                    <div className="advs-box advs-box-side">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3>Victoria workshop</h3>
                                                <span className="extra-content">Now open</span>
                                                <p>
                                                    Interdum iusto pulvinar consequuntur augue optio  repellat fuga aurus expedita fusce matita. Lorem ipsum dolor sit amet consectetur
                                                    adipiscing elitsed do eiusmod tempor ar consequuntur augue optio repellat fuga aurus expedita fusce matito no sea takimata sanctus esto.
                                                </p>
                                                <a className="btn-text" href="#">Enter now </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="advs-box advs-box-side">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3>Citizen and city</h3>
                                                <p>
                                                    Interdum iusto pulvinar consequuntur augue optio  repellat fuga aurus expedita fusce matita. Lorem ipsum dolor sit amet consectetur
                                                    adipiscing elitsed do eiusmod tempor ar consequuntur augue optio repellat fuga aurus expedita fusce matito no sea takimata sanctus esto.
                                                </p>
                                                <a className="btn-text" href="#">Enter now </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="advs-box advs-box-side">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3>Victoria workshop</h3>
                                                <span className="extra-content">Now open</span>
                                                <p>
                                                    Interdum iusto pulvinar consequuntur augue optio  repellat fuga aurus expedita fusce matita. Lorem ipsum dolor sit amet consectetur
                                                    adipiscing elitsed do eiusmod tempor ar consequuntur augue optio repellat fuga aurus expedita fusce matito no sea takimata sanctus esto.
                                                </p>
                                                <a className="btn-text" href="#">Enter now </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="team" className="section-empty background-lines ">
            <div className="container content">
                <div className="row" data-anima="fade-bottom">
                    <div className="col-md-3 col-sm-4">
                        <div className="advs-box niche-box-team" data-anima="scale-up" data-trigger="hover">
                            <a className="img-box">
                                <img className="anima" src="../images/rickysm.png" alt="" />
                            </a>
                            <div className="content-box">
                                <h2>Ricky Ratliff</h2>
                                <h4>Founder</h4>
                                <hr className="e" />
                                <div className="btn-group social-group">
                                    <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                                    <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                                    <a target="_blank" href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                                <p>Lorem ipsum is simply dummy text of the printing and marto lorem haie.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-12 text-center-sm">
                        <hr className="space m visible-sm" />
                        <h2>Our amazing team members .</h2>
                        <hr className="space s" />
                        <a href="#" className="btn-text">All members</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="contacts" className="section-bg-image parallax-window" data-natural-height="1000" data-natural-width="1920" data-parallax="scroll" data-image-src="http://via.placeholder.com/1920x1000">
            <div className="container content">
                <div className="row proporzional-row" data-anima="fade-bottom">
                    <div className="col-md-3 col-sm-4">
                        <h2>Contact</h2>
                        <hr className="space s" />
                        <p>
                            +1 (771) 201-0014<br />
                            ricky.ratliff@dcratfink.com
                        </p>
                        <hr className="space m" />
                        <h2>Address</h2>
                        <hr className="space s" />
                        <p>
                            1901 South Charles Street<br />
                            Baltimore, MD, 21230
                        </p>
                    
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <h2>Timestable</h2>
                        <hr className="space s" />
                        <p>
                            Monday - Friday 6am to 12am<br />
                            Saturday 6am to 1pm<br />
                            Sunday 6am to Noon<br />
                        </p>
                        <hr className="space m" />
                        <a href="#" className="btn btn-xs">Write us</a>
                    </div>
                    <div className="col-md-6 col-sm-4">
                        <hr className="space m visible-xs" />
                        <div className="google-map shadow" data-marker-pos-top="50" data-coords="40.741895,-73.989308" data-skin="gray" data-marker="http://templates.framework-y.com/structura/images/marker-map-4.png"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-empty ">
            <div className="container content">
                <div className="flexslider carousel png-over outer-navs" data-options="minWidth:200,itemMargin:30,numItems:5,controlNav:false,directionNav:true">
                    <ul className="slides">
                        <li>
                            <img src="../images/logos/logo_1b.png" alt="logo" />
                        </li>
                        <li>
                            <img src="../images/logos/logo_2b.png" alt="logo" />
                        </li>
                        <li>
                            <img src="../images/logos/logo_3b.png" alt="logo" />
                        </li>
                        <li>
                            <img src="../images/logos/logo_4b.png" alt="logo" />
                        </li>
                        <li>
                            <img src="../images/logos/logo_5b.png" alt="logo" />
                        </li>
                        <li>
                            <img src="../images/logos/logo_1b.png" alt="logo" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <i className="scroll-top scroll-top-mobile show fa fa-sort-asc"></i>
        <footer className="footer-base">
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
    
                            <div className="tag-row icon-row icon-row-square">
                                <span><a>About</a></span>
                                <span><a>Services</a></span>
                                <span><a>Support</a></span>
                                <span><a>Contacts</a></span>
                            </div>
    
                        </div>
                        <div className="col-md-6 text-right text-center-sm">
                            <div className="btn-group social-group btn-group-icons">
                                <a target="_blank" href="#" data-social="share-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                                    <i className="fa fa-facebook text-s"></i>
                                </a>
                                <a target="_blank" href="#" data-social="share-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                                    <i className="fa fa-twitter text-s"></i>
                                </a>
                                <a target="_blank" href="#" data-social="share-google" data-toggle="tooltip" data-placement="top" title="Google+">
                                    <i className="fa fa-google-plus text-s"></i>
                                </a>
                                <a target="_blank" href="#" data-social="share-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                                    <i className="fa fa-linkedin text-s"></i>
                                </a>
                            </div>
    
                        </div>
                    </div>
                    <div className="row copy-row">
                        <div className="col-md-12 copy-text">
                            © 2018 Structura - One page minimal template <span>Handmade by <a href="http://schiocco.com/">schiocco.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <script src="/HTWF/scripts/jquery.min.js"></script>
            <script src="/HTWF/scripts/script.js"></script>
            <link rel="stylesheet" href="/HTWF/scripts/iconsmind/line-icons.min.css"></link>
            <script src="/HTWF/scripts/bootstrap/js/bootstrap.min.js"></script>
            <script src="/HTWF/scripts/imagesloaded.min.js"></script>
            <script src="/HTWF/scripts/parallax.min.js"></script>
            <script src="/HTWF/scripts/flexslider/jquery.flexslider-min.js"></script>
            <script src="/HTWF/scripts/isotope.min.js"></script>
            <script src="/HTWF/scripts/php/contact-form.js"></script>
            <script src="/HTWF/scripts/jquery.progress-counter.js"></script>
            <script src="/HTWF/scripts/jquery.tab-accordion.js"></script>
            <script src="/HTWF/scripts/bootstrap/js/bootstrap.popover.min.js"></script>
            <script src="/HTWF/scripts/jquery.magnific-popup.min.js"></script>
            <script src="/HTWF/scripts/social.stream.min.js"></script>
            <script src="/HTWF/scripts/jquery.slimscroll.min.js"></script>
            <script src="/HTWF/scripts/google.maps.min.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
            <script src="/HTWF/scripts/smooth.scroll.min.js"></script>
        </footer>
         </div>      
    
    </main>
  );
}
