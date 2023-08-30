interface BILogger {
    log: (event: any) => void;
}
declare class LogService {
    private biLogger;
    injectBILogger: (biLogger: BILogger) => void;
    logBI: (event: any) => void;
    warn: (message?: any, ...optionalParams: any[]) => void;
    error: (message?: any, ...optionalParams: any[]) => void;
    deprecationWarn: ({ component, oldProp, newProp }: {
        component: string;
        oldProp: string;
        newProp?: string | undefined;
    }) => void;
    componentDeprecationWarn: ({ oldComponent, newComponent }: {
        oldComponent: string;
        newComponent: string;
    }) => void;
    deprecationError: ({ component, oldProp, newProp }: {
        component: string;
        oldProp: string;
        newProp?: string | undefined;
    }) => void;
    componentDeprecationError: ({ oldComponent, newComponent }: {
        oldComponent: string;
        newComponent: string;
    }) => void;
}
declare const _default: LogService;
export default _default;
