import gql from "graphql-tag";

export const FETCH_GUILDS = gql`
    {
        guilds
    }
`;

export const FETCH_GUILD = gql`
    query($guildId: String!) {
        guild(guildId: $guildId)
    }
`;

export const FETCH_MEMBERS = gql`
    query($guildId: String!, $database: Boolean){
        members(guildId: $guildId, database: $database)
    }
`;

export const FETCH_MEMBER = gql`
    query($guildId: String! $memberId: String!, $database: Boolean) {
        member(guildId: $guildId, memberId: $memberId, database: $database)
    }
`;

