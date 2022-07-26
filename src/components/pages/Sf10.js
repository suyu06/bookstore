import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf10() {
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
              <img src='images/10sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Witcher
            </div>
            <div class="author">
            by Paul Tobin, Joe Querio
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$1.99</i>
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
                 <p>Traveling near the edge of the Black Forest, monster hunter Geralt meets a widowed fisherman whose dead and murderous wife resides in an eerie mansion known as the House of Glasswhich seems to have endless rooms, nothing to fill them with, and horror around every corner. Written by Eisner winner Paul Tobin! The _Witcher_ games have collectively won over 250 awards and sold more than 7 million copies worldwide. There are currently two games available across multiple platforms, and a third is slated for release in February 2015.</p>
               
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

        export default Sf10;