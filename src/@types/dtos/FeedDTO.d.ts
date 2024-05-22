interface User {
  verify: boolean;
  username: string;
  name: string;
  avatar_url: string;
}

interface Comment {
  id: number;
  author: User;
  timestamp: string;
  content: string;
}

export interface ITweetDTO {
  id: number;
  from: {
    type: string;
    content: string;
  };
  author: User;
  timestamp: string;
  content: string;
  likes: number;
  retweets: number;
  comments: Comment[];
}
