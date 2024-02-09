require('newrelic')
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { existsSync } from "fs";
import { join } from "path";
import { configSwagger } from './configurations/swagger.config';
import { createLogger } from "winston";
import {
  NestExpressApplication,
  ExpressAdapter,
} from "@nestjs/platform-express";
import { LoggerService } from "./utils/logger";
import { LoggingInterceptor, TimeoutInterceptor } from "./configurations/interceptors";
import { ResponseInterceptor } from "./configurations/interceptors/response";
import { config } from "./configurations/config/envs";
import * as dotenv from 'dotenv';
import { WinstonModule } from "nest-winston";
const winston =  require('winston');
const newrelicFormatter = require('@newrelic/winston-enricher')(winston)

console.log('config--->', config)


async function bootstrap() {
  dotenv.config(); // Load environment variables from .env file

  const logger = new LoggerService();

  const paths = { public: "", views: "" };
  if (existsSync(join(__dirname, "views"))) {
    paths.public = join(__dirname, "public");
    paths.views = join(__dirname, "views");
  } else {
    const src = __dirname.split("/").filter((value) => value !== "dist");
    paths.public = join(src.join("/"), "public");
    paths.views = join(src.join("/"), "views");
  }
  const expressAdapter = new ExpressAdapter()
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    {
      ...expressAdapter,
      logger: WinstonModule.createLogger({
        instance: createLogger({
          level: 'info',
          format: winston.format.combine(
            winston.format.label({label: 'test'}),
            winston.format.colorize({ all: true }),
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            newrelicFormatter(),
            winston.format.printf(({ level, timestamp, message }) => {
              console.log('prinf')
                return `${timestamp} [${level}] - ${message}`;
            })
        ),
        transports: [new winston.transports.Console()],
        }),
      }),
    }
    // new ExpressAdapter()
  );
  app.useStaticAssets(join(__dirname.replace('dist', 'src'), 'public'));
  app.setBaseViewsDir(join(__dirname.replace('dist', 'src'), 'assets'));
  app.setBaseViewsDir(join(__dirname.replace('dist', '.'), 'utils/pdf/templates/hbs'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(
    new LoggingInterceptor(logger),
    new ResponseInterceptor(),
    new TimeoutInterceptor(),
  );
   await configSwagger(app)
  await app.listen(3000, () => {
    logger.log('APP', `${config.name_app} is running on http://localhost:${3000}`);
    logger.debug(
      'APP',
      `Swagger is running on http://localhost:${3000}/${config.url_selft_api}/docs`,
    );
  });
}
bootstrap();
