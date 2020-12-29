import FormData, { AppendOptions } from 'isomorphic-form-data';
export declare class FormDataWithStreamSupport extends FormData {
    private hasUnknowableLength;
    constructor(options?: any);
    append(key: string, value: any, optionsOrFilename?: AppendOptions | string): void;
    getLength(callback: (err: Error | null, length: number) => void): void;
    getLengthSync(): number;
}
