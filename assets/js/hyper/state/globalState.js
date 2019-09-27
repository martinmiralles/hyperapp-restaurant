var companyInfo = {
  title: "Humungo Wings",
  phone: "(416) - 666 - 6969",
  location: "Toronto, Ontario"
};

var specialMenuData = [
  {
    title: "Homicide Buffalo",
    description:
      "Tossed in homicide sauce, with a litte butter added, with a side of ranch and vegetables",
    price: "Spicy",
    img: "box-img1"
  },
  {
    title: "Mesquite BBQ",
    description:
      "Smokey BBQ tossed with pepper, with a side of ranch and vegetables",
    price: "Mild",
    img: "box-img2"
  },
  {
    title: "Spicy Lemon",
    description:
      "Lemon pepper and cayenne, with a side of ranch and vegetables",
    price: "Dry",
    img: "box-img3"
  }
];

var reviewsData = [
  {
    company: "The Food Network",
    author: "Bob John",
    authorInfo: "Winner of Worst Master Chef",
    hightlight: "Best Restaurant in the Scarborough area!",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nulla dolor autem temporibus est voluptate."
  },
  {
    company: "HBO",
    author: "Bob John",
    authorInfo: "Winner of Worst Master Chef",
    hightlight: "I've never felt this full, ever!",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab deserunt, nesciunt perspiciatis reprehenderit alias sunt consequatur odio autem veritatis?"
  },
  {
    company: "CTV",
    author: "Bob John",
    authorInfo: "Winner of Worst Master Chef",
    hightlight: "The Buffalo sauce is amazing!",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aliquam, excepturi magnam inventore sunt repellat quis velit reprehenderit pariatur asperiores atque neque soluta, minus delectus officiis cupiditate! Suscipit, veniam facere?"
  },
  {
    company: "CP24",
    author: "Bob John",
    authorInfo: "Winner of Worst Master Chef",
    hightlight: "Never seen chicken wings this big!",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum excepturi, quasi consequuntur quas quis, quibusdam voluptatem rem dicta, error placeat dolorem distinctio eveniet nobis!"
  },
  {
    company: "NBC",
    author: "Bob John",
    authorInfo: "Winner of Worst Master Chef",
    hightlight: "So many flavours!",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo accusamus quibusdam? Eum nobis voluptatum in quidem, dolor, consectetur dolore alias quaerat quam porro dolorem maiores. Tempora, sint?"
  }
];

var randomQuoteData = [
  {
    author: "Johnny",
    quote:
      "Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained."
  },
  {
    author: "Benny",
    quote: `Can't live without my wings.`
  },
  {
    author: "Sunny",
    quote: "Umm...what?"
  }
];

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};
