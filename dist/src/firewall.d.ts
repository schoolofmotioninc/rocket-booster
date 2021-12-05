import { FirewallField, FirewallHandler } from '../types/firewall';
import { Middleware } from '../types/middleware';
export declare const getFieldParam: (request: Request, field: FirewallField) => string | number | void;
export declare const matchOperator: FirewallHandler;
export declare const notMatchOperator: FirewallHandler;
export declare const equalOperator: FirewallHandler;
export declare const notEqualOperator: FirewallHandler;
export declare const greaterOperator: FirewallHandler;
export declare const lessOperator: FirewallHandler;
export declare const containOperator: FirewallHandler;
export declare const notContainOperator: FirewallHandler;
export declare const inOperator: FirewallHandler;
export declare const notInOperator: FirewallHandler;
export declare const useFirewall: Middleware;
