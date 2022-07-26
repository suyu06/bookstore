import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf4() {
  return (
    <>
    <div className='bookdetails'>
      <div class="header w">
        <div class="search">
          <input class="text" type="text" value="Search By categories" />
          <button class="btn-c">Search</button>
        </div>
        <div class="shopcart">
          My cart 
          <i class="count">8</i>
        </div>
      </div>

      <div class="de_container w">

        <div class="crumb-wrap">
          <a href="/">Books &gt;</a>
          <a href="SciFiHome">Sci-fibooks &gt;</a>          
        </div>


        <div class="product_intro  clearfix">

          <div class="prev_wrap fl">
            <div class="preview_img">
              <img src='images/4sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Lightspeed
            </div>
            <div class="author">
            by John Joseph Adams, N. K. Jemisin, Kij Johnson, Alexander Weinstein, Ramez Naam
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$3.99</i>
                  <div class="remark">
                   Reviews <br />
                    <a href="" class="remark_number">28+ M</a>
                  </div>

                </dd>
              </dl>



              <div class="choose">

                <div class="choose_btns">
                  <div class="choose_amount">
                    <input type="text" value="1" />
                    <a href="" class="add">+</a>
                    <a href="" class="substract">-</a>
                  </div>
                  <Link to="/books" class="addincart">BUY</Link>


                </div>
              </div>

            </div>
          </div>
        </div>


        <div class="product_detail clearfix">        
          <div class="detail">
            <div class="detail_tab_list">
              <li class="current">overview</li>             
            </div>
            <div class="detail_tab_con">
              <div class="item">
                <div class="parameter clearfix">
                 <p>LIGHTSPEED is an online science fiction and fantasy magazine. In its pages, you will find science fiction: from near-future, sociological soft SF, to far-future, star-spanning hard SF--and fantasy: from epic fantasy, sword-and-sorcery, and contemporary urban tales, to magical realism, science-fantasy, and folktales.
Welcome to LIGHTSPEED's 116th issue! This month, both our SF originals wrestle with alternate realities. In "The Men Who Change the World," writer Christopher East creates an alternate Earth with peace, prosperity...and a mysterious corporate entity that's more than it seems. In our second original short, "She'd Never Had a Name Before," J.R. Dawson gives her main character the opportunity to meet the sister she never got to grow up with. Will blood prove thicker than dimensionality? We also have SF reprints by duo Jason M. Hough & Ramez Naam ("All Together Now") and N.K.
                 </p>
               
                </div>
              </div>
            </div>
            <div class="detail_tab_list">
              <li class="current">About Author</li>             
            </div>
            <div class="detail_tab_con">
              <div class="item">
                <div class="parameter clearfix">
                 <p>Not much is known!</p>
               
                </div>
              </div>
            </div>
            </div>


          </div>
          </div>

          </div>

      </> 
        )
}

        export default Sf4;