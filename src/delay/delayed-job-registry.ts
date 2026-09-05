import { DelayedJobKeys } from './delayed-job.keys.js';

export interface DelayedJobRegistry {
  [DelayedJobKeys.user.delete]: { userId: string };
  [DelayedJobKeys.user.cleanup]: { userId: string };

  [DelayedJobKeys.invitation.expire]: {
    invitationId: string;
  };

  [DelayedJobKeys.guest.confirmation.remind]: {
    invitationId: string;
    actorId?: string;
    preset?: string;
  };

  [DelayedJobKeys.ticket.revoke]: {
    ticketId: string;
  };

  [DelayedJobKeys.ticket.generate]: {
    invitationId: string;
    eventId: string;
    seatId: string | null;
    actorId: string;
  };
}
