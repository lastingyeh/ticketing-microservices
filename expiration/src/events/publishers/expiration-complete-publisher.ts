import {
	ExpirationCompleteEvent,
	Publisher,
	Subjects,
} from '@lastingtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
	readonly subject = Subjects.ExpirationComplete;
}
