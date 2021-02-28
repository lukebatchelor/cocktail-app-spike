declare module '@keystonejs/keystone' {
  interface KeystoneOptions {
    adapter: BaseKeystoneAdapter;
    adapters?: {
        [key: string]: BaseKeystoneAdapter;
    };
    appVersion?: {
        version?: string,
        addVersionToHttpHeaders?: boolean,
        access?: unknown,
    };
    cookie?: {
        secure?: boolean;
        maxAge?: number;
        sameSite?: boolean;
    };
    cookieSecret?: string;
    defaultAccess?: {
        list?: boolean,
        field?: boolean,
        custom?: boolean
    };
    defaultAdapter?: string;
    onConnect?: ((keystone: any) => Promise<void>);
    queryLimits?: {
        maxTotalResults?: number;
    };
    sessionStore?: any; // TODO: bring in express session types
    schemaNames?: string[];
}
}