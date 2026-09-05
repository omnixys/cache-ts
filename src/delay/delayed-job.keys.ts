export const DelayedJobKeys = {
  user: {
    delete: 'user.delete',
    cleanup: 'user.cleanup',
  },

  invitation: {
    expire: 'invitation.expire',
  },

  guest: {
    confirmation: {
      remind: 'guest.confirmation.remind',
    },
  },

  ticket: {
    revoke: 'ticket.revoke',
    generate: 'ticket.generate',
  },
} as const;
