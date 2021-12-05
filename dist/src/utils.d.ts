import { UpstreamOptions } from '../types/upstream';
export declare const isMobile: (userAgent: string) => boolean;
export declare const createResponse: (body: string, status: number) => Response;
export declare const getHostname: (request: Request) => string;
export declare const isSameOrigin: (url: URL, upstream: UpstreamOptions) => boolean;
