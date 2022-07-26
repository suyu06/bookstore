import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF9() {
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
              <img src='images/Goldfinch.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Goldfinch
            </div>
            <div class="author">
            by Donna Tartt
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
                 <p>Theo Decker, a 13-year-old New Yorker, miraculously survives an accident that kills his mother. Abandoned by his father, Theo is taken in by the family of a wealthy friend. Bewildered by his strange new home on Park Avenue, disturbed by schoolmates who don't know how to talk to him, and tormented above all by a longing for his mother, he clings to the one thing that reminds him of her: a small, mysteriously captivating painting that ultimately draws Theo into a wealthy and insular art community.

As an adult, Theo moves silkily between the drawing rooms of the rich and the dusty labyrinth of an antiques store where he works. He is alienated and in love — and at the center of a narrowing, ever more dangerous circle.

The Goldfinch is a mesmerizing, stay-up-all-night and tell-all-your-friends triumph, an old-fashioned story of loss and obsession, survival and self-invention. From the streets of New York to the dark corners of the art underworld, this "soaring masterpiece" examines the devastating impact of grief and the ruthless machinations of fate (Ron Charles, Washington Post).


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
                 <p>Donna Tartt is the author of The Goldfinch, which was awarded the 2014 Pulitzer Prize for Fiction, as well as the Andrew Carnegie Medal for Excellence in Fiction. Her novels The Secret History and The Little Friendhave been translated into 30 languages. She was born in Greenwood, Mississippi and is a graduate of Bennington College.

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

        export default GF9;