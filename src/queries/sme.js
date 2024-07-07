// src/queries/sme.js
export const SME_HOME_QUERY = `
  {
    homeCollectionCollection(where: {society: "sme"}) {
      items {
        title
        description
        image {
          url
        }
      }
    }
  }
`;

export const SME_EVENTS_QUERY = `
  {
    eventCollectionCollection(where: {society: "sme"}) {
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

export const SME_RESOURCES_QUERY = `
  {
    resourceCollectionCollection(where: {society: "sme"}) {
      items {
        title
        link
        description
      }
    }
  }
`;

export const SME_BLOGS_QUERY = `
  {
    blogPostCollectionCollection(where: {society: "sme"}) {
      items {
        title
        date
        content
      }
    }
  }
`;
