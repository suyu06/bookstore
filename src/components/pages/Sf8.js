import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf8() {
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
              <img src='images/8sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Mass Effect Andromeda: Initiation
            </div>
            <div class="author">
            by N. K. Jemisin, Mac Walters
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$7.99</i>
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
                 <p>An original novel written by Hugo Award-winning author N. K. Jemisin and Mass Effect creative director Mac Walters

Lieutenant Cora Harper joined the Systems Alliance to develop and enhance her powerful biotic talents. She was assigned to the asari commando unit Talein’s Daughters, where she honed her abilities to become a skilled and deadly huntress.

Returning to Earth, Cora finds herself a stranger among other humans, and joins the Andromeda Initiative as Alec Ryder’s second-in-command. The mission will send 100,000 colonists on a one-way, 600-year-long journey into the unknown. When essential—and dangerous—tech is stolen, Cora is assigned to recover it before it can be used against the Initiative, and end the mission before it can begin.
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
                 <p>N.K. Jemisin is the author of The Inheritance Trilogy, as well as numerous fantasy, horror and science-fiction short stories and novellas. Her work has been nominated for the Hugo (twice), the Nebula (four times), and the World Fantasy Award (twice); shortlisted for the Crawford, the Gemmell Morningstar, and the Tiptree; and she has won a Locus Award for Best First Novel as well as the Romantic Times Reviewer’s Choice Award (three times).</p>
               
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

        export default Sf8;