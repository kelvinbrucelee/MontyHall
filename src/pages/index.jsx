import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import styles from "../styles/Form.module.css";
import NumericInput from "../components/NumericInput";

export default function Form() {
  const [doorQuantity, setDoorQuantity] = useState(3);
  const [giftDoor, setGiftDoor] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="rgb(156, 115, 248)">
          <div className={styles.title}>
            <h1>Monty Hall</h1>
          </div>
        </Card>
        <Card>
          <NumericInput text="Number of Doors" value={doorQuantity} onChange={newQuantity => setDoorQuantity(newQuantity)}></NumericInput>
        </Card>
      </div>
      <div>
        <Card>
          <NumericInput text="Gift Behind Door" value={giftDoor} onChange={newGiftDoor => setGiftDoor(newGiftDoor)}></NumericInput>
        </Card>
        <Card bgcolor="#28a085">
          <Link className={styles.align} href={`/game/${doorQuantity}/${giftDoor}`}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
