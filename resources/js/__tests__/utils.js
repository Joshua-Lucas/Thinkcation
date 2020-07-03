import faker from "faker";

export const generateUser = () => {
    const user = {
        id: faker.random.number(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        gender: faker.name.prefix(),
        email: faker.internet.email(),
        email_verified_at: faker.random.boolean(),
        birthday: faker.date.past(),
        govId: faker.random.boolean(),
        rating: faker.random.number(),
        created_at: faker.date.past(),
        updated_at: faker.date.past(),
    };
    return user;
};
