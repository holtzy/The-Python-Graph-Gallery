/**
 * A custom predicate for returning an entirely new `items` array based on the provided query.
 * See usage sites in `IListItemsProps`.
 */
export declare type ItemListPredicate<T> = (query: string, items: T[]) => T[];
/**
 * A custom predicate for filtering items based on the provided query.
 * See usage sites in `IListItemsProps`.
 */
export declare type ItemPredicate<T> = (query: string, item: T, index?: number, exactMatch?: boolean) => boolean;
