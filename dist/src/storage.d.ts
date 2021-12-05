import { Storage } from '../types/storage';
export declare class WorkersKV implements Storage {
    get: <Type>(key: string) => Promise<void | Type>;
    put: <Type>(key: string, value: Type) => Promise<void>;
    delete: (key: string) => Promise<void>;
}
