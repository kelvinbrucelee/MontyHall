import Gift from "./Gift";
import DoorModel from "../model/Door";
import styles from "../styles/Door.module.css";

interface DoorProps {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
    const door = props.value;
    const selected = door.selected && !door.open ? styles.selected : '';

    const toggleSelection = e => props.onChange(door.toggleSelection());
    const openDoor = e => {
        e.stopPropagation();
        props.onChange(door.openUp());
    };

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.handle} onClick={openDoor}></div>
            </div>
        );
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.structure} ${selected}`}>
                {door.closed ?
                    renderDoor() : door.hasGift ? <Gift></Gift> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    );
}
