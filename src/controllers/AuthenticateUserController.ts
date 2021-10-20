import { Request, Response } from "express";
import { authenticateUserService } from "../services/authenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    try {
      const result = await authenticateUserService(code);

      response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };
