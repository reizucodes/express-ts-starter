interface DatabaseInterface {
    [key:string]: {
        host: string,
        name: string,
        userName: string,
        password: string
    }
}

const env = process.env
const config = {
    env : env,
    database: <DatabaseInterface> {
        local: {
            host: '127.0.0.1',
            name: 'root',
            userName: 'root',
            password: ''
        },
        development: {
            host: env.DB_HOST,
            name: env.DB_NAME,
            userName: env.DB_USERNAME,
            password: env.DB_PASSWORD
        }
    }
}

export default config;
