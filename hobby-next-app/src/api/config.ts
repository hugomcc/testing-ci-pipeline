import { GraphQLClient } from 'graphql-request'

export const endpoint = '/api/graphql'
export const client = new GraphQLClient(endpoint, { headers: {} })

interface ApiException extends Error {
  // TODO: check what this does -> new (message: string, errorCode: string, httpStatusCode: number) - error during build
  // new (message: string, errorCode: string, httpStatusCode: number)
  new (message: string, errorCode: string, httpStatusCode: number): Error

  name: string
  status: number
  response: {
    message: string
    errorCode: string
  }
}

interface GQLError {
  response: {
    error: string
    status: number
  }
}

function isApiException(e: any): e is ApiException {
  return e?.name === 'ApiException'
}

function isGQLError(e: any): e is GQLError {
  return e.response.error && typeof e.response.error === 'string'
}

class GqlApiError extends Error {
  name: string
  errorCode: string
  statusCode: number

  constructor(message: string, errorCode: string, statusCode: number) {
    super(message)

    // maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GqlApiError)
    }

    this.name = 'GqlApiError'
    this.errorCode = errorCode
    this.statusCode = statusCode
  }

  toString() {
    return `${this.message}: "${JSON.stringify(this)}"`
  }
}

export function graphQLFetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    try {
      return await client.request<TData, TVariables>(query, variables)
    } catch (e) {
      if (isGQLError(e)) {
        throw new GqlApiError(
          `Unknown server error: ${e.response.error.toString?.()}`,
          'unknown',
          e.response.status
        )
      }
      const serverException = e.response?.errors?.[0]?.extensions
        ?.exception as Error

      if (!serverException || !isApiException(serverException)) {
        throw new GqlApiError(
          `Unknown server error: ${serverException?.toString?.()}`,
          'unknown',
          500
        )
      }

      throw new GqlApiError(
        serverException.response.message,
        serverException.response.errorCode,
        serverException.status
      )
    }
  }
}

// export class GQLDateTime extends DateTime {
//   super(isoString: string) {
//     return DateTime.fromISO(isoString)
//   }
// }
