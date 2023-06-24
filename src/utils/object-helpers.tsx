
export const updateObjectInArray = <T extends { [key: string]: any }>(
    items: T[],
    itemId: number,
    objPropName: string,
    newObjProps: Partial<T>
): T[] => {
    return items.map((item) =>
        item[objPropName] === itemId ? { ...item, ...newObjProps } : item
    );
};