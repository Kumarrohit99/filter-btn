const menu = [
    {
      id: 1,
      title: "panner tikka",
      category: "starter",
      price: 150,
      img: "./image/Paneer-Tikka-Kebabs-04.jpg",
      desc: `Paneer tikka kebabs, spiced cubes of Indian “cottage cheese” marinated in a tandoori spiced yoghurt and quickly cooked until charred. `,
    },
    {
      id: 2,
      title: "panner pakoda",
      category: "starter",
      price: 120,
      img: "./image/Paneer-Pakora-Recipe.jpg",
      desc: `Paneer pakora are a quick evening snack that has a lovely crispy texture with a moist, soft paneer from within, Mainly made with Paneer and gram flour . `,
    },
    {
      id: 3,
      title: "hakka noodles",
      category: "starter",
      price: 100,
      img: "./image/Hakka-Noodles-1.jpg",
      desc: `The Indian version of Chinese is so popular back home that it’s now a cuisine on its own , with veggies and sauces.`,
    },
    {
      id: 4,
      title: "malai chaap",
      category: "starter",
      price: 220,
      img: "./image/Soya-Malai-Chaap-1.jpg",
      desc: `Vegetarian soya malai chap made using soya chaap with white creamy gravy.`,
    },
    {
      id: 5,
      title: "aloo paratha",
      category: "starter",
      price: 50,
      img: "./image/Aloo_Paratha1.jpg",
      desc: `Aloo paratha is a paratha stuffed with a special potato filling known as Aloo chokha. It is traditionally eaten for breakfast. `,
    },
    {
      id: 6,
      title: "aloo gobi",
      category: "full meal",
      price: 100,
      img: "./image/20220303-aloo-gobi-vicky-wasik-35-c9afccd574534761886e5964f34586e1.jpg",
      desc: `Aloo Gobi, alu gobi or aloo gobhi is a vegetarian dish from the Indian subcontinent made with potatoes, cauliflower, and Indian spices.`,
    },
    {
      id: 7,
      title: "matar paneer",
      category: "full meal",
      price: 160,
      img: "./image/matar-paneer.jpg",
      desc: ` Mutter paneer, is a modern restaurant-style and vegetarian North Indian dish consisting of peas and paneer in a tomato-based sauce, spiced with garam masala. `,
    },
    {
      id: 8,
      title: "dal makhani",
      category: "full meal",
      price: 12.99,
      img: "./image/Restaurant-Style-Dal-Makhani.jpg",
      desc: ` Dal makhani is a dish originating in Punjab, India. A relatively modern variation of traditional lentil dishes, it is made with urad dal and other pulses, and includes butter and cream.  `,
    },
    {
      id: 9,
      title: "naan",
      category: "roti",
      price: 35,
      img: "./image/garlic-naan-3.jpg",
      desc: `Naan is a leavened, oven-baked or tawa-fried flatbread which is mainly found in the cuisine of the Indian subcontinent.`,
    },
    {
      id: 10,
      title: "butter roti",
      category: "roti",
      price: 20,
      img: "./image/Tandoori-Roti-500x500.jpg",
      desc: `Butter roti is made using whole wheat flour and can be eaten with any choice of dal,vegetable or curry dish.`,
    },
    {
      id: 11,
      title: "dahi",
      category: "add on",
      price: 30,
      img: "./image/CURD-DAHI-YOGURT.jpg",
      desc: `Curd, also mosaru or dahi or Thayir or Perugu, is a traditional yogurt or fermented milk product, originating from the Indian subcontinen.`,
    },
    {
      id: 11,
      title: "lassi",
      category: "add on",
      price: 60,
      img: "./image/lassi-recipe.jpg",
      desc: `Lassi is an Indian yogurt–based beverage with a smoothie-like consistency.`,
    },
  ];
  
  const foodMenu = document.querySelector(".menuItems");
  const filterBtn = document.querySelectorAll('.menu-btn')
  
  window.addEventListener("DOMContentLoaded", function() {
    let displayMenu = menu.map(function (item) {
        // console.log(item);
    
        return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="food-img" />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="desc">
                  ${item.desc}
                </p>
              </div>
            </article>`;
      })
      displayMenu = displayMenu.join("");
      foodMenu.innerHTML = displayMenu;
  })


  filterBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(item){
        if(item.category === category){
          return item;
        }
      });
      
      if(category === 'all'){
        displayMenuItems(menu);
      }else{
          displayMenuItems(menuCategory);
      }
      
    });
 
    function displayMenuItems(menuItem){
        let displayMenu = menuItem.map(function (item) {
            // console.log(item);
        
            return `<article class="menu-item">
                  <img src=${item.img} alt=${item.title} class="food-img" />
                  <div class="item-info">
                    <header>
                      <h4>${item.title}</h4>
                      <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="desc">
                      ${item.desc}
                    </p>
                  </div>
                </article>`;
          })
          displayMenu = displayMenu.join("");
          foodMenu.innerHTML = displayMenu;
    }

  });
  