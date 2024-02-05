import type { Schema, Attribute } from '@strapi/strapi';

export interface ReviewReview extends Schema.Component {
  collectionName: 'components_review_reviews';
  info: {
    displayName: 'Review';
    icon: 'feather';
  };
  attributes: {
    Title: Attribute.String;
    Review: Attribute.String;
    Rating: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<5>;
    Date: Attribute.Date;
    User: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'review.review': ReviewReview;
    }
  }
}
