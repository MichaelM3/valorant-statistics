export interface Act {
    id: string;
    parentId: string;
    type: string;
    name: string;
    isActive: string;
}

export interface SearchFormProps {
    acts: Act[];
}
