import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF7() {
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
          <a href="GeneralFictionHome">General Fiction &gt;</a>          
        </div>


        <div class="product_intro  clearfix">

          <div class="prev_wrap fl">
            <div class="preview_img">
              <img src='images/WhiteTeeth.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            White Teeth
            </div>
            <div class="author">
            by Zadie Smith
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$14.99</i>
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
              <li class="current">Overview</li>             
            </div>
            <div class="detail_tab_con">
              <div class="item">
                <div class="parameter clearfix">
                 <p>Zadie Smith’s dazzling debut caught critics grasping for comparisons and deciding on everyone from Charles Dickens to Salman Rushdie to John Irving and Martin Amis. But the truth is that Zadie Smith’s voice is remarkably, fluently, and altogether wonderfully her own.

At the center of this invigorating novel are two unlikely friends, Archie Jones and Samad Iqbal. Hapless veterans of World War II, Archie and Samad and their families become agents of England’s irrevocable transformation. A second marriage to Clara Bowden, a beautiful, albeit tooth-challenged, Jamaican half his age, quite literally gives Archie a second lease on life, and produces Irie, a knowing child whose personality doesn’t quite match her name (Jamaican for “no problem”). Samad’s late-in-life arranged marriage (he had to wait for his bride to be born), produces twin sons whose separate paths confound Iqbal’s every effort to direct them, and a renewed, if selective, submission to his Islamic faith.


</p>
               
                </div>
              </div>
            </div>
            <div class="detail_tab_list">
              <li class="current">About the Author</li>             
            </div>
            <div class="detail_tab_con">
              <div class="item">
                <div class="parameter clearfix">
                 <p>Zadie Smith was born in Northwest London in 1975 and still lives in the area. She is the author of White Teeth, The Autograph Man, On Beauty, Changing My Mind, NW, and most recently Swing Time.

</p>
               
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

        export default GF7;