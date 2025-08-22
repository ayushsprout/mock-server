export class MockService {
  static async getSproutResponse() {
    // simulate 2-second delay
    console.log('Request received for Sprouts');
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { name: "sprouts" };
  }
}
