const userData = [
    {
        userId: 0,
        name: 'hanmeimei',
        age: 21,
    },
    {
        userId: 1,
        name: 'lilei',
        age: 22,
    },
];

export default {
    Query: {
        user: (parent: any, args: any) => {
            return userData.find(user => user.userId === args.userId);
        },
        users: () => {
            return userData;
        },
    },
};
