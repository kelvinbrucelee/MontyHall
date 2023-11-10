import DoorModel from "../model/Door";

export function createDoors(quantity: number, doorWithGift: number): DoorModel[] {
    return Array.from({ length: quantity }, (_, i) => {
        const number = i + 1;
        const hasGift = number === doorWithGift;
        return new DoorModel(number, hasGift);
    });
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const isModified = currentDoor.number === modifiedDoor.number;

        if (isModified) {
            return modifiedDoor;
        } else {
            return modifiedDoor.open ? currentDoor : currentDoor.deselect();
        }
    });
}
