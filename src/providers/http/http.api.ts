import { HttpStatusCode } from 'axios';

export enum HTTPS_STATUS {
  OK = HttpStatusCode.Ok,
  CREATED = HttpStatusCode.Created,
  ACCEPTED = HttpStatusCode.Accepted,
  NO_CONTENT = HttpStatusCode.NoContent,
  BAD_REQUEST = HttpStatusCode.BadRequest,
  UNAUTHORIZED = HttpStatusCode.Unauthorized,
  FORBIDDEN = HttpStatusCode.Forbidden,
  NOT_FOUND = HttpStatusCode.NotFound,
  INTERNAL_SERVER_ERROR = HttpStatusCode.InternalServerError,
  SERVICE_UNAVAILABLE = HttpStatusCode.ServiceUnavailable,
  GATEWAY_TIMEOUT = HttpStatusCode.GatewayTimeout,
}

export const API_BASE_URL: string = 'http://localhost:3000/api/v1/';
