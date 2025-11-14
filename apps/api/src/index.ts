import Fastify from 'fastify'
import fastifyRawBody from 'fastify-raw-body'
import billing from './routes/billing'
import storage from './routes/storage'
import reports from './routes/reports'

const app = Fastify({ logger: true })

await app.register(fastifyRawBody, {
  field: 'rawBody',
  global: false,
  encoding: 'utf8',
  runFirst: true
})

app.register(billing, { prefix: '/api' })
app.register(storage, { prefix: '/api' })
app.register(reports, { prefix: '/api' })

const port = Number(process.env.PORT) || 8787
const host = process.env.HOST || '0.0.0.0'

app.listen({ port, host }).catch(err => {
  app.log.error(err)
  process.exit(1)
})
