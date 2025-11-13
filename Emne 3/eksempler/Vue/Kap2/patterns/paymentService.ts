interface IPayment {
    connect(): void;
    pay(amount: number): void;
  }
  
  class ComplicatedPayment implements IPayment {
    private connected: boolean = false;
  
    public connect(): void {
      console.log("Connecting to complicated payment system...");
      // Tenker oss at dette er omfattende eller tidkrevende
      this.connected = true;
    }
  
    public pay(amount: number): void {
      if (!this.connected) {
        throw new Error("Error: Payment system not connected. Call connect() first.");
      }
      // Mye rar eller komplisert logikk:
      console.log(`Performing complex steps to pay $${amount}...`);
      console.log("Payment successful (complicated version)!");
    }
  }
  

  export type { IPayment, ComplicatedPayment };
  