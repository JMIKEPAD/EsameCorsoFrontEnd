import { Fermentation } from "./fermentation";
import { MashTemp } from "./mashTemp";

export interface Method {
    mash_temp: MashTemp[];
    fermentation: Fermentation;
    twist?: any;
}