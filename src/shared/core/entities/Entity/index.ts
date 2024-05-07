import { randomUUID } from 'crypto';

/**
 * The `Entity` class represents a base entity with an identifier and properties.
 * It is designed to be extended by domain entities to provide common functionality such as ID generation and property management.
 * The `_id` property holds a unique identifier generated using the `randomUUID` function from the `crypto` module.
 * The `props` property stores the entity's properties of type `T`.
 * When instantiated, the entity is assigned a unique ID unless an ID is provided explicitly.
 * The ID can be accessed using the `id` getter method.
 */
export abstract class Entity<T> {
  private _id: string;
  protected props: T;

  /**
   * Creates an instance of `Entity`.
   * @param props The properties of the entity.
   * @param id (Optional) The ID of the entity. If not provided, a random UUID is generated.
   */
  constructor(props: T, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  /**
   * Gets the ID of the entity.
   * @returns The unique identifier of the entity.
   */
  get id(): string {
    return this._id;
  }
}
