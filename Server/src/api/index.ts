import { Router } from 'express'

import consumer from './consumerND'

const routes = Router()

routes.use('/consumer', consumer)

export default routes