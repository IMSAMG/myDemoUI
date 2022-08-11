import { Model } from "./model";

export abstract class Response implements Model {

  constructor(public responseStatus?: boolean,
              public responseMessage?: string) {

  }
}
