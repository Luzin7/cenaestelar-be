/**
 * The `Either` type represents a value that can be one of two possible types: `Left` or `Right`.
 * - `Left` represents an error or failure case.
 * - `Right` represents a success or valid value case.
 *
 * Both `Left` and `Right` classes encapsulate a value of their respective types.
 * The `Either` type itself is a union type that can hold either a `Left` or a `Right` value.
 *
 * The `left` function creates an `Either` instance with a `Left` value, indicating an error or failure.
 * The `right` function creates an `Either` instance with a `Right` value, indicating success or a valid result.
 */
export class Left<L, R> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isRight(): this is Right<L, R> {
    return false;
  }

  isLeft(): this is Left<L, R> {
    return true;
  }
}

/**
 * The `Right` class represents a successful result or a valid value within an `Either` type.
 * It encapsulates a value of type `R`.
 */
export class Right<L, R> {
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  isRight(): this is Right<L, R> {
    return true;
  }

  isLeft(): this is Left<L, R> {
    return false;
  }
}

/**
 * The `Either` type is a union type that can hold either a `Left` or a `Right` value.
 */
export type Either<L, R> = Left<L, R> | Right<L, R>;

/**
 * Creates an `Either` instance with a `Left` value, indicating an error or failure.
 * @param value The value representing an error or failure.
 * @returns An `Either` instance with a `Left` value.
 */
export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value);
};

/**
 * Creates an `Either` instance with a `Right` value, indicating success or a valid result.
 * @param value The value representing a success or valid result.
 * @returns An `Either` instance with a `Right` value.
 */
export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value);
};
