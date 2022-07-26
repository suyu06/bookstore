import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function Sf2() {
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
              <img src='images/2sf.jpg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Escape Pod: The Science Fiction Anthology 
            </div>
            <div class="author">
            by S.B. Divya, Mur Lafferty, N. K. Jemisin, Cory Doctorow, Ken Liu
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$15.95 </i>
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
                 <p>The fifteenth anniversary of the Hugo-nominated science fiction podcast Escape Pod, featuring new and exclusive stories from today’s bestselling writers.

Finalist for the 2020 Hugo Award for Best Semiprozine. Celebrate the fifteenth anniversary of cutting-edge science fiction from the hit podcast, Escape Pod. Escape Pod has been bringing the finest short fiction to millions of ears all over the world, at the forefront of a new fiction revolution.

This anthology gathers together fifteen stories, including new and exclusive work from writers such as from Cory Doctorow, Ken Liu, Mary Robinette Kowal, T. Kingfisher and more. From editors Mur Laffterty and S.B. Divya comes the science fiction collection of the year, bringing together bestselling authors in celebration of the publishing phenomenon that is, Escape Pod.
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
                 <p>S.B. Divya is the author of the Nebula nominated novella, RUNTIME (Tor.com, 2016) and has published short fiction in Analog and Uncanny. She is co-editor of the Hugo nominated weekly science-fiction podcast, Escape Pod, with Mur Lafferty. She holds degrees in Computational Neuroscience and Signal Processing, and has worked for 20 years as an electrical engineer.

Mur Lafferty is a writer, podcast producer, gamer, geek, and martial artist. She is the host of the award winning podcast I Should Be Writing, and the host of the Angry Robot Books Podcast. She is the winner of the 2013 John W. Campbell Award for Best New Writer.
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

        export default Sf2;