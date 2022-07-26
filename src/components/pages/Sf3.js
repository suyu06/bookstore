import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf3() {
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
              <img src='images/3sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Best Science Fiction and Fantasy of the Year, Volume Eleven
            </div>
            <div class="author">
            by Joe Abercrombie, Jonathan Strahan, Geoff Ryman, Lavie Tidhar, Paolo Bacigalupi
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$7.49</i>
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
                 <p>Jonathan Strahan, the award-winning and much lauded editor of many of genre’s 
                    best known anthologies is back with his 11th volume in this fascinating series, 
                    featuring the best science fiction and fantasy. With established names and new 
                    talent this diverse and ground-breaking collection will take the reader to the 
                    outer-reaches of space and the inner realms of humanity with stories of fantastical
                     worlds and worlds that may still come to pass.</p>
               
                </div>
              </div>
            </div>
            <div class="detail_tab_list">
              <li class="current">About Author</li>             
            </div>
            <div class="detail_tab_con">
              <div class="item">
                <div class="parameter clearfix">
                 <p>Jonathan Strahan is a World Fantasy Award award-winning editor, anthologist, and podcaster. He has edited more than 70 books, is reviews editor for Locus, a consulting editor for Tor.com, and co-host and producer of the Hugo-nominated Coode Street Podcast.

Jonathan Strahan is a World Fantasy Award award-winning editor, anthologist, and podcaster. He has edited more than 70 books, is reviews editor for Locus, a consulting editor for Tor.com, and co-host and producer of the Hugo-nominated Coode Street Podcast.
Lavie Tidhar was in Dar-es-Salaam during the American embassy bombings in 1998, and stayed in the same hotel as the Al Qaeda operatives in Nairobi. Since then he and his now-wife have narrowly avoided both the 2005 London, King’s Cross and 2004 Sinai attacks—experiences that led to the creation of Osama. He is the author of many novels, including the Bookman trilogy and is a prolific short story writer.
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

        export default Sf3;