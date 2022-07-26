import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF5() {
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
              <img src='images/OscarWao.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Brief Wondrous Life of Oscar Wao 
            </div>
            <div class="author">
            by Junot Díaz
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
                 <p>Oscar is a sweet but disastrously overweight ghetto nerd who—from the New Jersey home he shares with his old world mother and rebellious sister—dreams of becoming the Dominican J.R.R. Tolkien and, most of all, finding love. But Oscar may never get what he wants. Blame the fukú—a curse that has haunted Oscar’s family for generations, following them on their epic journey from Santo Domingo to the USA. Encapsulating Dominican-American history, The Brief Wondrous Life of Oscar Wao opens our eyes to an astonishing vision of the contemporary American experience and explores the endless human capacity to persevere—and risk it all—in the name of love.

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
                 <p>Junot Díaz was born in the Dominican Republic and raised in New Jersey. He is the author of the critically acclaimed Drown; The Brief Wondrous Life of Oscar Wao, which won the 2008 Pulitzer Prize and the National Book Critics Circle Award;  This Is How You Lose Her, a New York Times bestseller and National Book Award finalist; and a debut picture book, Islandborn. He is the recipient of a MacArthur “Genius” Fellowship, PEN/Malamud Award, Dayton Literary Peace Prize, Guggenheim Fellowship, and PEN/O. Henry Award. A graduate of Rutgers College, Díaz is currently the fiction editor at Boston Review and the Rudge and Nancy Allen Professor of Writing at the Massachusetts Institute of Technology.

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

        export default GF5;