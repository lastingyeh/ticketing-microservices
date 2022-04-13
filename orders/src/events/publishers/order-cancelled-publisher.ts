import {
	OrderCancelledEvent,
	Publisher,
	Subjects,
} from '@lastingtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
	readonly subject = Subjects.OrderCancelled;
}
