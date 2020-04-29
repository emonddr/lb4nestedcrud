import {Entity, model, property} from '@loopback/repository';

@model()
export class Role extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  kind: string;


  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
