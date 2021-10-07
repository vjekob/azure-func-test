export type AzureError = undefined | Error & { statusCode?: number, code?: string };
export type ErrorFirstFunction<T> = (error: AzureError | undefined, result: T | undefined, response?: { etag: string }) => void;

export interface FakeStorage {
    [key: string]: any;
}

export abstract class StubBuilder {
    abstract get content(): {};
}

export interface ListResponse {
    entries: any[],
    token: string | undefined;
}

export interface CreateBlobOptions {
    accessConditions: {
        EtagMatch: string
    }
}

export interface StorageOptions {
    preventDelete?: boolean;
}
