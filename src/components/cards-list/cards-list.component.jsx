import React from "react";
import "./cards-list.component.css";
import Cards from "../cards/cards.component";




function CardList(props) {
  return (
    <div className="card-list">
      {

        props.users.filter(user => (user.name.toLowerCase().includes(props.searchElement.toLowerCase()))).map((user, index) => (
          props.searchElement === "" ? null :
            <Cards key={index} user={user}>

            </Cards>
        ))
      }

    </div>
  )
}





export default CardList;
