import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

// Setting Up Generator
const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
});
