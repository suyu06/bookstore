import React from 'react'
import './GeneralFiction.css';
import { Link } from 'react-router-dom';

function GF1() {
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
              <img src='images/AllTheLight.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            All the Light We Cannot See
            </div>
            <div class="author">
            by Anthony Doerr
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
                 <p>Marie-Laure lives in Paris near the Museum of Natural History, where her father works. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo, where Marie-Laure’s reclusive great uncle lives in a tall house by the sea. With them they carry what might be the museum’s most valuable and dangerous jewel.

In a mining town in Germany, Werner Pfennig, an orphan, grows up with his younger sister, enchanted by a crude radio they find that brings them news and stories from places they have never seen or imagined. Werner becomes an expert at building and fixing these crucial new instruments and is enlisted to use his talent to track down the resistance. Deftly interweaving the lives of Marie-Laure and Werner, Doerr illuminates the ways, against all odds, people try to be good to one another.

Doerr’s “stunning sense of physical detail and gorgeous metaphors” (San Francisco Chronicle) are dazzling. Ten years in the writing, a National Book Award finalist, All the Light We Cannot See is a magnificent, deeply moving novel from a writer “whose sentences never fail to thrill” (Los Angeles Times).


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
                 <p>Anthony Doerr is the author of Cloud Cuckoo Land, which was a finalist for the National Book Award, and All the Light We Cannot See, winner of the Pulitzer Prize, the Carnegie Medal, the Alex Award, and a #1 New York Times bestseller. He is also the author of the story collections Memory Walland The Shell Collector, the novel About Grace, and the memoir Four Seasons in Rome. He has won five O. Henry Prizes, the Rome Prize, the New York Public Library’s Young Lions Award, the National Magazine Award for fiction, a Guggenheim Fellowship, and the Story Prize. Born and raised in Cleveland, Ohio, Doerr lives in Boise, Idaho, with his wife and two sons.

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

        export default GF1;