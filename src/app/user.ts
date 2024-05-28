export class User {
    id?: number; // Using a question mark makes this field optional
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobileNumber?: string;
  
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      mobileNumber: string,
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.mobileNumber = mobileNumber;
    }
  
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`; // Concatenates first and last names
    }
  
    // You can add methods to operate on User objects
    changePassword(newPassword: string): void {
      this.password = newPassword; // Updates the password
    }
  }
  