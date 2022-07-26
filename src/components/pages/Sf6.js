import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf6() {
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
              <img src='images/6sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Eye of the World
            </div>
            <div class="author">
            by Robert Jordan
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$15.99</i>
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
                 <p>Want to dive into a fantasy epic with incredible world-building, first-class characters and page-turning adventure? Then it's time to start Wheel of Time. The first book in this thirteen-book saga sets the stage for a formidable journey (one eventually finished by fellow author Brandon Sanderson), and is a must-read for fans of Lord of the Rings, Shannara, and Dune. Beloved by fantasy fans around the world, this is an epic at its finest.
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
                 <p>The Eye of the World, the first novel in Robert Jordan's #1 New York Times bestselling epic fantasy series, The Wheel of Time®, follows Moiraine Damodred as she arrives in Emond's Field on a quest to find the one prophesized to stand against The Dark One.

The Wheel of Time turns and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. What was, what will be, and what is, may yet fall under the Shadow.

When a vicious band of half-men, half beasts invade the Two Rivers seeking their master’s enemy, Moiraine persuades Rand al’Thor and his friends to leave their home and enter a larger unimaginable world filled with dangers waiting in the shadows and in the light.

Since its debut in 1990, The Wheel of Time® has captivated millions of readers around the globe with its scope, originality, and compelling characters. The last six books in series were all instant #1 New York Times bestsellers, and The Eye of the World was named one of America's best-loved novels by PBS's The Great American Read.
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

        export default Sf6;