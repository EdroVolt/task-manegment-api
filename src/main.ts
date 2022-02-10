import { CustomServer } from "./Core/CustomeServer";
import { BodyParserMiddleware } from "./Middlewares/BodyParserMiddleware";
import { HomeRouter } from "./Routes/HomeRouter";
import { TaskRouter } from "./Routes/TaskRouter";
import { MorganMiddleware } from "./Middlewares/MorganMiddleware";
import { CorsMiddleware } from "./Middlewares/CorsMiddleware";

/**
 * init server
 */
const app = new CustomServer();
/**
 *  user middleware
 */
app.middleware(new BodyParserMiddleware());
app.middleware(new MorganMiddleware());
app.middleware(new CorsMiddleware());
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
