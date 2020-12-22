import React from "react";
import { useState } from "react";
import "./styles.css";

const foodDirectory = {
  Breakfast: [
    {
      name: "Bread Omelette",
      rating: "5/5"
    },
    {
      name: "Aloo Paratha",
      rating: "4.9/5"
    },
    {
      name: "Millets Upma",
      rating: "4.7/5"
    },
    {
      name: "Masala Dosa",
      rating: "4.6/5"
    },
    {
      name: "Rava Uttapam",
      rating: "4.4/5"
    },
    {
      name: "Poha",
      rating: "4.5/5"
    },
    {
      name: "Idli",
      rating: "4.2/5"
    },
    {
      name: "Poori",
      rating: "3.9/5"
    },
    {
      name: "Vada",
      rating: "4.1/5"
    },
    {
      name: "Oats Upma",
      rating: "5/5"
    },
    {
      name: "Egg Pasta",
      rating: "4.4/5"
    }
  ],

  Lunch: [
    {
      name: "Mixed Veg Biryani",
      rating: "5/5"
    },
    {
      name: "Tomato Bath",
      rating: "4.2/5"
    },
    {
      name: "Chiken Biryani",
      rating: "4.8/5"
    },
    {
      name: "Plain Rice With Nellore Fish Curry ",
      rating: "5/5"
    },
    {
      name: "Corn Pulao",
      rating: "4.6/5"
    },
    {
      name: "Curd Rice",
      rating: "4.5/5"
    },
    {
      name: "Kashmiri Pulao",
      rating: "4.3/5"
    },
    {
      name: "Jeera Rice",
      rating: "4.1/5"
    },
    {
      name: "Coconut Milk Rice",
      rating: "4.7/5"
    },
    {
      name: "Chicken Fried Rice",
      rating: "4/5"
    },
    {
      name: "Paneer Fried Rice",
      rating: "4.6/5"
    }
  ],
  Dinner: [
    {
      name: "Mexican Rice",
      rating: "4.5/5"
    },
    {
      name: "Bisi Bela Bath",
      rating: "4.6/5"
    },
    {
      name: "Mughlai Biryani",
      rating: "4.7/5"
    },
    {
      name: "Egg Biryani",
      rating: "4.6/5"
    },
    {
      name: "Butter Naan With Butter Chiken",
      rating: "4.6/5"
    },
    {
      name: "Ulavacharu Chiken Biryani",
      rating: "5/5"
    },
    {
      name: "Prawns Pulao",
      rating: "4.6/5"
    },
    {
      name: "Khichdi",
      rating: "4.2/5"
    },
    {
      name: "Schezwan Fried Rice",
      rating: "4.3/5"
    }
  ]
};

var allFoodItems = Object.keys(foodDirectory);

export default function App() {
  const [recommend, setrecommend] = useState("Breakfast");
  var foodList = foodDirectory[recommend];
  function menuClickHandler(menu) {
    setrecommend(menu);
  }
  return (
    <div
      className="App"
      style={{
        color: "white",
        backgroundColor: "#6D28D9",
        maxHeight: "auto",
        padding: "2px"
      }}
    >
      <h1>Food Recommendation App</h1>

      <div>
        {allFoodItems.map((menu) => (
          <button
            className="menuButtons"
            onClick={() => menuClickHandler(menu)}
            style={{
              outline: "none",
              border: "1px solid black",
              margin: "2rem 1rem 1rem 1rem",
              padding: "1rem 2rem",
              borderRadius: "10px",
              fontSize: "large",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {menu}
          </button>
        ))}
      </div>
      <hr
        style={{
          color: "solid black",
          margin: "2rem"
        }}
      ></hr>
      <div
        style={{
          textAlign: "left"
        }}
      >
        <ul
          style={
            {
              // padding: "0"
            }
          }
        >
          {foodList.map((food) => (
            <li
              key={food.name}
              style={{
                margin: "1rem 0.5rem",
                padding: "1rem",
                listStyle: "none",
                border: "1px solid black",
                borderRadius: "10px",
                width: "50%"
              }}
            >
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
