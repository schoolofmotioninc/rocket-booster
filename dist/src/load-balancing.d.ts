import { Middleware } from '../types/middleware';
import { LoadBalancingHandler } from '../types/load-balancing';
export declare const ipHashHandler: LoadBalancingHandler;
export declare const randomHandler: LoadBalancingHandler;
export declare const useLoadBalancing: Middleware;
