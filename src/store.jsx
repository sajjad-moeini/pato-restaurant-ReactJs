let store = {
       navbarItems: [
              { title: 'HOME', titleSrc: '/' },
              { title: 'MENU', titleSrc: '/menu' },
              { title: 'RESERVATION', titleSrc: '/reservation' },
              { title: 'GALLARY', titleSrc: '/gallary/allPhotos' },
              { title: 'ABOUT', titleSrc: '/about' },
              { title: 'BLOG', titleSrc: '/blog' },
              { title: 'CONTACT', titleSrc: '/contact' },
       ],
       HomeCarouselImgSrc: ["img/slide1-01.jpg.webp", "img/master-slides-02.jpg.webp", "img/master-slides-01.jpg.webp"],
       restaurantPropertyBoxs: [
              { img: "img/intro-01.jpg.webp", title: "Romantic Restaurant", subTitle: "Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros." },
              { img: "img/intro-02.jpg.webp", title: "Delicious Food", subTitle: "Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna" },
              { img: "img/intro-04.jpg.webp", title: "Red Wines You Love", subTitle: "Sed ornare ligula eget tortor tempor, quis porta tellus dictum." }
       ],
       upcomingEventCarousel: [
              { bgImg: 'img/bg-event-01.jpg.webp', boxImg: 'img/event-02.jpg.webp', title: 'Wines during specific nights', desc: 'Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia', badgeTitle: '08:00 PM Tuesday - 21 November 2018', boxAnim: 'eventBoxAnim1 1s' },
              { bgImg: 'img/bg-event-02.jpg.webp', boxImg: 'img/event-06.jpg.webp', title: 'Wines during specific nights', desc: 'Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia', badgeTitle: '08:00 PM Tuesday - 21 November 2018', boxAnim: 'eventBoxAnim2 1s' },
              { bgImg: 'img/bg-event-04.jpg.webp', boxImg: 'img/event-01.jpg.webp', title: 'Wines during specific nights', desc: 'Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia', badgeTitle: '08:00 PM Tuesday - 21 November 2018', boxAnim: 'eventBoxAnim3 1s' },
       ],
       homeReservtionSection: [
              { title: 'Date', type: 'input', inputType: 'date' },
              { title: 'Name', type: 'input', inputType: 'text' },
              { title: 'Time', type: 'option', value: '9 AM' },
              { title: 'Phone', type: 'input', inputType: 'phone' },
              { title: 'People', type: 'option', value: '1 Person' },
              { title: 'Email', type: 'input', inputType: 'email' },
       ],
       HomeCustomerSay: [
              { name: 'Sajjad Moeini', city: 'Tehran', img: "img/avatar-01.jpg.webp" },
              { name: 'Jack Sparow', city: 'Caraib', img: "img/avatar-05.jpg.webp" },
              { name: 'Marie Simmons', city: 'New York', img: "img/avatar-04.jpg.webp" },
       ],
       restaurantBlogBoxs: [
              { img: "img/blog-01.jpg.webp", title: "BEST PLACES FOR WINE", subTitle: "Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.", badgeTitle: '17 Dec 2023' },
              { img: "img/blog-02.jpg.webp", title: "EGGS AND CHEESE", subTitle: "Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat", badgeTitle: '15 Dec 2023' },
              { img: "img/blog-03.jpg.webp", title: "STYLE THE WEDDING PARTY", subTitle: "Sed ornare ligula eget tortor tempor, quis porta tellus dictum.", badgeTitle: '7 Dec 2023' }
       ],
       footerImgSrc: [
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
       ],
       menu: {
              starters: {
                     title: 'STARTERS', foods: [
                            { name: 'PINE NUT SBRISALONA', price: '29.79', desc: 'Sed fermentum eros vitae eros' },
                            { name: 'AENEAN EU', price: '19.35', desc: 'Feugiat maximus neque pharetra' },
                            { name: 'SED FEUGIAT', price: '12.19', desc: 'Proin lacinia nisl ut ultricies posuere nulla' },
                            { name: 'CONSECTETUR', price: '21.89', desc: 'Etiam cursus facilisis tortor' },
                     ]
              },
              drinks: {
                     title: 'DRINKS', foods: [
                            { name: 'VIVAMUS PRETIUM', price: '29.79', desc: 'Sed fermentum eros vitae eros' },
                            { name: 'DUIS PHARETRA LIGULA', price: '19.35', desc: 'Feugiat maximus neque pharetra' },
                            { name: 'IN EU DOLOR', price: '53.34', desc: 'Proin lacinia nisl ut ultricies posuere nulla' },
                            { name: 'FEUGIAT MAXIMUS', price: '62.45', desc: 'Sed fermentum eros vitae eros' },
                     ]
              },
              main: {
                     title: 'MAIN', foods: [
                            { name: 'DUIS SED ALIQUET', price: '31.18', desc: 'Proin lacinia nisl ut ultricies posuere nulla' },
                            { name: 'SUSPENDISSE', price: '70.25', desc: 'Feugiat maximus neque pharetra' },
                            { name: 'SCELERISQUE SED', price: '36.19', desc: 'Etiam cursus facilisis tortor' },
                            { name: 'MOLLIS NULLA', price: '19.50', desc: 'Proin lacinia nisl ut ultricies posuere nulla' },
                            { name: 'CONVALLIS AUGUE', price: '29.15', desc: 'Sed fermentum eros vitae eros' },
                            { name: 'MAECENAS TRISTIQUE', price: '29.79', desc: 'Feugiat maximus neque pharetra' },
                            { name: 'DUIS TINCIDUNT', price: '19.35', desc: 'Proin lacinia nisl ut ultricies posuere nulla' },
                     ]
              },
              dessert: {
                     title: 'DESSERT', foods: [
                            { name: 'TEMPUS ALIQUET', price: '9.79', desc: 'Proin lacinia nisl ut ultricies posuere nulla' },
                            { name: 'SCELERISQUE', price: '19.35', desc: 'Sed fermentum eros vitae eros' },
                            { name: 'CRAS MAXIMUS', price: '5.79', desc: 'Duis pharetra ligula at urna dignissim' },
                     ]
              },
              lunch: [
                     { name: 'SED VARIUS', price: '29.79', desc: 'Aenean pharetra tortor dui in pellentesque', imgSrc: 'img/menuPage/lunch-01.jpg.webp' },
                     { name: 'TEMPUS ALIQUET', price: '45.09', desc: 'Aenean condimentum ante erat', imgSrc: 'img/menuPage/lunch-02.jpg.webp' },
                     { name: 'DUIS MASSA', price: '12.75', desc: 'Proin lacinia nisl ut ultricies posuere nulla', imgSrc: 'img/menuPage/lunch-03.jpg.webp' },
                     { name: 'SBRISALONA', price: '29.79', desc: 'Proin lacinia nisl ut ultricies posuere nulla', imgSrc: 'img/menuPage/lunch-04.jpg.webp' },
                     { name: 'CRAS EGET MAGNA', price: '45.09', desc: 'Sed fermentum eros vitae eros', imgSrc: 'img/menuPage/lunch-05.jpg.webp' },
                     { name: 'NULLAM MAXIMUS', price: '12.75', desc: 'Duis massa nibh porttitor nec imperdiet eget', imgSrc: 'img/menuPage/lunch-06.jpg.webp' },
              ],
              dinner: [
                     { name: 'MAECENAS TRISTIQUE', price: '29.79', desc: 'Aenean pharetra tortor dui in pellentesque', imgSrc: 'img/menuPage/dinner-01.jpg.webp' },
                     { name: 'PINE NUT SBRISALONA', price: '45.09', desc: 'Aenean condimentum ante erat', imgSrc: 'img/menuPage/dinner-02.jpg.webp' },
                     { name: 'SUSPENDISSE EU', price: '12.75', desc: 'Proin lacinia nisl ut ultricies posuere nulla', imgSrc: 'img/menuPage/dinner-03.jpg.webp' },
                     { name: 'CRAS MAXIMUS', price: '29.79', desc: 'Proin lacinia nisl ut ultricies posuere nulla', imgSrc: 'img/menuPage/dinner-04.jpg.webp' },
                     { name: 'PINE NUT SBRISALONA', price: '45.09', desc: 'Sed fermentum eros vitae eros', imgSrc: 'img/menuPage/dinner-05.jpg.webp' },
                     { name: 'TEMPOR MALESUADA', price: '12.75', desc: 'Duis massa nibh porttitor nec imperdiet eget', imgSrc: 'img/menuPage/dinner-06.jpg.webp' },
              ],
       },

       reservationInputs: [
              { title: 'Date', type: 'input', inputType: 'date' },
              { title: 'Time', type: 'option', value: '9 AM' },
              { title: 'People', type: 'option', value: '1 Person' },
              { title: 'Name', type: 'input', inputType: 'text' },
              { title: 'Phone', type: 'input', inputType: 'phone' },
              { title: 'Email', type: 'input', inputType: 'email' },
       ],
       gallaryMenuItems: [
              { path: './allPhotos', title: 'ALL PHOTO' },
              { path: './interior', title: 'INTERIOR' },
              { path: './food', title: 'FOOD' },
              { path: './events', title: 'EVENTS' },
              { path: './vipGhests', title: 'VIP GUESTS' },
       ],
       menuItems: {
              all: ['img/Gallary/photo-gallery-18.jpg.webp', 'img/Gallary/photo-gallery-19.jpg.webp', 'img/Gallary/photo-gallery-20.jpg.webp', 'img/Gallary/photo-gallery-14.jpg.webp', 'img/Gallary/photo-gallery-16.jpg.webp', 'img/Gallary/photo-gallery-17.jpg.webp', 'img/Gallary/photo-gallery-13.jpg.webp', 'img/Gallary/photo-gallery-15.jpg.webp', 'img/Gallary/photo-gallery-21.jpg.webp'],
              interior: ['img/Gallary/photo-gallery-18.jpg.webp', 'img/Gallary/photo-gallery-19.jpg.webp', 'img/Gallary/photo-gallery-20.jpg.webp'],
              food: ['img/Gallary/photo-gallery-14.jpg.webp', 'img/Gallary/photo-gallery-16.jpg.webp', 'img/Gallary/photo-gallery-17.jpg.webp'],
              events: ['img/Gallary/photo-gallery-13.jpg.webp', 'img/Gallary/photo-gallery-15.jpg.webp', 'img/Gallary/photo-gallery-21.jpg.webp'],
              vipGhests: ['img/Gallary/photo-gallery-13.jpg.webp', 'img/Gallary/photo-gallery-18.jpg.webp'],
       },
       chefs:[
              {name:'Joyce Bowman',title:'CHEF',desc:'Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc',imgSrc:"img/about/avatar-02.jpg.webp"},
              {name:'Peter Hart',title:'CHEF',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis a sem tempus tempus.',imgSrc:"img/about/avatar-03.jpg.webp"},
              {name:'Jack Sparrow',title:'CHEF',desc:'Phasellus aliquam libero a nisi varius, vitae placerat sem aliquet. Ut at velit nec ipsum iaculis posuere quis in sapien',imgSrc:"img/about/avatar-05.jpg.webp"},
       ],
       blog:{
              articles:[
                     {id:'1',title:'COOKING RECIPE DELICIOUS',img:'img/blog/blog-05.jpg.webp',date:'Dec,2018',day:'28'},
                     {id:'2',title:'PIZZA IS PREPARED FRESH',img:'img/blog/blog-06.jpg.webp',date:'Dec,2018',day:'20'},
                     {id:'3',title:'STYLE THE WEDDING PARTY',img:'img/blog/blog-04.jpg.webp',date:'Dec,2018',day:'16'},
                     {id:'4',title:'BEST PLACES FOR WINE',img:'img/blog/blog-07.jpg.webp',date:'Dec,2018',day:'15'},
                     {id:'5',title:'BEST PLACES FOR WINE',img:'img/blog/blog-10.jpg.webp',date:'Dec,2018',day:'12'},
              ],
              mainPageBreadcrumb:[
                     {title:'Home' , href:'/'},
                     {title:'Blog' , href:'/blog'},
              ]
       }


}
export default store