import React from "react";
import "./ProductImageContainer.css";

function ProductImageContainer(props) {
  return (
    <div className=" ProductImageContainer-div ">
      <div className="bigImg">
        <img
          src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/146843-jnxhqckdaa-1598964061.jpg"
          alt=""
        />
        <div className="imageName">
          <h1>Fish Curry</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            voluptas fugiat cumque, impedit ad tenetur esse dicta error hic
            quas, consectetur incidunt veritatis porro temporibus voluptate
            assumenda nostrum alias quis.
          </p>
        </div>
      </div>
      <div className="smallImg">
        <img
          src="https://www.tamarindnthyme.com/wp-content/uploads/2020/10/Untitled-design-91.jpg"
          alt=""
        />
        <img
          src="https://i.guim.co.uk/img/media/9ac04d56127b4dc9c2b59fba530de25104139eec/0_894_2288_1783/master/2288.jpg?width=620&quality=45&dpr=2&s=none"
          alt=""
        />
        <img
          src="https://www.recipetineats.com/wp-content/uploads/2020/10/Goan-Fish-Curry_6.jpg"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHZdGtKKF-mfFrEYOXWHHr7HxxEOhqyCLxA&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductImageContainer;
