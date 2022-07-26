import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF6() {
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
              <img src='images/LittleFires.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Little Fires Everywhere
            </div>
            <div class="author">
            by Celeste Ng
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$13.99</i>
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
                 <p>From the bestselling author of Everything I Never Told You and Our Missing Hearts comes a riveting novel that traces the intertwined fates of the picture-perfect Richardson family and the enigmatic mother and daughter who upend their lives.

In Shaker Heights, a placid, progressive suburb of Cleveland, everything is planned—from the layout of the winding roads, to the colors of the houses, to the successful lives its residents will go on to lead. And no one embodies this spirit more than Elena Richardson, whose guiding principle is playing by the rules.

Enter Mia Warren—an enigmatic artist and single mother—who arrives in this idyllic bubble with her teenaged daughter Pearl, and rents a house from the Richardsons. Soon Mia and Pearl become more than tenants: all four Richardson children are drawn to the mother-daughter pair. But Mia carries with her a mysterious past and a disregard for the status quo that threatens to upend this carefully ordered community.

When old family friends of the Richardsons attempt to adopt a Chinese-American baby, a custody battle erupts that dramatically divides the town—and puts Mia and Elena on opposing sides.  Suspicious of Mia and her motives, Elena is determined to uncover the secrets in Mia’s past. But her obsession will come at unexpected and devastating costs. 

Little Fires Everywhere explores the weight of secrets, the nature of art and identity, and the ferocious pull of motherhood—and the danger of believing that following the rules can avert disaster.

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
                 <p>Celeste Ng is the number one New York Times bestselling author of Everything I Never Told You and Little Fires Everywhere. Her third novel, Our Missing Hearts, will be published in October 2022. Ng is the recipient of fellowships from the National Endowment for the Arts and the Guggenheim Foundation, and her work has been published in over thirty languages.



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

        export default GF6;