import { Request, Response } from "express";

export class HomeController {
  WelcomScreen(req: Request, res: Response) {
    return res.send(`<h1>Welcom To our Task Manegment API</h1>
      <p style="font-size: 22px; fon-family: arial;">
        Click this 
        <a href="https://github.com/EdroVolt/task-manegment-api">link</a>
        to read the docs If you don't know how to use this API </p>
      `);
  }
}
