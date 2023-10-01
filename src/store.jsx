let store ={
       navbarItems:[
              {title:'HOME' , titleSrc:'/'},
              {title:'MENU' , titleSrc:'/menu'},
              {title:'RESERVATION' , titleSrc:'/reservation'},
              {title:'GALLARY' , titleSrc:'/gallary'},
              {title:'ABOUT' , titleSrc:'/about'},
              {title:'BLOG' , titleSrc:'/blog'},
              {title:'CONTACT' , titleSrc:'/contact'},
       ],
       HomeCarouselImgSrc:["img/slide1-01.jpg.webp","img/master-slides-02.jpg.webp","img/master-slides-01.jpg.webp"],
       restaurantPropertyBoxs :[
              {img:"img/intro-01.jpg.webp",title:"Romantic Restaurant",subTitle:"Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros."},
              {img:"img/intro-02.jpg.webp",title:"Delicious Food",subTitle:"Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna"},
              {img:"img/intro-04.jpg.webp",title:"Red Wines You Love",subTitle:"Sed ornare ligula eget tortor tempor, quis porta tellus dictum."}
       ],
       upcomingEventCarousel:[
              {bgImg:'img/bg-event-01.jpg.webp',boxImg:'img/event-02.jpg.webp',title:'Wines during specific nights',desc:'Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia',badgeTitle:'08:00 PM Tuesday - 21 November 2018',boxAnim:'eventBoxAnim1 1s'},
              {bgImg:'img/bg-event-02.jpg.webp',boxImg:'img/event-06.jpg.webp',title:'Wines during specific nights',desc:'Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia',badgeTitle:'08:00 PM Tuesday - 21 November 2018',boxAnim:'eventBoxAnim2 1s'},
              {bgImg:'img/bg-event-04.jpg.webp',boxImg:'img/event-01.jpg.webp',title:'Wines during specific nights',desc:'Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia',badgeTitle:'08:00 PM Tuesday - 21 November 2018',boxAnim:'eventBoxAnim3 1s'},
       ],
       homeReservtionSection:[
              {title:'Date',type:'input',inputType:'date'},
              {title:'Name',type:'input',inputType:'text'},
              {title:'Time',type:'option',value:'9 AM'},
              {title:'Phone',type:'input',inputType:'phone'},
              {title:'People',type:'option',value:'1 Person'},
              {title:'Email',type:'input',inputType:'email'},
       ],
       HomeCustomerSay:[
              {name:'Sajjad Moeini',city:'Tehran',img:"img/avatar-01.jpg.webp"},
              {name:'Jack Sparow',city:'Caraib',img:"img/avatar-05.jpg.webp"},
              {name:'Marie Simmons',city:'New York',img:"img/avatar-04.jpg.webp"},
       ],
       restaurantBlogBoxs :[
              {img:"img/blog-01.jpg.webp",title:"BEST PLACES FOR WINE",subTitle:"Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.",badgeTitle:'17 Dec 2023'},
              {img:"img/blog-02.jpg.webp",title:"EGGS AND CHEESE",subTitle:"Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat" ,badgeTitle:'15 Dec 2023'},
              {img:"img/blog-03.jpg.webp",title:"STYLE THE WEDDING PARTY",subTitle:"Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",badgeTitle:'7 Dec 2023'}
       ],
       footerImgSrc:[
              "img/photo-gallery-01.jpg.webp",
              "img/photo-gallery-02.jpg.webp",
              "img/photo-gallery-03.jpg.webp",
              "img/photo-gallery-04.jpg.webp",
              "img/photo-gallery-05.jpg.webp",
              "img/photo-gallery-06.jpg.webp",
              "img/photo-gallery-07.jpg.webp",
              "img/photo-gallery-08.jpg.webp",
              "img/photo-gallery-09.jpg.webp",
              "img/photo-gallery-10.jpg.webp",
              "img/photo-gallery-11.jpg.webp",
              "img/photo-gallery-12.jpg.webp",
       ]
}
export default store