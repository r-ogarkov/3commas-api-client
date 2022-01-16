import type { Response } from "node-fetch";
export declare const handler: <Data>(response: Response, options: {
    method: string;
    body: unknown;
}) => Promise<{
    data: Data;
    status: number;
}>;
