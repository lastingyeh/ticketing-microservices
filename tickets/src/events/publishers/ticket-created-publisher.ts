import {
	Publisher,
	Subjects,
	TicketCreatedEvent,
} from '@lastingtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	readonly subject = Subjects.TicketCreated;
}



