// export interface Ticket {
//     id: string;
//     title: string;
//     tag: string[];
//     userId: string;
//     status: string;
//     priority: number;
// };

// export interface User {
//     id: string;
//     name: string;
//     available: boolean;
// };

// export interface Col {
//     col: Ticket[];
// }

// export interface UserIdToData {
//     userData: Record<string, User>;
// }


// Example Usage of the JavaScript Objects
const ticketExample = {
    id: "1",
    title: "Fix Bug #123",
    tag: ["bug", "urgent"],
    userId: "u123",
    status: "In progress",
    priority: 2
};

const userExample = {
    id: "u123",
    name: "John Doe",
    available: true
};

const colExample = {
    col: [ticketExample]
};

const userIdToDataExample = {
    userData: {
        "u123": userExample
    }
};