import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF4() {
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
              <img src='images/WindUpBird.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Wind-Up Bird Chronicle
            </div>
            <div class="author">
            by Haruki Murakami
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$17.99</i>
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
                  <a href="" class="addincart">
                 ADD TO CART
                  </a>


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
                 <p>In a Tokyo suburb, a young man named Toru Okada searches for his wife’s missing cat—and then for his wife as well—in a netherworld beneath the city’s placid surface. As these searches intersect, he encounters a bizarre group of allies and antagonists. Gripping, prophetic, and suffused with comedy and menace, this is one of Haruki Murakami’s most acclaimed and beloved novels.

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
                 <p>Haruki Murakami was born in Kyoto in 1949 and now lives near Tokyo.  The most recent of his many honors is the Yomiuri Literary Prize, whose previous recipients include Yukio Mishima, Kenzaburo Oe, and Kobo Abe.  He is the author of the novels Dance, Dance, Dance, Hard-Boiled Wonderland and the End of the World, and A Wild Sheep Chase, and of The Elephant Vanishes, a collection of stories.  His latest novel, South of the Border, West of the Sun, will be published by Knopf in 1999.  His work has been translated into more than fifty languages.

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

        export default GF4;