import server from './server'

import { config } from './shared/enviroment/enviroment'

server.listen(config.port, () => {
    console.log(`Server is running ${config.port}`)
})
