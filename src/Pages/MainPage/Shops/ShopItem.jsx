import React from "react";
import Clrbutton from "../../../components/UI/Buttons/ClrButton";
import { useEffect, useState } from "react";
import styles from "../../../styles/pages/MainPage/shop/storeItem.module.scss";
import Card from "../../../components/UI/Modals/Card";

const ShopItem = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // 檢查是否已經收藏
    fetch(
      "https://coffee-shop-30b10-default-rtdb.firebaseio.com/favoriteItem.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          const favoriteItems = Object.values(data);
          const isFavorite = favoriteItems.some((item) => item.id === props.id);
          setIsFavorite(isFavorite);
          setIsDisabled(isFavorite);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);

  const addTofavoriteHandler = () => {
    if (!isFavorite) {
      const favoriteItem = {
        id: props.id,
        name: props.name,
        time: props.time,
        price: props.price,
        score: props.score,
      };

      fetch(
        "https://coffee-writing-default-rtdb.firebaseio.com/favoriteItem.json",
        {
          method: "POST",
          body: JSON.stringify(favoriteItem),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setIsFavorite(true);
          setIsDisabled(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("已经收藏過了！");
    }
  };

  return (
    <Card>
      <li className={styles.wrapper}>
        <div className={styles.storeItem}>
          <div className={styles.score}>{props.score}</div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.time}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
        <Clrbutton
          className={isDisabled ? `${styles.disabled}` : null}
          disabled={isDisabled}
          onClick={addTofavoriteHandler}
        >
          {isFavorite ? "已收藏" : "收藏"}
        </Clrbutton>
      </li>
    </Card>
  );
};

export default ShopItem;
