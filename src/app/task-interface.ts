export interface TaskInterface {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    status: 'pending' | 'completed';
}
