//import mobile from "../assets/products/mobile.jpg";
import iphone from "../assets/products/iphone15.jpg";
import samsung from "../assets/products/samsungs24.jpg";
import oneplus from "../assets/products/OnePlus 13.jpg";
import realme from "../assets/products/Realme-16-Pro.jpg";
import googlepixel from "../assets/products/Google-Pixel-9.jpg";
import DellInspiron from "../assets/products/Dell Inspiron 15 Laptop.jpg";
import HPPavilionLaptop from "../assets/products/HP Pavilion Laptop.jpg";
import sony from "../assets/products/Sony WH-1000XM5 Headphones.jpg";
import BoatRockerz  from "../assets/products/Boat Rockerz 550.jpg";
import  watch  from "../assets/products/Apple Watch Series 10.jpg"
import  SamsungGalaxyWatch  from "../assets/products/Samsung Galaxy Watch 7.jpg";
import  Canon  from "../assets/products/Canon EOS R50 Camera.jpg";
import  speaker  from "../assets/products/JBL Flip 6 Speaker.jpg";
import  LenovoIdeaPadSlim   from "../assets/products/Lenovo IdeaPad Slim 5.jpg";

import tshirt from "../assets/products/tshirt.jpg";
import PoloNeckT from "../assets/products/Polo Neck T-Shirt.jpg";
import jeans from "../assets/products/Slim Fit Jeans.jpg";
import shirt from "../assets/products/Casual Shirt.jpg";
import hoodie from "../assets/products/Hooded Sweatshirt.jpg";
import kurti from "../assets/products/Women's Kurti.jpg";
import saree from "../assets/products/Women's Saree.jpg";
import shoes from "../assets/products/Sports Shoes.jpg";
import wallet from "../assets/products/Leather Wallet.jpg";







import beauty from "../assets/products/beauty.jpg";
import  LakmeFaceWash from   "../assets/products/Lakme Face Wash.jpg";
import  MamaearthVitaminCSerum from   "../assets/products/Mamaearth Vitamin C Serum.jpg";
import  NiveaBodyLotion from   "../assets/products/Nivea Body Lotion.jpg";
import  Maybelline from   "../assets/products/Maybelline Lipstick.jpg";
import  DoveShampoo from   "../assets/products/Dove Shampoo.jpg";

import toy from "../assets/products/toy.jpg";
import Teddy from "../assets/products/Teddy Bear.jpg";
import BuildingBlocks from "../assets/products/Building Blocks Set.jpg";
import ToyTrain from "../assets/products/Toy Train.jpg";

import Puzzle from "../assets/products/Puzzle Game.jpg";

import rice from "../assets/products/Rice.jpg";
import AashirvaadAtta from "../assets/products/Aashirvaad Atta.jpg";
import grocery from "../assets/products/grocery.jpg";
import oil from "../assets/products/oil.jpg";
import tata from "../assets/products/Ta.jpg";
import tatatea from "../assets/products/Tata Tea Gold.jpg";



//import home from "../assets/products/home.jpg";
import sofaset from "../assets/products/sofa set.jpg";
import BedFrame from "../assets/products/Bed Frame.jpg";
import StudyTable from "../assets/products/Study Table.jpg";
import officechair from "../assets/products/office chair.jpg";
import TableLamp from "../assets/products/Table Lamp.jpg"





const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobiles",
    price: 79999,
    image:iphone,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Mobiles",
    price: 60000,
    image: samsung,
  },
   {
    id: 3,
    name: "OnePlus 13",
    category: "Mobiles",
    price: 69999,
    image: oneplus,
  },

   {
    id: 4,
    name: "Realme-16-Pro",
    category: "Mobiles",
    price: 50000,
    image: realme,
  },
  {
    id: 5,
    name: "Google-Pixel-9",
    category: "Mobiles",
    price: 54000,
    image: googlepixel,
  },
{
  id: 6,
  name: "Dell Inspiron 15 Laptop",
  category: "Electronics",
  price: 54999,
  image: DellInspiron 
},
{
  id: 7,
  name: "HP Pavilion Laptop",
  category: "Electronics",
  price: 62999,
  image: HPPavilionLaptop,
},
{
  id: 8,
  name: "Sony WH-1000XM5 Headphones",
  category: "Electronics",
  price: 29999,
  image: sony,
},
{
  id: 9,
  name: "Boat Rockerz 550",
  category: "Electronics",
  price: 2499,
  image: BoatRockerz,
},
{
  id: 10,
  name: "Apple Watch Series 10",
  category: "Electronics",
  price: 45999,
  image: watch,
},
{
  id: 11,
  name: "Samsung Galaxy Watch 7",
  category: "Electronics",
  price: 27999,
  image: SamsungGalaxyWatch,
},
{
  id: 12,
  name: "Canon EOS R50 Camera",
  category: "Electronics",
  price: 74999,
  image: Canon,
},
{
  id: 14,
  name: "JBL Flip 6 Speaker",
  category: "Electronics",
  price: 9999,
  image: speaker,
},
{
  id: 15,
  name: "Lenovo IdeaPad Slim 5",
  category: "Electronics",
  price: 58999,
  image: LenovoIdeaPadSlim ,
},
{
  id: 16,
  name: "Men's Cotton T-Shirt",
  category: "Fashion",
  price: 599,
  image: tshirt,
},
{
  id: 17,
  name: "Polo Neck T-Shirt",
  category: "Fashion",
  price: 899,
  image: PoloNeckT,
},
{
  id: 18,
  name: "Slim Fit Jeans",
  category: "Fashion",
  price: 1499,
  image: jeans,
},
{
  id: 19,
  name: "Casual Shirt",
  category: "Fashion",
  price: 1299,
  image: shirt,
},
{
  id: 20,
  name: "Hooded Sweatshirt",
  category: "Fashion",
  price: 1999,
  image: hoodie,
},
{
  id: 21,
  name: "Women's Kurti",
  category: "Fashion",
  price: 999,
  image: kurti,
},
{
  id: 22,
  name: "Women's Saree",
  category: "Fashion",
  price: 2499,
  image: saree,
},
{
  id: 23,
  name: "Sports Shoes",
  category: "Fashion",
  price: 2999,
  image: shoes,
},
{
  id: 24,
  name: "Leather Wallet",
     category: "Fashion",
   price: 799,
   image: wallet,
 },

 {
  id: 25,
  name: "Lakme combo",
  category: "Beauty",
  price: 1999,
  image: beauty,
},

 {
  id: 26,
  name: "Lakme Face Wash",
  category: "Beauty",
  price: 199,
  image: LakmeFaceWash,
},
{
  id: 27,
  name: "Mamaearth Vitamin C Serum",
  category: "Beauty",
  price: 499,
  image: MamaearthVitaminCSerum,
},
{
  id: 28,
  name: "Nivea Body Lotion",
  category: "Beauty",
  price: 299,
  image: NiveaBodyLotion,
},
{
  id: 29,
  name: "Maybelline Lipstick",
  category: "Beauty",
  price: 399,
  image: Maybelline ,
},
{
  id: 30,
  name: "Dove Shampoo",
  category: "Beauty",
  price: 249,
  image: DoveShampoo,
},
{
  id: 31,
  name: "Remote Control Car",
  category: "Toys",
  price: 899,
  image: toy,
},
{
  id: 32,
  name: "Teddy Bear",
  category: "Toys",
  price: 499,
  image: Teddy,
},
{
  id: 33,
  name: "Building Blocks Set",
  category: "Toys",
  price: 699,
  image: BuildingBlocks,
},
{
  id: 34,
  name: "Toy Train",
  category: "Toys",
  price: 799,
  image:ToyTrain,
},
{
  id: 35,
  name: "Puzzle Game",
  category: "Toys",
  price: 349,
  image: Puzzle  ,
},



{
  id: 36,
  name: "Rice 5kg",
  category: "Grocery",
  price: 399,
  image: rice,
},
{
  id: 37,
  name: "Aashirvaad Atta 10kg",
  category: "Grocery",
  price: 549,
  image: AashirvaadAtta,
},
{
  id: 38,
  name: "Vegetables",
  category: "Grocery",
  price: 179,
  image: grocery,
},
{
  id: 39,
  name: "Fortune Sunflower Oil 1L",
  category: "Grocery",
  price: 179,
  image: oil,
},
{
  id: 40,
  name: "Tata Salt 1kg",
  category: "Grocery",
  price: 30,
  image: tata,
},
{
  id: 41,
  name: "Tata Tea Gold 500g",
  category: "Grocery",
  price: 299,
  image: tatatea,
},
{
  id: 42,
  name: "sofa set",
  category: "Home",
  price: 12999,
  image: sofaset,
},



{
  id: 43,
  name: "Bed Frame",
  category: "Home",
  price: 12999,
  image: BedFrame,
},


{
  id: 44,
  name: "Study Table",
  category: "Home",
  price: 11000,
  image: StudyTable,
},

{
  id: 45,
  name: "office chair",
  category: "Home",
  price: 10999,
  image: officechair,

},


{
  id: 46,
  name: "Table Lamp",
  category: "Home",
  price: 8099,
  image: TableLamp,
  
},



];

export default products;