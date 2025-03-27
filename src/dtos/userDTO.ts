export type CreateUserDTO = {
    username: string;
    password: string;
};

export type UserResponseDTO = {
    username: string;
    createdAt: Date;
    updatedAt: Date;
};