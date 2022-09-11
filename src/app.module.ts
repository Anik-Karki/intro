import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getError } from './common/helper/error';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { IntroModule } from './intro/intro.module';
import { GenderModule } from './gender/gender.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/intro`),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      formatError: (err) => {
        let code = err?.extensions?.code.toString();
        const error = getError(code, err.message);
        return error;
      },
    }),
    UserModule,
    AuthModule,
    IntroModule,
    GenderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
