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
       ]
}
export default store