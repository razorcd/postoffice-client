import { Cookie } from "./cookie";

export class IncomingRequest {
  id: string;
  url: string;
  method: string;
  params: Map<string, string[]>;
  headers: Map<string, string>;
  cookies: Cookie[];
  body: string;
  timestamp: number;

  // TODO: setters and getters
}
