class Team {
    constructor(arr) {
        this.arrayPerson = arr;
    }

    getIndex(index) {
        return this.arrayPerson[index];
    }

    *[Symbol.iterator]() {
        let current = 0;
        let last = this.arrayPerson.length;

        while (current < last) {
            yield this.getIndex(current);
            current++;
        }
    }
}