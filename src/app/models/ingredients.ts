import { Hop } from "./hop";
import { Malt } from "./malt";

export interface Ingredients {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
}