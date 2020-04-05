class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name ? name : "stranger";
      this.age = age ? age : 18;
    }
}

export default User