import { paths } from "api-schema";
export declare const request: <U extends keyof paths, M extends keyof paths[U]>(url: U, method: M, options?: {
    data?: paths[U][M]["parameters"]["body" | "query"] | undefined;
    params?: paths[U][M]["parameters"]["path"] | undefined;
} | undefined, req?: {
    headers?: Record<string, string> | undefined;
    secret?: string | undefined;
} | undefined) => Promise<{
    data: paths[U][M]["responses"][200 | 201 | 202 | 203 | 204];
    status: number;
}>;
