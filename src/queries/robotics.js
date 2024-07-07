// src/queries/robotics.js
export const ROBOTICS_HOME_QUERY = `
  
 {
          blogPostCollection {
            items {
              title
              content {
                json
              }
              author
              date
            }
          }
        }
`;

export const ROBOTICS_EVENTS_QUERY = `
  {
          eventCollectionCollection {
            items {
              eventName
              eventDate
              eventDescription
              googleFormLink
              eventImage {
                url
              }
            }
          }
        }
`;

export const ROBOTICS_RESOURCES_QUERY = `
  {
    resourceCollectionCollection(where: {society: "robotics"}) {
      items {
        title
        link
        description
      }
    }
  }
`;

export const ROBOTICS_BLOGS_QUERY = `
      {
          blogPostCollection {
            items {
              title
              content {
                json
              }
              author
              date
            }
          }
        }
`;
