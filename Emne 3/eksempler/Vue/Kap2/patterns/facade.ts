import { IPayment, ComplicatedPayment } from "./paymentService";

class PaymentServiceFacade  {
    private realService: ComplicatedPayment;
    private hasConnected: boolean = false;

    constructor(realService: ComplicatedPayment) {
        this.realService = realService;
    }

    private connect(): void {        
        if (this.hasConnected) return;
        this.realService.connect();
        this.hasConnected = true;
    }

    public pay(amount: number): void {
        this.connect();
        this.realService.pay(amount);
    }
}