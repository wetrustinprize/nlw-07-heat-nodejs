import { Request, Response } from "express";
import { createMessageService } from "../services/createMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;

    const { user_id } = request;

    const result = await createMessageService(message, user_id);

    return response.json(result);
  }
}

export { CreateMessageController };
