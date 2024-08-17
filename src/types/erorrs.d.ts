export interface Errors {
    [key: string]: boolean; // This allows any string key with a boolean value
    name?: boolean;
    username?: boolean;
    email?: boolean;
    password?: boolean;
    root?: boolean;
}
