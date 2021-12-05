import { UpstreamOptions } from './upstream';
export declare type LoadBalancingPolicy = 'random' | 'ip-hash';
export declare type LoadBalancingHandler = (upstream: UpstreamOptions[], request: Request) => UpstreamOptions;
export interface LoadBalancingOptions {
    policy?: LoadBalancingPolicy;
}
