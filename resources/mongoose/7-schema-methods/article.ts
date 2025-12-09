import { Model, model, Schema, Types } from "mongoose";

interface IArticle {
  title: string;
  author: string;
  body: string;
  date: Date;
  comments: Types.DocumentArray<{
    content: string;
  }>;
}

interface ArticleMethods {
  slugify(): string;
}

interface ArticleVirtuals {
  readable: string;
}

interface ArticleStatics {
  findWithOnlyAuthors(): Promise<IArticle[]>;
}

export const articleSchema = new Schema<IArticle, Model<IArticle>, ArticleMethods, {}, ArticleVirtuals, ArticleStatics>({
  title: {
    unique: true,
    type: String,
    required: function (this: IArticle) {
      // anti N-word
      return !this.title.includes("nigga");
    },
  },
  author: {
    type: String,
    // required field
    required: true,
  },
  body: {
    // default value
    default: "Lorem ipsum dolor sit amet",
    max: 50000,
    type: String,
  },
  date: {
    // over january 2001
    min: new Date(2000, 1),
    default: () => new Date(),
    type: Date,
  },
  comments: [
    {
      content: String,
    },
  ],
}, {
  methods: {
    slugify() {
      return this.title.replace(" ", "-");
    },
  },
  statics: {
    findWithOnlyAuthors() {
      return this.find({
        author: {
          $exists: true,
        },
      });
    },
  },
  virtuals: {
    readable: {
      get() {
        return `${this.title} - ${this.author}`;
      },
    },
  }
});

export const ArticleModel = model(
  "article",
  articleSchema
);