/**
 * qa branch for testing ...
 *  */
import { CustomServer } from "./Core/CustomeServer";
import { BodyParserMiddleware } from "./Middlewares/BodyParserMiddleware";
import { HomeRouter } from "./Routes/HomeRouter";
import { TaskRouter } from "./Routes/TaskRouter";
import { MorganMiddleware } from "./Middlewares/MorganMiddleware";

/**
 * init server
 */
const app = new CustomServer();
/**
 *  user middleware
 */
app.middleware(new BodyParserMiddleware());
app.middleware(new MorganMiddleware());
/**
 * init routes
 */
app.route(new HomeRouter());
app.route(new TaskRouter());
/**
 * start application
 */
const PORT = 3333;
app.listen(PORT);
