import { gql } from 'apollo-angular';

export const GET_ALL_POSTS_WITH_EXCERPT = gql`
  query getAllPostsWithExcerpt {
    posts(first: 10000) {
      edges {
        node {
          id
          slug
          title
          excerpt(format: RENDERED)
          featuredImage {
            node {
              sourceUrl
            }
          }
          date
          author {
            node {
              avatar {
                url
              }
              firstName
              lastName
            }
          }
          categories {
            edges {
              node {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_POSTS_WITH_CONTENT = gql`
  query getAllPostsWithContent {
    posts(first: 10000) {
      edges {
        node {
          id
          slug
          title
          excerpt(format: RENDERED)
          featuredImage {
            node {
              sourceUrl
            }
          }
          date
          author {
            node {
              avatar {
                url
              }
              firstName
              lastName
            }
          }
          categories {
            edges {
              node {
                slug
                name
              }
            }
          }
          content(format: RENDERED)
        }
      }
    }
  }
`;

export const GET_FITNESS_POSTS_WITH_EXCERPT = gql`
  query getFitnessPostsWithExcerpt {
    category(id: "dGVybToyNw==") {
      name
      posts {
        edges {
          node {
            author {
              node {
                avatar {
                  url
                }
                firstName
                lastName
              }
            }
            date
            excerpt(format: RENDERED)
            title(format: RENDERED)
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
      count
      slug
    }
  }
`;

export const GET_NUTRITIE_POSTS_WITH_EXCERPT = gql`
  query getNutritiePostsWithExcerpt {
    category(id: "dGVybToyOA==") {
      name
      posts {
        edges {
          node {
            author {
              node {
                avatar {
                  url
                }
                firstName
                lastName
              }
            }
            date
            excerpt(format: RENDERED)
            title(format: RENDERED)
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
      count
      slug
    }
  }
`;
export const GET_LIFESTYLE_POSTS_WITH_EXCERPT = gql`
  query getLifestylePostsWithExcerpt {
    category(id: "dGVybToyNg==") {
      name
      posts {
        edges {
          node {
            author {
              node {
                avatar {
                  url
                }
                firstName
                lastName
              }
            }
            date
            excerpt(format: RENDERED)
            title(format: RENDERED)
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
      count
      slug
    }
  }
`;

export const GET_TIPS_AND_TRICKS_POSTS_WITH_EXCERPT = gql`
  query getTipsAndTricksPostsWithExcerpt {
    category(id: "dGVybTo2") {
      name
      posts {
        edges {
          node {
            author {
              node {
                avatar {
                  url
                }
                firstName
                lastName
              }
            }
            date
            excerpt(format: RENDERED)
            title(format: RENDERED)
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
      count
      slug
    }
  }
`;
