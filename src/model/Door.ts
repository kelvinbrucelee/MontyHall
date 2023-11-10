export default class DoorModel {
    #number: number;
    #hasGift: boolean;
    #selected: boolean;
    #open: boolean;

    constructor(number, hasGift = false, selected = false, open = false) {
        this.#number = number;
        this.#hasGift = hasGift;
        this.#selected = selected;
        this.#open = open;
    }

    get number() {
        return this.#number;
    }

    get hasGift() {
        return this.#hasGift;
    }

    get selected() {
        return this.#selected;
    }

    get open() {
        return this.#open;
    }

    get closed() {
        return !this.#open;
    }

    deselect() {
        const selected = false;
        return new DoorModel(this.number, this.hasGift, selected, this.open);
    }

    toggleSelection() {
        const selected = !this.selected;
        return new DoorModel(this.number, this.hasGift, selected, this.open);
    }

    openUp() {
        const open = true;
        return new DoorModel(this.number, this.hasGift, this.selected, open);
    }
}
