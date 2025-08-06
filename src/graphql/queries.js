import { gql } from '@apollo/client';

export const GET_BRANDS = gql`
 query {
  findAllBrands {
    id
    name
  }
}
`;

export const GET_BRAND_MODELS = gql`
  query GetBrandModels($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      models {
        id
        name
        type
        image
        description
        price
      }
    }
  }
`;
