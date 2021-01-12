import dotenv from 'dotenv'
import {env} from 'process'

import {IConfig} from '../interface/config';

dotenv.config()

const config: IConfig = {
    env: env.NODE_ENV || 'development',
    port: Number(env.NODE_PORT) || 3000
}

export {
    config,
} 
