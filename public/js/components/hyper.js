webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function reviewLeftClick(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
}

function reviewRightClick(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
}

var actions = exports.actions = {
  reviewRightClick: reviewRightClick,
  reviewLeftClick: reviewLeftClick
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { "class": "app" },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: "Humungo Wings",
  phone: "(416) - 666 - 6969",
  location: "Toronto, Ontario"
};

var specialMenuData = [{
  title: "Homicide Buffalo",
  description: "Tossed in homicide sauce, with a litte butter added, with a side of ranch and vegetables",
  price: "Spicy",
  img: "box-img1"
}, {
  title: "Mesquite BBQ",
  description: "Smokey BBQ tossed with pepper, with a side of ranch and vegetables",
  price: "Mild",
  img: "box-img2"
}, {
  title: "Spicy Lemon",
  description: "Lemon pepper and cayenne, with a side of ranch and vegetables",
  price: "Dry",
  img: "box-img3"
}];

var reviewsData = [{
  company: "The Food Network",
  author: "Bob John",
  authorInfo: "Winner of Worst Master Chef",
  hightlight: "Best Restaurant in the Scarborough area!",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nulla dolor autem temporibus est voluptate."
}, {
  company: "HBO",
  author: "Bob John",
  authorInfo: "Winner of Worst Master Chef",
  hightlight: "I've never felt this full, ever!",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab deserunt, nesciunt perspiciatis reprehenderit alias sunt consequatur odio autem veritatis?"
}, {
  company: "CTV",
  author: "Bob John",
  authorInfo: "Winner of Worst Master Chef",
  hightlight: "The Buffalo sauce is amazing!",
  review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aliquam, excepturi magnam inventore sunt repellat quis velit reprehenderit pariatur asperiores atque neque soluta, minus delectus officiis cupiditate! Suscipit, veniam facere?"
}, {
  company: "CP24",
  author: "Bob John",
  authorInfo: "Winner of Worst Master Chef",
  hightlight: "Never seen chicken wings this big!",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum excepturi, quasi consequuntur quas quis, quibusdam voluptatem rem dicta, error placeat dolorem distinctio eveniet nobis!"
}, {
  company: "NBC",
  author: "Bob John",
  authorInfo: "Winner of Worst Master Chef",
  hightlight: "So many flavours!",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo accusamus quibusdam? Eum nobis voluptatum in quidem, dolor, consectetur dolore alias quaerat quam porro dolorem maiores. Tempora, sint?"
}];

var randomQuoteData = [{
  author: "Johnny",
  quote: "Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained."
}, {
  author: "Benny",
  quote: "Can't live without my wings."
}, {
  author: "Sunny",
  quote: "Umm...what?"
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'ContactUs' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Contact US @'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Humungo Wings'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'box' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'row' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'col-md-7' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'title' },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              'h6',
              { 'class': 'address' },
              '1168 Kennedy Road',
              (0, _hyperapp.h)('br', null),
              'Scarborough ON M1P 2C1'
            ),
            (0, _hyperapp.h)(
              'p',
              { 'class': 'email' },
              (0, _hyperapp.h)(
                'strong',
                null,
                'email:'
              ),
              " ",
              (0, _hyperapp.h)(
                'a',
                { href: 'mailto:info@reallybigwings.com' },
                'info@humungowings.com'
              )
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'col-md-5' },
            (0, _hyperapp.h)(
              'h6',
              null,
              'Phone:'
            ),
            (0, _hyperapp.h)(
              'div',
              { 'class': 'title' },
              '+1 (416) 555 - 6666'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Lunch Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Friday, Saturday and Sunday',
              (0, _hyperapp.h)('br', null),
              'from 12pm - 1:30pm'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Dinner Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Daily from 6pm - 9:30pm'
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'footer',
    null,
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'nav',
        { 'class': 'menu' },
        (0, _hyperapp.h)(
          'a',
          { href: '#OurStory' },
          'Our Story'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#Reviews' },
          'Reviews'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#SpecialMenu' },
          'Special Menu'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#Reservations' },
          'Reservations'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#ContactUs' },
          'Contact Us'
        )
      ),
      (0, _hyperapp.h)(
        'ul',
        { 'class': 'social-media' },
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://www.facebook.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-facebook' })
          )
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://www.twitter.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-twitter' })
          )
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://www.google.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-google' })
          )
        ),
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://www.youtube.com', target: 'new' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-youtube' })
          )
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'copyright' },
        '\xA9 2019 Copyright'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'header',
    null,
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'logo' },
        'HUMUNGO WINGS'
      ),
      (0, _hyperapp.h)(
        'nav',
        null,
        (0, _hyperapp.h)(
          'a',
          { href: '#OurStory' },
          'Our Story'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#Reviews' },
          'Reviews'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#SpecialMenu' },
          'Special Menu'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#Reservations' },
          'Reservations'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#ContactUs' },
          'Contact Us'
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'OurStory' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-6 col-sm-12' },
          (0, _hyperapp.h)(
            'h5',
            { 'class': 'comp-title' },
            'Our Story'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            'The chicken wing,'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            'is our thing'
          ),
          (0, _hyperapp.h)(
            'p',
            null,
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illum assumenda non, quis modi tempora ullam reprehenderit illo eaque dolorum, cupiditate animi perspiciatis a quas corrupti, nesciunt laboriosam! Consectetur, cupiditate minima soluta assumenda eum nisi aliquid at dolore nam quae tempore excepturi dolorum, ad pariatur!'
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'quote' },
            '"Best wings in town!" - ',
            (0, _hyperapp.h)(
              'strong',
              null,
              'Martin Miralles'
            )
          ),
          (0, _hyperapp.h)(
            'a',
            { href: '#', 'class': 'reserve-btn' },
            'Reserve'
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-6 col-sm-12' },
          (0, _hyperapp.h)('div', { 'class': 'video-img' })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    {
      id: 'RandomQuote',
      style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .2) 0, #000 100%), url("https://res.cloudinary.com/simplotel/image/upload/x_-1,y_0,w_1249,h_625,r_0,c_crop,q_60,fl_progressive/w_1249,f_auto,c_fit/colonels-retreat/Treat,Colonels_Retreat,_Cooking_Classes_in_Delhi_1")'
      }
    },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"I love their flavours"'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        ' -Random Customer- '
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "REVIEWS"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        state.reviewsData[state.reviewStatus.currentReview].hightlight
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        " - ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('Do nothing.');
    } else {
      actions.reviewLeftClick();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('Do nothing.');
    } else {
      actions.reviewRightClick();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://previews.123rf.com/images/kurhan/kurhan1201/kurhan120100042/11861111-chef-man-.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN, "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : '') }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN,
              "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready') })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        'div',
        { 'class': 'col-md-4' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'box' },
          (0, _hyperapp.h)(
            'div',
            { 'class': item.img },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'price-circle' },
              item.price
            )
          ),
          (0, _hyperapp.h)(
            'span',
            { 'class': 'title' },
            item.title
          ),
          (0, _hyperapp.h)(
            'p',
            { 'class': 'details' },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    'section',
    { id: 'SpecialMenu' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Special Menu'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Top Flavours of the Summer'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row boxes' },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        'a',
        { href: '#', 'class': 'link' },
        " ",
        'View Full Menu'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.companyInfo.title);
  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "contact-info" },
          (0, _hyperapp.h)(
            "div",
            { "class": "container" },
            (0, _hyperapp.h)(
              "div",
              { "class": "booking" },
              "Reserve Table"
            ),
            (0, _hyperapp.h)(
              "h2",
              null,
              state.companyInfo.phone
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "hours" },
              "Hours ",
              (0, _hyperapp.h)(
                "strong",
                null,
                "Mon - Thurs: "
              ),
              " 9am - 11pm",
              (0, _hyperapp.h)(
                "strong",
                null,
                " Weekend: "
              ),
              " 9am - 1am"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[12]);