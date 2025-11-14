import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { uploadTextObject, getUploadUrl } from '../lib/s3'

async function plugin(app: FastifyInstance, opts: FastifyPluginOptions) {
  app.post('/storage/test', async (request, reply) => {
    const key = `test-upload-${Date.now()}.txt`
    await uploadTextObject(key, 'BioMath Core S3 test OK')
    return { ok: true, key }
  })

  app.post('/storage/presign', async (request, reply) => {
    const body = request.body as { filename?: string; contentType?: string }
    const filename = body?.filename || `upload-${Date.now()}`
    const contentType = body?.contentType || 'application/octet-stream'
    const key = `uploads/${Date.now()}-${filename}`
    const result = await getUploadUrl(key, contentType)
    return { ok: true, key: result.key, url: result.url }
  })
}

export default plugin
