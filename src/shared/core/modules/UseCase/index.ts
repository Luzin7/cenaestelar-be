export abstract class UseCase<Input, Output> {
  abstract execute(req: Input): Promise<Output>;
}
