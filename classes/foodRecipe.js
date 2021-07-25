
export class FoodRecipe {
    name; // string
    qty; // string
    src; // string
    want; // number
    mastery; // boolean
    currentProficiency; // number
    rarity; // number
    craftsFrom; // [[{raw:Raw[]},{crafted:Crafted[]}], [{raw:Raw[]},{crafted:Crafted[]}]]
    canCraft; // boolean

    constructor(name, qty, src, want, mastery, currentProficiency, rarity, craftsFrom, canCraft) {
        this.name = name;
        this.qty = qty;
        this.src = src;
        this.want = want;
        this.mastery = mastery;
        this.currentProficiency = currentProficiency;
        this.rarity = rarity;
        this.craftsFrom = craftsFrom;
        this.canCraft = canCraft;
    }
}