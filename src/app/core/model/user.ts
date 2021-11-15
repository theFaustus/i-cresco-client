import {GrowthPlan} from './growth-plan';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    gender: string;
    authorities: string[];
    growthPlans: GrowthPlan[];

    accessToken: string;
}
