export type CreateUserDTO = {
    username: string;
    password: string;
};

export type UserResponseDTO = {
    _id: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
};
