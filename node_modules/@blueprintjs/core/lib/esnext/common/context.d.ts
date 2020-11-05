export declare type Validator<K> = (props: {
    [key: string]: any;
}, propName: K, componentName: string, location: string, propFullName: string) => Error | undefined;
export declare type ValidationMap<T> = {
    [K in keyof T]?: Validator<K>;
};
