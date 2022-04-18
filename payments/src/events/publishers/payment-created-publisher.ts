import {
	PaymentCreatedEvent,
	Publisher,
	Subjects,
} from '@lastingtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
	readonly subject = Subjects.PaymentCreated;
}
