export interface Entry{
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}

// Cuando no necesitas expandirlo puedes utilizar type
export type EntryStatus = 'pending' | 'in-progress' | 'finished'