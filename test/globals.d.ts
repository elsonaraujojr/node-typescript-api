declare namespace NodeJS {
  interface Global {
    // Typesetting that already exists
    // Import inline, able to overwrite/add global types
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
