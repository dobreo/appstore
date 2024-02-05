import type { Schema, Attribute } from '@strapi/strapi';

export interface ReviewReview extends Schema.Component {
  collectionName: 'components_review_reviews';
  info: {
    displayName: 'Review';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    review: Attribute.Text;
    rating: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<5>;
    date: Attribute.Date;
    user: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'review.review': ReviewReview;
    }
  }
}
