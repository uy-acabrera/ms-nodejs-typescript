export interface IEnvironment {
    production: boolean,
    config: {
        port: string | number,
    },
}

export const environment: IEnvironment = {
    production: false,
    config: {
        port: process.env.PORT || 3000,
    },
};
