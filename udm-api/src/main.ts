import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "@/config/env.config";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	console.log(`🚀 Server running on ${env.HOST}:${env.PORT}.`);
	await app.listen(env.PORT);
}
bootstrap();
