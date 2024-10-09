interface EnvironmentVariables {
    host: string;
    port: number;
}


export default () => ({
    port: 3001,
    database: {
        host: process.env.DATABASE_HOST,
        port: 3306
    }
    
})