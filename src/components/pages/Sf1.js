import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf1() {
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
              <img src='images/1sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Blood of Elves
            </div>
            <div class="author">
            by Andrzej Sapkowski 
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
                 <p> Andrzej Sapkowski, winner of the World Fantasy Award for Life Achievement,
                     created an international phenomenon with his groundbreaking epic fantasy 
                     series, The Witcher. Blood of Elves is the first novel in the saga that 
                     inspired the Netflix show and the hit video games.For over a century, 
                     humans, dwarves, gnomes, and elves have lived together in relative peace. 
                     But times have changed, the uneasy peace is over, and now the races are 
                     fighting once again. The only good elf, it seems, is a dead elf.Geralt of 
                     Rivia, the cunning hunter known as the Witcher, has been waiting for the 
                     birth of a prophesied child. This child has the power to change the world 
                     for good—or for evil.</p>
               
                </div>
              </div>
            </div>
            <div class="detail_tab_list">
              <li class="current">About Author</li>             
            </div>
            <div class="detail_tab_con">
              <div class="item">
                <div class="parameter clearfix">
                 <p>Andrzej Sapkowski is the author of the Witcher series and the Hussite 
                    Trilogy. He was born in 1948 in Poland and studied economics and business, 
                    but the success of his fantasy cycle about Geralt of Rivia turned him into 
                    an international bestselling writer. Geralt’s story has inspired the hit 
                    Netflix show and multiple video games has been translated into thirty-seven 
                    languages, and has sold millions of copies worldwide.</p>
               
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

        export default Sf1;