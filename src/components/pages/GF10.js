import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function GF10() {
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
              <img src='images/SalvageTheBones.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            Salvage the Bones 
            </div>
            <div class="author">
            by Jesmyn Ward
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
                 <p>A hurricane is building over the Gulf of Mexico, threatening the coastal town of Bois Sauvage, Mississippi, and Esch's father is growing concerned. A hard drinker, largely absent, he doesn't show concern for much else. Esch and her three brothers are stocking food, but there isn't much to save. Lately, Esch can't keep down what food she gets; she's fourteen and pregnant. Her brother Skeetah is sneaking scraps for his prized pitbull's new litter, dying one by one in the dirt. Meanwhile, brothers Randall and Junior try to stake their claim in a family long on child's play and short on parenting.

As the twelve days that make up the novel's framework yield to their dramatic conclusion, this unforgettable family—motherless children sacrificing for one another as they can, protecting and nurturing where love is scarce—pulls itself up to face another day. A big-hearted novel about familial love and community against all odds, and a wrenching look at the lonesome, brutal, and restrictive realities of rural poverty, Salvage the Bones is muscled with poetry, revelatory, and real.



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
                 <p>Jesmyn Ward received her MFA from the University of Michigan and is currently a professor of creative writing at Tulane University. She is the author of the novels Where the Line Bleeds and Salvage the Bones, which won the 2011 National Book Award, and Sing, Unburied, Sing, which won the 2017 National Book Award. She is also the editor of the anthology The Fire This Time and the author of the memoir Men We Reaped, which was a finalist for the National Book Critics Circle Award. From 2008-2010, Ward had a Stegner Fellowship at Stanford University. She was the John and Renée Grisham Writer in Residence at the University of Mississippi for the 2010-2011 academic year. In 2016, the American Academy of Arts and Letters selected Ward for the Strauss Living Award. She lives in Mississippi.

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

        export default GF10;