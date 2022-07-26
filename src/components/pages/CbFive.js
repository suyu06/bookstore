import React from 'react'
import './CbOne.css';
import { Link } from 'react-router-dom';

function CbFive() {
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
          <a href="CookBookHome">Cookbooks &gt;</a>          
        </div>


        <div class="product_intro  clearfix">

          <div class="prev_wrap fl">
            <div class="preview_img">
              <img src='images/5cook.jpeg'/>
            </div>
          </div>


          <div class="itemInfo_wrap fr">
            <div class="sku_name">
            The Great British Baking Show: Love to Bake

            </div>
            <div class="author">
            by Paul Hollywood, Prue Leith

            </div>
            <div class="summary">
              <dl class="summary_price">
                <dt>Price:</dt>
                <dd><i class="price">$26.00</i>
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
                 <p>Find sweet satisfaction with 50 easy, everyday cake recipes made with simple ingredients, one bowl, and no fuss.
Martha Stewart Living In Snacking Cakes, the indulgent, treat-yourself concept of cake becomes an anytime, easy-to-make treat. Expert baker Yossy Arefi's collection of no-fuss recipes is perfect for anyone who craves near-instant cake satisfaction.
With little time and effort, these single-layered cakes are made using only one bowl (no electric mixers needed) and utilize ingredients likely sitting in your cupboard. They’re baked in the basic pans you already own and shine with only the most modest adornments: a dusting of powdered sugar, a drizzle of glaze, a dollop of whipped cream. From Nectarine and Cornmeal Upside-Down Cake and Gingery Sweet Potato Cake to Salty Caramel Peanut Butter Cake and Milk Chocolate Chip Hazelnut Cake, these humble, comforting treats couldn’t be simpler to create. Yossy’s rustic, elegant style combines accessible, diverse flavors in intriguing ways that make them easy for kids to join in on the baking, but special enough to serve company or bring to potlucks.
Whether enjoyed in a quiet moment alone with a cup of morning coffee or with friends hungrily gathered around the pan, these ever-pleasing, undemanding cakes will become part of your daily ritual.
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
                 <p>Paul Hollywood, Prue Leith is a writer, photographer, and food stylist. Her first book, Sweeter off the Vine: Fruit Desserts for Every Season, was published in 2016. Yossy also writes the award-winning blog Apt. 2B Baking Co., which celebrates seasonal baking and preserving. Her work has been featured in publications in print and online, including NYT Cooking, Martha Stewart, Bon Appétit, Food52, Epicurious, Good Housekeeping, EatingWell, and more. She teaches food and photography workshops all over the world, and lives in Brooklyn with her partner, Pete, their cat, Abigail, and their dog, Arlo.

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

        export default CbFive;