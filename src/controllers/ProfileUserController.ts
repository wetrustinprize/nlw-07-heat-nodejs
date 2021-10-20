import { Request, Response } from "express";
import { profileUserService } from "../services/profileUserService";

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const result = await profileUserService(user_id);

    return response.json(result);
  }
}

export { ProfileUserController };
