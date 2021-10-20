import { Request, Response } from "express";
import { createMessageService } from "../services/createMessageService";
import { getLast3MessagesService } from "../services/getLast3MessagesService";

class GetLast3MessageController {
  async handle(request: Request, response: Response) {
    const result = await getLast3MessagesService();

    return response.json(result);
  }
}

export { GetLast3MessageController };
