export type CommentType = {
  idOffer: string;
  comments: Array<{
    id: string;
    comment: string;
    date: string;
    rating: number;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
  }>;
};
