import {type Writable, writable} from "svelte/store";

export const selectedCube: Writable<number> = writable(-1);