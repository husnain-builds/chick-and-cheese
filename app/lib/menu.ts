export type MenuItem = {
  name: string;
  description: string;
  price: number;
  label?: string;
};

export type MenuSection = {
  slug: string;
  name: string;
  note: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    slug: "starters",
    name: "The starters",
    note: "The beginning of a beautiful meal.",
    items: [
      { name: "Cheese Sticks", description: "Golden, melty and made for dipping.", price: 1100 },
      { name: "Spin Rolls", description: "Four perfectly crisp, savory rolls.", price: 800 },
      { name: "Hot Wings", description: "Four juicy wings with a fiery finish.", price: 800, label: "A little heat" },
      { name: "Nuggets", description: "Crispy little bites everyone loves.", price: 400 },
      { name: "Chicken Piece", description: "A generous piece of golden fried chicken.", price: 500 },
      { name: "Chicken Cheese Bites", description: "Eight crispy bites with a cheesy center.", price: 600 },
      { name: "Pizza Sandwich", description: "All the pizza goodness. Between bread.", price: 800 },
      { name: "Tikla Sandwich", description: "A hearty, saucy, freshly made sandwich.", price: 600 },
      { name: "Fajita Sandwich", description: "Bold fajita flavor in every bite.", price: 500 },
      { name: "Malai Boti Sandwich", description: "Tender, creamy boti in a toasted sandwich.", price: 600 },
    ],
  },
  {
    slug: "burgers",
    name: "The burgers",
    note: "Properly stacked. Always worth both hands.",
    items: [
      { name: "Zinger Burger", description: "The classic crispy chicken, just right.", price: 450, label: "The classic" },
      { name: "Chicken Zinger", description: "Big, crunchy and made fresh to order.", price: 550 },
      { name: "Jalapeño Zinger", description: "A crispy classic with a spicy kick.", price: 550, label: "A little heat" },
      { name: "Big Bang", description: "A big, bold burger for big appetites.", price: 900 },
      { name: "Thunder Filet", description: "A proper chicken filet with serious crunch.", price: 650 },
      { name: "Fillet Burger", description: "Crispy filet, fresh toppings, soft bun.", price: 600 },
      { name: "Fillet Special", description: "A little something special between the buns.", price: 700 },
      { name: "Patty Burger", description: "A feel-good burger that hits the spot.", price: 400 },
      { name: "Hyper Patty Burger", description: "A bigger, bolder take on a favorite.", price: 500 },
    ],
  },
  {
    slug: "pizzas",
    name: "The pizzas",
    note: "A golden crust and the good stuff on top.",
    items: [
      { name: "Chick Fiesta", description: "A flavor-packed favorite made fresh.", price: 650, label: "House favorite" },
      { name: "Chick Supreme", description: "Generously topped with all the good stuff.", price: 650 },
      { name: "Chicken Lover", description: "For the ones who always want extra chicken.", price: 700 },
      { name: "Veggie Lover", description: "Fresh, colorful and full of flavor.", price: 800 },
      { name: "Creamy Tikka", description: "Creamy, smoky and beautifully balanced.", price: 670 },
      { name: "Pepper Pizza", description: "A little sweet, a little smoky, very good.", price: 670 },
      { name: "BBQ Pizza", description: "A smoky, saucy crowd-pleaser.", price: 1990 },
      { name: "Cheese Stuffed Crust", description: "Golden, gooey cheese tucked into the crust.", price: 1600, label: "Extra cheesy" },
    ],
  },
  {
    slug: "wraps",
    name: "The wraps",
    note: "Good things, all wrapped up.",
    items: [
      { name: "Zinger Shawarma", description: "Crunchy chicken and all the right extras.", price: 350 },
      { name: "Ginger Shawarma", description: "A house favorite with a little gingery kick.", price: 350, label: "House favorite" },
      { name: "Arabic Wrap", description: "Bold, savory and wrapped to perfection.", price: 550 },
      { name: "Mexican Wrap", description: "Fiery Mexican-inspired flavors, made fresh.", price: 700, label: "A little heat" },
      { name: "Crunchy Wrap", description: "The wrap with an extra satisfying crunch.", price: 600 },
    ],
  },
  {
    slug: "sides",
    name: "The sides",
    note: "Because one thing is never enough.",
    items: [
      { name: "Loaded Fries", description: "Hot, crispy fries with the works.", price: 700, label: "Fully loaded" },
      { name: "Plain Fries", description: "Hot, golden, perfectly salted.", price: 300 },
      { name: "Garlic Mayo Fries", description: "Crispy fries and plenty of garlic mayo.", price: 400 },
      { name: "Chicken Cheese Stuffed Fries", description: "The fries that really do the most.", price: 1600, label: "Extra cheesy" },
      { name: "Chicken Crown Crust", description: "An extra-special, shareable bite.", price: 1600 },
    ],
  },
  {
    slug: "fries-pasta",
    name: "Fries & pasta",
    note: "Unreasonably comforting. Very easy to love.",
    items: [
      { name: "Plain Fries", description: "Straight-up golden and crispy.", price: 300 },
      { name: "Garlic Mayo Fries", description: "Our golden fries with creamy garlic mayo.", price: 400 },
      { name: "Loaded Fries", description: "All loaded up with the good stuff.", price: 700 },
      { name: "Alfredo Pasta", description: "Creamy, cozy and freshly made.", price: 750 },
      { name: "Crunchy Pasta", description: "A crispy, creamy twist on pasta night.", price: 800 },
    ],
  },
];

export const mealDeals = [
  { number: "01", name: "The Zinger Deal", description: "Zinger burger + fries + 300ml drink", price: 700, mark: "A proper classic" },
  { number: "02", name: "Shawarma Platter", description: "A hearty, generously served platter", price: 800, mark: "The good stuff" },
  { number: "03", name: "The Double-Up", description: "2 ginger burgers + chicken + fries + 300ml drink", price: 1000, mark: "Bring an appetite" },
  { number: "04", name: "The Share Box", description: "Pizza sandwich + 5 chilli cheese bites + drink + sauce", price: 1150, mark: "Made for sharing" },
  { number: "05", name: "The Full Spread", description: "1 zinger burger + chicken wrap + 1 crispy wrap + fries + 2 drinks", price: 1500, mark: "Best enjoyed together" },
  { number: "06", name: "Pizza Night", description: "Medium pizza + loaded fries + drink", price: 2000, mark: "The Friday favorite" },
  { number: "07", name: "The Mega Meal", description: "2 medium pizzas + 2 zinger burgers + fries + drinks", price: 2850, mark: "For the whole table" },
  { number: "08", name: "The Big Night In", description: "2 large pizzas + fries + drink", price: 3850, mark: "Go all out" },
];
