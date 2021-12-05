import { Middleware } from '../types/middleware';
import { UpstreamOptions } from '../types/upstream';
export declare const cloneRequest: (url: string, request: Request) => Request;
export declare const getURL: (url: string, upstream: UpstreamOptions) => string;
export declare const sendRequest: (request: Request, upstream: UpstreamOptions) => Promise<Response>;
export declare const useUpstream: Middleware;
