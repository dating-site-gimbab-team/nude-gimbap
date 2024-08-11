import type { List, Many } from 'lodash';
import flatten from 'lodash/flatten';

export function createNestedArray<T>(arr: T[], size: number): T[][] {
    const nestedArray: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        nestedArray.push(arr.slice(i, i + size));
    }

    return nestedArray;
}

export function setArrayByObjKey<T>(
    obj: T,
    firstLetter: string
): string[] | undefined {
    if (!obj) {
        return undefined;
    }

    const result = Object.entries(obj)
        .filter(([key, value]) => key.startsWith(firstLetter) && value === true)
        .map(([key]) => key);

    return result;
}

export function flattenArray<T>(array: List<Many<T>> | null | undefined): T[] {
    return flatten(array);
}
