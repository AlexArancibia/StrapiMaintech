import type { Schema, Struct } from '@strapi/strapi';

export interface ChapterAnswer extends Struct.ComponentSchema {
  collectionName: 'components_chapter_answers';
  info: {
    displayName: 'Answer';
  };
  attributes: {
    content: Schema.Attribute.String;
    isCorrect: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ChapterAttachment extends Struct.ComponentSchema {
  collectionName: 'components_chapter_attachments';
  info: {
    displayName: 'Attachment';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ChapterQuestion extends Struct.ComponentSchema {
  collectionName: 'components_chapter_questions';
  info: {
    displayName: 'question';
    icon: 'write';
  };
  attributes: {
    answer: Schema.Attribute.Component<'chapter.answer', true>;
    content: Schema.Attribute.String;
  };
}

export interface ChapterQuiz extends Struct.ComponentSchema {
  collectionName: 'components_chapter_quizzes';
  info: {
    displayName: 'Quiz';
  };
  attributes: {
    question: Schema.Attribute.Component<'chapter.question', true>;
  };
}

export interface ChapterQuizAttempt extends Struct.ComponentSchema {
  collectionName: 'components_chapter_quiz_attempts';
  info: {
    description: '';
    displayName: 'QuizAttempt';
  };
  attributes: {
    approved: Schema.Attribute.Boolean;
    attempt: Schema.Attribute.Integer;
    qualification: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'chapter.answer': ChapterAnswer;
      'chapter.attachment': ChapterAttachment;
      'chapter.question': ChapterQuestion;
      'chapter.quiz': ChapterQuiz;
      'chapter.quiz-attempt': ChapterQuizAttempt;
    }
  }
}
