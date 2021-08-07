import { Type } from "@sinclair/typebox";

const BasicAssociation = {
    _id: Type.String(),
    name: Type.String(),
    federation: Type.Optional(Type.Object({
        region: Type.String()
    })),
    logo: Type.Optional(Type.String()),
    networks: Type.Optional(Type.Object({
        facebook: Type.String(),
        instagram: Type.String(),
        twitch: Type.String(),
        twitter: Type.String()
    })),
    school: Type.Object({
        name: Type.String()
    }),
    tag: Type.Optional(Type.String())
};

const PrivateFields = {
    mail: Type.String()
};

const Users = {
    federation: Type.Optional(Type.Object({
        region: Type.String(),
        state: Type.String()
    })),
    users: Type.Object({
        members: Type.Array(Type.String()),
        moderators: Type.Array(Type.String()),
        owner: Type.String()
    })
};

export const TypeBasicAssociation = Type.Object(BasicAssociation);

export const TypeBasicAdminAssociation = Type.Object({
    ...BasicAssociation,
    ...PrivateFields
});

export const TypeMemberAssociation = Type.Object({
    ...BasicAssociation,
    ...PrivateFields,
    ...Users
});
