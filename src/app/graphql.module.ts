import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';

// const uri = 'https://48p1r2roz4.sse.codesandbox.io'; // <-- add the URL of the GraphQL server here
const uri = environment.endpointGraphql;
export const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => ({
  link: httpLink.create({ uri }),
  cache: new InMemoryCache(),
});

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
