import enviroments from './environments'
import * as dotenv from 'dotenv';
dotenv.config();
const ENVIRONMENT = enviroments[process.env.NODE_ENV!];
const config = {
    integrations: {
        epayco: {
            envs: {
                apiKey: process.env.APIKEY_EPAYCO,
                privateKey: process.env.PRIVATEKEY_EPAYCO,
                lang: process.env.LANG_EPAYCO || 'ES',
                test: process.env.NODE_ENV === 'dev',
                publicKey: process.env.PUBLIC_KEY
            },
            url: process.env.URL_EPAYCO
        },
    },
    url_selft_api: process.env.URL_SELFT_API,
    environment: ENVIRONMENT.configEnvironment,
    name_app: process.env.NAME_APP,
    swagger: {
        user: process.env.SWAGGER_USER,
        password: process.env.SWAGGER_PASS,
        enable_security_swagger: process.env.ENABLE_SWAGGER_SECURITY
    }
}




export {config}