import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF2() {
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
              <img src='images/CandyHouse.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Candy House
            </div>
            <div class="author">
            by Jennifer Egan
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
              <li class="current">Overview</li>             
            </div>
            <div class="detail_tab_con">
              <div class="item">
                <div class="parameter clearfix">
                 <p>The Candy House opens with the staggeringly brilliant Bix Bouton,
                     whose company, Mandala, is so successful that he is “one of those 
                     tech demi-gods with whom we’re all on a first name basis.” Bix is
                      forty, with four kids, restless, and desperate for a new idea, 
                      when he stumbles into a conversation group, mostly Columbia 
                      professors, one of whom is experimenting with downloading or 
                      “externalizing” memory. Within a decade, Bix’s new technology, 
                      “Own Your Unconscious”—which allows you access to every memory 
                      you’ve ever had, and to share your memories in exchange for 
                      access to the memories of others—has seduced multitudes.

In the world of Egan’s spectacular imagination, there are “counters” who track 
and exploit desires and there are “eluders,” those who understand the price of 
taking a bite of the Candy House. Egan introduces these characters in an astonishing 
array of narrative styles—from omniscient to first person plural to a duet of voices, an epistolary chapter, and a chapter of tweets. Intellectually dazzling, The Candy House is also a moving testament to the tenacity and transcendence of human longing for connection, family, privacy, and love.

“A beautiful exploration of loss, memory, and history” (San Francisco Chronicle), 
“this is minimalist maximalism. It’s as if Egan compressed a big 19th-century novel 
onto a flash drive” (The New York Times).

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
                 <p>Jennifer Egan is the author of six previous books of fiction: Manhattan Beach, 
                    winner of the Andrew Carnegie Medal for Excellence in Fiction; A Visit from the 
                    Goon Squad, which won the Pulitzer Prize and the National Book Critics Circle 
                    Award; The Keep; the story collection Emerald City; Look at Me, a National 
                    Book Award Finalist; and The Invisible Circus. Her work has appeared in The 
                    New Yorker, Harper’s Magazine, Granta, McSweeney’s, and The New York Times 
                    Magazine. Her website is JenniferEgan.com.

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

        export default GF2;