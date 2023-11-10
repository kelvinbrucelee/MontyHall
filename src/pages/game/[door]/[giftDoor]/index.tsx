import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Door from "../../../../components/Door";
import styles from "../../../../styles/Game.module.css";
import { updateDoors, createDoors } from "../../../../functions/doors";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const numberOfDoors = +router.query.door;
    const hasGift = +router.query.giftDoor;

    const validDoorQuantity = numberOfDoors >= 3 && numberOfDoors <= 100;
    const validGiftNumber = hasGift >= 1 && hasGift <= numberOfDoors;

    setIsValid(validDoorQuantity && validGiftNumber);
  }, [doors]);

  useEffect(() => {
    const numberOfDoors = +router.query.door;
    const hasGift = +router.query.giftDoor;

    setDoors(createDoors(numberOfDoors, hasGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map(door => (
      <Door key={door.number} value={door} 
        onChange={newDoor => {
          setDoors(updateDoors(doors, newDoor));
        }} 
      />
    ));
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {isValid ? 
          renderDoors():
          <h2>Invalid Values</h2>
        }
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart Game</button>
        </Link>
      </div>
    </div>
  );
}
