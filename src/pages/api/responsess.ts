import { OpenAIStream } from '@/utils/openaiStream'

type RequestData = {
    token: string
  message: messageInfo[]
  prompt: string
}
interface messageInfo {
    role: string;
    content: string
  }
  async function readRequestBody(body: ReadableStream<Uint8Array>): Promise<any> {
    const reader = body.getReader()
    let result = ''
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      result += new TextDecoder().decode(value)
    }
    return JSON.parse(result)
  }
export default async function handler(request: Request) {
  const body = request.body as ReadableStream<Uint8Array>
  const json = await readRequestBody(body)
  const { token, message, prompt } = json as RequestData
//   if (!message) {
//     return new Response('No message in the request', { status: 400 })
//   }
  const payload = {
    message: message,
    token: token,
    prompt: prompt,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
