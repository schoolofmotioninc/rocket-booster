import { Middleware } from '../types/middleware';
import { RewriteOptions } from '../types/rewrite';
export declare const rewritePath: (path: string, rewrite: RewriteOptions) => string;
export declare const useRewrite: Middleware;
