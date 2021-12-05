export declare type FirewallField = 'country' | 'continent' | 'asn' | 'ip' | 'hostname' | 'user-agent';
export declare type FirewallOperator = 'equal' | 'not equal' | 'greater' | 'less' | 'in' | 'not in' | 'contain' | 'not contain' | 'match' | 'not match';
export declare type FirewallHandler = (fieldParam: string | number, value: string | string[] | number | number[] | RegExp) => boolean;
export interface FirewallOptions {
    field: FirewallField;
    operator: FirewallOperator;
    value: string | string[] | number | number[] | RegExp;
}
