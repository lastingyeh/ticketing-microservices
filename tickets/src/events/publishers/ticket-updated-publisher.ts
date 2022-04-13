import {
	Publisher,
	Subjects,
	TicketUpdatedEvent,
} from '@lastingtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
	readonly subject = Subjects.TicketUpdated;
}
