<template>
    
    <div class="biggest">

        <div class="navBarThing">
            
            <ul>
                <li>
                    <h1 id="name">Lee Jun Yang</h1>
                </li>
                <li>
                    <p id="under">Computer Engineering Student <br> Nanyang Technological University</p>
                    
                </li>
            </ul>
            <ul class="links">
                <li>
                    <a class='linksText' href="#aboutMe">About Me</a>
                </li>
                <li>
                    <a class='linksText' href="#projects">Projects</a>
                </li>
                <li>
                    <a class='linksText' href="#interests">Interests</a>
                </li>
                <li>
                    <a class='linksText' href="#education">Education</a>
                </li>

            </ul>

            <p id="copyright">© 2023 Lee Jun Yang.</p>
        </div>

        <div class="contents">
            <section class='Heads' id="aboutMe">
                <h1 class="headerContents">About Me <font-awesome-icon icon="fa-solid fa-person" /></h1>
                <p class="aboutMeContent">
                    I am currently a year 2 student studying computer engineering at Nanyang
                    Technological University, with a focus on software development and hardware design.
                    <br>
                    Highly motivated and detail-oriented computer engineering student with knowledge in various
                    programming languages.
                    <br>
                    <br>
                    Nanyang Technological University | Jul 2022 - Present
                    
                </p>
                <br>
                <p id="plang"> 
                    Programming Languages:
                    <br>
                    Java, Python, C++, C, HTML, CSS, JavaScript, Assembly
                    <br>
                    <br>
                    Others:
                    <br>
                    Node.js, Firebase, Vue.js, OOP
                </p>
            </section>

            <section class='Heads' id="projects">
                <h1 class="headerContents">Projects <font-awesome-icon icon="fa-solid fa-diagram-project" /></h1>
                <div class="containerProjects">
                    
                    <section class="layout">
                        <div class="card">
                        <article class="p1">
                                <div class="card2">
                                    <a href="https://github.com/JYL480/SC1015-Anime-score-prediction" ><img class='p1Pic' src="../assets/P1Pic.png" style="max-width:100%;height:auto;border-radius: 13px;"></a>
                                    
                                    <a class='projectLink' href="https://github.com/JYL480/SC1015-Anime-score-prediction">SC1015: DSAI GitHub Link <font-awesome-icon class='linkIcon' icon="fa-solid fa-link" /><div class="languages">
                                
 
                            </div></a><button class="btn">Python</button>
                                    <p class="textDetails">A data driven project where my group anaylsed anime ratings with data science and machine learning techniques </p>
                                    <div class="icons">
                                </div>
                                <!-- <font-awesome-icon class="pythonIcon" icon="fa-brands fa-python" style="color:#F2F2F2 ;" /> -->
                            </div>
                        </article>
                        </div>
                        <div class="card">
                        <article class="p2">
                            <div class="card2">
                            <a href="https://zi-char-project.web.app/#/Menu"><img class='p2Pic' src="../assets/P2PIC.png" style="max-width:100%;height:auto;border-radius: 19px;;"></a>
                            
                            <a class='projectLink' href="https://zi-char-project.web.app/#/Menu">Website Link <font-awesome-icon icon="fa-solid fa-link" />                 
                            <br>
                          </a>      <div class="languages">
                            <p>
                                <button class="btn">Vue.js</button>
                                <button class="btn">HTML</button>
                                <button class="btn">CSS</button>
                                <button class="btn">JavaScript</button>
                            </p>
 
                            </div>
                            <p class="textDetails">Personal side project, I created a Chinese ZiChar website where you are able to log in and order the selected food items. I made use of Vue.js and Firebase 
           
                            </p>
       
        
                            </div>

                        </article>
                    </div>
                    <div class="card">
                        <article class="p2">
                            <div class="card2">
                            <a href="https://github.com/JYL480/SC2002_Lab_Project"><img class='p2Pic' src="../assets/PIC3.png" style="max-width:100%;height:auto;border-radius: 19px;;"></a>
                            
                            <a class='projectLink' href="https://github.com/JYL480/SC2002_Lab_Project">SC2002: OOP GitHub Link <font-awesome-icon icon="fa-solid fa-link" />                 
                            <br>
                          </a>      <div class="languages">
                            <p>
                                <button class="btn">Java</button>
                                <button class="btn">OOP</button>
                            </p>
 
                            </div>
                            <p class="textDetails">Used SOLID and OOP design principles to create a camp booking system
 
           
                            </p>
       
        
                            </div>

                        </article>
                    </div>
                     
                    </section>
                </div>
            </section>

            <section class='Heads' id="interests">
                <h1 class="headerContents">Interests <font-awesome-icon icon="fa-solid fa-icons" /></h1>
                <p> - Interest in both sports and music. I like to play basketball and I have been in a Sympohnic Band Since 2009, where I play the French Horn. </p>
                
            </section>

            <section class='HeadsLast' id="education">
                <h1 class="headerContents">Education <font-awesome-icon icon="fa-solid fa-school" /></h1>
                <ul>
                    <li>
                        <p>2022 - 2026 <br>
                        Nanyang Technological University
                        </p>
                    </li>
                    <li><p>2017 - 2019 <br>
                        Anderson Junior college</p>
                    </li>
                    <li><p>2013 - 2016 <br>
                        Maris Stella High School</p>
                    </li>
                </ul>
            </section>
        </div>
    </div>


</template>

<style>


  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@600&family=Roboto+Condensed:wght@300&family=Share+Tech+Mono&family=Tektur:wght@500&family=Titillium+Web:wght@300&display=swap');


    *{
        background-color: #1A2129 ;
        margin: 0;
        padding: 0;
    }


    .languages{
        /* text-align: center; */
        align-items: initial;
    }

    .btn {
    transition: all 0.3s ease-in-out;
    font-family: "Dosis", sans-serif;
    }

    .btn {
    width: 72px;
    
    height: auto;
    border-radius: 50px;
    background: rgb(34,193,195);
    background: rgb(222,86,90);
    background: linear-gradient(201deg, rgba(222,86,90,1) 0%, rgba(34,193,195,1) 96%);
    outline: none;
    /* cursor: default; */
    border: none;
    font-size: 12px;
    color: #F2F2F2;
    margin: 10px 2px 10px 3px;
    }

    .btn:hover {
    transform: translateY(3px);
    box-shadow: none;
    cursor: default;
    }

    .btn:active {
    opacity: 0.5;
    }

    #name{
        color: #66FCF1;
        font-family: 'Tektur', cursive;
    }
    #under{
        color: #F2F2F2;
        font-family: 'Share Tech Mono', monospace;
    }
    .links a{
        color: #F2F2F2;
        text-decoration: none;
        font-family: 'Share Tech Mono', monospace;
        font-size: 24px;
        
    }
    .links{
        margin: 60px 0px 0px 0px;
        
    }

    .links li{
        margin-bottom: 40px;
    }

    li{
        list-style-type: none;  
        color: #F2F2F2;
        font-family: 'Roboto Condensed', sans-serif;
    }

    #education li{
        margin-bottom: 10px;
    }

    .contents .Heads{
        padding-top: 70px ;
        height: fit-content;
        width :100%;
    }

    .contents .HeadsLast{
        padding-top: 70px ;
        height: 1000px;
        width :100%;
    }

    html{
        scroll-behavior:smooth;
    }

    .navBarThing{
        position: fixed;
        margin: 70px 0px 0px 120px ;
        float: left;
        width: 30%;
        /* display: none; */
    }

    .contents{
        float: right;
        width: 50%;
        
    }

    .headerContents{
        color: #66FCF1;
        font-family: 'Tektur', cursive;
        padding-bottom: 10px;

    }
    .linksText:hover{
        color: #fdec6e;
        text-shadow:0px 0px 30px #fdec6e;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }


    .containerProjects .layout{
        width: inherit;
        height: 400px;

        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 1fr;
        gap: 8px;
    }

    .layout .p1 a{
        color: #F2F2F2;
        font-family: 'Share Tech Mono', monospace;
        text-decoration: none;
        padding-left: 7px;
    }

    .layout .p2 a{
        color: #F2F2F2;
        font-family: 'Share Tech Mono', monospace;
        text-decoration: none;
        padding-left: 7px;
    }



    .p1 .p1Pic{
        width: 30%;
        float: left;
        height: 150px;
        
    }
    /* .layout article{
        padding-botto: 30px;
    } */

    .layout .p1 .textDetails{
        width: 66.66%;
        float: right;
        color: #F2F2F2;
        font-family: 'Roboto Condensed', sans-serif;
        padding-right:5px;
    }

    .layout .p2 .textDetails{
        width: 66.66%;
        float: right;
        color: #F2F2F2;
        font-family: 'Roboto Condensed', sans-serif;
        padding-right:5px;
    }


    .p2 .p2Pic{
        width: 30%;
        float: left;
        height: 150px;
        
    }

    .pythonIcon{
        margin: 50px 0px 0px 10px;
        font-size: 40px;
    }
    

    .Icons{
        margin: 30px 0px 0px 10px;
        font-size: 40px;
    }

    .iconsP2 .IconsSVG{
        transform: translate(2px,5px);
        -ms-transform: translate(2px,5px); /* IE 9 */
        -webkit-transform: translate(2px,5px); /* Safari and Chrome */
        -o-transform: translate(2px,5px); /* Opera */
        -moz-transform: translate(2px,5px); /* Firefox */
    }

    .aboutMeContent{
        color: #F2F2F2;
        font-family: 'Roboto Condensed', sans-serif;
        line-height: 130%;
        
    }

    .card,
    .layout article {
        height: 215px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all .3s;
    }

    .card2 {
    width: 100%;
    height: 210px;
    border-radius: 19px;
    transition: all .2s;
    padding-top: 5px ;
    }

    .card2:hover {
    transform: scale(0.995);

    }

    .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }

    #interests p{
        color: #F2F2F2;
        font-family: 'Roboto Condensed', sans-serif;
        margin-bottom: 10px;
    }
    #interests {
        margin-top: 300px;
    }

    #copyright{
        color: #F2F2F2;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: small;
        margin-top: 250px;
    }

    #plang{
        color: #F2F2F2;
        font-family: 'Roboto Condensed', sans-serif;
    }


    @media screen and (min-width: 481px) and (max-width: 768px)
    {
        h1{
            font-size: 20px;
        }

        p{
            font-size: 12px;
            line-height: 15px;
        }
        .navBarThing{
    
            position: static;
        
            min-width: 100%;

            height: 60px;
    
            margin: 30px 0px 0px 0px ;
            text-align: center;

        }
        .links{
            margin-top: 30px !important;
        }

        .links li{
            /* display: none; */
            /* float: top ; */
            /* min-width: 100%; */
            display: inline;
            
        }
        .linksText{
            padding-right: 15px;
            font-size: 18px !important;

        }

        .contents{
        /* float: top ; */
        min-width: 100%;
        /* margin-top: 90px; */
        /* position: absolute; */
        left: auto;
        right: 0;
        margin-top:90px !important;
            /* display: none; */
        
    }

    .contents .Heads{
        padding:0;
        margin:0;
        height: fit-content;
        width :100%;
        margin-bottom: 30px;
    }
    .btn{
        width: 60px;
        height: 15px;
        font-size: 10px;
    }


    }

    @media only screen and (max-width: 481px) {
	
        
        h1{
            font-size: 14px !important;
        }

        p{
            font-size: 10px;
            line-height: 10px;
        }
        .navBarThing{
    
            position: static;
        
            min-width: 100%;

            height: 60px;
    
            margin: 30px 0px 0px 0px ;
            text-align: center;

        }
        .links{
            margin-top: 30px !important;
        }

        .links li{
            /* display: none; */
            /* float: top ; */
            /* min-width: 100%; */
            display: inline;
            
        }
        .linksText{
            padding-right: 15px;
            font-size: 12px !important;

        }
        .card a{
            font-size: 12px !important;
        }

        .contents{
        /* float: top ; */
        min-width: 100%;
        /* margin-top: 90px; */
        /* position: absolute; */
        left: auto;
        right: 0;
        margin-top:90px !important;
            /* display: none; */
        
    }

    .contents .Heads{
        padding:0;
        margin:0;
        height: fit-content;
        width :100%;
        margin-bottom: 30px;
    }

    
    .card,
    .layout article {
        height: 100px;
    border-radius: 20px;
    background-image: #1A2129 !important;
    transition: all .3s;
    }

    
    .card2 {
    width: 100%;
    height: 100px;
    border-radius: 19px;
    transition: all .2s;
    }

    .containerProjects .layout{
        width: inherit;
        height: 190px;
    }

    
    .card2:hover {
    transform: scale(1)

    }
    .card:hover {
    box-shadow: none;
    }

    .btn{
        width: 50px;
        height: 15px;
        font-size: 8px;
    }


    }

    

</style>