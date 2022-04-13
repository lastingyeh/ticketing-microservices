import { OrderCreatedEvent, Publisher, Subjects } from '@lastingtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	readonly subject = Subjects.OrderCreated;
}
