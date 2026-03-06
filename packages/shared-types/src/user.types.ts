export enum UserRole {
  ENGINEER = 'ENGINEER',
  ARCHITECT = 'ARCHITECT',
  BUILDER = 'BUILDER',
  CLIENT = 'CLIENT',
  REALTOR = 'REALTOR',
  CITY_HALL = 'CITY_HALL',
  DEVELOPER = 'DEVELOPER', // Loteadoras
}

export enum PlanType {
  FREE = 'FREE',
  PROFESSIONAL = 'PROFESSIONAL',
  CONSTRUCTION_COMPANY = 'CONSTRUCTION_COMPANY',
  CORPORATE = 'CORPORATE',
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  plan: PlanType;
  createdAt: Date;
}
