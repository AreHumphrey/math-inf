export interface UserData {
    name: string;
    class: string;
    subscription: {
        active: boolean;
        startDate: string;
        endDate: string;
    };
}
