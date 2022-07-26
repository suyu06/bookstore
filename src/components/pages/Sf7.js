import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf7() {
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
              <img src='images/7sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Abaddon's Gate
            </div>
            <div class="author">
            by James S. A. Corey
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
                 <p>The third book in the NYT bestselling Expanse series, Abaddon's Gate opens the door to the ruins of an alien gate network, and the crew of the Rocinante may hold the key to unlocking its secrets. Now a Prime Original series. 

HUGO AWARD WINNER FOR BEST SERIES

For generations, the solar system — Mars, the Moon, the Asteroid Belt — was humanity's great frontier. Until now. The alien artifact working through its program under the clouds of Venus has appeared in Uranus's orbit, where it has built a massive gate that leads to a starless dark.

Jim Holden and the crew of the Rocinante are part of a vast flotilla of scientific and military ships going out to examine the artifact. But behind the scenes, a complex plot is unfolding, with the destruction of Holden at its core. As the emissaries of the human race try to find whether the gate is an opportunity or a threat, the greatest danger is the one they brought with them.

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
                 <p>James S. A. Corey is the pen name of Daniel Abraham and Ty Franck. In addition to writing the novels and short stories of The Expanse, they wrote and produced the television series of the same name. Daniel lives with his family in the American southwest. Ty will tell you where he lives when and if he wants you to come over.
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

        export default Sf7;