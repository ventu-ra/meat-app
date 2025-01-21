export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) {}

  // matches(another: User): boolean {
  //   return (
  //     another === undefined &&
  //     another.email === this.email &&
  //     another.password === this.password
  //   );
  // }

  matches(another: User): boolean {
    return (
      another !== undefined &&
      another.email === this.email &&
      another.password === this.password
    );
  }
}

export const users: { [key: string]: User } = {
  "test@test.io": new User("test@test.io", "test", "123"),
};
