import React from "react";
import '../Weblayout/web.css';
import cc from '../Weblayout/Images/img2.jpg';
import dd from '../Weblayout/Images/img3.jpg';
import aa from '../Weblayout/Images/ofic.jpg';





const Article = () => {




    return(
        <>
            <article className="art1">
            <h1>welcome to ghani page</h1>
            <p> Lorem iearum ququam illum nobi Nece nesciunt voluptas quidem harum vero numquam maiores ex quas exercitationem corrupti recusandae eum a repudiandae quis, debitis, deserunt quod odio temporibus aliquam incidunt. Vero, harum unde! Nemo dolorem voluptatem molestias perspiciatis inventore hic nobis? Odit numquam cumque placeat aliquid dolor repudiandae nesciunt laudantium illum, illo rerum earum vel sunt sit similique, cupiditate corporis adipisci porro dolorem? Quaerat nemo ducimus ipsam at, maxime amet unde sed. Quia earum ita</p>
            <h2>our services</h2>
            <div className="service_container">
                <div className="service_box">
                    <div className="img">
                    <img src={cc} alt="pic1" />
                         
                    </div>
                    <div service_title>
                      <h3>web designing</h3>
                    </div>
                    <div service_desk>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nobis, eum voluptate quibusdam sint recusandae commodi in ratione animi ipsam. Ipsa reiciendis totam repudiandae voluptatum dignissimos saepe similique odit.
                      </p>
                </div>
                <div> 
                <button type="submit">readmore</button>
                </div>
            </div>
            <div className="service_box">
                    <div className="img">
                     <img src={aa} alt="pic" />

                    </div>
                    <div service_title>
                      <h3>web designing</h3>
                    </div>
                    <div service_desk>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nobis, eum voluptate quibusdam sint recusandae commodi in ratione animi ipsam. Ipsa reiciendis totam repudiandae voluptatum dignissimos saepe similique odit.
                      </p>
                </div>
                <div> 
                <button type="submit">readmore</button>
                </div>
            </div>
            <div className="service_box">
                    <div className="img">
                    <img src={dd} alt="pic2" />

                    </div>
                    <div service_title>
                      <h3>web designing</h3>
                    </div>
                    <div service_desk>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis nobis, eum voluptate quibusdam sint recusandae commodi in ratione animi ipsam. Ipsa reiciendis totam repudiandae voluptatum dignissimos saepe similique odit.
                      </p>
                </div>
                <div> 
                <button type="submit">readmore</button>
                </div>
            </div>
            </div>

            </article>
        </>

    )
}
export default Article ;
