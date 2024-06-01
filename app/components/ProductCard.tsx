import React from "react";
import AddToCard from "./AddToCard";
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.card}>
      <AddToCard />
    </div>
  );
}

export default ProductCard;
