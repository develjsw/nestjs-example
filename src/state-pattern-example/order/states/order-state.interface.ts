export interface OrderStateInterface {
    process(orderId: number): Promise<any>;
}
