import { Constructable } from "./Constructable";

export function copy<T extends Constructable>(obj: T): T {
    if(obj === null || obj === undefined)
        return undefined;
    
    let copy: T = ((new Constructable()) as T);
    Object.assign(copy, obj);
    return copy;
}