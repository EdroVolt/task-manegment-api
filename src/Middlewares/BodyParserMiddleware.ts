import express from "express";
import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";

export class BodyParserMiddleware implements AppMiddlewareInterface {
  getMiddleware(): any {
    return express.json();
  }
}
