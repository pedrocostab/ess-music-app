export interface IRepository<Entity>{
    add(instance: Entity): boolean;
    update(instance: Entity): boolean;
    delete(instance: Entity): boolean;
    getAll(): Entity[];
};