import mongoose from 'mongoose'
import debug from 'debug'
import config from 'config'

const log = debug('contact_list:src:database:mongoose')

mongoose.connect(config.get('database.uri'))
mongoose.connection.on('error', err => log(err))

export default mongoose