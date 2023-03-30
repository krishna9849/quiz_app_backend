const { v4: uuid } = require("uuid");

const quizzes = {
  data: [
    // 1st quiz card
    {
      id: uuid(),
      category: "General Knowledge",
      title: "GK",
      description: "some general knowledge quiz",
      quiz: [
        {
          id: uuid(),
          question: "Who is the present prime minister of India ? ",
          options: [
            { id: uuid(), option: "Narendra Modi", isCorrect: true },
            { id: uuid(), option: "Nirav Modi", isCorrect: false },
            { id: uuid(), option: "ManMohan Singh", isCorrect: false },
            { id: uuid(), option: "Rahul Gandhi", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who is the present chief minister of AP ? ",
          options: [
            { id: uuid(), option: "Jagan Mohan Reddy", isCorrect: true },
            { id: uuid(), option: "Chandra Babu Naid", isCorrect: false },
            { id: uuid(), option: "Pawan Kalyan", isCorrect: false },
            { id: uuid(), option: "Narendra Modi", isCorrect: false },
          ],
        },
      ],
    },
    // 2nd quiz card
    {
      id: uuid(),
      category: "Engineering",
      title: "CSE",
      description: "some CSE quiz",
      quiz: [
        {
          id: uuid(),
          question: "What are OOPS properties ? ",
          options: [
            { id: uuid(), option: "Encapsulation", isCorrect: false },
            { id: uuid(), option: "Abstraction", isCorrect: false },
            {
              id: uuid(),
              option: "Inheritance and Polymorphism",
              isCorrect: false,
            },
            { id: uuid(), option: "All of the above", isCorrect: true },
          ],
        },
        {
          id: uuid(),
          question: "what are various access modifiers",
          options: [
            { id: uuid(), option: "private", isCorrect: false },
            { id: uuid(), option: "public", isCorrect: false },
            { id: uuid(), option: "protect", isCorrect: false },
            { id: uuid(), option: "Both A and B", isCorrect: true },
          ],
        },
      ],
    },
  ],
};

module.exports = quizzes;
