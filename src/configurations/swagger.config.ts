import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as auth from "express-basic-auth";
import { config as configEnv } from "../configurations/config/envs";
import { PaymentGetDTO } from "src/modules/payments/DTO/output/paymentGetDTO";

export const configSwagger = async (app:any) => {

    app.enableCors({
        origin: '*',
    });
    if(configEnv.swagger.enable_security_swagger === 'true') {
      app.use(
        `/${configEnv.url_selft_api}/docs`,
          auth({
            challenge: true,
            users: {
              [configEnv.swagger.user as string]: `${configEnv.swagger.password}`,
            },
          })
        );
    }
    const config = new DocumentBuilder()
        .setTitle('Mixing Center')
        .addBearerAuth()
        .setDescription(`Documentation ${configEnv.name_app}`)
        .setVersion('0.0.1')
        .build();

    const document = SwaggerModule.createDocument(app, config, {
      extraModels: [PaymentGetDTO]
    });
  
    return SwaggerModule.setup(`/${configEnv.url_selft_api}/docs`, app, document, {
      swaggerOptions:{
        showRequestDuration: true,
      }
    });

}
