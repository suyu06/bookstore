import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF3() {
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
              <img src='images/Americanah.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Americanah
            </div>
            <div class="author">
            by Chimamanda Ngozi Adichie
            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$16.95</i>
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
                 <p>Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, where despite her academic success, she is forced to grapple with what it means to be black for the first time. 

Quiet, thoughtful Obinze had hoped to join her, but with post-9/11 America closed to him, he instead plunges into a dangerous, undocumented life in London. Fifteen years later, they reunite in a newly democratic Nigeria, and reignite their passion—for each other and for their homeland. 


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
                 <p>Chimamanda Ngozi Adichie grew up in Nigeria. Her work has been translated into thirty languages and has appeared in various publications, including The New Yorker, The New York Times, Granta, The O. Henry Prize Stories, Financial Times, and Zoetrope: All-Story. She is the author of the novels Purple Hibiscus, which won the Commonwealth Writers’ Prize and the Hurston/Wright Legacy Award; Half of a Yellow Sun, which was the recipient of the Women’s Prize for Fiction “Winner of Winners” award; Americanah, which won the National Book Critics Circle Award; the story collection The Thing Around Your Neck; and the essays We Should All Be Feministsand Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions, both national bestsellers. A recipient of a MacArthur Fellowship, she divides her time between the United States and Nigeria. 

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

        export default GF3;